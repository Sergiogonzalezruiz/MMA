# Plan: mapa interactivo de Suelo

Plan para que Claude Code construya un mapa de suelo al estilo de la vista de grafo de Obsidian, pero ordenado y con pictogramas. Sergio ya ha tomado las decisiones de diseño (abajo). **Haz una fase cada vez, en su propia rama y su propio PR**, y antes de escribir código explica en 5–10 líneas cómo lo vas a hacer y espera su OK.

Lee también `CLAUDE.md`: todas sus reglas siguen valiendo (sin dependencias ni frameworks, validar antes de commit, español de España, no tocar `main`).

> **Foco actual: solo Suelo.** Sergio ha aparcado Boxeo y Lucha. Este plan es lo primero que se hace. Mientras dure el foco, no toques las fichas ni la portada de Boxeo y Lucha, salvo para arreglar algo que se rompa. El detalle está en «Foco actual» de `CLAUDE.md`.

---

## 1. Decisiones de Sergio (no las cambies sin preguntarle)

| Tema | Decisión |
| --- | --- |
| Arriba y abajo | **Un nodo por posición.** El lado se elige con un filtro: «Todos · Estoy abajo · Estoy arriba». |
| Disposición | **Ordenada.** Las posiciones tienen sitio fijo (las más dominantes para el de arriba, más arriba). Las técnicas se colocan solas alrededor de su posición. |
| Imagen | **Pictogramas** dibujados en SVG para las posiciones. Las técnicas son puntos con nombre, sin imagen. |
| Al pulsar | **Panel de vista previa** con el vídeo y lo básico, y un botón para ir a la ficha completa. |
| Quién lo hace | Claude Code, en el repositorio de Sergio, por fases. |
| Prioridad | **Solo Suelo.** Boxeo y Lucha quedan aparcados hasta que Sergio diga lo contrario. |

## 2. Qué hay ahora (para que no rompas nada)

> **Nota de la fase 1.** Este plan se escribió antes de reordenar la web. Lo que se hizo distinto:
> - Las pestañas de Suelo son `Técnicas · Mapa · Drills · Ruta`. La pestaña «Posiciones» ya no existe y `#suelo-posiciones` lleva a `#suelo-mapa`.
> - `mapaSuelo()` y `NODOS_SUELO` ya están borrados.
> - El panel de una técnica lleva además el marcador de estado y sus drills, a petición de Sergio.
> - Hay 9 drills de suelo, no 5. Tampoco salen en el mapa.
> - `guardia-cerrada` está en `y: 570`, no en 600: con 9 técnicas se amontonaban contra el borde inferior.
> - Las técnicas parten de un punto cercano a su posición, no del punto medio entre `desde` y `hasta`, y el muelle a `hasta` es débil. Con el punto medio se quedaban lejos de su posición, bloqueadas por otras cajas.
> - Los nombres de las técnicas miden siempre 12 px en pantalla, con cualquier zoom. Si hay muchas juntas, al acercarte se separan.

- `index.html` es una sola IIFE. Funciones que vas a tocar o reutilizar:
  - `renderSeccion(id, tab)`: pestañas Técnicas / Entrenar / Ruta. En Suelo, la pestaña Técnicas empieza con `mapaSuelo()`, un grafo estático de 9 cajas con coordenadas en la constante `NODOS_SUELO`.
  - `grafo({...})`: dibuja el mapa del combate de la portada. **No lo toques**; el mapa nuevo es independiente.
  - `renderPos(id, lado)`: página de una posición (`#p-<id>`).
  - `renderFicha(id)` y el reproductor: `mountPlayer(v)`, `playSegment(v)`, `showError(v, code)`, `setCredit(v)`. Usan los elementos `#player` y `#credit` y las variables de módulo `player`, `cur`, `loop`, `rate`.
  - `route()`: lee `location.hash`, destruye el reproductor y vuelve a pintar la página en cada `hashchange`.
  - Atajos: `$`, `$$`, `esc`, `F` (fichas por id), `P` (posiciones por id), `S` (secciones), `LADOS`, `chips(f)`, `names(o)`, `bindGo()`.
- Colores: variables CSS en `:root` con versión oscura (`prefers-color-scheme` y `[data-theme]`). Usa siempre variables: `--ink`, `--muted`, `--line`, `--surface`, `--surface-2`, `--box`, `--lu`, `--su`, `--ok`.
- Datos de suelo (`datos-suelo.js`):
  - `MMA.POSICIONES`: `base` (movimientos sin posición) y 9 posiciones. Las vacías llevan `pronto: true`: `guardias-abiertas`, `rodilla-vientre` y `tortuga`. A `mariposa` y `media-guardia` les falta `grupo: "suelo"`.
  - Las fichas de suelo tienen `desde: {pos, lado}` y `hasta: {pos, lado} | null`. Las sumisiones tienen `hasta: null`.
  - Categorías de suelo: `movimiento`, `escape`, `guardia`, `pase`, `sumision` y `mma`.
- Hoy hay 19 técnicas con posición (más 5 drills, que no salen en el mapa). Diseña pensando en que llegue a ~150 sin que se vuelva ilegible.

## 3. Qué tiene que hacer el mapa

### Dónde está
- Nueva pestaña **Mapa** en Suelo: `Técnicas · Mapa · Entrenar · Ruta`.
- Ruta `#suelo-mapa`. Con algo seleccionado: `#suelo-mapa/<id-ficha>` o `#suelo-mapa/p-<id-posición>`.
- Cambia la expresión regular de `route()` para aceptar `suelo-mapa(/...)?`.
- En la pestaña Técnicas, cambia el bloque «Posiciones» (`mapaSuelo()` y `NODOS_SUELO`) por un enlace destacado «Abrir el mapa» y la lista de posiciones como enlaces a `#p-<id>`. Borra `mapaSuelo()` y `NODOS_SUELO` cuando ya no se usen.

### Qué se ve
- **Nodo de posición:** caja con el nombre y «N técnicas». En la fase 2 lleva además el pictograma.
  - Las posiciones con `pronto: true` o sin técnicas tienen borde discontinuo y texto atenuado. Son huecos.
  - No se dibuja la posición `base`.
- **Nodo de técnica:** círculo de radio 7 relleno con el color de su categoría y el nombre al lado (12 px). Los drills (`tipo: "drill"`) no salen en el mapa.
- **Aristas:**
  - De la posición a la técnica: línea fina con `--line`.
  - De la técnica a su `hasta`: línea discontinua del color de la categoría, con flecha.
  - Las sumisiones no tienen segunda arista: son el final.
- **Colores por categoría:**
  - `escape` → `--ok`
  - `guardia` (raspados y levantarse) → `--lu`
  - `pase` → `--su`
  - `sumision` → `--box`
  - `mma` → `--ink` (círculo sin relleno con borde de 2 px)
- **Leyenda** debajo del mapa:
  - las cinco categorías, «posición vacía» y «más alto = peor para el de abajo»
  - el eje vertical, con la flecha y el texto «Más dominante para el de arriba ↑», pegado al borde izquierdo

### Disposición (ordenada)
- Las posiciones tienen coordenadas fijas en un `viewBox` de `0 0 1000 680`, con un campo nuevo `mapa: { x, y }` en cada posición de `MMA.POSICIONES`. Valores de partida (ajústalos si se solapan, y di cuáles has cambiado):

  | Posición | x | y |
  | --- | --- | --- |
  | montada | 380 | 80 |
  | espalda | 680 | 80 |
  | rodilla-vientre | 200 | 250 |
  | cien-kilos | 500 | 250 |
  | tortuga | 820 | 250 |
  | media-guardia | 220 | 430 |
  | mariposa | 520 | 430 |
  | guardias-abiertas | 800 | 430 |
  | guardia-cerrada | 500 | 600 |

- Las técnicas las coloca una simulación de fuerzas **determinista**, para que el mapa salga igual cada vez:
  - PRNG con semilla (por ejemplo mulberry32, con la semilla sacada del id).
  - Unas 300 iteraciones de golpe al cargar, sin animar. Cuesta poco: con 150 nodos son menos de 100 ms.
  - Posición inicial: el punto medio entre `desde` y `hasta`, o un ángulo alrededor de `desde` si no tiene `hasta`.
  - Fuerzas:
    - repulsión entre todos los nodos
    - muelle a `desde` (longitud ~70)
    - muelle a `hasta` (longitud ~110)
    - choque que tenga en cuenta el ancho de la etiqueta
  - Las posiciones no se mueven.
- Sin librerías: el boceto que aprobó Sergio en el chat eran ~80 líneas de JS propio sobre SVG. Escríbelo en una sección nueva de `index.html` (`/* ---------- Mapa de suelo ---------- */`).

### Interacción (como Obsidian)
- **Pasar el ratón o enfocar** un nodo resalta ese nodo, sus vecinos y sus aristas, y atenúa el resto (opacidad ~0,15).
- **Acercar y alejar** con la rueda o pellizcando, y **desplazar** arrastrando el fondo. Usa Pointer Events (ratón y táctil). Botones «+», «−» y «Centrar».
- **Zoom semántico:** si el zoom baja de ~0,8 se ocultan los nombres de las técnicas (vuelven a salir al pasar por encima).
- **Filtros** encima del mapa. Atenúan lo que no cumple el filtro, sin quitarlo, para que el mapa no se mueva:
  - lado: «Todos · Estoy abajo · Estoy arriba», que filtra por `desde.lado`
  - categorías: chips que se activan y desactivan
- **Teclado:** los nodos se enfocan con Tab, se seleccionan con Enter y el panel se cierra con Escape.
- **Ver como lista:** un enlace que muestra las posiciones con sus técnicas como lista de enlaces. Sirve de alternativa accesible y para móviles muy pequeños.
- Los nodos no se pueden arrastrar en esta versión.

### Panel de vista previa
- **Pulsar una técnica** abre un panel. En escritorio es lateral derecho, de unos 380 px. Por debajo de 860 px es una hoja inferior con un máximo de 75vh y scroll interno. Contiene:
  - el nombre, el nombre en inglés y `chips(f)`
  - de dónde a dónde: «Montada (abajo) → Guardia cerrada (arriba)», o «→ Sumisión»
  - el vídeo: reutiliza `mountPlayer()` pintando dentro del panel `<div class="player-wrap"><div class="player" id="player"></div></div>` y `<span class="credit" id="credit"></span>`. Si el vídeo tiene `segmentos`, empieza por el primero. Sin botones de velocidad ni de bucle: eso está en la ficha.
  - `objetivo` y los `pasos` como lista numerada
  - el botón principal **«Abrir ficha completa →»** (`#f-<id>`)
  - «Técnicas relacionadas»: `combina` y las otras técnicas de la misma posición, como enlaces que seleccionan ese nodo en el mapa
- **Pulsar una posición** abre el panel con:
  - el nombre y `desc`
  - el objetivo según el filtro de lado (o los dos)
  - «Desde aquí» y «Llegas aquí», como enlaces que seleccionan nodos
  - «Abrir posición →» (`#p-<id>`)
- **Al seleccionar:** centra el nodo con una transición corta (respeta `prefers-reduced-motion`) y actualiza la URL con `history.replaceState`. No uses `location.hash`, porque dispararía `route()` y repintaría todo.
- **Al cerrar el panel:** destruye el reproductor (`player?.destroy?.()`, `player = null`) y vuelve a `#suelo-mapa`.
- **Al cargar `#suelo-mapa/<id>`** directamente, o al volver atrás desde la ficha, se abre el panel de ese nodo.
- Opcional: guarda el zoom y el desplazamiento en `sessionStorage` (siempre dentro de `try/catch`) para recuperarlos al volver.

### Tamaño y temas
- Dentro de la página, el mapa ocupa todo el ancho y tiene `height: min(72vh, 720px)`. El scroll es el pan del propio mapa: la página no puede tener scroll horizontal.
- Todo tiene que verse bien en modo claro y oscuro, solo con variables CSS.

## 4. Pictogramas (fase 2)

Un dibujo por posición (las 9, también las vacías), todos con el mismo estilo. Van en un archivo nuevo, `pictogramas.js`, que se carga después de `datos-suelo.js`:

```js
MMA.PICTOS = {
  "montada": `<line class="suelo" .../><circle class="pa" .../>...`,
  // ...
};
```

Son SVG en línea, no `<img>`, para que hereden los colores del tema.

### Estilo (obligatorio)
- **Lienzo:** `viewBox="0 0 120 80"`. El suelo es una línea horizontal en `y = 70`, de clase `suelo`, con trazo `--line`.
- **Dos personas vistas de lado:**
  - `pa` es la persona de arriba, con trazo y relleno `--su`
  - `pb` es la persona de abajo, con trazo `--muted`
- **Solo estas piezas:**
  - cabeza: `<circle r="7">`
  - tronco: línea o `path` con `stroke-width="10"` y `stroke-linecap="round"`
  - brazos y piernas: `stroke-width="6"`, con extremos y uniones redondeados
- **Sin texto, sin caras, sin manos ni pies, sin degradados.**
- **Máximo 14 elementos por pictograma**, y la misma escala en todos: una persona de pie mediría ~60 unidades.

### Qué dibujar

| Posición | Qué se ve |
| --- | --- |
| guardia-cerrada | El de abajo boca arriba, con las piernas cruzadas alrededor de la cintura del de arriba, que está de rodillas y erguido. |
| media-guardia | El de abajo de lado, con las piernas atrapando una pierna del de arriba, que está pecho con pecho. |
| mariposa | El de abajo sentado, con los empeines por dentro de los muslos del de arriba, que está de rodillas. |
| guardias-abiertas | El de abajo boca arriba, con un pie en la cadera del de arriba, que está de pie y algo agachado. |
| cien-kilos | El de abajo boca arriba. El de arriba atravesado sobre su pecho, con el tronco horizontal y las rodillas en el suelo. |
| rodilla-vientre | El de abajo boca arriba. El de arriba con una rodilla sobre el vientre, la otra pierna estirada al lado y el tronco erguido. |
| montada | El de abajo boca arriba. El de arriba sentado sobre su tronco, con las rodillas en el suelo. |
| espalda | Los dos sentados. El de arriba detrás, con las piernas enganchadas por delante y un brazo al cuello. |
| tortuga | El de abajo a cuatro patas, recogido. El de arriba de lado, sobre su espalda. |

### Revisión antes de usarlos
1. Crea la ruta oculta `#suelo-pictos` (no sale en el menú). Muestra los 9 pictogramas en una cuadrícula, a 120 px y a 48 px, en claro y en oscuro, con el nombre debajo.
2. Si tienes Playwright, haz capturas y míralas. Si no, pide a Sergio que abra `http://localhost:8000/#suelo-pictos` con `node scripts/servir.js`.
3. **No los integres hasta que Sergio diga que se entienden.** Si uno no se entiende, se rehace ese.

### Dónde se usan (cuando estén aprobados)
- En el nodo de posición del mapa: caja de ~130 × 100 con el pictograma arriba y el nombre debajo.
- En el panel de posición y en la cabecera de `renderPos()`.
- Si falta el pictograma de una posición, el nodo sale como en la fase 1, solo con el nombre.

## 5. Cambios en datos, validador y documentación

- **`datos-suelo.js`:** añade `mapa: { x, y }` a las 9 posiciones y `grupo: "suelo"` a `mariposa` y `media-guardia`.
- **`scripts/validar.js`:**
  - Error si una posición que no es `base` no tiene `mapa`, o si `x` o `y` se salen de 0–1000 o 0–680.
  - Aviso si dos posiciones están a menos de 140 de distancia.
  - Aviso (fase 2) si falta el pictograma de una posición, o si alguno pasa de 14 elementos.
- **`guia.js`:** añade un apartado «El mapa de suelo» que explique:
  - que se dibuja solo a partir de `desde` y `hasta`
  - cómo mover una posición (editar `mapa`)
  - cómo pedir un pictograma nuevo a Claude Code, con un prompt que se pueda copiar
- **`CLAUDE.md`:**
  - añade `mapa` al modelo de datos de posiciones y `pictogramas.js` a la tabla de archivos
  - en «Al terminar cualquier tarea», añade: si has añadido fichas de suelo, comprueba que salen en `#suelo-mapa`
- **`.claude/skills/tanda/SKILL.md`:** añade al final de los pasos que, en las tandas de suelo, hay que abrir el mapa y comprobar que las técnicas nuevas tienen bien `desde` y `hasta`.

## 6. Fases

### Fase 1: mapa con nombres (rama `mapa-suelo-1`)
Todo el apartado 3 y los cambios del apartado 5, menos lo de los pictogramas.

### Fase 2: pictogramas (rama `mapa-suelo-2`)
El apartado 4 completo. Hay dos PR o dos commits separados: primero la hoja `#suelo-pictos` para que Sergio la revise, y después la integración.

### Fase 3: extras (solo si Sergio lo pide)
- **Rutas:** elegir «estoy en montada, abajo» y resaltar los caminos hasta una guardia o hasta ponerse de pie.
- Nodo de salida **«De pie»**, enlazado a `#fase-levantarse`, para técnicas como el wrestle-up. Necesita aceptar `hasta: { pos: "de-pie" }` en los datos y en el validador.
- Filtros por nivel (F/I/A) y por «se puede practicar solo».
- Arrastrar nodos de técnica, sin guardar la posición.
- Mismo tipo de mapa para Lucha. Está aparcado, igual que toda la sección de Lucha: no lo propongas mientras dure el foco en Suelo.

## 7. Cómo comprobar cada fase antes del PR

1. `node scripts/validar.js` acaba en ✓.
2. `node scripts/servir.js`, y revisa:
   - [ ] `#suelo-mapa` carga sin errores en la consola.
   - [ ] Salen las 9 posiciones (3 discontinuas) y las 19 técnicas actuales, ninguna encima de otra ni fuera del lienzo.
   - [ ] El resaltado funciona al pasar el ratón y al enfocar con Tab.
   - [ ] El zoom (rueda, botones, pellizco) y el desplazamiento funcionan, y los nombres se ocultan al alejar.
   - [ ] Los filtros de lado y categoría atenúan sin mover nada.
   - [ ] Al pulsar una técnica se abre el panel con el vídeo. «Abrir ficha completa» lleva a la ficha, y «Atrás» vuelve al mapa con el panel abierto.
   - [ ] Al pulsar una posición se abre su panel, y sus enlaces seleccionan nodos.
   - [ ] Al cerrar el panel se para el vídeo.
   - [ ] A 390 px de ancho la página no tiene scroll horizontal y el panel es una hoja inferior.
   - [ ] En modo oscuro se ve y se lee todo.
   - [ ] La pestaña Técnicas de Suelo, `#p-<id>`, las fichas y la portada siguen igual que antes.
3. Si tienes Playwright, haz capturas a 1280 y a 390 px, en claro y en oscuro, y adjúntalas o descríbelas en el PR.
4. En la descripción del PR, di qué has decidido tú (por ejemplo, coordenadas cambiadas) y qué tiene que mirar Sergio.

## 8. Qué pegar en Claude Code

Fase 1:

```
Lee planes/mapa-suelo.md y CLAUDE.md. Vamos con la fase 1. Antes de escribir código, explícame en 5–10 líneas cómo lo vas a hacer y espera mi OK.
```

Fase 2, cuando la 1 esté fusionada:

```
Lee planes/mapa-suelo.md. Vamos con la fase 2: primero solo la hoja #suelo-pictos para que yo revise los pictogramas.
```
