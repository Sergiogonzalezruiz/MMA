# Mapa MMA

Biblioteca personal de MMA para entrenar en casa: técnicas y drills de **boxeo, lucha y suelo** con su vídeo de YouTube incrustado, rutas por nivel, mapa del combate y plan de entrenamiento.

**Toda la documentación está dentro de la propia web, en la pestaña «Guía».** Empieza por «Empieza aquí» y «Montarlo (una vez)».

## Lo mínimo

```bash
node scripts/servir.js      # ver la web en http://localhost:8000 (con doble clic los vídeos no cargan)
node scripts/validar.js     # comprobar los datos antes de publicar
node scripts/huecos.js      # qué falta y qué toca añadir
claude                      # abrir Claude Code en esta carpeta; luego /huecos o /tanda 1
```

## Archivos

- `index.html`: la web.
- `datos-*.js`: el contenido (fichas por sección y datos comunes).
- `pendientes.js`: lo que falta por añadir, puntuado.
- `huecos-calc.js`: cálculo de huecos y puntuación.
- `guia.js`: la guía que se ve en la web.
- `CLAUDE.md` y `.claude/skills/`: instrucciones y comandos para Claude Code.
- `scripts/`: validador, huecos, comprobador de vídeos y servidor local.
- `.github/workflows/`: validación en cada cambio y comprobación semanal de vídeos.

Se publica con GitHub Pages desde la rama `main`, carpeta raíz.
