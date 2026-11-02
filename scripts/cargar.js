// Carga los archivos de datos igual que el navegador y devuelve el objeto MMA.
// Lo usan validar.js, huecos.js y comprobar-videos.js.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RAIZ = path.join(__dirname, "..");
const ARCHIVOS = ["datos-comun.js", "datos-boxeo.js", "datos-lucha.js", "datos-suelo.js", "pendientes.js", "huecos-calc.js"];

function cargar() {
  const ctx = {};
  ctx.window = ctx;
  vm.createContext(ctx);
  for (const f of ARCHIVOS) {
    const ruta = path.join(RAIZ, f);
    if (!fs.existsSync(ruta)) { console.error(`✗ Falta el archivo ${f}`); process.exit(1); }
    try {
      vm.runInContext(fs.readFileSync(ruta, "utf8"), ctx, { filename: f });
    } catch (e) {
      const linea = (e.stack || "").split("\n").find(l => l.includes(f)) || "";
      console.error(`✗ Error de sintaxis o de ejecución en ${f}: ${e.message}`);
      if (linea) console.error(`  ${linea.trim()}`);
      console.error("  Suele ser una coma, una comilla o un corchete que falta o sobra cerca de esa línea.");
      process.exit(1);
    }
  }
  return ctx.MMA;
}

module.exports = { cargar, RAIZ, ARCHIVOS };
