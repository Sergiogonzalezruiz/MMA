// =============================================================
//  SUELO (BJJ para MMA)
//  POSICIONES: los nodos del mapa de suelo. Fichas: técnicas y drills.
//  Campos propios de suelo: desde/hasta {pos, lado}, gi (ambos|gi|nogi),
//  jju (id del capítulo de Jiu-Jitsu University en datos-comun.js)
// =============================================================
MMA.POSICIONES = [
  {
    "id": "base",
    "es": "Movimientos base",
    "en": "Fundamental movements",
    "pt": "Movimentos básicos",
    "grupo": "base",
    "desc": "Los movimientos que están dentro de casi todas las técnicas. Antes de cualquier escape tienes que saber mover la cadera y levantarte bien.",
    "lados": {
      "neutral": "Practícalos solo, sin compañero, hasta que salgan sin pensar."
    }
  },
  {
    "id": "guardia-cerrada",
    "es": "Guardia cerrada",
    "en": "Closed guard",
    "pt": "Guarda fechada",
    "grupo": "suelo",
    "desc": "Estás de espaldas con las piernas cerradas alrededor de la cintura del rival. Es la guardia más básica y una de las más seguras.",
    "lados": {
      "abajo": "Romper su postura y atacar: raspados para quedar encima y sumisiones.",
      "arriba": "Mantener la postura para no ser atacado, abrir sus piernas y pasar la guardia."
    }
  },
  {
    "id": "cien-kilos",
    "es": "Cien kilos",
    "en": "Side control",
    "pt": "Cem quilos",
    "grupo": "suelo",
    "desc": "Control lateral: el de arriba está atravesado sobre el pecho del de abajo, fuera de sus piernas.",
    "lados": {
      "abajo": "Sobrevivir con marcos, crear espacio y recuperar la guardia.",
      "arriba": "Mantener el peso, subir a montada o atacar los brazos."
    }
  },
  {
    "id": "mariposa",
    "es": "Mariposa y guardia sentada",
    "en": "Butterfly / sit-up guard",
    "pt": "Guarda borboleta",
    "desc": "Sentado, con los empeines por dentro de sus muslos. En MMA es la guardia puente para levantarse.",
    "lados": {
      "abajo": "Desequilibrar, raspar o levantarte (wrestle-up).",
      "arriba": "Presión y postura para que no te levante ni te raspe."
    }
  },
  {
    "id": "montada",
    "es": "Montada",
    "en": "Mount",
    "pt": "Montada",
    "grupo": "suelo",
    "desc": "Sentado sobre el torso del rival. Vale 4 puntos y en MMA es de las peores posiciones para estar abajo.",
    "lados": {
      "abajo": "Proteger los brazos y el cuello, y escapar: upa o codo-rodilla.",
      "arriba": "Mantener la montada y finalizar: americana, llave de brazo o tomar la espalda."
    }
  },
  {
    "id": "espalda",
    "es": "Espalda",
    "en": "Back control",
    "pt": "Pegada nas costas",
    "grupo": "suelo",
    "desc": "Pegado a la espalda del rival con ganchos o un triángulo de cuerpo. La posición más dominante del jiu-jitsu.",
    "lados": {
      "abajo": "Primero proteger el cuello. Después llevar la espalda al suelo y salir.",
      "arriba": "Mantener el pecho pegado a su espalda y estrangular."
    }
  },
  {
    "id": "media-guardia",
    "es": "Media guardia",
    "en": "Half guard",
    "pt": "Meia-guarda",
    "desc": "Una de tus piernas atrapa una de las suyas. En MMA es la guardia desde la que más se raspa y desde la que más se levanta.",
    "lados": {
      "abajo": "Ponerte de lado, ganar el underhook y salir a raspar, a la espalda o de pie.",
      "arriba": "Aplastar con crossface y underhook para pasar o golpear."
    }
  },
  {
    "id": "guardias-abiertas",
    "es": "Guardias abiertas",
    "en": "Open guards",
    "pt": "Guardas abertas",
    "grupo": "suelo",
    "pronto": true
  },
  {
    "id": "rodilla-vientre",
    "es": "Rodilla en el vientre",
    "en": "Knee on belly",
    "pt": "Joelho na barriga",
    "grupo": "suelo",
    "pronto": true
  },
  {
    "id": "tortuga",
    "es": "Tortuga",
    "en": "Turtle",
    "pt": "Tartaruga",
    "grupo": "suelo",
    "pronto": true
  }
];

MMA.add([
  {
    "id": "gamba",
    "seccion": "suelo",
    "tipo": "drill",
    "cat": "movimiento",
    "es": "Gamba",
    "en": "Shrimp / Hip escape",
    "pt": "Fuga de quadril",
    "alias": [
      "fuga de cadera",
      "shrimping"
    ],
    "nivel": "F",
    "mma": "alta",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "si",
    "material": [
      "esterilla"
    ],
    "desde": {
      "pos": "base",
      "lado": "neutral"
    },
    "hasta": null,
    "objetivo": "Alejar la cadera del rival para crear espacio. Está dentro de casi todos los escapes desde abajo.",
    "pasos": [
      "Túmbate de lado con un pie apoyado en el suelo.",
      "Empuja con ese pie y lleva la cadera hacia atrás, apoyado en el hombro.",
      "Mientras la cadera sale, estira los brazos hacia los pies como si apartaras algo.",
      "Vuelve a quedar de lado y repite hacia el otro lado."
    ],
    "detalles": [
      "El movimiento sale de la cadera, no de los hombros.",
      "Ponte de lado: tumbado de espaldas no te desplazas."
    ],
    "errores": [
      "Quedarse plano sobre la espalda.",
      "Empujar solo con los brazos sin mover la cadera."
    ],
    "reacciones": [],
    "combina": [
      "escape-cien-kilos",
      "codo-rodilla"
    ],
    "dosis": "3 × 10 m",
    "criterio": "Gamba en línea recta 10 m sin girar el cuerpo.",
    "videos": [
      {
        "id": "3hROB_XHTRo",
        "inicio": 0,
        "fin": null,
        "instructor": "Chess Club Jiu-Jitsu",
        "canal": "Chess Club Jiu-Jitsu",
        "idioma": "en"
      },
      {
        "id": "4fyMiLey6rI",
        "inicio": 0,
        "fin": null,
        "instructor": "Henry Akins",
        "idioma": "en",
        "etiqueta": "Henry Akins"
      }
    ]
  },
  {
    "id": "levantamiento",
    "seccion": "suelo",
    "tipo": "drill",
    "cat": "movimiento",
    "es": "Levantamiento técnico",
    "en": "Technical stand-up",
    "pt": "Levantada técnica",
    "alias": [
      "levantarse en base",
      "standing up in base"
    ],
    "nivel": "F",
    "mma": "muy alta",
    "gi": "ambos",
    "fases": [
      "levantarse"
    ],
    "solo": "si",
    "material": [
      "ninguno"
    ],
    "desde": {
      "pos": "base",
      "lado": "neutral"
    },
    "hasta": null,
    "objetivo": "Levantarte del suelo sin perder el equilibrio ni dejar la cabeza al alcance. Clave en MMA y defensa personal.",
    "pasos": [
      "Sentado, apoya una mano detrás y planta el pie contrario delante.",
      "La otra mano y la otra pierna quedan delante para protegerte y mantener distancia.",
      "Levanta la cadera apoyándote en la mano y el pie plantados.",
      "Pasa la pierna libre por debajo y hacia atrás, y quedas de pie en guardia."
    ],
    "detalles": [
      "La pierna pasa hacia atrás, por debajo del cuerpo, no hacia delante.",
      "No pierdas de vista al rival mientras te levantas."
    ],
    "errores": [
      "Levantarse de frente apoyando las dos manos.",
      "Dejar la cabeza adelantada, al alcance de un golpe o una guillotina."
    ],
    "reacciones": [],
    "combina": [],
    "dosis": "3 × 10 por lado",
    "videos": [
      {
        "id": "4yc0Swz_El0",
        "inicio": 0,
        "fin": null,
        "instructor": "Ritchie Yip",
        "canal": "Ritchie Yip",
        "idioma": "en"
      },
      {
        "id": "zXEHiqA8B7o",
        "inicio": 0,
        "fin": null,
        "instructor": "MRJJA",
        "idioma": "en",
        "etiqueta": "Otra explicación"
      }
    ]
  },
  {
    "id": "guillotina",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "sumision",
    "es": "Guillotina",
    "en": "Guillotine choke",
    "pt": "Guilhotina",
    "alias": [
      "guillotine"
    ],
    "nivel": "F",
    "mma": "muy alta",
    "mmaNota": "17,7 % de las sumisiones de la UFC: castiga al que entra a derribar con la cabeza baja.",
    "gi": "ambos",
    "fases": [
      "clinch",
      "defensa",
      "suelo-abajo"
    ],
    "solo": "parcial",
    "material": [
      "companero"
    ],
    "jju": "mma-cabeza-brazo",
    "desde": {
      "pos": "guardia-cerrada",
      "lado": "abajo"
    },
    "hasta": null,
    "objetivo": "Estrangulación frontal cuando el rival baja la cabeza: tras un derribo mal hecho o desde la guardia.",
    "pasos": [
      "Rodea su cuello con el brazo, con la muñeca bajo su barbilla.",
      "Agarra esa muñeca con la otra mano.",
      "Si estás de pie, saca la cadera atrás; si no, cae a la guardia y cierra las piernas.",
      "Lleva la muñeca hacia tu pecho mientras estiras el cuerpo."
    ],
    "detalles": [
      "Aprieta con el hueso de la muñeca, no con el antebrazo plano.",
      "Controla su cuerpo con las piernas para que no gire y se libere."
    ],
    "errores": [
      "Tirar solo con los brazos.",
      "Caer plano a la guardia, sin ángulo."
    ],
    "reacciones": [],
    "drills": [
      "su-drill-muneco"
    ],
    "combina": [
      "lu-doble",
      "raspado-cadera"
    ],
    "videos": [
      {
        "id": "VLQ-hNFQ8Kk",
        "inicio": 0,
        "fin": null,
        "instructor": "De Groot BJJ",
        "canal": "Haven BJJ",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "triangulo",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "sumision",
    "es": "Triángulo",
    "en": "Triangle choke",
    "pt": "Triângulo",
    "alias": [
      "sankaku jime"
    ],
    "nivel": "I",
    "mma": "alta",
    "mmaNota": "6,9 % de las sumisiones de la UFC; contra la jaula cuesta más coger el ángulo.",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "no",
    "material": [
      "companero"
    ],
    "jju": "gua-cerrada",
    "desde": {
      "pos": "guardia-cerrada",
      "lado": "abajo"
    },
    "hasta": null,
    "objetivo": "Estrangulación con las piernas que atrapa la cabeza y un brazo del rival.",
    "pasos": [
      "Rompe su postura y controla sus muñecas.",
      "Lleva un brazo suyo fuera de tus piernas y deja el otro dentro: un brazo dentro, otro fuera.",
      "Sube la pierna por encima de su cuello y gira el cuerpo para coger ángulo.",
      "Cierra el triángulo: el empeine detrás de tu otra rodilla.",
      "Baja su cabeza con las manos y aprieta las rodillas."
    ],
    "detalles": [
      "Un brazo dentro y otro fuera. Con los dos dentro o los dos fuera no hay estrangulación.",
      "Girar hacia un lado aprieta mucho más que quedarse de frente."
    ],
    "errores": [
      "Quedarse de frente, sin ángulo.",
      "Dejar que recupere la postura."
    ],
    "reacciones": [
      {
        "si": "Se levanta y saca la cabeza",
        "ref": "armbar-guardia",
        "txt": "Cambia a la llave de brazo"
      }
    ],
    "drills": [
      "su-drill-cadera"
    ],
    "combina": [
      "armbar-guardia"
    ],
    "videos": [
      {
        "id": "3r7xjdswykI",
        "inicio": 0,
        "fin": null,
        "instructor": "TMAANZ",
        "canal": "TMAANZ",
        "idioma": "en"
      },
      {
        "id": "k54daRsX3co",
        "inicio": 0,
        "fin": null,
        "instructor": "GMAU",
        "canal": "Global Martial Arts University",
        "idioma": "en",
        "etiqueta": "Alternativo"
      }
    ]
  },
  {
    "id": "armbar-guardia",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "sumision",
    "es": "Llave de brazo desde la guardia",
    "en": "Armbar from closed guard",
    "pt": "Chave de braço da guarda",
    "alias": [
      "palanca de brazo",
      "juji gatame",
      "armlock"
    ],
    "nivel": "I",
    "mma": "alta",
    "mmaNota": "La llave de brazo es el 11,8 % de las sumisiones de la UFC.",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "no",
    "material": [
      "companero"
    ],
    "jju": "gua-cerrada",
    "desde": {
      "pos": "guardia-cerrada",
      "lado": "abajo"
    },
    "hasta": null,
    "objetivo": "Hiperextender el codo del rival cuando deja un brazo dentro de tu guardia.",
    "pasos": [
      "Controla un brazo por la muñeca y el codo, pegado a tu pecho.",
      "Apoya el pie en su cadera y gira el cuerpo hasta quedar perpendicular a él.",
      "Pasa la pierna por delante de su cara.",
      "Junta las rodillas, deja su pulgar hacia arriba y levanta la cadera poco a poco."
    ],
    "detalles": [
      "El giro del cuerpo es lo que te da el ángulo, no las piernas solas.",
      "Su pulgar apunta hacia arriba para que el codo quede contra tu cadera."
    ],
    "errores": [
      "Soltar el brazo mientras giras.",
      "Dejar las rodillas separadas: saca el brazo por el hueco."
    ],
    "reacciones": [
      {
        "si": "Saca el brazo atrapado",
        "ref": "triangulo",
        "txt": "Ataca el triángulo"
      }
    ],
    "drills": [
      "su-drill-cadera",
      "su-drill-muneco"
    ],
    "combina": [
      "triangulo"
    ],
    "videos": [
      {
        "id": "bX_RfEbxmd4",
        "inicio": 0,
        "fin": 179,
        "instructor": "Seymour Yang (Meerkatsu)",
        "canal": "Meerkatsu's BJJ Videos",
        "idioma": "en",
        "segmentos": [
          {
            "t": "La llave básica",
            "inicio": 0,
            "fin": 179
          },
          {
            "t": "Desde guardia alta",
            "inicio": 179,
            "fin": 268
          },
          {
            "t": "Raspado a llave sentado",
            "inicio": 268,
            "fin": 372
          },
          {
            "t": "En un solo movimiento",
            "inicio": 372,
            "fin": null
          }
        ]
      }
    ]
  },
  {
    "id": "kimura-guardia",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "sumision",
    "es": "Kimura desde la guardia",
    "en": "Kimura from closed guard",
    "pt": "Kimura da guarda",
    "alias": [
      "gyaku ude garami",
      "kimura"
    ],
    "nivel": "I",
    "mma": "alta",
    "mmaNota": "Poco frecuente como final (2,6 %), pero muy útil para controlar.",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "no",
    "material": [
      "companero"
    ],
    "jju": "gua-cerrada",
    "desde": {
      "pos": "guardia-cerrada",
      "lado": "abajo"
    },
    "hasta": null,
    "objetivo": "Luxación de hombro cuando el rival apoya una mano en el suelo.",
    "pasos": [
      "Cuando apoye una mano en el suelo, siéntate y agarra su muñeca.",
      "Pasa tu otro brazo por encima de su hombro y agarra tu propia muñeca (figura 4).",
      "Vuelve a tumbarte, ponte de lado y cierra la guardia sobre su espalda.",
      "Lleva su mano hacia su espalda, girando el hombro, hasta que palmee."
    ],
    "detalles": [
      "Ponte de lado: de frente no hay ángulo.",
      "Su codo, pegado a tu pecho todo el tiempo."
    ],
    "errores": [
      "Dejar que estire el brazo.",
      "Aplicarla de golpe: el hombro se lesiona rápido."
    ],
    "reacciones": [
      {
        "si": "Se agarra su propio cinturón o pierna para defender",
        "txt": "Usa ese agarre para raspar (raspado de kimura)"
      }
    ],
    "drills": [
      "su-drill-muneco",
      "su-drill-cadera"
    ],
    "combina": [
      "raspado-cadera"
    ],
    "videos": [
      {
        "id": "7lQ8eiYh-5w",
        "inicio": 0,
        "fin": null,
        "instructor": "Roy Dean",
        "canal": "BJJ Fanatics",
        "idioma": "en"
      },
      {
        "id": "iMXfVlgOvcQ",
        "inicio": 0,
        "fin": null,
        "instructor": "TMAANZ",
        "canal": "TMAANZ",
        "idioma": "en",
        "etiqueta": "Alternativo"
      }
    ]
  },
  {
    "id": "tijera",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "guardia",
    "es": "Raspado de tijera",
    "en": "Scissor sweep",
    "pt": "Raspagem de tesoura",
    "alias": [
      "scissor"
    ],
    "nivel": "I",
    "mma": "media",
    "mmaNota": "Funciona, pero en MMA levantarse suele ser prioritario.",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "no",
    "material": [
      "companero"
    ],
    "jju": "gua-cerrada",
    "desde": {
      "pos": "guardia-cerrada",
      "lado": "abajo"
    },
    "hasta": {
      "pos": "montada",
      "lado": "arriba"
    },
    "objetivo": "Darle la vuelta al rival desde la guardia y acabar montado.",
    "pasos": [
      "Agarra su cuello o solapa con una mano y su manga o muñeca del mismo lado con la otra.",
      "Abre la guardia, haz gamba y cruza tu espinilla sobre su abdomen.",
      "Baja la otra pierna al suelo, junto a su rodilla.",
      "Tira de él hacia ti y corta: la pierna de arriba empuja, la de abajo barre.",
      "Rueda con él hasta la montada."
    ],
    "detalles": [
      "Tirar de él hacia delante es lo que lo desequilibra.",
      "Controla el brazo del lado hacia el que cae, para que no se apoye."
    ],
    "errores": [
      "Barrer sin tirar del rival hacia ti.",
      "No controlar el brazo: lo pone en el suelo y frena."
    ],
    "reacciones": [],
    "drills": [
      "su-drill-cadera",
      "gamba"
    ],
    "combina": [
      "raspado-cadera"
    ],
    "videos": [
      {
        "id": "zXM-s4SeA9Y",
        "inicio": 0,
        "fin": null,
        "instructor": "Lineage BJJ",
        "canal": "Lineage BJJ",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "raspado-cadera",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "guardia",
    "es": "Raspado de cadera",
    "en": "Hip bump sweep",
    "pt": "Raspagem de quadril",
    "alias": [
      "sit-up sweep",
      "hip bump"
    ],
    "nivel": "I",
    "mma": "alta",
    "mmaNota": "Encadena bien con kimura y guillotina.",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "parcial",
    "material": [
      "companero"
    ],
    "jju": "gua-cerrada",
    "desde": {
      "pos": "guardia-cerrada",
      "lado": "abajo"
    },
    "hasta": {
      "pos": "montada",
      "lado": "arriba"
    },
    "objetivo": "Raspado rápido cuando el rival se sienta erguido dentro de tu guardia.",
    "pasos": [
      "Abre la guardia y siéntate, apoyando una mano detrás.",
      "Pasa el otro brazo por encima de su hombro, del mismo lado.",
      "Levanta la cadera hacia él con fuerza y empuja en diagonal.",
      "Rueda encima y acaba montado."
    ],
    "detalles": [
      "Funciona mejor cuando está erguido; si está inclinado sobre ti, cuesta más.",
      "La cadera empuja hacia arriba y hacia él, no solo hacia arriba."
    ],
    "errores": [
      "Sentarse a medias, sin apoyar la mano detrás.",
      "Empujar con el brazo en vez de con la cadera."
    ],
    "reacciones": [
      {
        "si": "Apoya la mano en el suelo para no caer",
        "ref": "kimura-guardia",
        "txt": "Coge la kimura"
      },
      {
        "si": "Se echa hacia delante y baja la cabeza",
        "ref": "guillotina",
        "txt": "Ataca la guillotina"
      }
    ],
    "drills": [
      "su-drill-cadera",
      "su-sit-out"
    ],
    "combina": [
      "kimura-guardia",
      "guillotina"
    ],
    "videos": [
      {
        "id": "KI7vAqjYxpc",
        "inicio": 0,
        "fin": null,
        "instructor": "Jean Jacques Machado",
        "canal": "Jean Jacques Machado",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "abrir-guardia",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "pase",
    "es": "Abrir la guardia cerrada",
    "en": "Opening the closed guard",
    "pt": "Abrir a guarda fechada",
    "alias": [
      "knee post",
      "romper la guardia"
    ],
    "nivel": "I",
    "mma": "alta",
    "mmaNota": "En MMA se suele abrir de pie o golpeando.",
    "gi": "ambos",
    "fases": [
      "suelo-arriba"
    ],
    "solo": "no",
    "material": [
      "companero"
    ],
    "jju": "pas-cerrada",
    "desde": {
      "pos": "guardia-cerrada",
      "lado": "arriba"
    },
    "hasta": {
      "pos": "cien-kilos",
      "lado": "arriba"
    },
    "objetivo": "Abrir las piernas del rival desde arriba sin exponerte a sus ataques. Es el primer paso para pasar la guardia.",
    "pasos": [
      "Postura: espalda recta, cabeza alta y manos controlando su cadera.",
      "Adelanta una rodilla hasta su coxis y lleva la otra pierna atrás, en ángulo.",
      "Empuja la cadera hacia atrás y abajo hasta que sus tobillos se suelten.",
      "Controla una de sus rodillas y empieza el pase."
    ],
    "detalles": [
      "Sin postura no hay pase: recupérala siempre primero.",
      "No metas un solo brazo entre sus piernas: le das el triángulo."
    ],
    "errores": [
      "Inclinarse hacia delante.",
      "Intentar abrir con los brazos en vez de con la cadera."
    ],
    "reacciones": [],
    "drills": [
      "su-drill-sombra"
    ],
    "combina": [],
    "videos": [
      {
        "id": "FChiT98_Cgg",
        "inicio": 0,
        "fin": null,
        "instructor": "John Danaher",
        "canal": "BJJ Fanatics",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "upa",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "escape",
    "es": "Upa",
    "en": "Bridge and roll / Trap and roll",
    "pt": "Upa",
    "alias": [
      "puente y giro",
      "bridge and roll",
      "trap and roll"
    ],
    "nivel": "F",
    "mma": "muy alta",
    "mmaNota": "Con golpes, el puente tiene que llegar antes de que acomode la postura.",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "parcial",
    "material": [
      "esterilla"
    ],
    "jju": "esc-montada",
    "desde": {
      "pos": "montada",
      "lado": "abajo"
    },
    "hasta": {
      "pos": "guardia-cerrada",
      "lado": "arriba"
    },
    "objetivo": "Darle la vuelta al rival que te tiene montado y acabar dentro de su guardia.",
    "pasos": [
      "Atrapa uno de sus brazos contra tu pecho, controlando codo y muñeca.",
      "Atrapa con tu pie el pie del mismo lado, por fuera.",
      "Haz un puente explosivo hacia arriba y en diagonal, por encima de tu hombro, hacia el lado atrapado.",
      "Rueda con él y acaba arriba, dentro de su guardia, con buena postura."
    ],
    "detalles": [
      "Brazo y pie del mismo lado: así no tiene apoyo para frenar el giro.",
      "El puente va hacia arriba y en diagonal, no recto hacia arriba."
    ],
    "errores": [
      "Hacer el puente sin atrapar el brazo: pone la mano y te frena.",
      "Girar hacia el lado que no tienes atrapado."
    ],
    "reacciones": [
      {
        "si": "Abre la pierna o apoya la mano para frenar",
        "ref": "codo-rodilla",
        "txt": "Cambia al escape de codo-rodilla"
      }
    ],
    "drills": [
      "su-drill-puente",
      "su-rutina-solo"
    ],
    "combina": [
      "codo-rodilla"
    ],
    "videos": [
      {
        "id": "UyxNPnR24hE",
        "inicio": 0,
        "fin": null,
        "instructor": "CORE MMA",
        "canal": "CORE MMA",
        "idioma": "en"
      },
      {
        "id": "RbxKgjjRZeY",
        "inicio": 0,
        "fin": null,
        "instructor": "Pure Art BJJ",
        "canal": "Pure Art BJJ Portsmouth",
        "idioma": "en",
        "etiqueta": "Alternativo"
      }
    ]
  },
  {
    "id": "codo-rodilla",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "escape",
    "es": "Escape de codo-rodilla",
    "en": "Elbow-knee escape",
    "alias": [
      "escape de codo",
      "elbow escape",
      "knee elbow escape"
    ],
    "nivel": "F",
    "mma": "alta",
    "mmaNota": "Mantén los codos pegados: abrir los brazos es recibir golpes.",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "parcial",
    "material": [
      "esterilla"
    ],
    "jju": "esc-montada",
    "desde": {
      "pos": "montada",
      "lado": "abajo"
    },
    "hasta": {
      "pos": "guardia-cerrada",
      "lado": "abajo"
    },
    "objetivo": "Recuperar la guardia desde debajo de la montada cuando el upa no sale.",
    "pasos": [
      "Haz un pequeño puente para desplazarle y ponte de lado.",
      "Mete el codo junto a su rodilla y empuja esa rodilla hacia tus pies mientras haces gamba.",
      "Saca tu rodilla por debajo de su pierna y atrápala (media guardia).",
      "Repite hacia el otro lado y cierra la guardia."
    ],
    "detalles": [
      "Codo y rodilla juntos: no dejes hueco para que vuelva a subir.",
      "La gamba crea el espacio; el codo solo hace de cuña."
    ],
    "errores": [
      "Empujar con los brazos estirados: te expones a una llave de brazo.",
      "Quedarse plano en vez de ponerse de lado."
    ],
    "reacciones": [
      {
        "si": "Se sienta pesado y aplasta tu cadera",
        "ref": "upa",
        "txt": "Vuelve a intentar el upa"
      }
    ],
    "drills": [
      "gamba",
      "su-drill-puente",
      "su-rutina-solo"
    ],
    "combina": [
      "upa",
      "gamba"
    ],
    "videos": [
      {
        "id": "SLecLzOCVNc",
        "inicio": 0,
        "fin": null,
        "instructor": "CORE MMA",
        "canal": "CORE MMA",
        "idioma": "en"
      },
      {
        "id": "_D_Sl_OHii4",
        "inicio": 0,
        "fin": null,
        "instructor": "Ritchie Yip",
        "canal": "Ritchie Yip",
        "idioma": "en",
        "etiqueta": "Alternativo"
      }
    ]
  },
  {
    "id": "americana-montada",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "sumision",
    "es": "Americana",
    "en": "Americana / Keylock",
    "pt": "Americana",
    "alias": [
      "keylock",
      "ude garami",
      "llave de hombro"
    ],
    "nivel": "F",
    "mma": "alta",
    "mmaNota": "Aparece cuando el rival empuja para protegerse de los golpes.",
    "gi": "ambos",
    "fases": [
      "suelo-arriba"
    ],
    "solo": "no",
    "material": [
      "companero"
    ],
    "jju": "sum-montada",
    "desde": {
      "pos": "montada",
      "lado": "arriba"
    },
    "hasta": null,
    "objetivo": "Luxación de hombro desde arriba cuando el rival deja un brazo en el suelo junto a la cabeza.",
    "pasos": [
      "Lleva su muñeca al suelo, a la altura de su cabeza, con el codo doblado en ángulo recto.",
      "Con la otra mano pasa por debajo de su brazo y agarra tu propia muñeca (figura 4).",
      "Mantén su muñeca pegada al suelo y deslízala hacia su cadera.",
      "Levanta su codo, como si pintara el suelo con la mano, hasta que palmee."
    ],
    "detalles": [
      "Su muñeca no se despega del suelo en ningún momento.",
      "Tu pecho cerca y encima de su brazo."
    ],
    "errores": [
      "Levantar su muñeca del suelo: se pierde la palanca.",
      "Aplicarla de golpe."
    ],
    "reacciones": [
      {
        "si": "Estira el brazo para defenderse",
        "ref": "armbar-montada",
        "txt": "Pasa a la llave de brazo"
      }
    ],
    "drills": [
      "su-drill-muneco",
      "su-drill-sombra"
    ],
    "combina": [
      "armbar-montada"
    ],
    "videos": [
      {
        "id": "5M1wkbaOYUM",
        "inicio": 0,
        "fin": null,
        "instructor": "André Galvão",
        "canal": "BJJ Fanatics",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "armbar-montada",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "sumision",
    "es": "Llave de brazo desde la montada",
    "en": "Armbar from mount",
    "pt": "Chave de braço da montada",
    "alias": [
      "palanca de brazo",
      "juji gatame",
      "armlock"
    ],
    "nivel": "F",
    "mma": "alta",
    "mmaNota": "El rival que empuja para quitarte de encima te deja el brazo.",
    "gi": "ambos",
    "fases": [
      "suelo-arriba"
    ],
    "solo": "no",
    "material": [
      "companero"
    ],
    "jju": "sum-montada",
    "desde": {
      "pos": "montada",
      "lado": "arriba"
    },
    "hasta": null,
    "objetivo": "Llave de brazo cuando el rival empuja o separa los brazos del cuerpo.",
    "pasos": [
      "Sube la montada hacia sus axilas (montada alta).",
      "Aísla un brazo y atrápalo contra tu pecho.",
      "Gira hacia ese brazo, apóyate en su pecho y pasa la pierna por encima de su cabeza.",
      "Siéntate pegado a su hombro, aprieta las rodillas y deja su pulgar hacia arriba.",
      "Túmbate hacia atrás y levanta la cadera poco a poco."
    ],
    "detalles": [
      "Cuanto más pegada esté tu cadera a su hombro, menos espacio para escapar.",
      "Las rodillas juntas: el brazo no tiene que poder salir."
    ],
    "errores": [
      "Sentarte lejos de su hombro.",
      "Soltar el brazo al pasar la pierna."
    ],
    "reacciones": [
      {
        "si": "Junta las manos para defender",
        "txt": "Rompe primero ese agarre y luego extiende"
      }
    ],
    "drills": [
      "su-drill-muneco",
      "su-drill-sombra"
    ],
    "combina": [
      "americana-montada"
    ],
    "videos": [
      {
        "id": "B_dOCcWymv4",
        "inicio": 0,
        "fin": null,
        "instructor": "Rob Biernacki",
        "canal": "Stephan Kesting (Grapplearts)",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "escape-cien-kilos",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "escape",
    "es": "Escape de cien kilos a guardia",
    "en": "Side control escape (shrimp to guard)",
    "alias": [
      "side control escape",
      "recuperar la guardia"
    ],
    "nivel": "F",
    "mma": "alta",
    "mmaNota": "En MMA, mejor escapar a levantarse o a una pierna que a guardia.",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "parcial",
    "material": [
      "esterilla"
    ],
    "jju": "esc-cien-kilos",
    "desde": {
      "pos": "cien-kilos",
      "lado": "abajo"
    },
    "hasta": {
      "pos": "guardia-cerrada",
      "lado": "abajo"
    },
    "objetivo": "Salir de debajo del control lateral y recuperar la guardia.",
    "pasos": [
      "Pon marcos: un antebrazo contra su cuello o hombro y el otro contra su cadera.",
      "Haz un puente para que su peso se mueva.",
      "Aprovecha el hueco para hacer gamba y alejar la cadera.",
      "Mete la rodilla en ese espacio y recupera la guardia."
    ],
    "detalles": [
      "Los marcos no empujan, bloquean: tus huesos aguantan su peso.",
      "Primero el puente y luego la gamba: uno crea el hueco y el otro lo aprovecha."
    ],
    "errores": [
      "Empujar con los brazos estirados.",
      "Quedarse plano esperando."
    ],
    "reacciones": [
      {
        "si": "Te sigue y vuelve a pegarse",
        "txt": "Encadena otra gamba o vete a rodillas"
      }
    ],
    "drills": [
      "gamba",
      "su-granby",
      "su-rutina-solo"
    ],
    "combina": [
      "gamba"
    ],
    "videos": [
      {
        "id": "ZzOqifoQ_TM",
        "inicio": 0,
        "fin": null,
        "instructor": "Procel BJJ",
        "canal": "Procel Brazilian Jiu-Jitsu",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "mataleon",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "sumision",
    "es": "Mataleón",
    "en": "Rear naked choke",
    "pt": "Mata-leão",
    "alias": [
      "RNC",
      "hadaka jime"
    ],
    "nivel": "F",
    "mma": "muy alta",
    "mmaNota": "39 % de las sumisiones de la UFC: la más usada con diferencia.",
    "gi": "ambos",
    "fases": [
      "suelo-arriba"
    ],
    "solo": "no",
    "material": [
      "companero"
    ],
    "jju": "sum-espalda",
    "desde": {
      "pos": "espalda",
      "lado": "arriba"
    },
    "hasta": null,
    "objetivo": "Estrangulación desde la espalda. Es la sumisión más usada en MMA.",
    "pasos": [
      "Con la espalda controlada, pasa un brazo por delante de su cuello, con el codo bajo su barbilla.",
      "Agarra tu propio bíceps con esa mano.",
      "Pon la otra mano detrás de su cabeza.",
      "Junta los codos, saca pecho y aprieta."
    ],
    "detalles": [
      "Primero la posición, después la sumisión.",
      "La flexión del codo va justo bajo su barbilla, no sobre la mandíbula."
    ],
    "errores": [
      "Atacar el cuello sin tener la espalda controlada.",
      "Cruzar los tobillos delante de él: te pueden hacer una llave de pie."
    ],
    "reacciones": [
      {
        "si": "Baja la barbilla y defiende con las manos",
        "txt": "Pelea primero sus manos o cambia de lado"
      }
    ],
    "drills": [
      "su-drill-muneco"
    ],
    "combina": [],
    "videos": [
      {
        "id": "fEOSpXbzMJ4",
        "inicio": 0,
        "fin": null,
        "instructor": "Rafael Lovato Jr.",
        "canal": "Timeless Jiu-Jitsu",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "escape-espalda",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "escape",
    "es": "Escape de la espalda",
    "en": "Back escape",
    "alias": [
      "back escape",
      "rear mount escape"
    ],
    "nivel": "F",
    "mma": "muy alta",
    "mmaNota": "Con golpes, el cuello primero y luego la cara.",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "parcial",
    "material": [
      "esterilla"
    ],
    "jju": "esc-espalda",
    "desde": {
      "pos": "espalda",
      "lado": "abajo"
    },
    "hasta": {
      "pos": "guardia-cerrada",
      "lado": "arriba"
    },
    "objetivo": "Salir del control de espalda antes de que llegue la estrangulación.",
    "pasos": [
      "Lo primero: protege el cuello con las manos y los codos pegados.",
      "Deslízate hacia abajo para llevar los hombros al suelo.",
      "Lleva la espalda al suelo hacia un lado, saliendo de entre sus piernas.",
      "Quita el gancho de ese lado y gira hasta quedar encima o dentro de su guardia."
    ],
    "detalles": [
      "Primero el cuello, después el escape.",
      "La meta es que tu espalda toque el suelo, no la suya."
    ],
    "errores": [
      "Soltar las manos del cuello para quitar los ganchos.",
      "Intentar levantarse con él colgado de la espalda."
    ],
    "reacciones": [],
    "drills": [
      "su-drill-puente",
      "gamba"
    ],
    "combina": [],
    "videos": [
      {
        "id": "h2VYrm85l9A",
        "inicio": 0,
        "fin": null,
        "instructor": "Stephen Whittier",
        "canal": "BJJ Fanatics",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "su-granby",
    "seccion": "suelo",
    "tipo": "drill",
    "cat": "movimiento",
    "es": "Granby",
    "en": "Granby roll",
    "nivel": "I",
    "mma": "media",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "si",
    "material": [
      "esterilla"
    ],
    "desde": {
      "pos": "base",
      "lado": "neutral"
    },
    "hasta": null,
    "objetivo": "Rodar sobre los hombros para recuperar la guardia o salir de la tortuga.",
    "pasos": [
      "Desde cuatro apoyos, mete un hombro hacia el suelo.",
      "Rueda en diagonal sobre los hombros, no sobre el cuello.",
      "Termina de frente, en guardia o a cuatro apoyos."
    ],
    "detalles": [
      "La cabeza se aparta hacia un lado: el peso va a los hombros."
    ],
    "errores": [
      "Rodar sobre el cuello."
    ],
    "reacciones": [],
    "combina": [
      "gamba"
    ],
    "dosis": "2 × 8 por lado",
    "videos": [
      {
        "id": "locTaWe6kD4",
        "inicio": 0,
        "fin": null,
        "instructor": "Zach Makovsky",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "su-sit-out",
    "seccion": "suelo",
    "tipo": "drill",
    "cat": "movimiento",
    "es": "Sit-out y cambio de cadera",
    "en": "Sit-out / hip switch",
    "nivel": "F",
    "mma": "alta",
    "gi": "ambos",
    "fases": [
      "suelo-abajo",
      "levantarse"
    ],
    "solo": "si",
    "material": [
      "esterilla"
    ],
    "desde": {
      "pos": "base",
      "lado": "neutral"
    },
    "hasta": null,
    "objetivo": "Salir de cuatro apoyos girando la cadera, base para escapar de la tortuga y levantarte.",
    "pasos": [
      "Desde cuatro apoyos, pasa una pierna por debajo hacia el otro lado.",
      "Quedas sentado de lado, apoyado en una mano.",
      "Vuelve a cuatro apoyos y repite hacia el otro lado."
    ],
    "detalles": [
      "La cadera gira rápido; la mano de apoyo no se mueve."
    ],
    "errores": [
      "Sentarte plano de espaldas."
    ],
    "reacciones": [],
    "combina": [
      "levantamiento"
    ],
    "dosis": "3 × 20",
    "videos": []
  },
  {
    "id": "su-rutina-solo",
    "seccion": "suelo",
    "tipo": "drill",
    "cat": "movimiento",
    "es": "Rutina de movimientos en solitario",
    "en": "Solo BJJ drill routine",
    "nivel": "F",
    "mma": "media",
    "gi": "ambos",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "si",
    "material": [
      "esterilla"
    ],
    "desde": {
      "pos": "base",
      "lado": "neutral"
    },
    "hasta": null,
    "objetivo": "Una rutina completa de movimientos de suelo para hacer en casa.",
    "pasos": [
      "Sigue el vídeo de principio a fin."
    ],
    "detalles": [],
    "errores": [],
    "reacciones": [],
    "combina": [],
    "dosis": "1 sesión siguiendo el vídeo",
    "videos": [
      {
        "id": "kd6tg6wS1_A",
        "inicio": 0,
        "fin": null,
        "instructor": "Michelle Welti",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "su-defensa-golpes",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "mma",
    "es": "Defensa de golpes en la guardia",
    "en": "Defending strikes from closed guard",
    "nivel": "F",
    "mma": "muy alta",
    "gi": "nogi",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "parcial",
    "material": [
      "companero"
    ],
    "jju": "mma-defensa-golpes",
    "desde": {
      "pos": "guardia-cerrada",
      "lado": "abajo"
    },
    "hasta": null,
    "mmaNota": "Abajo, lo primero es no recibir; después atacar o levantarte.",
    "objetivo": "Que no te golpeen desde dentro de tu guardia.",
    "pasos": [
      "Rompe su postura tirando con las piernas y controlando su cabeza o sus brazos.",
      "Si se separa, pon los pies en sus caderas para mantenerle lejos.",
      "Controla sus muñecas: sin manos libres no hay golpes.",
      "Si se levanta, mantén las piernas activas y busca levantarte tú."
    ],
    "detalles": [
      "O muy pegado o muy lejos: a media distancia es donde llegan los golpes."
    ],
    "errores": [
      "Quedarte plano con la guardia cerrada sin controlar nada.",
      "Dejarle la postura recta."
    ],
    "reacciones": [
      {
        "si": "Mete un brazo para golpear y deja el otro fuera",
        "ref": "triangulo",
        "txt": "Ataca el triángulo"
      }
    ],
    "drills": [
      "su-drill-cadera"
    ],
    "combina": [
      "su-arm-triangle",
      "su-wrestle-up"
    ],
    "videos": [
      {
        "id": "FcnEpHeRO6o",
        "inicio": 0,
        "fin": null,
        "instructor": "Guardia cerrada para MMA",
        "idioma": "en"
      },
      {
        "id": "bSHNB77O83Q",
        "inicio": 0,
        "fin": null,
        "instructor": "Defenderse y levantarse desde la guardia",
        "idioma": "en",
        "etiqueta": "Y levantarse"
      }
    ]
  },
  {
    "id": "su-gnp-guardia",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "mma",
    "es": "Ground and pound desde la guardia",
    "en": "Ground and pound from top closed guard",
    "nivel": "I",
    "mma": "muy alta",
    "gi": "nogi",
    "fases": [
      "suelo-arriba"
    ],
    "solo": "parcial",
    "material": [
      "companero"
    ],
    "jju": "mma-gnp",
    "desde": {
      "pos": "guardia-cerrada",
      "lado": "arriba"
    },
    "hasta": null,
    "mmaNota": "Golpear abre la guardia y prepara el pase.",
    "objetivo": "Golpear desde dentro de la guardia sin exponerte a sus ataques.",
    "pasos": [
      "Postura: rodillas abiertas, cadera adelante y espalda recta.",
      "Una mano controla (cadera, bíceps o pecho) y la otra golpea corto.",
      "Golpea y vuelve a la postura.",
      "Si abre las piernas para defenderse, pasa."
    ],
    "detalles": [
      "Golpes cortos: los largos te desequilibran y te meten en su guardia."
    ],
    "errores": [
      "Inclinarte dentro de su guardia: le das triángulo y llave de brazo.",
      "Golpear sin controlar sus manos."
    ],
    "reacciones": [
      {
        "si": "Abre las piernas o empuja con los pies",
        "ref": "abrir-guardia",
        "txt": "Aprovecha para pasar"
      }
    ],
    "drills": [
      "su-drill-sombra"
    ],
    "combina": [
      "abrir-guardia"
    ],
    "videos": [
      {
        "id": "DxcB-8kpHcY",
        "inicio": 0,
        "fin": null,
        "instructor": "Ground and pound desde la guardia",
        "idioma": "en"
      },
      {
        "id": "O8Nl6mZtOO8",
        "inicio": 0,
        "fin": null,
        "instructor": "Pasar la guardia golpeando",
        "idioma": "en",
        "etiqueta": "Pasar golpeando"
      }
    ]
  },
  {
    "id": "su-wrestle-up",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "guardia",
    "es": "Wrestle-up desde mariposa",
    "en": "Wrestle-up from butterfly guard",
    "nivel": "I",
    "mma": "alta",
    "gi": "ambos",
    "fases": [
      "suelo-abajo",
      "levantarse"
    ],
    "solo": "parcial",
    "material": [
      "companero"
    ],
    "jju": "gua-mariposa",
    "desde": {
      "pos": "mariposa",
      "lado": "abajo"
    },
    "hasta": null,
    "mmaNota": "En MMA, levantarte desde abajo vale más que buscar la sumisión.",
    "objetivo": "Pasar de estar abajo a estar de pie o atacando sus piernas.",
    "pasos": [
      "Siéntate con un gancho de mariposa y un underhook.",
      "Desequilíbrale hacia el lado contrario con el gancho.",
      "Sube a una rodilla sin soltar el underhook.",
      "Termina en pierna simple o de pie."
    ],
    "detalles": [
      "El underhook es lo que te deja subir."
    ],
    "errores": [
      "Quedarte sentado esperando."
    ],
    "reacciones": [],
    "drills": [
      "su-sit-out",
      "levantamiento"
    ],
    "combina": [
      "lu-single",
      "levantamiento"
    ],
    "videos": [
      {
        "id": "azLNfd5O9PU",
        "inicio": 0,
        "fin": null,
        "instructor": "Wrestle-up desde mariposa",
        "idioma": "en"
      },
      {
        "id": "GZoHLiZVsz0",
        "inicio": 0,
        "fin": null,
        "instructor": "Levantarse con underhook y arm drag",
        "idioma": "en",
        "etiqueta": "Underhook y arm drag"
      }
    ]
  },
  {
    "id": "su-media-underhook",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "guardia",
    "es": "Media guardia: underhook y knee tap",
    "en": "Half guard underhook / knee tap",
    "nivel": "I",
    "mma": "alta",
    "gi": "ambos",
    "fases": [
      "suelo-abajo",
      "suelo-arriba"
    ],
    "solo": "parcial",
    "material": [
      "companero"
    ],
    "jju": "gua-media",
    "desde": {
      "pos": "media-guardia",
      "lado": "abajo"
    },
    "hasta": {
      "pos": "cien-kilos",
      "lado": "arriba"
    },
    "mmaNota": "Una encuesta sobre 1.438 combates situó la media guardia como la guardia con más raspados en MMA (dato secundario).",
    "objetivo": "Ganar el underhook desde la media guardia y tumbar al rival.",
    "pasos": [
      "Ponte de lado, no plano.",
      "Mete el underhook y pega la cabeza a su pecho.",
      "Sube a tu codo y luego a tu rodilla, por debajo de él.",
      "Bloquea su rodilla con la mano y empuja para tumbarle."
    ],
    "detalles": [
      "Plano de espaldas en media guardia es la peor versión: estás aplastado y recibes golpes."
    ],
    "errores": [
      "Pelear el underhook sin ponerte de lado.",
      "Dejar que te ponga el crossface."
    ],
    "reacciones": [
      {
        "si": "Se levanta para no caer",
        "ref": "lu-single",
        "txt": "Ve a la pierna simple"
      }
    ],
    "drills": [
      "gamba",
      "su-drill-sombra"
    ],
    "combina": [
      "lu-single"
    ],
    "videos": [
      {
        "id": "Wn_NeudZUro",
        "inicio": 0,
        "fin": null,
        "instructor": "Media guardia: knee tap",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "su-arm-triangle",
    "seccion": "suelo",
    "tipo": "tecnica",
    "cat": "sumision",
    "es": "Arm-triangle",
    "en": "Arm-triangle choke",
    "pt": "Katagatame",
    "alias": [
      "triángulo de brazo",
      "kata-gatame"
    ],
    "nivel": "I",
    "mma": "alta",
    "gi": "ambos",
    "fases": [
      "suelo-arriba"
    ],
    "solo": "no",
    "material": [
      "companero"
    ],
    "jju": "mma-cabeza-brazo",
    "desde": {
      "pos": "cien-kilos",
      "lado": "arriba"
    },
    "hasta": null,
    "mmaNota": "7,6 % de las sumisiones de la UFC. Aparece cuando el rival empuja para protegerse.",
    "objetivo": "Estrangular con su propio brazo atrapado contra su cuello.",
    "pasos": [
      "Lleva su brazo hacia su cara: cabeza y brazo quedan juntos.",
      "Pega tu cabeza a su brazo atrapado y cierra las manos alrededor de su cuello.",
      "Sal hacia el lado contrario a su cabeza, fuera de sus piernas.",
      "Baja la cadera y aprieta con el hombro."
    ],
    "detalles": [
      "El apriete viene del hombro y de bajar el pecho, no de los brazos."
    ],
    "errores": [
      "Quedarte en su lado: no aprieta.",
      "Dejar hueco entre tu cabeza y su brazo."
    ],
    "reacciones": [],
    "drills": [
      "su-drill-muneco"
    ],
    "combina": [
      "su-defensa-golpes"
    ],
    "videos": [
      {
        "id": "a1tbiqxaYAo",
        "inicio": 0,
        "fin": null,
        "instructor": "Arm-triangle desde cien kilos",
        "idioma": "en"
      },
      {
        "id": "vClAO2pHRZU",
        "inicio": 0,
        "fin": null,
        "instructor": "Learn to Grapple",
        "idioma": "en",
        "etiqueta": "Otra explicación"
      }
    ]
  },
  {
    "id": "su-drill-puente",
    "seccion": "suelo",
    "tipo": "drill",
    "cat": "movimiento",
    "gi": "ambos",
    "desde": {
      "pos": "base",
      "lado": "neutral"
    },
    "hasta": null,
    "reacciones": [],
    "es": "Puente sobre el hombro",
    "en": "Shoulder bridge drill",
    "nivel": "F",
    "mma": "alta",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "si",
    "material": [
      "esterilla"
    ],
    "objetivo": "Sacar potencia de la cadera para el upa y para escapar de la espalda.",
    "pasos": [
      "Túmbate boca arriba con los pies cerca del culo y los codos pegados.",
      "Empuja con los pies y sube la cadera todo lo que puedas.",
      "Gira y apoya un hombro, mirando por encima de él.",
      "Baja con control y repite hacia el otro lado."
    ],
    "detalles": [
      "El peso va sobre el hombro y la parte alta de la espalda, nunca sobre el cuello.",
      "Empieza despacio y sube el ritmo solo si el cuello no carga."
    ],
    "errores": [
      "Empujar con la espalda en vez de con las piernas.",
      "Abrir los codos al subir."
    ],
    "combina": [
      "gamba"
    ],
    "dosis": "3 × 20 alternando lados",
    "criterio": "20 puentes seguidos tocando el suelo con el hombro cada vez y sin separar los codos.",
    "videos": [
      {
        "id": "hgy9JMwpCv8",
        "inicio": 0,
        "fin": null,
        "instructor": "Grappling SMARTY",
        "idioma": "en"
      },
      {
        "id": "3hb3eaRdpZ0",
        "inicio": 0,
        "fin": null,
        "instructor": "Balance Jiu-Jitsu",
        "idioma": "en",
        "etiqueta": "Otra serie"
      }
    ]
  },
  {
    "id": "su-drill-cadera",
    "seccion": "suelo",
    "tipo": "drill",
    "cat": "movimiento",
    "gi": "ambos",
    "desde": {
      "pos": "base",
      "lado": "neutral"
    },
    "hasta": null,
    "reacciones": [],
    "es": "Cadera desde la guardia",
    "en": "Solo guard hip drill",
    "nivel": "I",
    "mma": "media",
    "fases": [
      "suelo-abajo"
    ],
    "solo": "si",
    "material": [
      "esterilla"
    ],
    "objetivo": "Levantar la cadera y girarla, que es el movimiento de los ataques desde la guardia.",
    "pasos": [
      "Siéntate con las rodillas dobladas y rueda hacia atrás.",
      "Sube la cadera bien alta y gírala 45 grados.",
      "Arriba, dobla una pierna por detrás de la otra rodilla, como al cerrar un triángulo.",
      "Baja, vuelve a sentarte y repite hacia el otro lado."
    ],
    "detalles": [
      "Gira sobre el hombro, no sobre el cuello.",
      "La cadera tiene que quedar más alta que los hombros en cada repetición."
    ],
    "errores": [
      "Subir con impulso de los brazos.",
      "Quedarte plano sobre la espalda sin girar."
    ],
    "combina": [
      "gamba"
    ],
    "dosis": "3 × 10 por lado",
    "criterio": "10 por lado subiendo la cadera por encima de los hombros en todas.",
    "videos": [
      {
        "id": "Nz8_cn1TmRc",
        "inicio": 0,
        "fin": null,
        "instructor": "Valhalla Academy",
        "idioma": "en",
        "etiqueta": "Triángulo"
      },
      {
        "id": "18cjQk413k8",
        "inicio": 0,
        "fin": null,
        "instructor": "James O’Connor",
        "idioma": "en",
        "etiqueta": "Llave de brazo"
      }
    ]
  },
  {
    "id": "su-drill-sombra",
    "seccion": "suelo",
    "tipo": "drill",
    "cat": "movimiento",
    "gi": "ambos",
    "desde": {
      "pos": "base",
      "lado": "neutral"
    },
    "hasta": null,
    "reacciones": [],
    "es": "Shadow grappling por cadenas",
    "en": "Shadow grappling",
    "nivel": "I",
    "mma": "alta",
    "fases": [
      "suelo-arriba",
      "suelo-abajo"
    ],
    "solo": "si",
    "material": [
      "esterilla"
    ],
    "objetivo": "Encadenar posiciones de suelo en sombra, igual que la sombra de boxeo.",
    "pasos": [
      "Elige una cadena antes de empezar.",
      "Arriba: postura en la guardia, golpes, abrir, pasar, montada y americana.",
      "Abajo: gamba, recuperar la guardia, sentarte y levantarte.",
      "Repite la misma cadena toda la ronda, imaginando al rival."
    ],
    "detalles": [
      "Una cadena por ronda: si improvisas al principio, no se fija ninguna.",
      "Mantén la cadera baja y el peso sobre un rival imaginario cuando vas arriba."
    ],
    "errores": [
      "Correr y hacer los movimientos a medias.",
      "Quedarte quieto entre posiciones."
    ],
    "combina": [
      "gamba",
      "levantamiento"
    ],
    "dosis": "3 × 3 min · 1 min de descanso",
    "criterio": "3 rondas repitiendo la misma cadena completa, sin pararte a pensar el siguiente paso.",
    "videos": [
      {
        "id": "yLKTfEwVaFQ",
        "inicio": 0,
        "fin": null,
        "instructor": "Dom Tsui",
        "idioma": "en"
      }
    ]
  },
  {
    "id": "su-drill-muneco",
    "seccion": "suelo",
    "tipo": "drill",
    "cat": "movimiento",
    "gi": "ambos",
    "desde": {
      "pos": "base",
      "lado": "neutral"
    },
    "hasta": null,
    "reacciones": [],
    "es": "Sumisiones con manta enrollada",
    "en": "Submission reps on a dummy",
    "nivel": "I",
    "mma": "alta",
    "fases": [
      "suelo-arriba",
      "suelo-abajo"
    ],
    "solo": "parcial",
    "material": [
      "esterilla",
      "muneco"
    ],
    "objetivo": "Repetir la colocación de manos y piernas de las sumisiones sin compañero.",
    "pasos": [
      "Enrolla una manta gruesa y átala, o usa un muñeco de grappling si lo tienes.",
      "Elige una sumisión por serie y colócate despacio: agarre, codos, cadera.",
      "Aprieta dos segundos, suelta y repite.",
      "Cambia de lado en cada serie."
    ],
    "detalles": [
      "Sirve para la colocación. El control y el apriete reales solo se validan con compañero y tatami.",
      "Mira los pasos de la ficha de cada sumisión y compáralos con lo que haces."
    ],
    "errores": [
      "Ir a por la fuerza en vez de a por la posición.",
      "Repetir siempre por el mismo lado."
    ],
    "combina": [],
    "dosis": "3 × 10 por sumisión",
    "criterio": "10 repeticiones por lado colocando el agarre a la primera, sin mirarte las manos.",
    "videos": [
      {
        "id": "E7y5JUonP7k",
        "inicio": 0,
        "fin": null,
        "instructor": "Ramon",
        "idioma": "en",
        "etiqueta": "15 sumisiones"
      },
      {
        "id": "X5CZBwqtKcY",
        "inicio": 0,
        "fin": null,
        "instructor": "Chasen Hill",
        "idioma": "en",
        "etiqueta": "Cadena desde la montada"
      }
    ]
  }
]);
