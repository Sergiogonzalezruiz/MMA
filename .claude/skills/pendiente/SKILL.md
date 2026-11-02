---
name: pendiente
description: Añade una idea de técnica o drill a la lista de pendientes, puntuada
argument-hint: "[la técnica o idea, por ejemplo: el ko-uchi de Makhachev contra la jaula]"
disable-model-invocation: true
---

Añade a `pendientes.js` esta idea: $ARGUMENTS

1. Comprueba que no exista ya: busca el nombre (y nombres parecidos, en español e inglés) en las fichas (`datos-*.js`, campos es, en, jp, alias) y en `pendientes.js`. Si existe, dilo y no añadas nada (si es un pendiente, ofrece subirle el `interes`).
2. Decide sección y un id `p-<nombre-corto>`.
3. Puntúa con los criterios de `MMA.CRITERIOS` (huecos-calc.js): mma 0–3, hueco 0–2 (mira `node scripts/huecos.js`), solo 0–2, conecta 0–2. Pon `interes: 3` si Sergio dice que la quiere pronto; si no, pregúntale de 0 a 3.
4. Añade la línea en el bloque de su sección con `fuente: "Sergio"` (o la fuente que diga) y una `nota` si aporta contexto (por ejemplo, el combate donde lo vio).
5. Explica en una línea la puntuación (cada criterio y el total) y en qué posición queda en la propuesta (`node scripts/huecos.js`).
6. `node scripts/validar.js`, commit «Pendiente: <nombre>» en una rama `pendiente-<id>`, push y PR con `gh pr create` (o, si Sergio lo prefiere, déjalo sin commit para juntarlo con otros).
