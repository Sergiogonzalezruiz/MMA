// =============================================================
//  CÁLCULO DE HUECOS Y PUNTUACIÓN DE PENDIENTES
//  Lo usan la web (página «Qué falta») y los scripts de Claude Code
//  (scripts/huecos.js). Una sola fuente de verdad: si cambias una
//  regla aquí, cambia en los dos sitios.
// =============================================================
(() => {
const M = window.MMA;

M.UMBRALES = { fase: 10, categoria: 1, avanzado: 3 };

M.ESTADOS = {
  idea: "Idea",
  planificada: "Planificada",
  "en-tanda": "En tanda",
  publicada: "Publicada"
};

M.CRITERIOS = [
  { k: "mma", n: "Relevancia en MMA", max: 3, como: "Estadísticas de la UFC y el informe: espalda y cabeza-brazo arriba, llaves de pierna abajo." },
  { k: "hueco", n: "Cubre un hueco", max: 2, como: "2 si llena un hueco de «Qué falta», 1 si lo reduce." },
  { k: "solo", n: "Se entrena solo en casa", max: 2, como: "2 sí, 1 solo el patrón, 0 necesita compañero." },
  { k: "conecta", n: "Conecta con lo que ya hay", max: 2, como: "Encadena con fichas publicadas o responde a una reacción del rival." },
  { k: "interes", n: "Tu interés", max: 3, como: "Lo pones tú. Con un 3 entra en la siguiente tanda." }
];

M.puntuar = p => M.CRITERIOS.reduce((a, c) => a + (Number(p[c.k]) || 0), 0);

// Pendientes ordenados por puntuación (y por tanda planificada si empatan)
M.pendientesOrdenados = (filtro = () => true) => (M.PENDIENTES || [])
  .filter(filtro)
  .map(p => ({ ...p, puntos: M.puntuar(p) }))
  .sort((a, b) => b.puntos - a.puntos || (a.tanda ?? 99) - (b.tanda ?? 99) || a.es.localeCompare(b.es));

// Propuesta de tanda: las mejores sin publicar, máximo 4 por sección
M.proponerTanda = (n = 10, porSeccion = 4) => {
  const cuenta = {}, out = [];
  for (const p of M.pendientesOrdenados(p => p.estado === "idea" || p.estado === "planificada")) {
    if ((cuenta[p.seccion] || 0) >= porSeccion) continue;
    cuenta[p.seccion] = (cuenta[p.seccion] || 0) + 1;
    out.push(p);
    if (out.length >= n) break;
  }
  return out;
};

M.calcularHuecos = () => {
  const F = M.FICHAS, out = [];
  const sec = id => M.SECCIONES.find(s => s.id === id)?.nombre ?? id;

  const caps = M.JJU.flatMap(p => p.caps.filter(c => c.e !== "gi").map(c => ({ ...c, parte: p.parte })));
  const sinFicha = caps.filter(c => !F.some(f => f.jju === c.id));
  out.push({ id: "jju", titulo: "Capítulos de Jiu-Jitsu University sin ficha", como: "Ninguna ficha cita el capítulo (sin contar los de solo gi).",
    resumen: `${sinFicha.length} de ${caps.length}`, n: sinFicha.length,
    items: sinFicha.map(c => ({ txt: `${c.parte} · ${c.n}` })) });

  const fases = M.FASES.map(f => ({ f, n: F.filter(x => x.fases.includes(f.id)).length })).filter(x => x.n < M.UMBRALES.fase);
  out.push({ id: "fases", titulo: "Fases del combate con pocas fichas", como: `Menos de ${M.UMBRALES.fase} fichas en la fase.`,
    resumen: fases.map(x => `${x.f.n} (${x.n})`).join(", ") || "Ninguna", n: fases.length,
    items: fases.map(x => ({ txt: `${x.f.n}: ${x.n} fichas`, href: "#fase-" + x.f.id })) });

  const vacias = (M.POSICIONES || []).filter(p => p.pronto);
  out.push({ id: "posiciones", titulo: "Posiciones de suelo vacías", como: "Marcadas como «próximamente» en el mapa de suelo.",
    resumen: vacias.map(p => p.es).join(", ") || "Ninguna", n: vacias.length, items: vacias.map(p => ({ txt: p.es })) });

  const cats = M.SECCIONES.flatMap(s => s.categorias.map(c => ({ s, c, n: F.filter(f => f.seccion === s.id && f.cat === c.id).length })))
    .filter(x => x.n <= M.UMBRALES.categoria);
  out.push({ id: "categorias", titulo: "Categorías casi vacías", como: `${M.UMBRALES.categoria} ficha o ninguna en la categoría.`,
    resumen: `${cats.length}`, n: cats.length, items: cats.map(x => ({ txt: `${x.s.nombre} · ${x.c.n} (${x.n})`, href: "#" + x.s.id + "-tecnicas" })) });

  const resp = F.flatMap(f => (f.reacciones || []).filter(r => !r.ref).map(r => ({ f, r })));
  out.push({ id: "reacciones", titulo: "Respuestas sin ficha", como: "Un «Si el rival reacciona» que no enlaza a ninguna ficha.",
    resumen: `${resp.length}`, n: resp.length, items: resp.map(x => ({ txt: `${x.f.es}: ${x.r.txt}`, href: "#f-" + x.f.id })) });

  const av = M.SECCIONES.map(s => ({ s, n: F.filter(f => f.seccion === s.id && f.nivel === "A").length })).filter(x => x.n < M.UMBRALES.avanzado);
  out.push({ id: "avanzado", titulo: "Nivel avanzado casi vacío", como: `Menos de ${M.UMBRALES.avanzado} fichas de nivel avanzado en la sección.`,
    resumen: av.map(x => `${x.s.nombre} ${x.n}`).join(", ") || "Ninguno", n: av.length, items: av.map(x => ({ txt: `${x.s.nombre}: ${x.n}`, href: "#" + x.s.id + "-ruta" })) });

  const sinV = F.filter(f => !f.videos.length);
  const uno = F.filter(f => f.videos.length === 1);
  const sinEs = F.filter(f => f.videos.length && !f.videos.some(v => v.idioma === "es"));
  const sinRev = F.filter(f => f.videos.some(v => !v.verificado));
  out.push({ id: "videos", titulo: "Vídeos", como: "Fichas sin vídeo, con uno solo, sin ninguno en español o con vídeos que aún no has revisado.",
    resumen: `${sinV.length} sin vídeo · ${uno.length} con uno solo · ${sinEs.length} sin español · ${sinRev.length} sin revisar`, n: sinV.length + sinRev.length,
    items: [...sinV.map(f => ({ txt: `Sin vídeo: ${f.es}`, href: "#f-" + f.id })), ...sinRev.map(f => ({ txt: `Sin revisar: ${f.es}`, href: "#f-" + f.id }))] });

  return out;
};
})();
