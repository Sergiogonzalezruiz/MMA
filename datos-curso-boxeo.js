// =============================================================
//  CURSO DE BOXEO EN SOLITARIO (para diestro, sin saco)
//  fases → módulos → sesiones. Los módulos citan fichas y drills
//  de datos-boxeo.js por id: el texto técnico está allí.
//  Ciclo de cada módulo: ver → entender → practicar → comprobar → aplicar.
// =============================================================
MMA.CURSO_BOXEO = {
  fases: [
    { id: 1, titulo: "Reactivación", semanas: [1, 4], objetivo: "Recuperar la guardia, los pies y los golpes rectos." },
    { id: 2, titulo: "Fundamentos", semanas: [5, 8], objetivo: "Golpes curvos, juego de pies y distancia." },
    { id: 3, titulo: "Combinaciones y defensa", semanas: [9, 16], objetivo: "Defender, contragolpear y trabajar el cuerpo." },
    { id: 4, titulo: "Fluidez", semanas: [17, 24], objetivo: "Unirlo todo en un shadow con intención." }
  ],

  modulos: [
    {
      id: "m1", fase: 1, n: 1, titulo: "Guardia y base", fuente: "jeffries",
      objetivo: "Volver a ponerte en guardia de boxeo y moverte en ella sin perderla.",
      video: { ficha: "box-guardia-boxeo", n: 0 },
      claves: [
        "Pie izquierdo delante y pie derecho detrás, un poco más separados que los hombros y sin estar en la misma línea.",
        "Mano derecha en la mejilla, izquierda delante de la cara, codos pegados y barbilla baja.",
        "Te mueves con paso-arrastre: primero el pie del lado al que vas, y el otro lo sigue la misma distancia.",
        "Rodillas flexionadas y peso repartido: nunca te quedas recto."
      ],
      fichas: ["box-guardia-boxeo", "box-paso-arrastre"],
      drills: ["box-espejo", "box-patrones-pies", "box-sombra", "box-comba"],
      checklist: [
        "¿La mano derecha se queda pegada a la mejilla todo el rato?",
        "¿La barbilla está baja y miras por encima de los guantes?",
        "¿Los codos se quedan cerca de las costillas?",
        "¿Los pies nunca se cruzan ni se juntan al moverte?",
        "¿La distancia entre los pies es la misma al empezar y al acabar cada paso?",
        "¿En la grabación frontal se te ve de lado, no de frente?"
      ],
      dominio: "3 asaltos de 3 min de sombra moviéndote en las cuatro direcciones, grabados de frente y de lado, sin cruzar los pies ni separar la mano derecha de la cara."
    },
    {
      id: "m2", fase: 1, n: 2, titulo: "Golpes rectos (1, 2, 1-2)", fuente: "jeffries",
      objetivo: "Recuperar el jab y el directo limpios, solos y combinados, sin perder la guardia.",
      video: { ficha: "box-jab", n: 0 },
      claves: [
        "El jab sale recto desde la guardia y vuelve por el mismo camino; la mano derecha no se mueve de la mejilla.",
        "El directo nace del giro de cadera y de la punta del pie derecho, no del brazo.",
        "En el 1-2, el directo sale mientras el jab vuelve, sin pausa entre los dos.",
        "Después de golpear, vuelves a la guardia y te mueves: nunca te quedas quieto."
      ],
      fichas: ["box-jab", "box-directo", "box-1-2", "box-1-1-2"],
      drills: ["box-espejo", "box-sombra", "box-4-drills", "box-gomas"],
      checklist: [
        "¿La mano derecha se queda en la mejilla cuando lanzas el jab?",
        "¿La mano izquierda vuelve a la cara cuando lanzas el directo?",
        "¿El talón derecho gira hacia fuera en cada directo?",
        "¿Los golpes vuelven por el mismo camino, sin bajar la mano?",
        "¿La barbilla se queda baja durante toda la combinación?",
        "¿Después de cada combinación te mueves en vez de quedarte quieto?"
      ],
      dominio: "3 asaltos de 3 min de sombra con jab, 1-2 y 1-1-2, grabados de frente y de lado, sin bajar la mano que no golpea ni levantar la barbilla."
    },
    {
      id: "m3", fase: 2, n: 3, titulo: "Curvos y uppercuts (3, 4, 5, 6)", fuente: "jeffries",
      objetivo: "Añadir los ganchos y los uppercuts con giro de cadera, sin abrir el codo ni bajar la mano.",
      video: { ficha: "box-gancho", n: 0 },
      claves: [
        "Los curvos salen del giro de cadera y del pie; el brazo solo acompaña, doblado a unos 90°.",
        "Gancho izquierdo: giras el pie izquierdo hacia dentro. Gancho derecho: pivotas sobre la punta del pie derecho.",
        "El uppercut sube recto desde la altura de tu cara, sin bajar la mano para cargarlo.",
        "La mano que no golpea se queda pegada a la cara en todos."
      ],
      fichas: ["box-gancho", "box-gancho-derecho", "box-uppercut", "box-1-2-3"],
      drills: ["box-espejo", "box-sombra", "box-gomas"],
      checklist: [
        "¿El codo sube a la altura del puño en los ganchos?",
        "¿Gira el pie del lado que golpea en cada gancho?",
        "¿El uppercut sale sin bajar antes la mano?",
        "¿La mano que no golpea se queda en la cara en todos los golpes?",
        "¿Después del 1-2-3 sales en ángulo y no te quedas cruzado?"
      ],
      dominio: "3 asaltos de 3 min de sombra con 3, 4, 5, 6 y 1-2-3, grabados de lado, girando el pie en cada curvo y sin abrir el codo antes de golpear."
    },
    {
      id: "m4", fase: 2, n: 4, titulo: "Juego de pies y pivotes", fuente: "oracle",
      objetivo: "Moverte con pasos cortos, pivotar y salir en ángulo después de cada combinación.",
      video: { id: "CMgghWxHMIc", instructor: "Oracle Boxing", canal: "Oliver Betts Boxing", inicio: 0, fin: null, idioma: "en", fuente: "oracle" },
      claves: [
        "Pasos cortos y siempre en guardia: los pies nunca se juntan ni se cruzan.",
        "El pivote se hace sobre la punta del pie izquierdo; el derecho barre un arco por detrás.",
        "Después de cada combinación sales en ángulo, hacia tu izquierda, no hacia atrás en línea recta.",
        "Primero se mueven los pies y después las manos: el paso, y luego el golpe."
      ],
      fichas: ["box-pivote", "box-angulos", "box-paso-arrastre"],
      drills: ["box-patrones-pies", "box-comba", "box-sombra"],
      checklist: [
        "¿Pivotas sobre la punta del pie izquierdo y no sobre el talón?",
        "¿Las manos se quedan en guardia mientras giras?",
        "¿Después de cada combinación sales en ángulo y no hacia atrás en línea recta?",
        "¿Los pies nunca se cruzan al cambiar de dirección?",
        "¿Los pasos son cortos y la distancia entre los pies no cambia?"
      ],
      dominio: "3 asaltos de 3 min de sombra saliendo en ángulo o pivotando después de cada combinación, grabados de lado, sin cruzar los pies ni bajar las manos."
    },
    {
      id: "m5", fase: 2, n: 5, titulo: "Distancia", fuente: "jeffries",
      objetivo: "Saber en qué distancia estás, medirla con el jab y cambiarla con los pies, no con la cintura.",
      video: { ficha: "box-medir-jab", n: 0 },
      claves: [
        "Larga: llegas con el jab dando un paso. Media: llegas con rectos. Corta: ganchos y uppercuts.",
        "Mide con un jab rápido y suave antes de soltar los golpes de verdad.",
        "Entra en la corta solo para golpear y sal; no te quedes en la media sin hacer nada.",
        "La distancia la ponen los pies: no te inclines para llegar."
      ],
      fichas: ["box-distancias", "box-medir-jab"],
      drills: ["box-drill-distancia", "box-pelota", "box-patrones-pies"],
      checklist: [
        "¿Llegas a la cinta dando el paso, sin inclinar la espalda?",
        "¿El jab de medir vuelve rápido, sin quedarse estirado?",
        "¿Después de medir, el siguiente golpe llega con la distancia buena?",
        "¿Sales de la corta en cuanto terminas de golpear?",
        "¿Cambias de distancia sin mirar al suelo?"
      ],
      dominio: "2 asaltos de 3 min del drill de la pared tocando la cinta desde la distancia correcta en cada cambio, y 1 asalto de sombra cambiando de distancia sin inclinarte, grabados de lado."
    },
    {
      id: "m6", fase: 3, n: 6, titulo: "Defensa", fuente: "jeffries",
      objetivo: "Parar, bloquear, esquivar y rodar con gestos pequeños, sin perder la vista ni la guardia.",
      video: { id: "ReD58z0jFJM", instructor: "Tony Jeffries", inicio: 0, fin: null, idioma: "en", fuente: "jeffries" },
      claves: [
        "Parada: desvía el jab con la palma derecha, con un gesto corto, y la mano vuelve a la cara.",
        "Bloqueo: el guante pegado a la sien y el codo a las costillas; después, sal o responde.",
        "Esquivar y rodar salen de las rodillas y la cintura, no de doblar la espalda.",
        "Defiende lo justo y mira siempre al frente."
      ],
      fichas: ["box-parada", "box-bloqueo", "box-esquiva", "box-rodar"],
      drills: ["box-sombra-defensa", "box-cuerda", "box-pelota", "box-espejo"],
      checklist: [
        "¿La parada es corta y la mano vuelve enseguida a la cara?",
        "¿En el bloqueo el guante se queda pegado a la cabeza?",
        "¿Las esquivas salen de las rodillas y no de la espalda?",
        "¿Al rodar, los ojos siguen mirando al frente?",
        "¿Después de cada defensa vuelves a la guardia?"
      ],
      dominio: "3 asaltos de sombra solo de defensa grabados de lado, con las cuatro defensas, sin doblar la espalda ni bajar la mirada, y 3 minutos de cuerda sin tocarla."
    },
    {
      id: "m7", fase: 3, n: 7, titulo: "Contragolpe y fintas", fuente: "jeffries",
      objetivo: "Convertir cada defensa en un golpe y engañar al rival con fintas cortas.",
      video: { ficha: "box-catch-pitch", n: 0 },
      claves: [
        "Cada defensa deja un hueco: contraataca mientras su brazo sigue estirado.",
        "Retroceso y contra: solo se mueve el peso; el pie izquierdo no se va atrás.",
        "Parar y devolver: recibe en la palma y devuelve sin bajar esa mano.",
        "Finta corta y creíble, y después un golpe de verdad o salir."
      ],
      fichas: ["box-pull-counter", "box-slip-cross", "box-catch-pitch", "box-fintas"],
      drills: ["box-sombra-defensa", "box-pelota", "box-sombra"],
      checklist: [
        "¿El contragolpe sale mientras el golpe imaginario todavía está estirado?",
        "¿En el retroceso el pie izquierdo no se mueve?",
        "¿Al parar y devolver, la mano que para no baja?",
        "¿Las fintas son cortas y no te desequilibran?",
        "¿Después de cada contragolpe vuelves a la guardia o sales?"
      ],
      dominio: "3 asaltos de sombra de defensa y contragolpe grabados de frente, con cada contra saliendo justo después de la defensa y sin bajar las manos."
    },
    {
      id: "m8", fase: 3, n: 8, titulo: "Cuerpo", fuente: "jeffries",
      objetivo: "Golpear al cuerpo bajando con las piernas y mezclar arriba y abajo en las combinaciones.",
      video: { id: "PIvTJheRF5g", instructor: "Tony Jeffries", inicio: 0, fin: null, idioma: "en", fuente: "jeffries" },
      claves: [
        "Al cuerpo bajas con las rodillas, nunca doblando la espalda.",
        "La cabeza queda a un lado de su línea, y la mano que no golpea, en la cara.",
        "El gancho izquierdo va a su costado derecho, al hígado; el directo, al estómago.",
        "Arriba y abajo: golpea el cuerpo para que baje las manos y remata arriba."
      ],
      fichas: ["box-jab-cuerpo", "box-directo-cuerpo", "box-gancho-cuerpo", "box-cuerpo-cabeza", "box-arriba-abajo"],
      drills: ["box-sombra", "box-espejo", "box-gomas"],
      checklist: [
        "¿Bajas de nivel doblando las rodillas y no la espalda?",
        "¿La mano que no golpea se queda en la cara en los golpes al cuerpo?",
        "¿Vuelves arriba enseguida después de cada golpe al cuerpo?",
        "¿El gancho al cuerpo sale con el codo cerca y no con el brazo estirado?",
        "¿En las combinaciones arriba-abajo cambias de nivel sin perder la guardia?"
      ],
      dominio: "3 asaltos de 3 min de sombra mezclando golpes arriba y al cuerpo, grabados de lado, bajando siempre con las rodillas y volviendo arriba con las manos en la cara."
    },
    {
      id: "m9", fase: 4, n: 9, titulo: "Fluidez y shadow táctico", fuente: "oracle",
      objetivo: "Boxear suelto, encadenar combinaciones largas y hacer shadow con un plan contra un rival concreto.",
      video: { id: "8gz73LjkdS8", instructor: "Oracle Boxing", canal: "Oliver Betts Boxing", inicio: 0, fin: null, idioma: "en", fuente: "oracle" },
      claves: [
        "Suelto y respirando: los hombros bajos y un soplido por golpe.",
        "Cada golpe carga el siguiente: combinaciones sin pausas ni pasos de más.",
        "Un plan por asalto: imagina un rival concreto y boxea contra él.",
        "Termina siempre en guardia y fuera de su línea."
      ],
      fichas: ["box-relajacion", "box-1-2-3-2", "box-2-3-2"],
      drills: ["box-shadow-tactico", "box-sombra-defensa", "box-sesion-16"],
      checklist: [
        "¿Los hombros se quedan bajos y sueltos durante todo el asalto?",
        "¿Respiras con cada golpe en vez de aguantar el aire?",
        "¿Las combinaciones de cuatro golpes salen sin pausas?",
        "¿Se reconoce en la grabación qué rival estás imaginando?",
        "¿Después de cada combinación terminas en guardia y fuera de la línea?"
      ],
      dominio: "4 asaltos de 3 min de shadow táctico grabados, uno contra cada tipo de rival y uno libre, sueltos, sin bajar las manos y terminando cada combinación fuera de la línea."
    }
  ],

  sesiones: [
    {
      id: "f1-guardia-pies", fase: 1, titulo: "Guardia y pies", duracion: 40, tipo: "tecnica",
      asaltos: [
        { min: 3, descanso: 1, objetivo: "Comba suave a pies juntos, solo para entrar en calor.", drill: "box-comba" },
        { min: 4, descanso: 0, objetivo: "Movilidad de hombros, cadera y tobillos, sin prisa." },
        { min: 3, descanso: 1, objetivo: "Comba con paso de boxeador, ritmo cómodo.", drill: "box-comba" },
        { min: 3, descanso: 1, objetivo: "Espejo: mano derecha en la mejilla y barbilla baja mientras te mueves.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Espejo con ojos cerrados 30 s cada minuto: al abrirlos, la guardia sigue igual.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Cinta: adelante y atrás sin juntar los pies.", drill: "box-patrones-pies" },
        { min: 3, descanso: 1, objetivo: "Cinta: a tu izquierda, a tu derecha y en «L», moviendo primero el pie del lado al que vas.", drill: "box-patrones-pies" },
        { min: 3, descanso: 1, objetivo: "Sombra sin golpes: cuatro direcciones con la guardia cerrada.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Sombra sin golpes: cambia de dirección cada vez que cuentes cuatro pasos.", drill: "box-sombra" },
        { min: 3, descanso: 0, objetivo: "Shadow libre grabándote de frente: guardia y pies, como en el criterio de dominio." }
      ]
    },
    {
      id: "f1-rectos", fase: 1, titulo: "Golpes rectos", duracion: 40, tipo: "tecnica",
      asaltos: [
        { min: 3, descanso: 1, objetivo: "Comba suave a pies juntos, solo para entrar en calor.", drill: "box-comba" },
        { min: 4, descanso: 0, objetivo: "Movilidad de hombros, cadera y tobillos, sin prisa." },
        { min: 3, descanso: 1, objetivo: "Repaso: sombra sin golpes en cuatro direcciones, con la guardia cerrada.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Espejo: solo jab, lento, comprobando que la mano derecha no se mueve.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Espejo: solo directo, girando el talón derecho en cada golpe.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Sombra: 1-2 con paso adelante y salida a un lado.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Sombra: 1-1-2 cerrando distancia sin bajar la mano izquierda entre los jabs.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Sigue el primer drill del vídeo, sin prisa.", drill: "box-4-drills" },
        { min: 3, descanso: 1, objetivo: "Repaso en la cinta: un jab cada vez que avanzas, sin juntar los pies.", drill: "box-patrones-pies" },
        { min: 3, descanso: 0, objetivo: "Shadow libre grabándote de frente: rectos y pies, como en el criterio de dominio." }
      ]
    },
    {
      id: "f1-cardio", fase: 1, titulo: "Cardio de tren superior con shadow", duracion: 30, tipo: "cardio",
      asaltos: [
        { min: 4, descanso: 0, objetivo: "Shadow muy suave para entrar en calor: solo pies y guardia.", drill: "box-sombra" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo con jab y 1-2, a un ritmo en el que podrías hablar.", drill: "box-sombra" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo: rectos y desplazamientos sin parar, técnica limpia.", drill: "box-sombra" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo: cambia de dirección después de cada 1-2.", drill: "box-sombra" },
        { min: 4, descanso: 0, objetivo: "Shadow muy suave para bajar pulsaciones." }
      ]
    },
    {
      id: "f2-curvos", fase: 2, titulo: "Curvos y uppercuts", duracion: 40, tipo: "tecnica",
      asaltos: [
        { min: 3, descanso: 1, objetivo: "Comba suave con paso de boxeador para entrar en calor.", drill: "box-comba" },
        { min: 4, descanso: 0, objetivo: "Movilidad de hombros, cadera y tobillos, sin prisa." },
        { min: 3, descanso: 1, objetivo: "Repaso: sombra de 1-2 y 1-1-2 moviéndote todo el rato.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Espejo: gancho izquierdo lento, con el codo a la altura del puño.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Espejo: gancho derecho, pivotando sobre la punta del pie derecho.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Sombra: uppercuts 5 y 6 cortos, sin bajar la mano para cargarlos.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Sombra: 1-2-3 y sal en ángulo después de cada una.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Goma: ganchos lentos notando el giro de cadera.", drill: "box-gomas" },
        { min: 3, descanso: 1, objetivo: "Sombra libre mezclando rectos y curvos, un golpe limpio cada vez.", drill: "box-sombra" },
        { min: 3, descanso: 0, objetivo: "Shadow libre grabándote de lado: el pie gira en cada curvo." }
      ]
    },
    {
      id: "f2-pies-distancia", fase: 2, titulo: "Pies, ángulos y distancia", duracion: 40, tipo: "tecnica",
      asaltos: [
        { min: 3, descanso: 1, objetivo: "Comba suave con paso de boxeador para entrar en calor.", drill: "box-comba" },
        { min: 4, descanso: 0, objetivo: "Movilidad de hombros, cadera y tobillos, sin prisa." },
        { min: 3, descanso: 1, objetivo: "Repaso en el espejo: ganchos con el codo a la altura del puño.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Cinta: pivotes sobre la punta del pie izquierdo, un cuarto de vuelta cada vez.", drill: "box-patrones-pies" },
        { min: 3, descanso: 1, objetivo: "Sombra: después de cada 1-2, sal en ángulo hacia tu izquierda.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Pared: mide con un jab rápido y toca la cinta sin inclinarte.", drill: "box-drill-distancia" },
        { min: 3, descanso: 1, objetivo: "Pared: cambia de distancia cada 20 segundos y lanza el golpe que toca.", drill: "box-drill-distancia" },
        { min: 3, descanso: 1, objetivo: "Pelota: golpéala con el jab y esquiva la vuelta sin bajar las manos.", drill: "box-pelota" },
        { min: 3, descanso: 1, objetivo: "Sombra: imagina al rival entrando y saliendo; elige el golpe según la distancia.", drill: "box-sombra" },
        { min: 3, descanso: 0, objetivo: "Shadow libre grabándote de lado: ángulos, pivotes y distancia." }
      ]
    },
    {
      id: "f2-cardio", fase: 2, titulo: "Cardio de tren superior: shadow con curvos y pies", duracion: 30, tipo: "cardio",
      asaltos: [
        { min: 4, descanso: 0, objetivo: "Shadow muy suave para entrar en calor: solo pies y guardia.", drill: "box-sombra" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo con rectos y ganchos, a un ritmo en el que podrías hablar.", drill: "box-sombra" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo pivotando después de cada combinación.", drill: "box-sombra" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo cambiando de distancia: entra, golpea y sal.", drill: "box-sombra" },
        { min: 4, descanso: 0, objetivo: "Shadow muy suave para bajar pulsaciones." }
      ]
    },
    {
      id: "f3-defensa", fase: 3, titulo: "Defensa", duracion: 40, tipo: "tecnica",
      asaltos: [
        { min: 3, descanso: 1, objetivo: "Comba suave con paso de boxeador para entrar en calor.", drill: "box-comba" },
        { min: 4, descanso: 0, objetivo: "Movilidad de hombros, cadera, cuello y tobillos, sin prisa." },
        { min: 3, descanso: 1, objetivo: "Repaso: sombra de rectos y curvos saliendo en ángulo.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Espejo: paradas lentas del jab con la palma derecha.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Espejo: bloqueos con el guante pegado a la sien y el codo a las costillas.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Cuerda: esquiva por debajo doblando las rodillas, no la espalda.", drill: "box-cuerda" },
        { min: 3, descanso: 1, objetivo: "Cuerda: rodar dibujando una «U» y subir con las manos en la cara.", drill: "box-cuerda" },
        { min: 3, descanso: 1, objetivo: "Pelota: golpéala y esquiva la vuelta mirándola con los ojos.", drill: "box-pelota" },
        { min: 3, descanso: 1, objetivo: "Sombra solo de defensa: cada golpe imaginario, con su defensa.", drill: "box-sombra-defensa" },
        { min: 3, descanso: 0, objetivo: "Shadow libre grabándote de lado: defensas pequeñas y vuelta a la guardia." }
      ]
    },
    {
      id: "f3-contras", fase: 3, titulo: "Contragolpe y fintas", duracion: 40, tipo: "tecnica",
      asaltos: [
        { min: 3, descanso: 1, objetivo: "Comba suave con paso de boxeador para entrar en calor.", drill: "box-comba" },
        { min: 4, descanso: 0, objetivo: "Movilidad de hombros, cadera, cuello y tobillos, sin prisa." },
        { min: 3, descanso: 1, objetivo: "Repaso: sombra solo de defensa.", drill: "box-sombra-defensa" },
        { min: 3, descanso: 1, objetivo: "Sombra: retroceso con el peso y directo, sin mover el pie izquierdo.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Sombra: esquiva su jab y suelta el directo casi a la vez.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Sombra: para con la palma y devuelve sin bajar esa mano.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Sombra: una finta y un golpe de verdad, nunca dos fintas seguidas.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Pelota: golpea, esquiva la vuelta y devuelve otro golpe.", drill: "box-pelota" },
        { min: 3, descanso: 1, objetivo: "Sombra libre de defensa y contragolpe.", drill: "box-sombra-defensa" },
        { min: 3, descanso: 0, objetivo: "Shadow libre grabándote de frente: cada contra justo después de la defensa." }
      ]
    },
    {
      id: "f3-cardio", fase: 3, titulo: "Cardio de tren superior: shadow con defensa", duracion: 30, tipo: "cardio",
      asaltos: [
        { min: 4, descanso: 0, objetivo: "Shadow muy suave para entrar en calor: solo pies y guardia.", drill: "box-sombra" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo esquivando y respondiendo, a un ritmo en el que podrías hablar.", drill: "box-sombra-defensa" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo con fintas y salidas en ángulo.", drill: "box-sombra" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo: rueda bajo un gancho imaginario y responde con otro.", drill: "box-sombra-defensa" },
        { min: 4, descanso: 0, objetivo: "Shadow muy suave para bajar pulsaciones." }
      ]
    },
    {
      id: "f3-cuerpo", fase: 3, titulo: "Cuerpo", duracion: 40, tipo: "tecnica",
      asaltos: [
        { min: 3, descanso: 1, objetivo: "Comba suave con paso de boxeador para entrar en calor.", drill: "box-comba" },
        { min: 4, descanso: 0, objetivo: "Movilidad de hombros, cadera, rodillas y tobillos, sin prisa." },
        { min: 3, descanso: 1, objetivo: "Repaso: sombra solo de defensa.", drill: "box-sombra-defensa" },
        { min: 3, descanso: 1, objetivo: "Espejo: jab al cuerpo bajando con las rodillas, no con la espalda.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Espejo: directo al cuerpo con la mano izquierda en la cara.", drill: "box-espejo" },
        { min: 3, descanso: 1, objetivo: "Sombra: gancho izquierdo al cuerpo con el codo cerca.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Sombra: jab arriba, directo al cuerpo y gancho arriba.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Goma: golpes al cuerpo lentos, notando el giro de cadera.", drill: "box-gomas" },
        { min: 3, descanso: 1, objetivo: "Sombra libre de defensa con contras al cuerpo.", drill: "box-sombra-defensa" },
        { min: 3, descanso: 0, objetivo: "Shadow libre grabándote de lado: bajas con las rodillas y vuelves arriba." }
      ]
    },
    {
      id: "f4-fluidez", fase: 4, titulo: "Fluidez y combinaciones largas", duracion: 40, tipo: "tecnica",
      asaltos: [
        { min: 3, descanso: 1, objetivo: "Comba suave con paso de boxeador para entrar en calor.", drill: "box-comba" },
        { min: 4, descanso: 0, objetivo: "Movilidad de hombros, cadera y tobillos, sin prisa." },
        { min: 3, descanso: 1, objetivo: "Repaso: sombra de defensa y contragolpe.", drill: "box-sombra-defensa" },
        { min: 3, descanso: 1, objetivo: "Sombra lenta y suelta: hombros bajos y un soplido por golpe.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Sombra: 1-2-3-2 sin pausas, saliendo en ángulo.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Sombra: 2-3-2 a media y corta distancia.", drill: "box-sombra" },
        { min: 3, descanso: 1, objetivo: "Shadow táctico: rival que presiona.", drill: "box-shadow-tactico" },
        { min: 3, descanso: 1, objetivo: "Shadow táctico: rival que se aleja.", drill: "box-shadow-tactico" },
        { min: 3, descanso: 1, objetivo: "Shadow táctico: rival que se cubre.", drill: "box-shadow-tactico" },
        { min: 3, descanso: 0, objetivo: "Shadow libre grabándote: suelto, con un plan y fuera de la línea." }
      ]
    },
    {
      id: "f4-tactico", fase: 4, titulo: "Sesión guiada y shadow táctico", duracion: 40, tipo: "tecnica",
      asaltos: [
        { min: 3, descanso: 1, objetivo: "Comba suave con paso de boxeador para entrar en calor.", drill: "box-comba" },
        { min: 4, descanso: 0, objetivo: "Movilidad de hombros, cadera y tobillos, sin prisa." },
        { min: 3, descanso: 1, objetivo: "Repaso: sombra solo de defensa.", drill: "box-sombra-defensa" },
        { min: 16, descanso: 1, objetivo: "Sigue la sesión de 16 minutos de Jeffries, suelto y con técnica limpia.", drill: "box-sesion-16" },
        { min: 3, descanso: 1, objetivo: "Shadow táctico: elige tú el rival y no lo cambies en todo el asalto.", drill: "box-shadow-tactico" },
        { min: 3, descanso: 1, objetivo: "Shadow táctico: el rival contrario al del asalto anterior.", drill: "box-shadow-tactico" },
        { min: 3, descanso: 0, objetivo: "Shadow libre grabándote: compáralo con tu grabación de la semana 1." }
      ]
    },
    {
      id: "f4-cardio", fase: 4, titulo: "Cardio de tren superior: shadow táctico continuo", duracion: 30, tipo: "cardio",
      asaltos: [
        { min: 4, descanso: 0, objetivo: "Shadow muy suave para entrar en calor: solo pies y guardia.", drill: "box-sombra" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo con combinaciones de cuatro golpes, suelto y respirando.", drill: "box-sombra" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo: cambia de rival imaginario cada minuto.", drill: "box-shadow-tactico" },
        { min: 6, descanso: 1, objetivo: "Shadow continuo con golpes arriba y abajo y salidas en ángulo.", drill: "box-sombra" },
        { min: 4, descanso: 0, objetivo: "Shadow muy suave para bajar pulsaciones." }
      ]
    }
  ]
};
