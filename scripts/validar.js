#!/usr/bin/env node
// Comprueba que los datos de la web son coherentes.
// Uso: node scripts/validar.js
// Sale con código 1 si hay errores (así GitHub marca el cambio en rojo).
const { cargar } = require("./cargar");
const M = cargar();

const errores = [], avisos = [];
const err = (donde, msg) => errores.push(`${donde}: ${msg}`);
const aviso = (donde, msg) => avisos.push(`${donde}: ${msg}`);

const SECC = Object.fromEntries(M.SECCIONES.map(s => [s.id, s]));
const FASES = new Set(M.FASES.map(f => f.id));
const MAT = new Set(Object.keys(M.MATERIAL));
const POS = Object.fromEntries((M.POSICIONES || []).map(p => [p.id, p]));
const JJU = new Set(M.JJU.flatMap(p => p.caps.map(c => c.id)));
const NIVELES = new Set(Object.keys(M.NIVELES));
const MMA_V = new Set(["muy alta", "alta", "media", "baja"]);
const SOLO = new Set(["si", "parcial", "no"]);
const GI = new Set(["ambos", "gi", "nogi"]);
const ID_YT = /^[A-Za-z0-9_-]{11}$/;
const FECHA = /^\d{4}-\d{2}-\d{2}$/;

// ---------- Fichas ----------
const ids = new Map();
for (const f of M.FICHAS) {
  const d = `${f.seccion || "?"} · ${f.id || "(sin id)"}`;
  if (!f.id) { err(d, "falta el id"); continue; }
  if (!/^[a-z0-9-]+$/.test(f.id)) err(d, "el id solo puede tener minúsculas, números y guiones");
  if (ids.has(f.id)) err(d, `id repetido (ya lo usa otra ficha de ${ids.get(f.id)})`);
  ids.set(f.id, f.seccion);
}
for (const f of M.FICHAS) {
  const d = `${f.seccion || "?"} · ${f.id}`;
  if (!SECC[f.seccion]) { err(d, `sección «${f.seccion}» no existe (boxeo, lucha o suelo)`); continue; }
  if (!["tecnica", "drill"].includes(f.tipo)) err(d, `tipo «${f.tipo}» no válido (tecnica o drill)`);
  if (f.tipo === "tecnica" && !SECC[f.seccion].categorias.some(c => c.id === f.cat))
    err(d, `categoría «${f.cat}» no existe en ${f.seccion}. Valen: ${SECC[f.seccion].categorias.map(c => c.id).join(", ")}`);
  for (const k of ["es", "en", "objetivo"]) if (!f[k] || typeof f[k] !== "string") err(d, `falta el campo «${k}»`);
  if (!NIVELES.has(f.nivel)) err(d, `nivel «${f.nivel}» no válido (F, I o A)`);
  if (!MMA_V.has(f.mma)) err(d, `mma «${f.mma}» no válido (muy alta, alta, media o baja)`);
  if (!SOLO.has(f.solo)) err(d, `solo «${f.solo}» no válido (si, parcial o no)`);
  if (f.gi && !GI.has(f.gi)) err(d, `gi «${f.gi}» no válido (ambos, gi o nogi)`);
  if (!Array.isArray(f.fases) || !f.fases.length) err(d, "fases tiene que ser una lista con al menos una fase");
  else for (const x of f.fases) if (!FASES.has(x)) err(d, `fase «${x}» no existe. Valen: ${[...FASES].join(", ")}`);
  if (!Array.isArray(f.material) || !f.material.length) err(d, "material tiene que ser una lista (usa \"ninguno\" si no hace falta nada)");
  else for (const m of f.material) if (!MAT.has(m)) err(d, `material «${m}» no existe. Valen: ${[...MAT].join(", ")}`);
  if (!Array.isArray(f.pasos) || !f.pasos.length) err(d, "pasos tiene que tener al menos un paso");
  for (const k of ["detalles", "errores", "combina", "reacciones"]) if (f[k] !== undefined && !Array.isArray(f[k])) err(d, `«${k}» tiene que ser una lista`);
  for (const c of f.combina || []) if (!ids.has(c)) err(d, `combina con «${c}», que no existe`);
  if (f.drills !== undefined && !Array.isArray(f.drills)) err(d, "«drills» tiene que ser una lista");
  if (f.tipo === "tecnica" && !f.drills?.length) err(d, "falta «drills»: cada técnica necesita al menos un drill");
  if (f.tipo === "drill" && f.drills?.length) err(d, "un drill no lleva «drills»: la relación se pone en la técnica");
  for (const x of f.drills || []) {
    const o = M.FICHAS.find(y => y.id === x);
    if (!o) err(d, `drills enlaza a «${x}», que no existe`);
    else if (o.tipo !== "drill") err(d, `drills enlaza a «${x}», que no es un drill`);
  }
  if (f.tipo === "drill" && !M.FICHAS.some(y => y.drills?.includes(f.id))) aviso(d, "drill sin técnica: ninguna técnica lo enlaza en «drills»");
  for (const r of f.reacciones || []) {
    if (!r.si) err(d, "una reacción no tiene «si»");
    if (r.ref && !ids.has(r.ref)) err(d, `una reacción enlaza a «${r.ref}», que no existe`);
    if (!r.ref && !r.txt) err(d, "una reacción no tiene ni «ref» ni «txt»");
  }
  if (f.golpes && !(Array.isArray(f.golpes) && f.golpes.every(n => Number.isInteger(n) && n >= 1 && n <= 6)))
    err(d, "golpes tiene que ser una lista de números del 1 al 6");
  if (f.jju && !JJU.has(f.jju)) err(d, `capítulo de Jiu-Jitsu University «${f.jju}» no existe en datos-comun.js`);
  for (const k of ["desde", "hasta"]) {
    const v = f[k]; if (!v) continue;
    if (!POS[v.pos]) err(d, `${k}: la posición «${v.pos}» no existe`);
    else if (v.lado && !(v.lado in (POS[v.pos].lados || {}))) err(d, `${k}: la posición «${v.pos}» no tiene lado «${v.lado}»`);
  }
  if (f.seccion === "suelo" && !f.desde) aviso(d, "ficha de suelo sin «desde»: no aparecerá en ninguna posición");
  if (f.tipo === "drill" && !f.dosis) aviso(d, "drill sin «dosis» (rondas y tiempo)");
  if (!Array.isArray(f.videos)) { err(d, "videos tiene que ser una lista (puede estar vacía)"); continue; }
  if (!f.videos.length) aviso(d, "sin vídeo");
  const vistos = new Set();
  f.videos.forEach((v, i) => {
    const dv = `${d} · vídeo ${i + 1}`;
    if (!ID_YT.test(v.id || "")) err(dv, `id de YouTube «${v.id}» no válido: son 11 caracteres (lo que va tras watch?v=)`);
    if (vistos.has(v.id)) aviso(dv, "vídeo repetido en la misma ficha"); vistos.add(v.id);
    if (typeof v.inicio !== "number" || v.inicio < 0) err(dv, "inicio tiene que ser un número de segundos (0 o más)");
    if (v.fin !== null && v.fin !== undefined && (typeof v.fin !== "number" || v.fin <= v.inicio)) err(dv, "fin tiene que ser null o un número mayor que inicio");
    if (v.verificado && !FECHA.test(v.verificado)) err(dv, "verificado tiene que ser una fecha AAAA-MM-DD");
    if (!v.instructor) aviso(dv, "sin instructor ni título");
    for (const [j, s] of (v.segmentos || []).entries()) {
      if (!s.t) err(dv, `la parte ${j + 1} no tiene nombre (t)`);
      if (typeof s.inicio !== "number") err(dv, `la parte ${j + 1} no tiene inicio`);
      if (s.fin !== null && s.fin !== undefined && s.fin <= s.inicio) err(dv, `la parte ${j + 1} acaba antes de empezar`);
    }
  });
}

// ---------- Mapa de suelo ----------
const enMapa = (M.POSICIONES || []).filter(p => p.id !== "base");
for (const p of enMapa) {
  const d = `posición · ${p.id}`;
  if (!p.mapa) { err(d, "falta «mapa: { x, y }», su sitio en el mapa de suelo"); continue; }
  const { x, y } = p.mapa;
  if (typeof x !== "number" || x < 0 || x > 1000) err(d, `mapa.x tiene que ser un número de 0 a 1000 (es ${x})`);
  if (typeof y !== "number" || y < 0 || y > 680) err(d, `mapa.y tiene que ser un número de 0 a 680 (es ${y})`);
}
enMapa.forEach((a, i) => enMapa.slice(i + 1).forEach(b => {
  if (a.mapa && b.mapa && Math.hypot(a.mapa.x - b.mapa.x, a.mapa.y - b.mapa.y) < 140) aviso(`posición · ${a.id}`, `está a menos de 140 de ${b.id} en el mapa`);
}));

// ---------- Curso de boxeo ----------
const FUENTES = new Set(["jeffries", "oracle"]);
for (const f of M.FICHAS) f.videos.forEach((v, i) => { if (v.fuente && !FUENTES.has(v.fuente)) err(`${f.seccion} · ${f.id} · vídeo ${i + 1}`, `fuente «${v.fuente}» no válida (jeffries u oracle)`); });
const C = M.CURSO_BOXEO;
if (!C) err("curso", "falta MMA.CURSO_BOXEO en datos-curso-boxeo.js");
else {
  const fasesC = new Set(C.fases.map(f => f.id));
  const ficha = id => M.FICHAS.find(f => f.id === id);
  const videoCurso = (d, v) => {
    if (!v) return;
    if (v.ficha) {
      const f = ficha(v.ficha);
      if (!f) err(d, `el vídeo apunta a la ficha «${v.ficha}», que no existe`);
      else if (!f.videos[v.n ?? 0]) err(d, `la ficha «${v.ficha}» no tiene el vídeo ${(v.n ?? 0) + 1}`);
    } else {
      if (!ID_YT.test(v.id || "")) err(d, `id de YouTube «${v.id}» no válido`);
      if (typeof v.inicio !== "number") err(d, "el vídeo necesita «inicio» en segundos");
      if (v.fuente && !FUENTES.has(v.fuente)) err(d, `fuente «${v.fuente}» no válida`);
    }
  };
  C.fases.forEach(f => { if (!(Array.isArray(f.semanas) && f.semanas.length === 2 && f.semanas[0] <= f.semanas[1])) err(`curso · fase ${f.id}`, "semanas tiene que ser [desde, hasta]"); });
  const idsMod = new Set();
  for (const m of C.modulos) {
    const d = `curso · módulo ${m.id}`;
    if (idsMod.has(m.id)) err(d, "id de módulo repetido"); idsMod.add(m.id);
    if (!fasesC.has(m.fase)) err(d, `la fase ${m.fase} no existe`);
    if (!FUENTES.has(m.fuente)) err(d, `fuente «${m.fuente}» no válida (jeffries u oracle)`);
    for (const k of ["titulo", "objetivo", "dominio"]) if (!m[k]) err(d, `falta «${k}»`);
    if (!m.claves?.length || m.claves.length > 4) err(d, "claves: entre 1 y 4");
    if (!m.checklist || m.checklist.length < 4 || m.checklist.length > 6) err(d, "checklist: entre 4 y 6 preguntas");
    for (const q of m.checklist || []) if (!q.trim().endsWith("?")) err(d, `la pregunta «${q}» tiene que ser de sí o no y acabar en «?»`);
    for (const id of m.fichas || []) if (!ficha(id)) err(d, `la ficha «${id}» no existe`);
    if (!m.drills?.length) err(d, "necesita al menos un drill");
    for (const id of m.drills || []) { const f = ficha(id); if (!f) err(d, `el drill «${id}» no existe`); else if (f.tipo !== "drill") err(d, `«${id}» no es un drill`); }
    if (!m.video) err(d, "falta el vídeo de referencia"); else videoCurso(d, m.video);
  }
  const idsSes = new Set();
  for (const s of C.sesiones) {
    const d = `curso · sesión ${s.id}`;
    if (idsSes.has(s.id)) err(d, "id de sesión repetido"); idsSes.add(s.id);
    if (!fasesC.has(s.fase)) err(d, `la fase ${s.fase} no existe`);
    if (!["tecnica", "cardio"].includes(s.tipo)) err(d, `tipo «${s.tipo}» no válido (tecnica o cardio)`);
    if (!s.asaltos?.length) { err(d, "no tiene asaltos"); continue; }
    s.asaltos.forEach((a, i) => {
      const da = `${d} · asalto ${i + 1}`;
      if (!a.objetivo) err(da, "falta el objetivo");
      if (!(a.min > 0)) err(da, "min tiene que ser mayor que 0");
      if (!(a.descanso >= 0)) err(da, "descanso tiene que ser 0 o más");
      if (a.drill && !ficha(a.drill)) err(da, `el drill «${a.drill}» no existe`);
      videoCurso(da, a.video);
    });
    const suma = s.asaltos.reduce((t, a) => t + a.min + a.descanso, 0);
    if (Math.abs(suma - s.duracion) > 2) err(d, `dura ${s.duracion} min pero sus asaltos suman ${suma}`);
  }
  for (const f of C.fases) if (!C.sesiones.some(s => s.fase === f.id) && C.modulos.some(m => m.fase === f.id)) aviso(`curso · fase ${f.id}`, "tiene módulos pero ninguna sesión");
}

// ---------- Plan ----------
for (const b of M.PLAN.sesion) for (const id of b.fichas) if (!ids.has(id)) err(`plan · ${b.t}`, `enlaza a la ficha «${id}», que no existe`);

// ---------- Pendientes ----------
const idsP = new Set();
const nombres = new Map(M.FICHAS.flatMap(f => [f.es, f.en, ...(f.alias || [])].filter(Boolean).map(n => [n.toLowerCase(), f.id])));
for (const p of M.PENDIENTES || []) {
  const d = `pendiente · ${p.id}`;
  if (!p.id || !/^p-[a-z0-9-]+$/.test(p.id)) err(d, "el id de un pendiente empieza por «p-» y solo lleva minúsculas, números y guiones");
  if (idsP.has(p.id)) err(d, "id de pendiente repetido"); idsP.add(p.id);
  if (!SECC[p.seccion]) err(d, `sección «${p.seccion}» no existe`);
  if (!p.es) err(d, "falta el nombre (es)");
  for (const c of M.CRITERIOS) {
    const v = p[c.k];
    if (!Number.isInteger(v) || v < 0 || v > c.max) err(d, `«${c.k}» tiene que ser un número entero de 0 a ${c.max}`);
  }
  if (!M.ESTADOS[p.estado]) err(d, `estado «${p.estado}» no válido. Valen: ${Object.keys(M.ESTADOS).join(", ")}`);
  if (p.estado === "publicada" && !ids.has(p.ficha)) err(d, "está publicada pero «ficha» no apunta a una ficha que exista");
  if (p.estado !== "publicada" && nombres.has((p.es || "").toLowerCase())) aviso(d, `ya hay una ficha con ese nombre (${nombres.get(p.es.toLowerCase())}); ¿márcalo como publicada?`);
}

// ---------- Resultado ----------
const n = M.FICHAS.length, nv = M.FICHAS.reduce((a, f) => a + f.videos.length, 0);
if (avisos.length) {
  console.log(`\nAvisos (${avisos.length}) · no bloquean la publicación:`);
  avisos.slice(0, 40).forEach(a => console.log("  · " + a));
  if (avisos.length > 40) console.log(`  … y ${avisos.length - 40} más`);
}
if (errores.length) {
  console.log(`\n✗ ${errores.length} error(es). Corrígelos antes de publicar:`);
  errores.forEach(e => console.log("  ✗ " + e));
  process.exit(1);
}
console.log(`\n✓ Datos correctos: ${n} fichas, ${nv} vídeos, ${(M.PENDIENTES || []).length} pendientes.`);
