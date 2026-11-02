#!/usr/bin/env node
// Muestra qué falta y propone la siguiente tanda.
// Uso:
//   node scripts/huecos.js            → huecos + propuesta de tanda
//   node scripts/huecos.js --tanda 3  → pendientes planificados para la tanda 3
//   node scripts/huecos.js --todos    → toda la lista de pendientes ordenada
const { cargar } = require("./cargar");
const M = cargar();
const args = process.argv.slice(2);
const sec = id => M.SECCIONES.find(s => s.id === id)?.nombre ?? id;
const linea = p => `  ${String(p.puntos).padStart(2)} pts · ${sec(p.seccion).padEnd(5)} · ${p.es}  [${p.id}${p.tanda ? ", tanda " + p.tanda : ""}, ${M.ESTADOS[p.estado]}]`;

if (args[0] === "--tanda") {
  const n = Number(args[1]);
  const l = M.pendientesOrdenados(p => p.tanda === n);
  console.log(`\nTanda ${n}: ${l.length} pendientes\n`);
  l.forEach(p => console.log(linea(p) + (p.nota ? `\n        nota: ${p.nota}` : "")));
  process.exit(0);
}
if (args[0] === "--todos") {
  M.pendientesOrdenados().forEach(p => console.log(linea(p)));
  process.exit(0);
}

console.log("\nQUÉ FALTA\n");
for (const h of M.calcularHuecos()) {
  console.log(`■ ${h.titulo}: ${h.resumen}`);
  h.items.slice(0, 8).forEach(i => console.log(`    - ${i.txt}`));
  if (h.items.length > 8) console.log(`    … y ${h.items.length - 8} más`);
}
const plan = [...new Set((M.PENDIENTES || []).filter(p => p.tanda && p.estado === "planificada").map(p => p.tanda))].sort((a, b) => a - b);
console.log(`\nTANDAS PLANIFICADAS PENDIENTES: ${plan.join(", ") || "ninguna"}`);
if (plan.length) console.log(`  La siguiente es la ${plan[0]}: node scripts/huecos.js --tanda ${plan[0]}`);
console.log("\nPROPUESTA POR PUNTUACIÓN (máx. 4 por sección):\n");
M.proponerTanda().forEach(p => console.log(linea(p)));
console.log("");
