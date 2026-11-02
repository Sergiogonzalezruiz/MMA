// =============================================================
//  LUCHA (wrestling + judo sin gi, para MMA)
// =============================================================
(() => {
const V = (id, instructor, extra = {}) => ({ id, inicio: 0, fin: null, instructor, idioma: "en", ...extra });

MMA.add([
  // ---------------- POSTURA Y NIVEL ----------------
  {
    id: "lu-postura", seccion: "lucha", tipo: "tecnica", cat: "postura",
    es: "Postura y movimiento", en: "Stance and motion", nivel: "F", mma: "alta",
    mmaNota: "En MMA, más alta que en lucha: abajo esperan golpes y rodillazos.",
    fases: ["distancia", "entrada"], solo: "si", material: ["ninguno"],
    objetivo: "La base para atacar y defender el derribo. Son las dos primeras de las 7 habilidades básicas.",
    pasos: [
      "Pies algo más separados que los hombros: uno adelantado (escalonada) o a la par (cuadrada).",
      "Rodillas dobladas, cadera baja, espalda recta y cabeza arriba.",
      "Codos dentro y manos delante, listas para pelear las manos.",
      "Muévete con pasos cortos sin juntar ni cruzar los pies."
    ],
    detalles: ["La cabeza por encima de las rodillas, nunca por delante.", "Tu postura de boxeo y la de lucha deben ser casi la misma."],
    errores: ["Inclinarte con la cabeza adelantada.", "Piernas rectas: no puedes cambiar de nivel ni hacer sprawl."],
    drills: ["lu-drill-postura"],
    combina: ["lu-nivel", "lu-sprawl"],
    videos: [
      V("IfyPE3achtc", "Postura y movimiento"),
      V("fjlEZ0a7boU", "David Garmo", { etiqueta: "Drill" }),
      V("-kItENVsujQ", "Jesé y Freddy", { etiqueta: "En español", idioma: "es" })
    ]
  },
  {
    id: "lu-nivel", seccion: "lucha", tipo: "tecnica", cat: "nivel",
    es: "Cambio de nivel y penetración", en: "Level change and penetration step", nivel: "F", mma: "muy alta",
    mmaNota: "Todo derribo empieza aquí. Escondido tras un golpe, es lo que menos se ve venir.",
    fases: ["entrada"], solo: "si", material: ["esterilla"],
    objetivo: "Bajar y cerrar la distancia para llegar a las piernas del rival.",
    pasos: [
      "Baja la cadera doblando las rodillas, sin inclinar la espalda.",
      "Da un paso largo con el pie delantero entre los pies del rival.",
      "La rodilla de atrás baja hacia el suelo.",
      "Arrastra el pie trasero y recupera la postura."
    ],
    detalles: ["Cabeza arriba y espalda recta durante todo el movimiento.", "Primero se baja, luego se avanza: no a la vez."],
    errores: ["Bajar la cabeza: le das una guillotina o un rodillazo.", "Apoyar las manos en el suelo."],
    drills: ["lu-drill-penetraciones", "lu-drill-postura"],
    combina: ["lu-doble", "lu-single", "box-1-2-nivel"],
    videos: [V("z6DKWX0YlV8", "Henry Cejudo"), V("dlKDrqmDe4g", "Cambio de nivel y penetración", { etiqueta: "Otra explicación" })]
  },

  // ---------------- DERRIBOS ----------------
  {
    id: "lu-doble", seccion: "lucha", tipo: "tecnica", cat: "derribos",
    es: "Doble pierna", en: "Double leg", jp: "Morote-gari", alias: ["derribo a dos piernas"],
    nivel: "F", mma: "muy alta",
    mmaNota: "Mejor preparado con un golpe. Contra la jaula, si no cae, levántalo o cambia a single.",
    fases: ["entrada", "jaula", "suelo-arriba"], solo: "parcial", material: ["esterilla", "companero"],
    objetivo: "Llevar al rival al suelo agarrando las dos piernas y quedar encima.",
    pasos: [
      "Prepara la entrada con un golpe o una finta.",
      "Cambio de nivel y penetración entre sus pies.",
      "Cabeza a un lado de su cuerpo, pecho contra él y brazos detrás de sus rodillas.",
      "Empuja en diagonal o gira hacia el lado de tu cabeza.",
      "Aterriza por fuera de sus piernas si puedes."
    ],
    detalles: ["Espalda recta y cabeza alta durante toda la entrada."],
    errores: ["Entrar desde demasiado lejos.", "Doblar la espalda: le regalas la guillotina."],
    reacciones: [
      { si: "Hace sprawl y carga su peso", ref: "lu-single", txt: "Cambia a una pierna o vuelve a ponerte de pie" },
      { si: "Te rodea el cuello", ref: "guillotina", txt: "Saca la cabeza ya: es una guillotina" }
    ],
    drills: ["lu-drill-penetraciones", "lu-drill-sombra"],
    combina: ["lu-single", "lu-bodylock-trip"],
    videos: [V("eKIHtN-p8Ng", "Kings MMA"), V("JI4RNwyjh94", "Kick Lab", { etiqueta: "MMA" })]
  },
  {
    id: "lu-single", seccion: "lucha", tipo: "tecnica", cat: "derribos",
    es: "Pierna simple", en: "Single leg", jp: "Kata-ashi-dori", alias: ["single leg"],
    nivel: "I", mma: "alta",
    mmaNota: "Contra la jaula es de los derribos más usados.",
    fases: ["entrada", "jaula"], solo: "parcial", material: ["esterilla", "companero"],
    objetivo: "Derribar atrapando una sola pierna.",
    pasos: [
      "Entra a una pierna con la cabeza pegada a su cuerpo.",
      "Atrapa la pierna con las dos manos y súbela entre tus piernas.",
      "Levanta la cabeza y recupera la postura.",
      "Termina empujando, girando o con una zancadilla a la pierna de apoyo."
    ],
    detalles: ["Cuanto antes subas la pierna y la cabeza, menos opciones de defensa tiene."],
    errores: ["Quedarte abrazado a la pierna con la cabeza baja.", "No reaccionar cuando mete el whizzer."],
    reacciones: [{ si: "Mete el whizzer y aprieta", txt: "Cabeza dentro y cambia al otro lado o a doble" }],
    drills: ["lu-drill-single-solo", "lu-drill-penetraciones"],
    combina: ["lu-doble", "lu-kouchi"],
    videos: [V("11xpvybbz9M", "Tyler Caldwell")]
  },

  // ---------------- MANOS Y CLINCH ----------------
  {
    id: "lu-2c1", seccion: "lucha", tipo: "tecnica", cat: "manos",
    es: "Control 2 contra 1", en: "Two-on-one / Russian tie", nivel: "F", mma: "alta",
    mmaNota: "Le dejas un solo brazo para defenderse y te lleva al single o a la espalda.",
    fases: ["clinch"], solo: "parcial", material: ["companero"],
    objetivo: "Controlar un brazo del rival con los dos tuyos.",
    pasos: [
      "Agarra su muñeca con una mano.",
      "Pasa el otro brazo por encima de su brazo, con tu hombro pegado al suyo.",
      "Pega tu cadera a su costado.",
      "Desde ahí: pierna simple, ir a la espalda o soltar para golpear."
    ],
    detalles: ["Colócate a su lado, no delante: así su otra mano no te alcanza."],
    errores: ["Quedarte delante de él."],
    drills: ["lu-drill-manos"],
    combina: ["lu-single"],
    videos: [V("Bt7P1xl323s", "Jon Fitch (FitchSMASH)")]
  },
  {
    id: "lu-collar", seccion: "lucha", tipo: "tecnica", cat: "clinch",
    es: "Collar tie", en: "Collar tie", alias: ["agarre de nuca"], nivel: "F", mma: "alta",
    mmaNota: "Además de para derribar, sirve para golpear (uppercut, rodillazo) y para el snap down.",
    fases: ["clinch"], solo: "parcial", material: ["companero"],
    objetivo: "Controlar la cabeza del rival para moverle y desequilibrarle.",
    pasos: [
      "Mano en su nuca con el codo por dentro, apoyado sobre su clavícula.",
      "La otra mano controla su muñeca o su codo.",
      "Tira de su cabeza para moverle y crear huecos."
    ],
    detalles: ["El codo dentro es lo que te deja empujar y mantener distancia."],
    errores: ["Agarrar con el codo por fuera: no controlas nada."],
    drills: ["lu-drill-manos"],
    combina: ["lu-osoto"],
    videos: [V("9NILfubIvcc", "Dan Vallimont")]
  },
  {
    id: "lu-underhook", seccion: "lucha", tipo: "tecnica", cat: "clinch",
    es: "Underhook y pummeling", en: "Underhook / pummeling", nivel: "F", mma: "alta",
    mmaNota: "Quien gana el underhook suele ganar el clinch y la pelea contra la jaula.",
    fases: ["clinch", "jaula"], solo: "parcial", material: ["companero"],
    objetivo: "Meter el brazo por debajo del suyo para controlar su postura.",
    pasos: [
      "Mete el brazo por debajo de su axila y abraza su espalda.",
      "Cadera pegada y cabeza contra su cara o su pecho.",
      "Pummeling: cuando él meta el suyo, gira la mano y vuelve a meter el tuyo por dentro."
    ],
    detalles: ["Desde el underhook salen derribos, zancadillas y salidas de la jaula."],
    errores: ["Quedarte cuadrado con la cadera lejos."],
    drills: ["lu-drill-pummeling"],
    combina: ["lu-bodylock-trip", "lu-harai"],
    videos: [V("1lI7yTOD9VY", "Clinch y pummeling"), V("44rT_EsGRUs", "Underhook en MMA", { etiqueta: "MMA" })]
  },
  {
    id: "lu-bodylock-trip", seccion: "lucha", tipo: "tecnica", cat: "jaula",
    es: "Body lock y zancadilla contra la jaula", en: "Body lock outside trip on the cage", nivel: "I", mma: "muy alta",
    mmaNota: "Arma central del estilo de Dagestán y del sambo (Makhachev, Khabib).",
    fases: ["jaula", "clinch", "suelo-arriba"], solo: "parcial", material: ["companero"],
    objetivo: "Derribar al rival que tiene la espalda en la jaula.",
    pasos: [
      "Cierra las manos alrededor de su cintura, por debajo de sus brazos si puedes.",
      "Cabeza pegada y cadera contra la suya.",
      "Tira de su cintura hacia ti para separarle de la valla.",
      "Pasa tu pierna por detrás de la suya y empuja en diagonal.",
      "Aterriza encima."
    ],
    detalles: ["Las manos cerradas y la cadera pegada: si hay hueco, se gira."],
    errores: ["Manos sueltas.", "Cadera lejos."],
    drills: ["lu-drill-uchikomi", "lu-drill-pummeling"],
    combina: ["lu-ouchi", "lu-single"],
    videos: [V("zpu6TT38gRo", "Zancadilla exterior desde body lock")]
  },

  // ---------------- JUDO SIN GI ----------------
  {
    id: "lu-ouchi", seccion: "lucha", tipo: "tecnica", cat: "judo",
    es: "Zancadilla interior", en: "Major inner reap", jp: "O-uchi-gari", nivel: "I", mma: "alta",
    mmaNota: "Funciona muy bien desde el clinch y el body lock, pecho con pecho.",
    fases: ["clinch", "jaula", "suelo-arriba"], solo: "parcial", material: ["goma", "companero", "tatami"],
    objetivo: "Derribar hacia atrás segando su pierna por dentro.",
    pasos: [
      "Desde el clinch, empuja con el pecho hacia atrás en diagonal.",
      "Tu pierna entra entre las suyas y siega por dentro la de ese lado.",
      "Acompaña la caída y aterriza encima."
    ],
    detalles: ["El empuje y la siega van a la vez."],
    errores: ["Segar sin haberle cargado el peso en esa pierna."],
    drills: ["lu-drill-uchikomi"],
    combina: ["lu-kouchi", "lu-osoto"],
    videos: [V("2H_KOBkNZ9I", "Satoshi Ishii")]
  },
  {
    id: "lu-kouchi", seccion: "lucha", tipo: "tecnica", cat: "judo",
    es: "Barrido interior pequeño", en: "Small inner reap", jp: "Ko-uchi-gari", nivel: "I", mma: "alta",
    mmaNota: "Makhachev lo encadena con la pierna simple contra la jaula.",
    fases: ["clinch", "jaula"], solo: "parcial", material: ["goma", "companero", "tatami"],
    objetivo: "Barrer su pie de apoyo por dentro mientras empujas hacia atrás.",
    pasos: [
      "Desde el clinch o el body lock, empuja hacia atrás.",
      "Con la planta del pie barre por dentro el talón de su pie.",
      "Si se apoya para no caer, pasa a la pierna simple."
    ],
    detalles: ["Pequeño y rápido: no hace falta que caiga para que te sirva."],
    errores: ["Levantar mucho la pierna y perder el equilibrio."],
    drills: ["lu-drill-uchikomi"],
    combina: ["lu-single", "lu-ouchi"],
    videos: [V("GYiKtPS1iRI", "Ko-uchi-gari sin gi")]
  },
  {
    id: "lu-osoto", seccion: "lucha", tipo: "tecnica", cat: "judo",
    es: "Siega exterior", en: "Major outer reap", jp: "O-soto-gari", nivel: "I", mma: "alta",
    mmaNota: "Desde collar tie y control de muñeca, contra rivales erguidos.",
    fases: ["clinch", "suelo-arriba"], solo: "parcial", material: ["goma", "companero", "tatami"],
    objetivo: "Derribar hacia atrás segando su pierna por fuera.",
    pasos: [
      "Controla su nuca y su muñeca.",
      "Da un paso a su lado, pecho contra pecho.",
      "Siega su pierna por detrás con la tuya mientras empujas su torso hacia atrás."
    ],
    detalles: ["Tu pierna de apoyo, cerca de la suya."],
    errores: ["Quedarte lejos: la siega no llega."],
    drills: ["lu-drill-uchikomi"],
    combina: ["lu-ouchi"],
    videos: [V("G499sHSEk3o", "Shintaro Higashi")]
  },
  {
    id: "lu-harai", seccion: "lucha", tipo: "tecnica", cat: "judo",
    es: "Harai-goshi desde underhook", en: "Sweeping hip throw (no-gi)", jp: "Harai-goshi", nivel: "A", mma: "media",
    mmaNota: "Rousey lo usaba desde overhook o underhook. Si falla, le das la espalda.",
    fases: ["clinch", "suelo-arriba"], solo: "parcial", material: ["goma", "companero", "tatami"],
    objetivo: "Lanzamiento de cadera sin agarres de gi.",
    pasos: [
      "Consigue un underhook profundo.",
      "Gira y cruza tu cadera delante de la suya.",
      "Carga su peso sobre tu cadera.",
      "Barre su pierna con la tuya y acompaña la caída."
    ],
    detalles: ["Practica la entrada con goma; el lanzamiento completo, solo sobre tatami."],
    errores: ["Entrar sin underhook: le das la espalda."],
    drills: ["lu-drill-uchikomi"],
    combina: ["lu-underhook"],
    videos: [V("D8ca9dqImzY", "Harai-goshi desde underhook")]
  },

  // ---------------- DEFENSA ----------------
  {
    id: "lu-sprawl", seccion: "lucha", tipo: "tecnica", cat: "defensa",
    es: "Sprawl", en: "Sprawl", nivel: "F", mma: "muy alta",
    mmaNota: "La base del striker: defender el derribo y volver a golpear.",
    fases: ["defensa"], solo: "si", material: ["esterilla"],
    objetivo: "Parar el derribo lanzando las piernas atrás y cargando el peso encima.",
    pasos: [
      "Al ver el cambio de nivel, lanza las piernas hacia atrás y separadas.",
      "Cadera al suelo, contra su cabeza y sus hombros.",
      "Las manos bloquean y el pecho pesa sobre su espalda.",
      "Vuelve a la guardia o rodéale hacia la espalda."
    ],
    detalles: ["La cadera es lo que para el derribo, no los brazos."],
    errores: ["Caer de rodillas con la cadera alta.", "Quedarte encima sin hacer nada."],
    reacciones: [{ si: "Mantiene la cabeza dentro y sigue empujando", ref: "lu-whizzer", txt: "Mete el whizzer" }],
    drills: ["lu-drill-sprawl", "lu-drill-sombra"],
    combina: ["lu-whizzer"],
    videos: [V("J0kcsLXX1Ms", "Ben Askren"), V("QT7dxLzt2JA", "John Smith", { etiqueta: "John Smith" })]
  },
  {
    id: "lu-whizzer", seccion: "lucha", tipo: "tecnica", cat: "defensa",
    es: "Whizzer", en: "Whizzer", alias: ["overhook"], nivel: "F", mma: "alta",
    mmaNota: "Defensa clave contra la pierna simple y el underhook.",
    fases: ["defensa", "clinch"], solo: "parcial", material: ["companero"],
    objetivo: "Pasar el brazo por encima del suyo y presionar para liberar tu pierna.",
    pasos: [
      "Cuando te coja una pierna o un underhook, pasa tu brazo por encima del suyo.",
      "Agárrale fuerte por la axila o el tríceps.",
      "Cadera hacia él y hacia abajo, presionando su hombro.",
      "Libera la pierna y sal."
    ],
    detalles: ["Se combina con el sprawl."],
    errores: ["Brazo flojo.", "Cadera lejos de él."],
    drills: ["lu-drill-sprawl", "lu-drill-pummeling"],
    combina: ["lu-sprawl"],
    videos: [V("5SmCpBtNnRM", "Sprawl y whizzer"), V("A5_NabqOldo", "Cary Kolat", { etiqueta: "Cary Kolat" })]
  },

  // ---------------- LEVANTARSE ----------------
  {
    id: "lu-wall-walk", seccion: "lucha", tipo: "tecnica", cat: "levantarse",
    es: "Wall walk", en: "Wall walk", alias: ["levantarse contra la jaula"], nivel: "I", mma: "muy alta",
    mmaNota: "La forma principal de salir de abajo en MMA.",
    fases: ["levantarse", "jaula", "suelo-abajo"], solo: "si", material: ["pared"],
    objetivo: "Levantarte apoyando la espalda en la jaula.",
    pasos: [
      "Con la espalda en la jaula, ponte de lado, no plano.",
      "Controla sus muñecas o consigue un underhook.",
      "Planta los pies y empuja con las piernas, deslizando el hombro hacia arriba.",
      "Cabeza pegada a la valla todo el tiempo.",
      "De pie, gira y sal de la jaula."
    ],
    detalles: ["Empujas con las piernas, no con los brazos."],
    errores: ["Quedarte plano de espaldas.", "Perder la posición de la cabeza."],
    drills: ["lu-drill-wall"],
    combina: ["levantamiento"],
    videos: [
      V("ZlcvyHz15Ss", "Jamie Varner"),
      V("56iRfTYaeb4", "Wall get up (MMA)", { etiqueta: "Otra explicación" }),
      V("461jMxlWSFk", "Alberto del Campo", { etiqueta: "En español", idioma: "es" })
    ]
  },

  // ---------------- DRILLS ----------------
  {
    id: "lu-drill-postura", seccion: "lucha", tipo: "drill",
    es: "Postura y movimiento (drill)", en: "Stance and motion drills", nivel: "F", mma: "alta",
    fases: ["entrada"], solo: "si", material: ["ninguno"],
    objetivo: "Moverte en postura de lucha sin levantarte.",
    pasos: ["Pasos cortos en todas las direcciones sin juntar los pies.", "Cambia de guardia a ratos.", "Hazlo a ratos frente a una pared para no inclinarte."],
    detalles: [], errores: ["Levantarte al moverte."],
    dosis: "3 × 1 min",
    criterio: "3 × 1 min sin levantarte.",
    combina: ["lu-postura"],
    videos: [V("dbr4SA-IxMQ", "15 drills de postura")]
  },
  {
    id: "lu-drill-penetraciones", seccion: "lucha", tipo: "drill",
    es: "Penetraciones", en: "Penetration step drill", nivel: "F", mma: "muy alta",
    fases: ["entrada"], solo: "si", material: ["esterilla"],
    objetivo: "Automatizar el cambio de nivel y la penetración.",
    pasos: ["Cambio de nivel, penetración y vuelta a la postura.", "Alterna el lado.", "La rodilla cae sobre la esterilla."],
    detalles: [], errores: ["Apoyar las manos o bajar la cabeza."],
    dosis: "3 × 10 por lado",
    criterio: "20 seguidas sin apoyar las manos ni bajar la cabeza.",
    combina: ["lu-nivel"],
    videos: [V("hGB1denc6AU", "Cambio de nivel y penetración (drill)")]
  },
  {
    id: "lu-drill-sprawl", seccion: "lucha", tipo: "drill",
    es: "Sprawl y circular", en: "Sprawl and circle", nivel: "F", mma: "muy alta",
    fases: ["defensa"], solo: "si", material: ["esterilla"],
    objetivo: "Que el sprawl salga solo y vuelvas a la guardia.",
    pasos: ["Sprawl con la cadera al suelo.", "Vuelve a la guardia y circula.", "Alterna con un jab entre sprawl y sprawl."],
    detalles: [], errores: ["Caer de rodillas."],
    dosis: "5 × 30 s · 30 s de descanso",
    criterio: "Cadera en el suelo en menos de 1 segundo.",
    combina: ["lu-sprawl"],
    videos: [V("QMVavyxjlNU", "Cary Kolat")]
  },
  {
    id: "lu-drill-single-solo", seccion: "lucha", tipo: "drill",
    es: "Paso de pierna simple en solitario", en: "Rock-over step solo drill", nivel: "I", mma: "alta",
    fases: ["entrada"], solo: "si", material: ["esterilla"],
    objetivo: "El trabajo de pies de la pierna simple sin compañero.",
    pasos: ["Sigue el vídeo: entrada, paso y vuelta a la postura."],
    detalles: [], errores: [],
    dosis: "3 × 10 por lado",
    combina: ["lu-single"],
    videos: [V("hANSpAMFXus", "Rock over step (single leg)")]
  },
  {
    id: "lu-drill-uchikomi", seccion: "lucha", tipo: "drill",
    es: "Uchikomi con goma", en: "Band uchikomi", nivel: "I", mma: "alta",
    fases: ["clinch"], solo: "si", material: ["goma"],
    objetivo: "Repetir las entradas de judo sin compañero.",
    pasos: [
      "Ata la goma a una puerta o un poste a la altura del pecho.",
      "Entrada de o-uchi, ko-uchi, o-soto, harai-goshi y o-goshi, sin lanzar.",
      "10 por técnica y por lado."
    ],
    detalles: ["La goma simula el tirón de los agarres."], errores: ["Hacer la entrada sin girar la cadera."],
    dosis: "3 series",
    combina: ["lu-ouchi", "lu-kouchi", "lu-osoto", "lu-harai"],
    videos: [V("th4cl3JW5Do", "Drill de uchi-mata y o-goshi")]
  },
  {
    id: "lu-drill-pummeling", seccion: "lucha", tipo: "drill",
    es: "Sombra de clinch (pummeling)", en: "Shadow pummeling", nivel: "I", mma: "alta",
    fases: ["clinch"], solo: "parcial", material: ["ninguno", "goma"],
    objetivo: "Interiorizar el movimiento del underhook.",
    pasos: ["Pummeling al aire o con una goma anclada a la altura del pecho.", "Cadera adelante cada vez que metes el brazo."],
    detalles: ["Con compañero es otro mundo: hazlo cuando puedas."], errores: [],
    dosis: "3 × 1 min",
    combina: ["lu-underhook"],
    videos: [V("Etr59CsxyzY", "Drill de pummeling")]
  },
  {
    id: "lu-drill-sombra", seccion: "lucha", tipo: "drill",
    es: "Sombra de lucha / sombra MMA", en: "Shadow wrestling", nivel: "I", mma: "muy alta",
    fases: ["distancia", "entrada", "defensa", "levantarse"], solo: "si", material: ["esterilla"],
    objetivo: "Encadenar las fases del combate en sombra.",
    pasos: [
      "Golpe → cambio de nivel → tiro → vuelve a la postura.",
      "Sprawl → levántate → golpe.",
      "Termina cada secuencia en guardia de boxeo."
    ],
    detalles: ["Es el drill que une las tres secciones."], errores: [],
    dosis: "3 × 2 min",
    combina: ["box-1-2-nivel", "lu-sprawl", "levantamiento"],
    videos: []
  },
  {
    id: "lu-drill-wall", seccion: "lucha", tipo: "drill",
    es: "Wall walk en la pared de casa", en: "Wall walk drill", nivel: "I", mma: "muy alta",
    fases: ["levantarse"], solo: "si", material: ["pared"],
    objetivo: "Repetir el patrón de levantarte contra la jaula.",
    pasos: [
      "Sentado contra la pared, gira de lado.",
      "Planta el pie y empuja con las piernas, no con los brazos.",
      "Cabeza pegada a la pared hasta estar de pie."
    ],
    detalles: [], errores: ["Quedarte plano."],
    dosis: "3 × 5 por lado",
    criterio: "5 wall walks limpios por lado.",
    combina: ["lu-wall-walk"],
    videos: [V("56iRfTYaeb4", "Wall get up (MMA)")]
  },
  {
    id: "lu-drill-manos", seccion: "lucha", tipo: "drill",
    es: "Pelea de manos con goma", en: "Solo hand fighting with a band", nivel: "F", mma: "alta",
    fases: ["clinch"], solo: "parcial", material: ["goma"],
    objetivo: "Repetir solo el patrón del 2 contra 1 y del collar tie.",
    pasos: [
      "Ancla la goma a la altura del pecho y agarra el extremo como si fuera su muñeca.",
      "2 contra 1: tira con las dos manos hacia tu cadera y mete el hombro detrás de su brazo.",
      "Collar tie: lleva la mano a su nuca imaginaria, con el codo dentro, y tira hacia abajo mientras circulas.",
      "Cambia de lado cada 30 segundos sin salir de la postura."
    ],
    detalles: ["Muévete con pasos cortos: el agarre sirve para moverle, no para quedarte quieto.", "Los vídeos muestran el drill con compañero: copia el patrón y úsalo tal cual si un día tienes con quién."],
    errores: ["Tirar solo con los brazos, sin meter la cadera.", "Quedarte de pie y recto al agarrar."],
    dosis: "3 × 1 min por lado",
    criterio: "3 rondas sin levantarte de la postura ni separar el codo del cuerpo.",
    combina: ["lu-drill-pummeling"],
    videos: [
      V("wBtM_rx8kHk", "Cary Kolat", { etiqueta: "2 contra 1" }),
      V("DvIPinttukM", "Cary Kolat", { etiqueta: "Collar tie" })
    ]
  }
]);
})();
