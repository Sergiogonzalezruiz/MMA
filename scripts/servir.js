#!/usr/bin/env node
// Sirve la web en tu ordenador para verla con los vídeos funcionando.
// Uso: node scripts/servir.js   → abre http://localhost:8000
// (Abrir index.html con doble clic no vale: YouTube bloquea los vídeos, error 153.)
const http = require("http");
const fs = require("fs");
const path = require("path");
const RAIZ = path.join(__dirname, "..");
const PUERTO = Number(process.env.PORT) || 8000;
const TIPOS = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json", ".md": "text/plain; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon" };

http.createServer((req, res) => {
  let ruta = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (ruta.endsWith("/")) ruta += "index.html";
  const archivo = path.join(RAIZ, path.normalize(ruta).replace(/^(\.\.[/\\])+/, ""));
  if (!archivo.startsWith(RAIZ)) { res.writeHead(403); return res.end("Prohibido"); }
  fs.readFile(archivo, (e, datos) => {
    if (e) { res.writeHead(404); return res.end("No encontrado"); }
    res.writeHead(200, { "Content-Type": TIPOS[path.extname(archivo)] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(datos);
  });
}).listen(PUERTO, () => {
  console.log(`\nWeb en marcha: http://localhost:${PUERTO}\nPulsa Ctrl+C para pararla.\n`);
});
