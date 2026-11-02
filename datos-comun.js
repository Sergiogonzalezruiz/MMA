// =============================================================
//  DATOS COMUNES: secciones, mapa del combate, plan de casa y
//  la estructura de Jiu-Jitsu University adaptada a MMA.
//  Las fichas están en datos-boxeo.js, datos-lucha.js y datos-suelo.js
// =============================================================

window.MMA = {
  FICHAS: [],
  add(lista) { this.FICHAS.push(...lista); },

  MATERIAL: {
    ninguno: "Sin material", esterilla: "Esterilla", goma: "Goma elástica", cuerda: "Cuerda",
    pelota: "Pelota de tenis", espejo: "Espejo", comba: "Comba", cinta: "Cinta en el suelo",
    pared: "Pared", muneco: "Manta enrollada o muñeco", saco: "Saco", companero: "Compañero", tatami: "Tatami"
  },

  NIVELES: { F: "Fundamentos", I: "Intermedio", A: "Avanzado" },

  SECCIONES: [
    {
      id: "boxeo", nombre: "Boxeo", grupo: "Striking",
      desc: "Golpear y que no te golpeen, con la guardia y los pies pensados para MMA: guantes pequeños, amenaza de derribo y de patada.",
      categorias: [
        { id: "guardia", n: "Guardia y postura" },
        { id: "pies", n: "Juego de pies" },
        { id: "golpes", n: "Golpes" },
        { id: "defensa", n: "Defensa" },
        { id: "combos", n: "Combinaciones" },
        { id: "contras", n: "Contraataques" },
        { id: "mma", n: "Boxeo con amenaza MMA" }
      ],
      nota: "Numeración de golpes: 1 jab · 2 directo · 3 gancho delantero · 4 gancho trasero · 5 uppercut delantero · 6 uppercut trasero. Es la más extendida, pero algunos gimnasios usan otra.",
      ruta: {
        F: { cuando: "0–3 meses", que: "Guardia MMA, paso-arrastre en cuatro direcciones, pivote, 1, 2, 1-2, gancho delantero, parada y esquiva básica. El orden clásico: guardia → golpe parado → golpe con paso → combinación → defensa.",
             criterio: ["Grábate de lado y de frente: 3 rondas de 3 min de sombra sin cruzar los pies ni bajar la mano que no golpea.", "Cada golpe vuelve a la guardia y la barbilla no se levanta en toda la ronda."] },
        I: { cuando: "3–9 meses", que: "Uppercuts, overhand, jab al cuerpo, combinaciones de 3–4 golpes, contras (esquiva y directo, retroceso y contra), ángulos al terminar la combinación y cuerda de esquivas.",
             criterio: ["6 rondas de sombra temática saliendo en ángulo tras cada combinación.", "Pelota colgada: 2 min sin que te toque la vuelta."] },
        A: { cuando: "Con compañero", que: "Fintas, ritmo, cambio de guardia, contras al cambio de nivel, saco, manoplas y sparring técnico.",
             criterio: ["Solo se valida con manoplas o sparring con alguien que te corrija."] }
      }
    },
    {
      id: "lucha", nombre: "Lucha", grupo: "Wrestling + judo sin gi",
      desc: "Llevar la pelea al suelo o impedirlo. Base de wrestling y, del judo, solo lo que funciona en MMA: zancadillas y barridos desde el clinch.",
      categorias: [
        { id: "postura", n: "Postura y movimiento" },
        { id: "nivel", n: "Cambio de nivel y penetración" },
        { id: "manos", n: "Control de manos" },
        { id: "clinch", n: "Ataduras de clinch" },
        { id: "derribos", n: "Derribos de lucha" },
        { id: "judo", n: "Judo sin gi" },
        { id: "defensa", n: "Defensa del derribo" },
        { id: "jaula", n: "Contra la jaula" },
        { id: "levantarse", n: "Levantarse" }
      ],
      nota: "Las 7 habilidades básicas de USA Wrestling son el punto de partida: postura, movimiento, cambio de nivel, penetración, levantar, paso atrás (back step) y arco (back arch).",
      ruta: {
        F: { cuando: "0–3 meses", que: "Postura y movimiento, cambio de nivel, paso de penetración, sprawl, levantada técnica y teoría de las ataduras de clinch.",
             criterio: ["3 × 1 min de postura y movimiento sin levantarte.", "20 penetraciones seguidas sin apoyar las manos ni bajar la cabeza.", "Sprawl con la cadera en el suelo en menos de 1 segundo."] },
        I: { cuando: "3–9 meses", que: "Doble y single en sombra preparados con un golpe, sombra de clinch, entradas de judo con goma (o-uchi, ko-uchi, o-soto, harai-goshi) y wall walk en la pared de casa.",
             criterio: ["Cadena de 3 técnicas fluida en sombra (doble → single → zancadilla).", "5 wall walks limpios por lado."] },
        A: { cuando: "Con compañero", que: "Lucha contra la jaula, cadenas contra resistencia, timing del derribo contra golpes y lanzamientos completos.",
             criterio: ["Solo se valida contra resistencia real; los lanzamientos, sobre tatami."] }
      }
    },
    {
      id: "suelo", nombre: "Suelo", grupo: "BJJ para MMA",
      desc: "Jiu-jitsu con golpes: sobrevivir, escapar, levantarse y finalizar. Sigue el orden de Jiu-Jitsu University, filtrado por lo que funciona en MMA.",
      categorias: [
        { id: "movimiento", n: "Movimientos base" },
        { id: "escape", n: "Escapes" },
        { id: "guardia", n: "Desde la guardia" },
        { id: "pase", n: "Pases de guardia" },
        { id: "sumision", n: "Sumisiones" },
        { id: "mma", n: "Capa MMA" }
      ],
      nota: "En la UFC, el mataleón es el 39 % de las sumisiones, la guillotina el 18 % y las llaves de pierna solo el 3 % (GrapplerHQ, 1994–marzo 2026). Por eso aquí mandan la espalda, la cabeza-brazo y levantarse.",
      ruta: {
        F: { cuando: "Cinturón blanco · supervivencia", que: "Posturas de supervivencia en espalda, montada, cien kilos y rodilla en el vientre; gamba, puente y levantada técnica; guardia cerrada con control de postura; mecánica del mataleón y la guillotina.",
             criterio: ["Gamba en línea recta 10 m y puente sobre el hombro limpios.", "Saber decir las reglas de supervivencia de cada posición."] },
        I: { cuando: "Azul · escapes", que: "Escapes de montada, cien kilos y rodilla en el vientre; escapes de sumisiones (guillotina primero); media guardia con underhook; mariposa; levantarse (wrestle-up).",
             criterio: ["Encadenar en sombra: escape → guardia → levantarse.", "Validarlo con compañero o dummy."] },
        A: { cuando: "Morado y marrón · guardia y pase", que: "Pases de pie y de presión, ground and pound, arm-triangle, D'Arce, anaconda, espalda con triángulo de cuerpo y suelo contra la jaula.",
             criterio: ["Rolling y sparring de MMA."] }
      }
    }
  ],

  // ---------- Mapa del combate ----------
  FASES: [
    { id: "distancia", n: "Distancia", d: "Golpeo a distancia larga y media.", x: 130, y: 60 },
    { id: "entrada", n: "Entrada", d: "Cerrar distancia: finta, golpe y cambio de nivel.", x: 410, y: 60 },
    { id: "clinch", n: "Clinch", d: "Pecho con pecho en el centro: ataduras, golpes cortos y derribos.", x: 690, y: 60 },
    { id: "defensa", n: "Defensa del derribo", d: "Sprawl, whizzer y marcos para seguir de pie.", x: 410, y: 200 },
    { id: "jaula", n: "Contra la jaula", d: "Derribar, controlar o escapar con la valla detrás.", x: 690, y: 200 },
    { id: "levantarse", n: "Levantarse", d: "Volver a ponerte de pie sin que te golpeen.", x: 130, y: 200 },
    { id: "suelo-abajo", n: "Suelo · abajo", d: "Sobrevivir, guardia, escapar y levantarte.", x: 410, y: 340 },
    { id: "suelo-arriba", n: "Suelo · arriba", d: "Controlar, golpear y finalizar.", x: 690, y: 340 }
  ],
  TRANSICIONES: [
    ["distancia", "entrada"], ["entrada", "clinch"], ["clinch", "jaula"],
    ["entrada", "suelo-arriba"], ["jaula", "suelo-arriba"],
    ["distancia", "defensa"], ["defensa", "distancia"],
    ["suelo-abajo", "suelo-arriba"], ["suelo-arriba", "suelo-abajo"],
    ["suelo-abajo", "levantarse"], ["levantarse", "distancia"]
  ],

  // ---------- Plan para entrenar solo en casa ----------
  PLAN: {
    sesion: [
      { t: "Calentamiento", min: 8, txt: "Comba 2 × 2 min y movilidad de cadera y hombros.", fichas: ["box-comba"] },
      { t: "Boxeo", min: 18, txt: "2 rondas de patrones de pies, 3 rondas de sombra temática de 3 min y 1 ronda de cuerda de esquivas.", fichas: ["box-patrones-pies", "box-sombra", "box-cuerda"] },
      { t: "Lucha", min: 15, txt: "Postura y movimiento 2 × 1 min, penetraciones 3 × 10, sprawls 5 × 30 s y entradas de judo con goma (3 técnicas × 10 por lado).", fichas: ["lu-drill-postura", "lu-drill-penetraciones", "lu-drill-sprawl", "lu-drill-uchikomi"] },
      { t: "Suelo", min: 12, txt: "Circuito de 2 vueltas: gamba, puente, levantada técnica, sit-outs y granby.", fichas: ["gamba", "levantamiento", "su-granby", "su-rutina-solo"] },
      { t: "Mapa del combate", min: 5, txt: "2 rondas de sombra MMA encadenando fases: 1-2 → cambio de nivel → doble → suelo → escape → levantada → 1-2.", fichas: ["lu-drill-sombra"] },
      { t: "Físico", min: 10, txt: "Flexiones o dominadas, sentadilla búlgara y plancha; o intervalos 20 s / 10 s.", fichas: [] }
    ],
    semana: [
      { d: "Lunes", t: "Boxeo técnico (6 rondas temáticas) + escapes de suelo + fuerza" },
      { d: "Martes", t: "Lucha (habilidades básicas + judo con goma) + carrera suave o comba" },
      { d: "Miércoles", t: "Sesión completa (mapa del combate)" },
      { d: "Jueves", t: "Movilidad + estudiar fichas y vídeos + visualización" },
      { d: "Viernes", t: "Boxeo defensivo (cuerda, pelota) + wall walk + intervalos" },
      { d: "Sábado", t: "Open mat o clase suelta si puedes; si no, sesión larga de sombra MMA" },
      { d: "Domingo", t: "Descanso" }
    ],
    solo: [
      ["Timing y lectura del rival", "Sombra con guion («si baja la mano → gancho»), pelota y cuerda, y estudiar combates."],
      ["Resistencia, peso y pelea de manos", "Gomas, un dummy casero opcional y clases sueltas cuando puedas."],
      ["Corrección externa", "Grábate de lado y de frente y compáralo con el vídeo de la ficha."],
      ["Seguridad", "Sin tatami, nada de lanzamientos ni caídas fuertes. Las penetraciones, sobre esterilla."]
    ]
  },

  // ---------- Jiu-Jitsu University adaptado a MMA ----------
  // estado: prioridad | mantener | adaptar | gi | mma (añadido)
  JJU: [
    { parte: "1. Supervivencia", cinturon: "Blanco", caps: [
      { id: "sup-espalda", n: "Espalda", e: "prioridad" },
      { id: "sup-tortuga", n: "Cuatro apoyos (tortuga)", e: "adaptar", nota: "En MMA, salir rápido: te golpean" },
      { id: "sup-montada", n: "Montada", e: "mantener" },
      { id: "sup-cien-kilos", n: "Cien kilos", e: "mantener" },
      { id: "sup-rodilla", n: "Rodilla en el vientre", e: "mantener" }
    ]},
    { parte: "2. Escapes", cinturon: "Azul", caps: [
      { id: "esc-montada", n: "Montada", e: "prioridad" },
      { id: "esc-cien-kilos", n: "Cien kilos", e: "mantener", nota: "Mejor escapar a levantarse" },
      { id: "esc-espalda", n: "Espalda", e: "prioridad" },
      { id: "esc-rodilla", n: "Rodilla en el vientre", e: "mantener" },
      { id: "esc-armbar", n: "Llave de brazo", e: "mantener" },
      { id: "esc-triangulo", n: "Triángulo", e: "mantener" },
      { id: "esc-guillotina", n: "Guillotina", e: "prioridad" },
      { id: "esc-pie", n: "Llave de pie", e: "mantener", nota: "Poco frecuente en MMA" },
      { id: "esc-kimura", n: "Kimura", e: "mantener" }
    ]},
    { parte: "3. Guardia", cinturon: "Morado", caps: [
      { id: "gua-cerrada", n: "Guardia cerrada", e: "adaptar", nota: "Controlar la postura sin solapa" },
      { id: "gua-defensa-pase", n: "Defensa del pase", e: "mantener" },
      { id: "gua-mariposa", n: "Mariposa", e: "mantener" },
      { id: "gua-sentada", n: "Guardia sentada (sit-up)", e: "mantener" },
      { id: "gua-media", n: "Media guardia", e: "prioridad" },
      { id: "gua-dlr", n: "De La Riva", e: "adaptar" },
      { id: "gua-arana", n: "Araña", e: "gi" },
      { id: "gua-cross", n: "Cross-grip", e: "gi" },
      { id: "gua-dlr-inv", n: "De La Riva invertida", e: "gi" }
    ]},
    { parte: "4. Pase de guardia", cinturon: "Marrón", caps: [
      { id: "pas-cerrada", n: "Guardia cerrada", e: "adaptar", nota: "En MMA, mejor de pie o golpeando" },
      { id: "pas-abiertas", n: "Guardias abiertas (knee cut, torreando)", e: "mantener" },
      { id: "pas-media", n: "Media guardia", e: "prioridad" },
      { id: "pas-mariposa", n: "Mariposa y sentada", e: "mantener" },
      { id: "pas-dlr", n: "De La Riva, invertida y X", e: "adaptar" },
      { id: "pas-gi", n: "Araña, cross-grip y leg rope", e: "gi" }
    ]},
    { parte: "5. Sumisiones", cinturon: "Negro", caps: [
      { id: "sum-espalda", n: "Espalda", e: "prioridad", nota: "Sin estrangulaciones con solapa" },
      { id: "sum-montada", n: "Montada", e: "mantener" },
      { id: "sum-cien-kilos", n: "Cien kilos", e: "mantener" },
      { id: "sum-tortuga", n: "Tortuga", e: "mantener" },
      { id: "sum-media", n: "Media guardia", e: "mantener" },
      { id: "sum-guardia", n: "Desde la guardia", e: "mantener" }
    ]},
    { parte: "6. Capa MMA", cinturon: "Añadido", caps: [
      { id: "mma-gnp", n: "Ground and pound", e: "mma" },
      { id: "mma-defensa-golpes", n: "Defensa de golpes en guardia", e: "mma" },
      { id: "mma-levantarse", n: "Levantarse y wall walk", e: "mma" },
      { id: "mma-cabeza-brazo", n: "Cabeza-brazo: guillotina, D'Arce, anaconda, arm-triangle", e: "mma" }
    ]}
  ]
};
