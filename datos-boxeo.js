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
    id: "box-guardia-boxeo", seccion: "boxeo", tipo: "tecnica", cat: "guardia",
    es: "Guardia de boxeo", en: "Orthodox boxing stance", nivel: "F", mma: "media",
    mmaNota: "Es la guardia de referencia del curso de boxeo. En MMA se usa la Guardia MMA, más ancha y con las manos más abiertas.",
    fases: ["distancia"], solo: "si", material: ["ninguno", "espejo"],
    objetivo: "La guardia de boxeo para diestro: equilibrada, cerrada y lista para golpear y moverte.",
    pasos: [
      "Pie izquierdo delante y pie derecho detrás, un poco más separados que la anchura de los hombros.",
      "Ponte de lado lo justo: el pie izquierdo y el hombro izquierdo miran al rival.",
      "Flexiona un poco las rodillas, reparte el peso y levanta un poco el talón derecho.",
      "Mano derecha pegada a la mejilla, mano izquierda a la altura de la cara y algo adelantada, codos cerca de las costillas.",
      "Baja la barbilla y mira por encima de los guantes."
    ],
    detalles: [
      "Los pies no van en la misma línea: el derecho queda un poco a la derecha de la línea del talón izquierdo. Así no te desequilibran de lado.",
      "Relaja los hombros. La guardia se mantiene sin apretar."
    ],
    errores: [
      "Quedarte de frente al rival, con los pies en paralelo: le enseñas todo el cuerpo.",
      "Estar demasiado alto, con la barbilla levantada o los codos abiertos."
    ],
    drills: ["box-espejo", "box-patrones-pies", "box-sombra"],
    combina: ["box-paso-arrastre", "box-jab"],
    videos: [
      V("g3Wl2XJMKzc", "Tony Jeffries", { etiqueta: "Cómo ponerte", canal: "Sanabul", fuente: "jeffries" }),
      V("rU2MWIoVVos", "Tony Jeffries", { etiqueta: "5 errores", fuente: "jeffries" }),
      V("tKBoeFXrUw0", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-paso-arrastre", seccion: "boxeo", tipo: "tecnica", cat: "pies",
    es: "Paso-arrastre", en: "Step-drag", nivel: "F", mma: "alta",
    mmaNota: "Mantiene la base para defender el derribo en cualquier momento.",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "Moverte sin perder la guardia ni la distancia entre los pies.",
    pasos: [
      "Para avanzar, empuja con el pie derecho y adelanta el izquierdo un paso corto.",
      "El pie derecho lo sigue la misma distancia.",
      "Para retroceder, al revés: empuja con el izquierdo y mueve primero el derecho.",
      "Para ir a tu izquierda, mueve primero el pie izquierdo; para ir a tu derecha, primero el derecho."
    ],
    detalles: ["Pasos cortos; la distancia entre los pies no cambia.", "El golpe sigue al pie: primero el paso, luego la mano."],
    errores: ["Cruzar o juntar los pies.", "Saltar en vez de deslizar."],
    drills: ["box-patrones-pies", "box-comba"],
    combina: ["box-guardia-boxeo", "box-pivote"],
    videos: [V("v0y86288Wt0", "Tony Jeffries", { fuente: "jeffries" })]
  },
  {
    id: "box-pivote", seccion: "boxeo", tipo: "tecnica", cat: "pies",
    es: "Pivote", en: "Pivot", nivel: "F", mma: "alta",
    mmaNota: "La forma de salir de la jaula y de crear ángulo tras una combinación.",
    fases: ["distancia", "jaula"], solo: "si", material: ["ninguno"],
    objetivo: "Girar fuera de la línea del rival sin dar pasos largos.",
    pasos: [
      "Apoya el peso en la punta del pie izquierdo.",
      "Gira hacia tu izquierda sobre esa punta: el pie derecho barre un arco por detrás.",
      "Para con un cuarto de vuelta, más o menos.",
      "Termina en guardia, mirando al rival y fuera de su línea."
    ],
    detalles: ["Pivota justo después de golpear: el rival te busca donde estabas.", "Un cuarto de vuelta basta; si giras más, te quedas de espaldas a tu propio golpe."],
    errores: ["Girar sobre el talón.", "Abrir las manos al girar."],
    drills: ["box-patrones-pies", "box-sombra"],
    combina: ["box-angulos", "box-1-2-3"],
    videos: [
      V("72M0E5LM92M", "Tony Jeffries", { etiqueta: "Paso a paso", fuente: "jeffries" }),
      V("hNclexRmDsY", "Tony Jeffries", { etiqueta: "Cuándo pivotar", fuente: "jeffries" }),
      V("dEzUyW5_-RI", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-angulos", seccion: "boxeo", tipo: "tecnica", cat: "pies",
    es: "Salir en ángulo tras la combinación", en: "Angling out", nivel: "I", mma: "muy alta",
    mmaNota: "Salir en ángulo evita la respuesta del rival y te aleja de la jaula.",
    fases: ["distancia", "jaula"], solo: "si", material: ["ninguno"],
    objetivo: "No quedarte delante del rival después de golpear: acabar donde él tenga que girarse para encontrarte.",
    pasos: [
      "Termina la combinación con las dos manos en la cara.",
      "Da un paso corto en diagonal hacia delante y a tu izquierda con el pie izquierdo; el derecho lo sigue.",
      "O pivota sobre la punta del pie izquierdo hacia tu izquierda.",
      "Desde el nuevo ángulo, lanza otro golpe o vuelve a la distancia larga."
    ],
    detalles: ["El ángulo vale si el rival tiene que girarse para volver a golpearte.", "Sal hacia tu izquierda: te alejas de su mano derecha."],
    errores: ["Salir hacia atrás en línea recta: el rival te sigue.", "Cruzar los pies al salir."],
    drills: ["box-sombra", "box-patrones-pies"],
    combina: ["box-pivote", "box-1-2-3"],
    videos: [V("oplciEKdU3E", "Tony Jeffries", { etiqueta: "Cambiar el ángulo en la corta", fuente: "jeffries" })]
  },
  {
    id: "box-distancias", seccion: "boxeo", tipo: "tecnica", cat: "pies",
    es: "Las tres distancias", en: "Boxing ranges", nivel: "F", mma: "alta",
    mmaNota: "En MMA hay una distancia más, la de patada, y la corta acaba en clinch.",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "Saber en qué distancia estás y qué golpes llegan desde cada una.",
    pasos: [
      "Larga: llegas con el jab dando un paso. Es la distancia para medir y para salir.",
      "Media: llegas con rectos sin dar paso. Aquí entran el 1-2 y el 1-2-3.",
      "Corta: llegas con ganchos y uppercuts. Entra solo para golpear y sal.",
      "Antes de golpear, decide en qué distancia estás."
    ],
    detalles: ["Fuera de distancia, ni te llegan ni llegas: es el sitio para descansar.", "La distancia cambia con cada paso, tuyo y del rival."],
    errores: ["Quedarte en la media sin golpear: es donde más te pegan.", "Lanzar ganchos desde la larga."],
    drills: ["box-drill-distancia", "box-sombra"],
    combina: ["box-medir-jab", "box-paso-arrastre"],
    videos: []
  },
  {
    id: "box-medir-jab", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [1],
    es: "Medir la distancia con el jab", en: "Range-finding jab", nivel: "F", mma: "muy alta",
    mmaNota: "El mismo jab rápido mide la distancia para entrar a derribar.",
    fases: ["distancia", "entrada"], solo: "si", material: ["ninguno"],
    objetivo: "Usar un jab rápido y suave para encontrar la distancia antes de soltar los golpes fuertes.",
    pasos: [
      "Lanza un jab rápido y relajado, sin cargar el peso.",
      "Fíjate en dónde llega: si se queda corto, da medio paso; si llega con el brazo doblado, estás cerca.",
      "Con la distancia buena, el siguiente golpe ya va en serio: jab firme o 1-2.",
      "Vuelve a la guardia y sal, o vuelve a medir."
    ],
    detalles: ["Jeffries separa el jab rápido, para medir, del jab con potencia: aquí trabajas el rápido.", "Medir no es esperar: cada jab rápido también molesta."],
    errores: ["Dejar el brazo estirado para medir.", "Dar un paso largo detrás del jab y meterte en la corta sin querer."],
    drills: ["box-drill-distancia", "box-espejo"],
    combina: ["box-jab", "box-distancias"],
    videos: [V("DrGpGfvWN6U", "Tony Jeffries", { etiqueta: "Jab rápido y jab con potencia", fuente: "jeffries" })]
  },

  // ---------------- GOLPES ----------------
  {
    id: "box-jab", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [1],
    es: "Jab", en: "Jab", nivel: "F", mma: "muy alta",
    mmaNota: "Mide la distancia y esconde el cambio de nivel.",
    fases: ["distancia", "entrada"], solo: "si", material: ["ninguno"],
    objetivo: "El golpe más importante: mide, molesta y prepara todo lo demás.",
    pasos: [
      "Desde la guardia, extiende la mano izquierda recta y gira el puño al final, con la palma hacia el suelo.",
      "Sube el hombro izquierdo para tapar la barbilla.",
      "La mano derecha se queda pegada a la mejilla.",
      "Recoge rápido por el mismo camino, sin bajar la mano."
    ],
    detalles: ["Acompáñalo de un pequeño paso adelante con el pie izquierdo para llegar más lejos.", "Doblarlo (1-1) sirve para cerrar distancia."],
    errores: ["Bajar la mano derecha mientras golpeas.", "Recoger la mano izquierda por abajo."],
    drills: ["box-espejo", "box-sombra", "box-4-drills"],
    combina: ["box-1-2", "box-1-1-2", "box-cuerpo-cabeza"],
    videos: [
      V("ArQ50PXMCj4", "Tony Jeffries", { fuente: "jeffries" }),
      V("O2ACs75TLRs", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-directo", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [2],
    es: "Directo", en: "Cross", nivel: "F", mma: "alta",
    mmaNota: "Potente, pero si te inclinas quedas a tiro de un derribo.",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "El golpe recto de la mano derecha, el más potente de los rectos.",
    pasos: [
      "Gira la cadera y pivota sobre la punta del pie derecho, como si apagaras un cigarro.",
      "Extiende la mano derecha recta hacia la cara y gira el puño al final.",
      "La mano izquierda vuelve a la cara para protegerla.",
      "Recoge por el mismo camino hasta la guardia."
    ],
    detalles: ["La potencia sale del giro de cadera, no del brazo.", "Al final del golpe, el hombro derecho llega hasta la barbilla."],
    errores: ["Inclinarte hacia delante y pasarte del pie izquierdo.", "Levantar la barbilla o bajar la mano izquierda."],
    drills: ["box-espejo", "box-gomas", "box-4-drills"],
    combina: ["box-1-2"],
    videos: [V("sK-6Ujp3KYY", "Tony Jeffries", { fuente: "jeffries" })]
  },
  {
    id: "box-gancho", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [3],
    es: "Gancho izquierdo", en: "Lead hook", nivel: "F", mma: "alta",
    mmaNota: "Corto y muy eficaz contra el que entra.",
    fases: ["distancia", "clinch"], solo: "si", material: ["ninguno"],
    objetivo: "Golpe curvo de la mano izquierda a corta y media distancia.",
    pasos: [
      "Gira la cadera y la punta del pie izquierdo hacia dentro.",
      "Dobla el brazo izquierdo a unos 90°, con el codo a la altura del puño.",
      "Deja que el golpe salga con el giro del cuerpo, no con el brazo.",
      "Mantén la mano derecha en la mejilla y vuelve a la guardia."
    ],
    detalles: ["Después de un directo, el peso ya está en la pierna izquierda: el gancho sale solo.", "Puedes golpear con el pulgar arriba o con la palma hacia abajo; Jeffries explica las dos en el vídeo."],
    errores: ["Abrir el brazo antes de golpear: se ve venir.", "No girar el pie izquierdo."],
    drills: ["box-espejo", "box-sombra"],
    combina: ["box-1-2-3", "box-gancho-derecho"],
    videos: [
      V("0gtMKaCJ5I8", "Tony Jeffries", { fuente: "jeffries" }),
      V("UFVDcNDnpoU", "Tony Jeffries", { etiqueta: "Lo básico", canal: "Sanabul", fuente: "jeffries" }),
      V("T_I_s8ZptC8", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-gancho-derecho", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [4],
    es: "Gancho derecho", en: "Rear hook", nivel: "I", mma: "alta",
    mmaNota: "Muy potente a corta distancia, también contra la jaula.",
    fases: ["distancia", "clinch"], solo: "si", material: ["ninguno"],
    objetivo: "Golpe curvo de la mano derecha: más potente que el izquierdo, pero más lento en llegar.",
    pasos: [
      "Lleva un poco el peso a la pierna izquierda.",
      "Gira la cadera hacia la izquierda y pivota sobre la punta del pie derecho.",
      "El brazo derecho, doblado a unos 90°, viaja en horizontal con el giro del cuerpo.",
      "Protege la cara con la mano izquierda y vuelve a la guardia."
    ],
    detalles: ["Funciona a corta distancia, más cerca que el directo.", "Suele salir después de un gancho izquierdo o de un uppercut izquierdo."],
    errores: ["Echar el codo hacia atrás para cargarlo: se ve venir.", "Lanzarlo desde lejos y quedarte cruzado."],
    drills: ["box-sombra", "box-espejo"],
    combina: ["box-gancho", "box-uppercut"],
    videos: [V("MJmHnyBjC6s", "Tony Jeffries", { fuente: "jeffries" })]
  },
  {
    id: "box-uppercut", seccion: "boxeo", tipo: "tecnica", cat: "golpes", golpes: [5, 6],
    es: "Uppercut", en: "Uppercut", nivel: "I", mma: "alta",
    mmaNota: "Castiga al que baja la cabeza para derribar o en el clinch.",
    fases: ["distancia", "clinch", "defensa"], solo: "si", material: ["ninguno"],
    objetivo: "Golpe de abajo arriba a corta distancia: el 5 con la izquierda y el 6 con la derecha.",
    pasos: [
      "Dobla un poco las rodillas y baja el hombro del lado que golpea.",
      "Gira la cadera y empuja con las piernas.",
      "Sube el puño recto hacia arriba desde la altura de tu cara, con la palma hacia ti.",
      "Vuelve a la guardia sin mover de la cara la otra mano."
    ],
    detalles: ["El 5 sale girando la cadera a la derecha; el 6, girándola a la izquierda.", "Corto: no bajes la mano para cargarlo."],
    errores: ["Bajar la mano antes de lanzarlo.", "Lanzarlo desde lejos."],
    drills: ["box-espejo", "box-sombra"],
    combina: ["box-1-2-3", "box-gancho-derecho"],
    videos: [
      V("eBxn21FtqPg", "Tony Jeffries", { fuente: "jeffries" }),
      V("zl2bZwxM_ws", "Tony Jeffries", { etiqueta: "Izquierdo (5)", fuente: "jeffries" }),
      V("iInkodqd5pE", "Tony Jeffries", { etiqueta: "Derecho (6)", fuente: "jeffries" }),
      V("QJxtfUr2zQM", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
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
      "Espera su jab con la mano derecha cerca de la cara.",
      "Cuando llegue, desvíalo con la palma derecha hacia abajo o hacia tu izquierda.",
      "Que el gesto sea corto: la mano vuelve enseguida a la mejilla.",
      "Contraataca mientras su brazo está fuera."
    ],
    detalles: ["Espera el golpe cerca de tu cara; no salgas a buscarlo.", "Solo con la palma y la muñeca: el codo casi no se mueve."],
    errores: ["Estirar el brazo para buscar el golpe.", "Desviar y dejar la cara abierta."],
    drills: ["box-sombra-defensa", "box-pelota", "box-espejo"],
    combina: ["box-catch-pitch", "box-pull-counter"],
    videos: [
      V("ReD58z0jFJM", "Tony Jeffries", { etiqueta: "Desde la parada", inicio: 59, fuente: "jeffries" }),
      V("8kfBOQb3SnE", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-bloqueo", seccion: "boxeo", tipo: "tecnica", cat: "defensa",
    es: "Bloqueo y cubrirse", en: "Block and cover", nivel: "F", mma: "media",
    mmaNota: "Con guantes de 4 oz el bloqueo cubre poco: en MMA, mejor parar, esquivar o salir.",
    fases: ["distancia", "clinch"], solo: "si", material: ["ninguno"],
    objetivo: "Parar con los guantes y los codos los golpes que no da tiempo a esquivar.",
    pasos: [
      "Contra un gancho izquierdo, sube el guante derecho pegado a la sien y el codo pegado al cuerpo.",
      "Contra un gancho derecho, haz lo mismo con el guante izquierdo.",
      "Contra un golpe al cuerpo, baja el codo de ese lado hasta las costillas sin bajar el guante.",
      "Mira entre los guantes y responde en cuanto acabe su golpe."
    ],
    detalles: ["El guante se queda pegado a la cabeza: si lo separas, el golpe lo empuja contra ti.", "Bloquear sirve para salir del apuro, no para quedarte: después, muévete o contraataca."],
    errores: ["Cerrar los ojos o esconder la cabeza detrás de los guantes.", "Quedarte quieto bloqueando golpe tras golpe."],
    drills: ["box-sombra-defensa", "box-espejo"],
    combina: ["box-rodar", "box-parada"],
    videos: [V("a07NnmSmJqU", "Tony Jeffries", { etiqueta: "Bloquear, rodar o echarse atrás", fuente: "jeffries" })]
  },
  {
    id: "box-esquiva", seccion: "boxeo", tipo: "tecnica", cat: "defensa",
    es: "Esquiva lateral", en: "Slip", nivel: "I", mma: "media",
    mmaNota: "Corta y sin bajar la cabeza por debajo de la cintura: ahí esperan rodillazos y front headlock.",
    fases: ["distancia"], solo: "si", material: ["cuerda"],
    objetivo: "Sacar la cabeza de la línea del golpe recto y quedar listo para contraatacar.",
    pasos: [
      "Gira un poco los hombros y flexiona la rodilla del lado hacia el que esquivas.",
      "Contra su jab, sal hacia tu derecha; contra su directo, hacia tu izquierda.",
      "Saca la cabeza lo justo de la línea central, con las manos en la cara.",
      "Vuelve a la guardia o contraataca desde ahí."
    ],
    detalles: ["Unos centímetros bastan: la esquiva pequeña te deja golpear.", "Sale de las rodillas y la cintura, no de doblar la espalda."],
    errores: ["Esquivar demasiado y desequilibrarte.", "Mirar al suelo."],
    drills: ["box-cuerda", "box-pelota", "box-sombra-defensa"],
    combina: ["box-slip-cross", "box-1-2"],
    videos: [
      V("DOWc7NMSuEQ", "Tony Jeffries", { fuente: "jeffries" }),
      V("MeyThGDkIMY", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-rodar", seccion: "boxeo", tipo: "tecnica", cat: "defensa",
    es: "Rodar", en: "Roll", nivel: "I", mma: "media",
    mmaNota: "Rodar bajo un gancho funciona, pero en MMA no bajes la cabeza a la cintura: ahí llegan los rodillazos.",
    fases: ["distancia", "clinch"], solo: "si", material: ["cuerda"],
    objetivo: "Pasar por debajo de un gancho y salir por el otro lado listo para responder.",
    pasos: [
      "Flexiona las rodillas cuando venga un gancho a la cabeza.",
      "Pasa la cabeza por debajo del golpe dibujando una «U», de un lado al otro.",
      "Sube por el otro lado con las manos en la cara.",
      "Desde ahí, contraataca con el gancho del lado por el que subes."
    ],
    detalles: ["Baja con las piernas, no doblando la espalda: los ojos siguen al rival.", "Rueda lo justo para que el golpe pase por encima."],
    errores: ["Agacharte mirando al suelo.", "Bajar las manos al rodar."],
    drills: ["box-cuerda", "box-sombra-defensa"],
    combina: ["box-bloqueo", "box-gancho"],
    videos: [
      V("XIja1S9SXI4", "Tony Jeffries", { fuente: "jeffries" }),
      V("vVg0BSTy9Ew", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-pull-counter", seccion: "boxeo", tipo: "tecnica", cat: "contras",
    es: "Retroceso y contra", en: "Pull counter", nivel: "I", mma: "alta",
    mmaNota: "Encaja con una guardia alta de MMA: no hace falta bajar la cabeza.",
    fases: ["distancia"], solo: "parcial", material: ["ninguno"],
    objetivo: "Hacer que el golpe se quede corto y responder al instante.",
    pasos: [
      "Cuando llegue su jab, lleva el peso a la pierna derecha y retrasa la cabeza lo justo.",
      "Mantén las dos manos en la cara: su golpe se queda corto.",
      "En cuanto recoge el jab, devuelve el peso a la pierna izquierda.",
      "Suelta el directo con ese mismo impulso."
    ],
    detalles: ["Solo se mueve el peso: el pie izquierdo no se va atrás.", "La barbilla sigue baja aunque te eches atrás."],
    errores: ["Retroceder con todo el cuerpo y quedarte lejos.", "Echarte atrás con la barbilla levantada."],
    drills: ["box-sombra-defensa", "box-pelota"],
    combina: ["box-directo", "box-catch-pitch"],
    videos: [
      V("7Pli4dauWSE", "Tony Jeffries", { etiqueta: "Echarse atrás y contragolpear", fuente: "jeffries" }),
      V("WWO3YTEWLHM", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-slip-cross", seccion: "boxeo", tipo: "tecnica", cat: "contras", golpes: [2],
    es: "Esquiva y directo", en: "Slip and cross", nivel: "I", mma: "muy alta",
    mmaNota: "La contra más fiable contra el jab, también en MMA.",
    fases: ["distancia"], solo: "parcial", material: ["ninguno"],
    objetivo: "Esquivar su jab y responder con el directo mientras su brazo sigue estirado.",
    pasos: [
      "Esquiva su jab con un giro corto de hombros y rodillas, como en la esquiva lateral.",
      "El giro te deja con el peso cargado: no vuelvas al centro antes de golpear.",
      "Suelta el directo con la derecha mientras su brazo sigue estirado.",
      "Vuelve a la guardia y sal en ángulo."
    ],
    detalles: ["Esquiva y golpe casi a la vez: si esperas, su brazo ya ha vuelto.", "La esquiva es pequeña para que el directo llegue."],
    errores: ["Esquivar tanto que el directo no llega.", "Bajar la mano izquierda al esquivar."],
    drills: ["box-sombra-defensa", "box-cuerda"],
    combina: ["box-esquiva", "box-directo"],
    videos: [V("DOWc7NMSuEQ", "Tony Jeffries", { etiqueta: "Esquivar para contragolpear", fuente: "jeffries" })]
  },
  {
    id: "box-catch-pitch", seccion: "boxeo", tipo: "tecnica", cat: "contras", golpes: [1],
    es: "Parar y devolver", en: "Catch and pitch", nivel: "F", mma: "alta",
    mmaNota: "Sencilla y segura: no obliga a mover la cabeza.",
    fases: ["distancia"], solo: "parcial", material: ["ninguno"],
    objetivo: "Recibir su golpe en el guante y devolverle uno al instante.",
    pasos: [
      "Recibe su jab en la palma de la mano derecha, cerca de tu cara.",
      "Sin bajar esa mano, lanza tu jab al momento.",
      "Si llega su directo, recógelo con el guante izquierdo y devuelve tu directo.",
      "Vuelve a la guardia."
    ],
    detalles: ["La mano que para se queda en la cara mientras devuelves con la otra.", "Devuelve rápido: el ritmo de recibir y devolver es lo que confunde."],
    errores: ["Salir a buscar el golpe con la palma.", "Parar y quedarte quieto sin devolver."],
    drills: ["box-sombra-defensa", "box-pelota"],
    combina: ["box-parada", "box-jab"],
    videos: [
      V("yfpXTRFnYX0", "Tony Jeffries", { etiqueta: "10 formas de contragolpear el jab", fuente: "jeffries" }),
      V("WWO3YTEWLHM", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-fintas", seccion: "boxeo", tipo: "tecnica", cat: "contras",
    es: "Fintas", en: "Feints", nivel: "I", mma: "muy alta",
    mmaNota: "En MMA la finta de golpe abre el derribo y la de derribo abre el golpe.",
    fases: ["distancia", "entrada"], solo: "si", material: ["ninguno"],
    objetivo: "Hacer que el rival reaccione a un golpe que no lanzas, y golpear donde deja el hueco.",
    pasos: [
      "Amaga el jab: un tirón corto del hombro izquierdo sin estirar el brazo.",
      "Amaga con los pies: un paso corto y rápido hacia delante, como si entraras, y para.",
      "Imagina la reacción: si sube las manos, golpea abajo; si se echa atrás, entra.",
      "Después de cada finta, golpea de verdad o sal."
    ],
    detalles: ["La finta tiene que parecer el golpe de verdad: el mismo hombro y la misma cara.", "Una finta y un golpe: no encadenes tres amagos seguidos."],
    errores: ["Fintar con todo el cuerpo y quedarte desequilibrado.", "Fintar quieto, sin moverte después."],
    drills: ["box-sombra", "box-espejo"],
    combina: ["box-jab", "box-angulos"],
    videos: [
      V("WHxOy3QXbaM", "Tony Jeffries", { etiqueta: "Fintas con los pies", fuente: "jeffries" }),
      V("dlGjS23f89Q", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },

  // ---------------- COMBINACIONES ----------------
  {
    id: "box-1-2", seccion: "boxeo", tipo: "tecnica", cat: "combos", golpes: [1, 2],
    es: "1-2", en: "Jab-cross", nivel: "F", mma: "muy alta",
    mmaNota: "La base de todo; también prepara el cambio de nivel.",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "La combinación base: el jab abre el camino al directo.",
    pasos: [
      "Lanza el jab con la mano izquierda.",
      "Mientras el jab vuelve, saca el directo con la derecha y el giro de cadera.",
      "Vuelve a la guardia con las dos manos.",
      "Sal de la línea con un paso o un pivote."
    ],
    detalles: ["El jab tapa la visión del rival justo cuando sale el directo.", "Sin pausa entre los dos golpes: suenan como uno."],
    errores: ["Telegrafiar el directo echando el hombro derecho atrás.", "Quedarte quieto después."],
    drills: ["box-sombra", "box-gomas", "box-sesion-16"],
    combina: ["box-1-1-2", "box-1-2-3", "box-1-2-nivel"],
    videos: [
      V("vyTaKpylOcU", "Tony Jeffries", { fuente: "jeffries" }),
      V("eYwsZhfjb4s", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-1-1-2", seccion: "boxeo", tipo: "tecnica", cat: "combos", golpes: [1, 1, 2],
    es: "1-1-2", en: "Double jab-cross", nivel: "F", mma: "alta",
    mmaNota: "El jab doble cierra distancia sin cruzar los pies.",
    fases: ["distancia", "entrada"], solo: "si", material: ["ninguno"],
    objetivo: "Cerrar distancia con un jab doble y rematar con el directo.",
    pasos: [
      "Lanza un primer jab corto con un pequeño paso adelante del pie izquierdo.",
      "Lanza el segundo jab, más largo, sin recoger del todo la mano entre los dos.",
      "Saca el directo con la derecha mientras el segundo jab vuelve.",
      "Vuelve a la guardia y sal de la línea."
    ],
    detalles: ["El primer jab mide y tapa la visión; el segundo es el que llega.", "Los dos jabs salen sin mover la mano derecha de la cara."],
    errores: ["Bajar la mano izquierda entre los dos jabs.", "Dar un paso tan largo que el directo llega desequilibrado."],
    drills: ["box-sombra", "box-espejo"],
    combina: ["box-1-2", "box-jab"],
    videos: [V("UjHH3mgQTVY", "Tony Jeffries", { canal: "Dynamic Striking", fuente: "jeffries" })]
  },
  {
    id: "box-1-2-3", seccion: "boxeo", tipo: "tecnica", cat: "combos", golpes: [1, 2, 3],
    es: "1-2-3", en: "Jab-cross-hook", nivel: "F", mma: "alta",
    mmaNota: "Clásica; en MMA termina siempre saliendo en ángulo.",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "Añadir el gancho izquierdo aprovechando el giro del directo.",
    pasos: [
      "Lanza el jab con la izquierda.",
      "Saca el directo con la derecha: el giro deja el peso en la pierna izquierda.",
      "Suelta el gancho izquierdo aprovechando ese peso.",
      "Sal en ángulo."
    ],
    detalles: ["El gancho llega por fuera, justo donde el rival no mira tras dos rectos.", "Los tres golpes van seguidos: el gancho empieza cuando el directo vuelve."],
    errores: ["Abrir el gancho.", "Acabar en el sitio."],
    drills: ["box-sombra", "box-sesion-16"],
    combina: ["box-pivote", "box-gancho"],
    videos: [V("awgP60rGSlw", "Muay Thai Madness"), V("C7IGPNANJjI", "Final Round Training", { etiqueta: "Otra explicación" })]
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
      "Elige un tema por ronda: solo pies, solo rectos, solo curvos, salir en ángulo tras cada combinación o arriba-abajo.",
      "Muévete siempre e imagina un rival concreto.",
      "Empieza lento y sube a velocidad media; los últimos 30 segundos, a ritmo alto."
    ],
    detalles: ["Lento y limpio vale más que rápido y sucio.", "Un solo tema por ronda: si lo mezclas todo, no se fija nada."],
    errores: ["Golpear quieto en el sitio.", "Bajar las manos al cansarte."],
    dosis: "3–6 rondas × 3 min · 1 min de descanso",
    criterio: "Grabado de lado: no cruzas los pies y cada golpe vuelve a la guardia.",
    combina: ["box-1-2", "box-pivote"],
    videos: [V("J4j3AOVWuHE", "Tony Jeffries", { fuente: "jeffries" })]
  },
  {
    id: "box-4-drills", seccion: "boxeo", tipo: "drill",
    es: "4 drills sin material", en: "4 boxing drills, no equipment", nivel: "F", mma: "alta",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "Una sesión guiada de fundamentos para hacer en casa.",
    pasos: ["Sigue el vídeo parte por parte con los botones de abajo."],
    detalles: [], errores: [],
    dosis: "1 sesión siguiendo el vídeo",
    videos: [V("BpiM3Sw4rFU", "Tony Jeffries", { fuente: "jeffries", segmentos: [
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
      "Pega en el suelo una cruz o un cuadrado de cinta, de unos dos pasos de lado.",
      "Recorre las líneas en guardia: adelante y atrás, a tu izquierda y a tu derecha, y en «L».",
      "En cada cambio de dirección, mueve primero el pie del lado hacia el que vas.",
      "Mantén la mano derecha en la mejilla y la misma distancia entre los pies todo el rato."
    ],
    detalles: ["Mira al frente, no a los pies: la cinta la notas sin mirarla.", "Pasos cortos y sin prisa al principio; la velocidad llega sola."],
    errores: ["Juntar o cruzar los pies al cambiar de dirección.", "Saltar en vez de deslizar."],
    dosis: "3 × 2 min",
    criterio: "Una ronda completa sin cruzar los pies ni mirar al suelo.",
    combina: ["box-paso-arrastre", "box-pivote"],
    videos: [
      V("H9OgSFaJuVM", "Tony Jeffries", { etiqueta: "Con marcas en el suelo", canal: "The Boxing Fitness Academy", fuente: "jeffries" }),
      V("gvdWLS-Y-2M", "Tony Jeffries", { etiqueta: "Más ejercicios", fuente: "jeffries" })
    ]
  },
  {
    id: "box-cuerda", seccion: "boxeo", tipo: "drill",
    es: "Cuerda de esquivas", en: "Slip rope", nivel: "I", mma: "media",
    fases: ["distancia"], solo: "si", material: ["cuerda"],
    objetivo: "Esquivar y rodar con ritmo sin perder la guardia.",
    pasos: [
      "Ata una cuerda tensa de pared a pared, o a dos puntos fijos, a la altura del hombro.",
      "Avanza y retrocede pasando por debajo en forma de «U».",
      "Lanza un 1-2 cada vez que sales por el otro lado."
    ],
    detalles: ["Pasa por debajo con las rodillas, con la espalda casi recta.", "Mira al frente, no a la cuerda."],
    errores: ["Doblar la espalda en vez de las rodillas.", "Esquivar sin guardia."],
    dosis: "3 × 3 min",
    criterio: "3 minutos sin tocar la cuerda con la cabeza ni bajar las manos.",
    combina: ["box-esquiva", "box-rodar"],
    videos: [
      V("jA9mE8qNXrI", "World Class Boxing Channel", { etiqueta: "Slip line" }),
      V("RsKuLCSGOeQ", "Tony Jeffries Español", { etiqueta: "En español", idioma: "es", fuente: "jeffries" })
    ]
  },
  {
    id: "box-sombra-defensa", seccion: "boxeo", tipo: "drill",
    es: "Sombra solo de defensa", en: "Defensive shadowboxing", nivel: "I", mma: "alta",
    fases: ["distancia", "defensa"], solo: "si", material: ["ninguno", "espejo"],
    objetivo: "Automatizar paradas, bloqueos, esquivas y rodar sin golpear, imaginando los golpes del rival.",
    pasos: [
      "Imagina un rival concreto y di en voz baja el golpe que te lanza.",
      "Defiende cada uno: parada para el jab, esquiva para el directo, bloqueo o rodar para los ganchos.",
      "Después de cada defensa, vuelve a la guardia y muévete.",
      "El último minuto, devuelve un golpe después de cada defensa."
    ],
    detalles: ["Defensas pequeñas: lo justo para que el golpe no llegue.", "Los ojos siempre al frente, nunca al suelo."],
    errores: ["Defender con los ojos cerrados o mirando abajo.", "Defenderlo todo con el mismo gesto."],
    dosis: "3 × 3 min · 1 min de descanso",
    criterio: "Un asalto entero grabado en el que cada defensa vuelve a la guardia y no bajas la mirada.",
    combina: ["box-sombra", "box-cuerda"],
    videos: [V("2AB280hssh0", "Tony Jeffries", { etiqueta: "Drills de defensa", fuente: "jeffries" })]
  },
  {
    id: "box-pelota", seccion: "boxeo", tipo: "drill",
    es: "Pelota de tenis", en: "Tennis ball drills", nivel: "I", mma: "media",
    fases: ["distancia"], solo: "si", material: ["pelota", "cuerda"],
    objetivo: "Vista, reflejos y timing.",
    pasos: [
      "Cuélgala de una cuerda a la altura de la cabeza: golpéala con un jab y esquiva la vuelta.",
      "O lánzala contra la pared con la mano izquierda y atrápala con la derecha, sin salir de la guardia."
    ],
    detalles: ["Golpea suave: cuanto más fuerte, más rápida vuelve.", "Mira la pelota con los ojos, no con la cabeza."],
    errores: ["Seguirla con la cabeza en vez de con los ojos.", "Bajar las manos para esperarla."],
    dosis: "3 × 2 min",
    criterio: "2 minutos sin que la pelota te toque a la vuelta.",
    videos: [V("EqU7R2HbIrI", "El Yuyu", { etiqueta: "4 drills con pelota" })]
  },
  {
    id: "box-drill-distancia", seccion: "boxeo", tipo: "drill",
    es: "Medir la distancia en la pared", en: "Wall range drill", nivel: "F", mma: "alta",
    fases: ["distancia"], solo: "si", material: ["pared", "cinta"],
    objetivo: "Aprender sin compañero dónde llega tu jab y cuánto cambia con un paso.",
    pasos: [
      "Pega un trozo de cinta en la pared a la altura de tu barbilla: es la barbilla del rival.",
      "Busca dónde la toca tu jab con el brazo casi estirado y sin dar paso: esa es la media. Márcala en el suelo.",
      "Sal medio paso atrás (larga) y vuelve con paso y jab; entra medio paso (corta) y suelta ganchos sin tocar la pared con el codo.",
      "Cambia de distancia cada 20 segundos sin mirar al suelo."
    ],
    detalles: ["Toca la cinta, no la golpees: solo mides.", "Con los ojos en la cinta, notarás la distancia por los pies."],
    errores: ["Mirar la marca del suelo en vez de la cinta.", "Inclinarte para llegar en vez de dar el paso."],
    dosis: "3 × 2 min · 1 min de descanso",
    criterio: "10 jabs seguidos tocando la cinta, cada uno desde la distancia correcta y sin inclinarte.",
    combina: ["box-distancias", "box-medir-jab"],
    videos: []
  },
  {
    id: "box-comba", seccion: "boxeo", tipo: "drill",
    es: "Comba de boxeador", en: "Boxing jump rope", nivel: "F", mma: "media",
    fases: ["distancia"], solo: "si", material: ["comba"],
    objetivo: "Ritmo y pies ligeros. En el curso es el calentamiento, a ritmo suave.",
    pasos: ["Empieza a pies juntos, con saltos pequeños.", "Pasa al paso de boxeador: alterna el apoyo de un pie al otro.", "Cambia de ritmo cada 30 segundos.", "Deja las dobles para cuando el resto salga sin tropezar."],
    detalles: ["Gira la comba con las muñecas, no con los brazos.", "Ajusta la longitud: pisándola en el centro, los mangos llegan a la altura de las axilas."],
    errores: ["Saltar alto: apenas tienes que despegar los pies.", "Caer sobre los talones."],
    dosis: "3 × 3 min",
    criterio: "3 minutos de paso de boxeador sin tropezar.",
    videos: [V("wqN5bRkZPK0", "Tony Jeffries", { etiqueta: "De principiante a experto", fuente: "jeffries" })]
  },
  {
    id: "box-espejo", seccion: "boxeo", tipo: "drill",
    es: "Guardia frente al espejo", en: "Mirror work", nivel: "F", mma: "alta",
    fases: ["distancia"], solo: "si", material: ["espejo"],
    objetivo: "Corregir tu guardia y tus golpes tú solo, viéndote.",
    pasos: [
      "Ponte en guardia frente al espejo, a unos dos metros.",
      "Primero muévete con paso-arrastre y revisa cada pocos segundos manos, codos y barbilla.",
      "Después lanza golpes lentos: comprueba que salen rectos y que la otra mano no se separa de la cara.",
      "Cada minuto, cierra los ojos 30 segundos manteniendo la guardia; ábrelos y compara."
    ],
    detalles: ["Lento: el espejo sirve para ver, no para ir rápido.", "Ponte también de lado al espejo para ver el perfil y la altura."],
    errores: ["Mirarte la cara en vez de las manos y los pies.", "Corregirte y olvidarlo en cuanto dejas de mirar."],
    dosis: "2 × 3 min · 1 min de descanso",
    criterio: "2 rondas sin que el espejo te pille la mano derecha lejos de la cara ni la barbilla levantada.",
    combina: ["box-guardia-boxeo", "box-guardia"],
    videos: [V("OEiE3fI8U10", "Tony Jeffries", { fuente: "jeffries" })]
  },
  {
    id: "box-gomas", seccion: "boxeo", tipo: "drill",
    es: "Golpes con goma", en: "Resistance band punches", nivel: "I", mma: "media",
    fases: ["distancia"], solo: "si", material: ["goma"],
    objetivo: "Notar el giro de cadera y la vuelta a la guardia con un poco de resistencia.",
    pasos: [
      "Ancla la goma detrás de ti a la altura del pecho y agarra un extremo con cada mano.",
      "Ponte en guardia y lanza golpes lentos: primero rectos, después curvos.",
      "Aguanta un segundo con el brazo estirado y vuelve a la guardia controlando la goma.",
      "Cambia de golpe cada 20 segundos."
    ],
    detalles: ["Goma suave: si te cambia la técnica, es demasiado dura.", "Es técnica, no fuerza: nada de series hasta el fallo."],
    errores: ["Perder la guardia por ir rápido.", "Dejar que la goma te devuelva el brazo de golpe."],
    dosis: "3 × 1 min",
    criterio: "1 minuto sin que la mano que no golpea se separe de la cara.",
    videos: []
  },
  {
    id: "box-sesion-16", seccion: "boxeo", tipo: "drill",
    es: "Sesión de boxeo en casa (16 min)", en: "16-min home boxing workout", nivel: "F", mma: "media",
    fases: ["distancia"], solo: "si", material: ["ninguno"],
    objetivo: "Una sesión completa guiada cuando no tienes tiempo de preparar nada.",
    pasos: ["Ponla y síguela."], detalles: [], errores: [],
    dosis: "16 min",
    videos: [V("aHScq60oTlM", "Tony Jeffries", { fuente: "jeffries" })]
  }
]);
})();
