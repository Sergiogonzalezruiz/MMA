// =============================================================
//  BOXEO (para MMA)
//  V(id, instructor, extra) crea un vídeo. extra puede llevar:
//  inicio, fin (segundos), etiqueta, idioma, segmentos
// =============================================================
(() => {
const V = (id, instructor, extra = {}) => ({ id, inicio: 0, fin: null, instructor, idioma: "en", ...extra });

MMA.add([
  // ---------------- GUARDIA Y PIES ----------------
  {
    id: "box-guardia", seccion: "boxeo", tipo: "tecnica", cat: "guardia",
    es: "Guardia MMA", en: "MMA stance", nivel: "F", mma: "alta",
    mmaNota: "Algo más ancha y alta que la de boxeo para poder hacer sprawl y aguantar patadas bajas.",
    fases: ["distancia"], solo: "si", material: ["ninguno", "espejo"],
    objetivo: "La posición desde la que sale todo: golpear, defender, derribar y defender el derribo.",
    pasos: [
      "Pies algo más separados que los hombros, el delantero apuntando al rival.",
      "Rodillas flexionadas y el peso repartido entre las dos piernas.",
      "Mano trasera en la mejilla, la delantera a la altura de la cara y algo adelantada.",
      "Codos cerca del cuerpo y barbilla baja."
    ],
    detalles: [
      "Peso centrado: si lo cargas delante, no puedes hacer sprawl ni retroceder.",
      "Las manos un poco más abiertas que en boxeo para parar golpes y agarrar."
    ],
    errores: [
      "Guardia larga y estrecha de boxeo con el pie delantero hacia dentro: deja la pierna expuesta a patadas bajas.",
      "Bajar las manos al moverte."
    ],
    drills: ["box-espejo", "box-sombra", "box-4-drills"],
    combina: ["box-paso-arrastre", "box-jab"],
    videos: [V("EKxYAvGGayI", "MMA Fundamentals", { etiqueta: "Guardia básica" }), V("pBIHzv3iWGo", "Boxeo vs MMA", { etiqueta: "Diferencias con boxeo" })]
  },
  {
    id: "box-paso-arrastre", seccion: "boxeo", tipo: "tecnica", cat: "pies",
    es: "Paso-arrastre", en: "Step-drag", nivel: "F", mma: "alta",
    mmaNota: "Mantiene la base para defender el derribo en cualquier momento.",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "Moverte sin perder la guardia ni la distancia entre los pies.",
    pasos: [
      "Para avanzar, empuja con el pie trasero y adelanta el delantero.",
      "El pie trasero lo sigue la misma distancia.",
      "Para retroceder, al revés: primero el pie trasero.",
      "Para ir a un lado, se mueve primero el pie de ese lado."
    ],
    detalles: ["Pasos cortos; la distancia entre los pies no cambia.", "El golpe sigue al pie: primero el paso, luego la mano."],
    errores: ["Cruzar o juntar los pies.", "Saltar en vez de deslizar."],
    drills: ["box-patrones-pies", "box-comba"],
    combina: ["box-pivote"],
    videos: [V("v0y86288Wt0", "Tony Jeffries")]
  },
  {
    id: "box-pivote", seccion: "boxeo", tipo: "tecnica", cat: "pies",
    es: "Pivote", en: "Pivot", nivel: "F", mma: "alta",
    mmaNota: "La forma de salir de la jaula y de crear ángulo tras una combinación.",
    fases: ["distancia", "jaula"], solo: "si", material: ["ninguno"],
    objetivo: "Girar fuera de la línea del rival sin dar pasos largos.",
    pasos: [
      "Apoya el peso en la parte delantera del pie delantero.",
      "Barre el pie trasero en arco para girar el cuerpo un cuarto de vuelta.",
      "Termina en guardia, con el rival delante y tú fuera de su línea."
    ],
    detalles: ["Pivota justo después de golpear: el rival te busca donde estabas."],
    errores: ["Girar sobre el talón.", "Abrir las manos al girar."],
    drills: ["box-patrones-pies", "box-sombra"],
    combina: ["box-1-2-3"],
    videos: [V("TSyV2i56BFA", "Pivote y ángulos (boxeo y MMA)")]
  },

  // ---------------- GOLPES ----------------
  {
    id: "box-jab", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [1],
    es: "Jab", en: "Jab", nivel: "F", mma: "muy alta",
    mmaNota: "Mide la distancia y esconde el cambio de nivel.",
    fases: ["distancia", "entrada"], solo: "si", material: ["ninguno"],
    objetivo: "El golpe más importante: mide, molesta y prepara todo lo demás.",
    pasos: [
      "Desde la guardia, extiende la mano delantera recta y gira el puño al final.",
      "El hombro sube para proteger la barbilla.",
      "La mano trasera se queda pegada a la cara.",
      "Recoge rápido y por el mismo camino."
    ],
    detalles: ["Puedes acompañarlo de un pequeño paso adelante.", "Doblarlo (1-1) sirve para cerrar distancia."],
    errores: ["Bajar la mano trasera mientras golpeas.", "Recoger la mano por abajo."],
    drills: ["box-espejo", "box-sombra", "box-4-drills"],
    combina: ["box-1-2", "box-cuerpo-cabeza"],
    videos: [
      V("ArQ50PXMCj4", "Tony Jeffries"),
      V("AaIeEp84zrQ", "Jero García", { etiqueta: "En español", idioma: "es" }),
      V("CoaUXNA0TNE", "Morales Box", { etiqueta: "En español 2", idioma: "es" })
    ]
  },
  {
    id: "box-directo", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [2],
    es: "Directo", en: "Cross", nivel: "F", mma: "alta",
    mmaNota: "Potente, pero si te inclinas quedas a tiro de un derribo.",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "El golpe recto de la mano trasera, el más potente de los rectos.",
    pasos: [
      "Gira la cadera y el pie trasero, como si apagaras un cigarro.",
      "Extiende la mano trasera recta hacia la cara.",
      "La mano delantera protege la cara.",
      "Vuelve a la guardia."
    ],
    detalles: ["La potencia sale de la rotación de cadera, no del brazo."],
    errores: ["Inclinarse hacia delante.", "Levantar la barbilla."],
    drills: ["box-espejo", "box-gomas", "box-4-drills"],
    combina: ["box-1-2"],
    videos: [V("vyTaKpylOcU", "Tony Jeffries"), V("BF7V9qJzCjQ", "Jorge Blanco", { etiqueta: "En español", idioma: "es" })]
  },
  {
    id: "box-gancho", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [3],
    es: "Gancho delantero", en: "Lead hook", nivel: "F", mma: "alta",
    mmaNota: "Corto y muy eficaz contra el que entra.",
    fases: ["distancia", "clinch"], solo: "si", material: ["ninguno"],
    objetivo: "Golpe curvo de la mano delantera a corta y media distancia.",
    pasos: [
      "Gira la cadera y el pie delantero hacia dentro.",
      "El brazo forma un ángulo de unos 90°, con el codo a la altura del puño.",
      "El golpe sale con el giro del cuerpo, no con el brazo.",
      "Vuelve a la guardia."
    ],
    detalles: ["Después de un directo, el peso ya está cargado para el gancho."],
    errores: ["Abrir el brazo antes de golpear: se ve venir.", "No girar el pie."],
    drills: ["box-espejo", "box-sombra"],
    combina: ["box-1-2-3"],
    videos: [V("UFVDcNDnpoU", "Tony Jeffries"), V("i3G3HsI1GGU", "Cómo lanzar el gancho", { etiqueta: "Otra explicación" })]
  },
  {
    id: "box-uppercut", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [5, 6],
    es: "Uppercut", en: "Uppercut", nivel: "I", mma: "alta",
    mmaNota: "Castiga al que baja la cabeza para derribar o en el clinch.",
    fases: ["distancia", "clinch", "defensa"], solo: "si", material: ["ninguno"],
    objetivo: "Golpe de abajo arriba a corta distancia.",
    pasos: [
      "Dobla un poco las rodillas y baja el hombro del lado que golpea.",
      "Empuja con las piernas y gira la cadera.",
      "El puño sube con la palma mirando hacia ti.",
      "Vuelve a la guardia."
    ],
    detalles: ["Corto: no hace falta bajar la mano para cargarlo."],
    errores: ["Bajar la mano antes de lanzarlo.", "Lanzarlo desde lejos."],
    drills: ["box-espejo", "box-sombra"],
    combina: ["box-1-2-3"],
    videos: [
      V("zl2bZwxM_ws", "Uppercut delantero", { etiqueta: "Delantero" }),
      V("iInkodqd5pE", "Uppercut trasero", { etiqueta: "Trasero" }),
      V("QJxtfUr2zQM", "Uppercut en español", { etiqueta: "En español", idioma: "es" })
    ]
  },
  {
    id: "box-overhand", seccion: "boxeo", tipo: "tecnica", cat: "golpes",
    es: "Overhand", en: "Overhand", nivel: "I", mma: "alta",
    mmaNota: "Muy MMA: pasa por encima de la guardia y combina con el cambio de nivel.",
    fases: ["distancia", "entrada"], solo: "si", material: ["ninguno"],
    objetivo: "Golpe de la mano trasera en arco, por encima de la guardia del rival.",
    pasos: [
      "Saca la cabeza de la línea con un pequeño paso o flexión lateral.",
      "Baja un poco el nivel.",
      "El brazo trasero viaja en arco por encima y cae en diagonal.",
      "La mano delantera protege mientras tanto."
    ],
    detalles: ["Funciona muy bien justo después de amenazar con un cambio de nivel."],
    errores: ["Lanzarlo con la cabeza en el centro.", "Cargar todo el peso y quedar desequilibrado."],
    drills: ["box-cuerda", "box-sombra"],
    combina: ["box-1-2-nivel"],
    videos: [V("YRqT3MgapNk", "Overhand de derecha"), V("XcXQDAEZSzQ", "Overhand", { etiqueta: "Otra explicación" })]
  },
  {
    id: "box-jab-cuerpo", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [1],
    es: "Jab al cuerpo", en: "Body jab", nivel: "I", mma: "alta",
    mmaNota: "Parece un cambio de nivel: el rival no sabe si llega golpe o derribo.",
    fases: ["distancia", "entrada"], solo: "si", material: ["ninguno"],
    objetivo: "Golpear abajo para abrir arriba.",
    pasos: [
      "Baja de nivel doblando las rodillas, no la cintura.",
      "Jab al estómago con la mano trasera protegiendo la cara.",
      "Vuelve arriba enseguida."
    ],
    detalles: ["La cabeza sigue alta y fuera de la línea."],
    errores: ["Inclinar la espalda: te expone a un rodillazo o una guillotina.", "Quedarse abajo."],
    drills: ["box-sombra"],
    combina: ["box-cuerpo-cabeza"],
    videos: [V("HXJz_gEPHDw", "Jab al cuerpo"), V("MfIvF3OIjNU", "El jab para abrir el cuerpo", { etiqueta: "Otra explicación" })]
  },

  // ---------------- DEFENSA Y CONTRAS ----------------
  {
    id: "box-parada", seccion: "boxeo", tipo: "tecnica", cat: "defensa",
    es: "Parada", en: "Parry", nivel: "F", mma: "alta",
    mmaNota: "Con guantes de 4 oz la guardia cubre poco: desviar es más fiable que bloquear.",
    fases: ["distancia"], solo: "parcial", material: ["ninguno"],
    objetivo: "Desviar el golpe recto con un gesto mínimo.",
    pasos: [
      "Cuando llega el jab, la mano trasera lo desvía hacia abajo o a un lado con la palma.",
      "El movimiento es corto: la mano vuelve enseguida a la cara.",
      "Contraataca mientras su brazo está fuera."
    ],
    detalles: ["Espera el golpe cerca de tu cara; no salgas a buscarlo."],
    errores: ["Estirar el brazo para buscar el golpe.", "Desviar y dejar la cara abierta."],
    drills: ["box-pelota", "box-sombra"],
    combina: ["box-pull-counter"],
    videos: [V("HL261oRyURE", "Cómo hacer paradas")]
  },
  {
    id: "box-esquiva", seccion: "boxeo", tipo: "tecnica", cat: "defensa",
    es: "Esquiva lateral", en: "Slip", nivel: "I", mma: "media",
    mmaNota: "Corta y sin bajar la cabeza por debajo de la cintura: ahí esperan rodillazos y front headlock.",
    fases: ["distancia"], solo: "si", material: ["cuerda"],
    objetivo: "Sacar la cabeza de la línea del golpe y quedar listo para contraatacar.",
    pasos: [
      "Gira un poco los hombros y flexiona la rodilla del lado hacia el que esquivas.",
      "La cabeza sale lo justo de la línea central.",
      "Vuelve a la guardia o contraataca desde ahí."
    ],
    detalles: ["En MMA, unos pocos centímetros bastan; en boxeo se esquiva más."],
    errores: ["Esquivar demasiado y desequilibrarte.", "Mirar al suelo."],
    drills: ["box-cuerda", "box-pelota"],
    combina: ["box-1-2"],
    videos: [V("3WJos-OAPQc", "Esquiva para kickboxing y MMA"), V("i17tNtv8N2I", "Esquivas para principiantes", { etiqueta: "Otra explicación" })]
  },
  {
    id: "box-pull-counter", seccion: "boxeo", tipo: "tecnica", cat: "contras",
    es: "Retroceso y contra", en: "Pull counter", nivel: "I", mma: "alta",
    mmaNota: "Encaja con una guardia alta de MMA: no hace falta bajar la cabeza.",
    fases: ["distancia"], solo: "parcial", material: ["ninguno"],
    objetivo: "Hacer que el golpe se quede corto y responder al instante.",
    pasos: [
      "Cuando llega el jab, lleva el peso a la pierna trasera y retrasa la cabeza lo justo.",
      "El golpe se queda corto.",
      "En cuanto lo recoge, vuelve con el peso delante y suelta el directo."
    ],
    detalles: ["Solo se mueve el peso; los pies casi no cambian de sitio."],
    errores: ["Retroceder con todo el cuerpo y quedarte lejos.", "Echarte atrás con la barbilla levantada."],
    drills: ["box-pelota", "box-sombra"],
    combina: ["box-directo"],
    videos: [V("g0UkYHewzNc", "Pull counter para MMA"), V("elvLNRqCycc", "El pull counter explicado", { etiqueta: "Boxeo" })]
  },

  // ---------------- COMBINACIONES ----------------
  {
    id: "box-1-2", seccion: "boxeo", tipo: "tecnica", cat: "combos", golpes: [1, 2],
    es: "1-2", en: "Jab-cross", nivel: "F", mma: "muy alta",
    mmaNota: "La base de todo; también prepara el cambio de nivel.",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "La combinación base: el jab abre el camino al directo.",
    pasos: [
      "Jab.",
      "Cuando el jab vuelve, sale el directo con el giro de cadera.",
      "Vuelve a la guardia.",
      "Sal de la línea con un paso o un pivote."
    ],
    detalles: ["El jab tapa la visión del rival justo cuando sale el directo."],
    errores: ["Telegrafiar el directo.", "Quedarse quieto después."],
    drills: ["box-sombra", "box-gomas", "box-sesion-16"],
    combina: ["box-1-2-3", "box-1-2-nivel"],
    videos: [V("vyTaKpylOcU", "Tony Jeffries")]
  },
  {
    id: "box-1-2-3", seccion: "boxeo", tipo: "tecnica", cat: "combos", golpes: [1, 2, 3],
    es: "1-2-3", en: "Jab-cross-hook", nivel: "F", mma: "alta",
    mmaNota: "Clásica; en MMA termina siempre saliendo en ángulo.",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "Añadir el gancho aprovechando el giro del directo.",
    pasos: ["Jab.", "Directo: el giro deja el peso cargado delante.", "Gancho delantero aprovechando ese peso.", "Sal en ángulo."],
    detalles: ["El gancho llega por fuera, justo donde el rival no mira tras dos rectos."],
    errores: ["Abrir el gancho.", "Acabar en el sitio."],
    drills: ["box-sombra", "box-sesion-16"],
    combina: ["box-pivote"],
    videos: [V("awgP60rGSlw", "1-2-3"), V("C7IGPNANJjI", "Jab, directo y gancho", { etiqueta: "Otra explicación" })]
  },
  {
    id: "box-cuerpo-cabeza", seccion: "boxeo", tipo: "tecnica", cat: "combos", golpes: [1, 1, 2],
    es: "Jab al cuerpo, jab, directo", en: "Body jab-jab-cross", nivel: "I", mma: "alta",
    mmaNota: "Arriba y abajo: el primero imita un derribo.",
    fases: ["distancia", "entrada"], solo: "si", material: ["ninguno"],
    objetivo: "Bajar la guardia del rival con el jab al cuerpo y golpear arriba.",
    pasos: ["Jab al cuerpo bajando de nivel con las rodillas.", "Sube y jab a la cabeza.", "Directo.", "Sal de la línea."],
    detalles: ["Cambia el nivel con las piernas; la espalda sigue recta."],
    errores: ["Inclinarse hacia delante en el primer golpe."],
    drills: ["box-sombra"],
    combina: ["box-jab-cuerpo"],
    videos: [V("HXJz_gEPHDw", "Jab al cuerpo y combinación")]
  },
  {
    id: "box-1-2-nivel", seccion: "boxeo", tipo: "tecnica", cat: "mma", golpes: [1, 2],
    es: "1-2 y cambio de nivel", en: "Jab-cross to level change", nivel: "I", mma: "muy alta",
    mmaNota: "El puente entre boxeo y lucha.",
    fases: ["distancia", "entrada"], solo: "si", material: ["ninguno"],
    objetivo: "Usar los golpes para que el rival suba la guardia y entrar a sus piernas.",
    pasos: [
      "1-2 para que suba las manos.",
      "El directo te deja cerca y con el peso delante.",
      "Baja de nivel con las piernas y entra a doble pierna."
    ],
    detalles: ["Los golpes se lanzan de verdad: si no amenazan, no suben la guardia."],
    errores: ["Bajar la cabeza en vez de la cadera.", "Entrar desde demasiado lejos."],
    drills: ["lu-drill-sombra", "lu-drill-penetraciones", "box-sombra"],
    combina: ["lu-doble", "lu-nivel"],
    videos: [V("rCqouAepyHs", "Ramón López", { idioma: "es", etiqueta: "En español" })]
  },

  // ---------------- DRILLS ----------------
  {
    id: "box-sombra", seccion: "boxeo", tipo: "drill",
    es: "Sombra temática", en: "Themed shadowboxing", nivel: "F", mma: "alta",
    fases: ["distancia"], solo: "si", material: ["ninguno", "espejo"],
    objetivo: "Trabajar la técnica por bloques, con un tema distinto en cada ronda.",
    pasos: [
      "Elige un tema por ronda: solo 1-2, solo defensa, ángulo tras cada combinación, arriba-abajo, o cambio de nivel tras el 1-2.",
      "Muévete siempre e imagina un rival concreto.",
      "Últimos 30 segundos de cada ronda, a ritmo alto."
    ],
    detalles: ["Lento y limpio vale más que rápido y sucio."],
    errores: ["Golpear quieto en el sitio.", "Bajar las manos al cansarte."],
    dosis: "3–6 rondas × 3 min · 1 min de descanso",
    criterio: "Grabado de lado: no cruzas los pies y cada golpe vuelve a la guardia.",
    combina: ["box-1-2", "box-pivote"],
    videos: [V("J4j3AOVWuHE", "Tony Jeffries")]
  },
  {
    id: "box-4-drills", seccion: "boxeo", tipo: "drill",
    es: "4 drills sin material", en: "4 boxing drills, no equipment", nivel: "F", mma: "alta",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "Una sesión guiada de fundamentos para hacer en casa.",
    pasos: ["Sigue el vídeo parte por parte con los botones de abajo."],
    detalles: [], errores: [],
    dosis: "1 sesión siguiendo el vídeo",
    videos: [V("BpiM3Sw4rFU", "Tony Jeffries", { segmentos: [
      { t: "Drill 1", inicio: 26, fin: 79 }, { t: "Drill 2", inicio: 79, fin: 149 },
      { t: "Drill 3", inicio: 149, fin: 288 }, { t: "Drill 4", inicio: 288, fin: null }
    ] })]
  },
  {
    id: "box-patrones-pies", seccion: "boxeo", tipo: "drill",
    es: "Patrones de pies con cinta", en: "Footwork patterns", nivel: "F", mma: "alta",
    fases: ["distancia"], solo: "si", material: ["cinta"],
    objetivo: "Automatizar el paso-arrastre y el pivote.",
    pasos: [
      "Pega en el suelo una cruz o un cuadrado de cinta.",
      "Recorre las líneas: adelante-atrás, laterales, pivote y en «L».",
      "Mantén la guardia y la distancia entre los pies en todo momento."
    ],
    detalles: ["Mira al frente, no a los pies."], errores: ["Juntar los pies al cambiar de dirección."],
    dosis: "3 × 2 min",
    criterio: "Una ronda completa sin cruzar los pies.",
    combina: ["box-paso-arrastre", "box-pivote"],
    videos: [V("M2EN9AH7cDc", "Boxstep y pivote")]
  },
  {
    id: "box-cuerda", seccion: "boxeo", tipo: "drill",
    es: "Cuerda de esquivas", en: "Slip rope", nivel: "I", mma: "media",
    fases: ["distancia"], solo: "si", material: ["cuerda"],
    objetivo: "Esquivar con ritmo sin perder la guardia.",
    pasos: [
      "Ata una cuerda tensa de pared a pared, a la altura del hombro.",
      "Avanza y retrocede pasando por debajo en forma de «U».",
      "Lanza un 1-2 cada vez que sales por el otro lado."
    ],
    detalles: ["Para MMA, pasa por debajo lo justo: sin bajar la cabeza a la cintura."],
    errores: ["Doblar la espalda en vez de las rodillas."],
    dosis: "3 × 3 min",
    combina: ["box-esquiva"],
    videos: [V("jA9mE8qNXrI", "Slip line drill"), V("TRTKAX48UpI", "Drills de esquiva en casa", { etiqueta: "En casa" })]
  },
  {
    id: "box-pelota", seccion: "boxeo", tipo: "drill",
    es: "Pelota de tenis", en: "Tennis ball drills", nivel: "I", mma: "media",
    fases: ["distancia"], solo: "si", material: ["pelota", "cuerda"],
    objetivo: "Vista, reflejos y timing.",
    pasos: [
      "Cuélgala de una cuerda a la altura de la cabeza: golpéala y esquiva la vuelta.",
      "O lánzala contra la pared y atrápala en guardia."
    ],
    detalles: [], errores: ["Seguirla con la cabeza en vez de con los ojos."],
    dosis: "3 × 2 min",
    criterio: "2 minutos sin que la pelota te toque a la vuelta.",
    videos: [V("EqU7R2HbIrI", "4 drills con pelota de tenis"), V("rJ5hvJ8-TOs", "Pelota con goma en la cabeza", { etiqueta: "Pelota en la cabeza" })]
  },
  {
    id: "box-comba", seccion: "boxeo", tipo: "drill",
    es: "Comba de boxeador", en: "Boxing jump rope", nivel: "F", mma: "media",
    fases: ["distancia"], solo: "si", material: ["comba"],
    objetivo: "Ritmo, pies ligeros y resistencia.",
    pasos: ["Básico a pies juntos.", "Paso alterno de boxeador.", "Cambios de ritmo.", "Dobles cuando lo domines."],
    detalles: [], errores: ["Saltar alto: apenas despega los pies."],
    dosis: "3 × 3 min",
    videos: [V("9KkYFM21ke0", "Comba para boxeo, niveles 1–5")]
  },
  {
    id: "box-espejo", seccion: "boxeo", tipo: "drill",
    es: "Guardia frente al espejo", en: "Mirror work", nivel: "F", mma: "alta",
    fases: ["distancia"], solo: "si", material: ["espejo"],
    objetivo: "Corregirte solo.",
    pasos: [
      "Golpes lentos mirando la barbilla, la mano que no golpea y el retorno a la guardia.",
      "Después repite sin espejo, intentando sentir lo mismo."
    ],
    detalles: [], errores: [],
    dosis: "2 × 3 min",
    combina: ["box-guardia"],
    videos: []
  },
  {
    id: "box-gomas", seccion: "boxeo", tipo: "drill",
    es: "Golpes con goma", en: "Resistance band punches", nivel: "I", mma: "media",
    fases: ["distancia"], solo: "si", material: ["goma"],
    objetivo: "Velocidad y resistencia en los golpes.",
    pasos: [
      "Ancla la goma detrás de ti a la altura del pecho y agarra un extremo con cada mano.",
      "1-2 a velocidad controlada sin perder la técnica."
    ],
    detalles: [], errores: ["Perder la guardia por ir rápido."],
    dosis: "3 × 1 min",
    videos: []
  },
  {
    id: "box-sesion-16", seccion: "boxeo", tipo: "drill",
    es: "Sesión de boxeo en casa (16 min)", en: "16-min home boxing workout", nivel: "F", mma: "media",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "Una sesión completa guiada cuando no tienes tiempo de preparar nada.",
    pasos: ["Ponla y síguela."], detalles: [], errores: [],
    dosis: "16 min",
    videos: [V("aHScq60oTlM", "Tony Jeffries")]
  }
]);
})();
