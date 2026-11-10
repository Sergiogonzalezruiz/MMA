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
    }
  ]
};
