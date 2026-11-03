# Mapa MMA · instrucciones para Claude Code

Web personal de Sergio para aprender MMA: biblioteca de técnicas y drills con vídeo de YouTube incrustado, en tres secciones (Boxeo, Lucha, Suelo). Sergio entrena **solo en casa**, sin compañero. Todo el contenido está **en español de España**.

La web es HTML estático, sin frameworks ni proceso de compilación, y se publica con GitHub Pages desde la rama `main`. No añadas dependencias npm, bundlers ni frameworks: cualquier cambio tiene que seguir funcionando abriendo `index.html` desde un servidor estático.

## Foco actual: solo Suelo

Sergio quiere centrarse en **Suelo**. **Boxeo y Lucha están aparcados** hasta que él diga lo contrario. Mientras tanto:

- **Orden de trabajo:**
  1. el mapa de suelo (`planes/mapa-suelo.md`)
  2. las tandas de suelo, en este orden: 1 (supervivencia), 4 (escapes), 6 (espalda y cabeza-brazo) y 8 (guardias)
- **Tandas aparcadas:** la 2 y la 5 (Lucha) y la 3 y la 7 (Boxeo). Si `node scripts/huecos.js` o la página «Qué falta» las proponen, sáltatelas y dilo en una línea.
- **`/tanda` sin número:** propone la siguiente tanda de suelo. **`/huecos` y la propuesta de tanda:** fíjate solo en los pendientes y huecos de Suelo, y resume los de Boxeo y Lucha en una línea («aparcados: N pendientes»).
- **Pendientes nuevos:** si Sergio pide añadir uno de Boxeo o Lucha, añádelo a `pendientes.js` como `idea` sin tanda, y no hagas la ficha.
- **Fichas de Boxeo y Lucha:** no las amplíes ni las reescribas. Sí puedes:
  - arreglar errores que rompan la web o el validador
  - cambiar vídeos caídos que detecte la comprobación semanal
- **Si una ficha de suelo se relaciona con Boxeo o Lucha** (por ejemplo, en `combina`), enlaza solo fichas que ya existan.
- **Cuando Sergio levante el foco,** borra este apartado y la nota de `planes/mapa-suelo.md`.

## Archivos

| Archivo | Qué contiene |
| --- | --- |
| `index.html` | Toda la web: estilos, vistas, reproductor, buscador, progreso, guía y «Qué falta» |
| `datos-comun.js` | Secciones y categorías, rutas por nivel, mapa del combate (FASES, TRANSICIONES), plan de casa, estructura de Jiu-Jitsu University (JJU) |
| `datos-boxeo.js`, `datos-lucha.js`, `datos-suelo.js` | Las fichas de cada sección. `datos-suelo.js` también tiene `MMA.POSICIONES` |
| `pendientes.js` | Lista de todo lo que falta por añadir, con su puntuación |
| `huecos-calc.js` | Cálculo de huecos y puntuación (lo usan la web y `scripts/huecos.js`) |
| `guia.js` | Textos de la guía que se ve en la web (pestaña Guía) |
| `scripts/validar.js` | Validador de datos. **Ejecútalo siempre antes de hacer commit** |
| `scripts/huecos.js` | Qué falta y propuesta de tanda (`--tanda N`, `--todos`) |
| `scripts/comprobar-videos.js` | Comprueba con oEmbed que los vídeos existen y se pueden incrustar |
| `scripts/servir.js` | Servidor local en http://localhost:8000 |
| `planes/mapa-suelo.md` | Plan del mapa de suelo, por fases |
| `.github/workflows/` | Validación en cada push y comprobación semanal de vídeos |
| `.claude/skills/` | Comandos: `/tanda`, `/pendiente`, `/huecos`, `/ficha`, `/verificar`, `/revisar-videos`, `/revision-trimestral` |

## Comandos

```bash
node scripts/validar.js          # obligatorio antes de cada commit; tiene que acabar en ✓
node scripts/huecos.js           # qué falta y qué toca añadir
node scripts/huecos.js --tanda 1 # pendientes de una tanda planificada
node scripts/servir.js           # ver la web en http://localhost:8000
```

## Modelo de datos

### Ficha (en `datos-<sección>.js`, dentro de `MMA.add([...])`)

```js
{
  id: "lu-ankle-pick",              // único; minúsculas y guiones; prefijo box-, lu- o su- en fichas nuevas
  seccion: "lucha",                 // boxeo | lucha | suelo
  tipo: "tecnica",                  // tecnica | drill
  cat: "derribos",                  // obligatorio en técnicas: id de categoría de la sección (datos-comun.js)
  es: "Ankle pick", en: "Ankle pick", jp: "Kibisu-gaeshi", pt: null, alias: ["agarre de tobillo"],
  nivel: "I",                       // F | I | A
  mma: "media",                     // muy alta | alta | media | baja
  mmaNota: "Por qué importa (o no) en MMA, en una frase.",
  fases: ["clinch"],                // distancia | entrada | clinch | jaula | defensa | suelo-arriba | suelo-abajo | levantarse
  solo: "parcial",                  // si | parcial (solo el patrón) | no
  material: ["companero"],          // ninguno | esterilla | goma | cuerda | pelota | espejo | comba | cinta | pared | saco | companero | tatami
  objetivo: "Para qué sirve, en una frase.",
  pasos: ["3 a 5 pasos cortos, en imperativo."],
  detalles: ["2 detalles clave"],
  errores: ["2 errores típicos"],
  reacciones: [{ si: "El rival hace X", ref: "id-de-otra-ficha", txt: "Qué haces" }], // ref opcional
  drills: ["ids de drills para entrenarla"],  // obligatorio en técnicas: al menos uno, el más directo primero
  combina: ["ids de fichas relacionadas"],
  videos: [V("ID_11_CHARS", "Instructor", { etiqueta: "En español", idioma: "es", inicio: 0, fin: null, verificado: "2026-11-20" })]
}
```

- **Boxeo:** `golpes: [1, 2, 3]` con la numeración 1 jab, 2 directo, 3 gancho delantero, 4 gancho trasero, 5 uppercut delantero, 6 uppercut trasero.
- **Suelo:** `gi: "ambos" | "gi" | "nogi"`, `desde: { pos, lado }`, `hasta: { pos, lado } | null`, `jju: "<id de capítulo>"`. Las posiciones y sus lados están en `MMA.POSICIONES` (datos-suelo.js); los capítulos en `MMA.JJU` (datos-comun.js). Los drills de suelo usan `desde: { pos: "base", lado: "neutral" }`.
- **Posiciones de suelo:** cada una (menos `base`) lleva `mapa: { x, y }`, su sitio fijo en el mapa, en un lienzo de 1000 × 680. Más arriba significa más dominante para el de arriba.
- **Drills:** `tipo: "drill"`, `dosis: "3 × 2 min · 1 min de descanso"`, `criterio: "Cuándo está superado, medible"`. Los drills de boxeo y lucha no llevan `cat`. La relación con las técnicas se escribe solo en el campo `drills` de la técnica; la ficha del drill calcula «Técnicas que entrena». Si ningún drill sirve para una técnica nueva, crea uno.
- **Progreso (Ni idea, Entrenando, Entrenada):** lo marca Sergio en la web y se guarda en `localStorage` del navegador. No va en los datos ni en el repositorio.
- **Vídeos:** `V(id, instructor, extra)` está definida al principio de cada archivo de sección (en datos-suelo.js los vídeos están escritos como objetos completos: usa el mismo formato que las fichas vecinas). `segmentos: [{ t: "Nombre", inicio: 26, fin: 79 }]` divide un vídeo en partes. `verificado: "AAAA-MM-DD"` **solo lo pone Sergio** (o tú cuando él te diga que lo ha visto).

### Pendiente (en `pendientes.js`)

`P("p-<id>", "seccion", "Nombre", "Fuente", [mma, hueco, solo, conecta], { interes, tanda, estado, nota })`

- Puntos: mma 0–3, hueco 0–2, solo 0–2, conecta 0–2, interes 0–3 (este lo decide Sergio). Criterios en `huecos-calc.js` (`MMA.CRITERIOS`).
- Estados: `idea` → `planificada` (tiene `tanda`) → `en-tanda` (en un PR abierto) → `publicada` (añade `ficha: "<id>"`).
- Cuando publiques la ficha de un pendiente, cambia el pendiente a `estado: "publicada", ficha: "<id>"`. No lo borres.

## Reglas de contenido

1. **Texto propio.** Nunca copies texto de *Jiu-Jitsu University* ni transcribas vídeos. Puedes citar el capítulo (campo `jju`).
2. **Ficha completa:** objetivo, 3–5 pasos, 2 detalles, 2 errores, nivel, fases, material, `solo`, `mma` y `mmaNota`.
3. **Estilo:** frases cortas, segunda persona, imperativo en los pasos, español de España, sin emojis. Mira las fichas existentes y escribe igual.
4. **Una técnica, una ficha.** Variantes como `segmentos` del vídeo o en `combina`.
5. **Cifras con fuente y fecha** (por ejemplo, porcentajes de sumisiones en la UFC).
6. **Prioridad MMA y sin gi.** Lo que solo funciona con gi se marca `gi: "gi"` y `mma: "baja"`.
7. **Seguridad:** lanzamientos, caídas y llaves de pierna llevan en `detalles` cuándo hace falta tatami o compañero.

## Vídeos: cómo buscarlos

1. Busca con WebSearch restringido a `youtube.com` (allowed_domains) usando el nombre en inglés de la técnica + "BJJ", "wrestling", "boxing" o "MMA".
2. Prefiere instructores con trayectoria comprobable (Tony Jeffries, Stephan Kesting, John Danaher, Lachlan Giles, Henry Akins, Ben Askren, Cary Kolat, Shintaro Higashi, Satoshi Ishii…) y vídeos que expliquen el porqué y muestren errores. Sin gi antes que con gi.
3. Comprueba título y canal con WebFetch sobre `https://www.youtube.com/watch?v=ID`, **de uno en uno** (YouTube limita las peticiones seguidas).
4. **Nunca inventes un id ni digas que has visto un vídeo.** Solo ids que hayan salido en resultados de búsqueda. Deja `verificado` vacío.
5. `inicio: 0` y `fin: null` salvo que la descripción tenga capítulos; entonces usa `segmentos`.
6. Si hay uno bueno en español, añádelo como segundo vídeo con `idioma: "es"` y `etiqueta: "En español"`.

## Git

- Una rama por tarea: `tanda-3`, `pendiente-ankle-pick`, `videos-2026-11-24`…
- Antes de cada commit: `node scripts/validar.js` tiene que acabar en ✓.
- Mensajes de commit en español: «Tanda 3: defensa y contras de boxeo (7 fichas)».
- Abre el pull request con `gh pr create` si `gh` está instalado y con sesión iniciada. En la descripción, lista cada ficha nueva con el enlace de YouTube de cada vídeo, para que Sergio los revise.
- No hagas push a `main` ni fusiones PRs salvo que Sergio lo pida expresamente. Nunca `git push --force`.

## Al terminar cualquier tarea

Di en pocas líneas qué has cambiado, qué tiene que revisar Sergio (vídeos nuevos con su enlace) y el enlace del PR. Si has añadido fichas de suelo, comprueba que salen en `#suelo-mapa`.
