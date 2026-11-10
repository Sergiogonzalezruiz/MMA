#!/usr/bin/env node
// Comprueba que cada vídeo de YouTube sigue existiendo y se puede incrustar.
// Pregunta al servicio oEmbed de YouTube por cada id:
//   200 → bien · 401/403 → el canal no deja incrustarlo · 404/400 → borrado o privado
// Uso: node scripts/comprobar-videos.js  (necesita Node 18 o más e internet)
// Escribe un informe en Markdown y sale con código 1 si hay vídeos rotos.
const { cargar } = require("./cargar");
const M = cargar();

const usos = new Map();
for (const f of M.FICHAS) for (const v of f.videos) {
  if (!usos.has(v.id)) usos.set(v.id, []);
  usos.get(v.id).push(f);
}
// Vídeos escritos directamente en el curso de boxeo (no en una ficha)
const C = M.CURSO_BOXEO;
if (C) for (const [v, es] of [...C.modulos.map(m => [m.video, `Curso: ${m.titulo}`]), ...C.sesiones.flatMap(x => x.asaltos.map(a => [a.video, `Curso: ${x.titulo}`]))]) {
  if (!v?.id) continue;
  if (!usos.has(v.id)) usos.set(v.id, []);
  usos.get(v.id).push({ es, id: "curso", seccion: "boxeo" });
}

async function comprobar(id) {
  const url = `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent("https://www.youtube.com/watch?v=" + id)}`;
  for (let intento = 0; intento < 3; intento++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
      if (r.status === 429) { await new Promise(s => setTimeout(s, 3000 * (intento + 1))); continue; }
      return r.status;
    } catch { await new Promise(s => setTimeout(s, 2000)); }
  }
  return 0;
}

(async () => {
  const ids = [...usos.keys()], res = new Map();
  for (let i = 0; i < ids.length; i += 4) {
    const lote = ids.slice(i, i + 4);
    const st = await Promise.all(lote.map(comprobar));
    lote.forEach((id, j) => res.set(id, st[j]));
    await new Promise(s => setTimeout(s, 300));
  }
  const rotos = ids.filter(id => [400, 401, 403, 404].includes(res.get(id)));
  const dudas = ids.filter(id => ![200, 400, 401, 403, 404].includes(res.get(id)));
  const motivo = s => s === 401 || s === 403 ? "el canal no deja incrustarlo" : "borrado o privado";
  const out = [];
  out.push(`# Comprobación de vídeos · ${new Date().toISOString().slice(0, 10)}`, "");
  out.push(`Comprobados ${ids.length} vídeos: ${ids.length - rotos.length - dudas.length} bien, ${rotos.length} rotos, ${dudas.length} sin poder comprobar.`, "");
  if (rotos.length) {
    out.push("## Vídeos rotos", "", "| Vídeo | Problema | Fichas |", "| --- | --- | --- |");
    for (const id of rotos) out.push(`| [${id}](https://www.youtube.com/watch?v=${id}) | ${motivo(res.get(id))} | ${usos.get(id).map(f => `${f.es} (\`${f.id}\`, ${f.seccion})`).join("; ")} |`);
    out.push("", "Para arreglarlo, abre Claude Code en el proyecto y escribe `/revisar-videos`.");
  }
  if (dudas.length) {
    out.push("", "## Sin poder comprobar", "", "YouTube no respondió (límite de peticiones o fallo de red). Se volverán a comprobar la semana que viene.", "");
    for (const id of dudas) out.push(`- ${id} (código ${res.get(id)}): ${usos.get(id).map(f => f.id).join(", ")}`);
  }
  console.log(out.join("\n"));
  process.exit(rotos.length ? 1 : 0);
})();
