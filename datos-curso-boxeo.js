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
    }
  ]
};
