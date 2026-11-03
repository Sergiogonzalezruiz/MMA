---
name: tanda
description: Prepara una tanda de fichas nuevas (8–10) con sus vídeos y abre un pull request para revisarla
argument-hint: "[número de tanda, o vacío para la propuesta por puntuación]"
disable-model-invocation: true
---

Prepara una tanda de fichas nuevas para la web. Argumento: $ARGUMENTS

1. Lee CLAUDE.md si no lo has leído en esta sesión.
2. Elige los pendientes:
   - Si el argumento es un número N: `node scripts/huecos.js --tanda N` y usa esos pendientes.
   - Si está vacío: `node scripts/huecos.js` y usa la «propuesta por puntuación» (8–10, máximo 4 por sección).
   - Enséñale la lista a Sergio en una tabla corta (nombre, sección, puntos) y espera a que diga «sí» o cambie algo.
3. Crea la rama `tanda-N` (o `tanda-AAAA-MM-DD` si no hay número) desde `main` actualizado (`git pull`).
4. Para cada pendiente:
   - Escribe la ficha en `datos-<sección>.js`, en el bloque de su categoría, siguiendo el modelo de CLAUDE.md y el estilo de las fichas vecinas. Si es de suelo, enlázala con `desde`/`hasta` y `jju`.
   - Busca 1–3 vídeos como dice CLAUDE.md (sección «Vídeos: cómo buscarlos»). Comprueba título y canal de cada uno, de uno en uno.
   - Si es una técnica, ponle al menos un drill en `drills`. Si es un drill, añádelo a `drills` de las técnicas que entrena.
   - Enlaza la ficha con las existentes (`combina`, `reacciones` con `ref`) y, si alguna ficha existente tenía una reacción sin `ref` que ahora tiene ficha, añádele el `ref`.
   - Cambia el pendiente a `estado: "en-tanda"`.
5. Si una ficha nueva llena una posición marcada `pronto: true` en datos-suelo.js, quita `pronto` y añade `desc` y `lados` como en las demás posiciones.
6. Ejecuta `node scripts/validar.js` y corrige hasta que acabe en ✓.
7. En las tandas de suelo, abre `#suelo-mapa` y comprueba que las técnicas nuevas salen y tienen bien `desde` y `hasta`.
8. Commit «Tanda N: <tema> (X fichas)», push y `gh pr create`. En la descripción del PR, una lista con cada ficha y los enlaces `https://www.youtube.com/watch?v=ID` de sus vídeos, y debajo: «Revisa cada vídeo; dime cuáles no valen o qué inicio/fin poner con /verificar».
9. Termina con: el enlace del PR, la lista de vídeos que Sergio tiene que ver y el recordatorio de que al fusionar el PR la web se publica sola.

Cuando Sergio confirme que fusionó el PR, cambia esos pendientes a `estado: "publicada"` con `ficha: "<id>"` en una rama nueva y abre otro PR pequeño (o hazlo ya en el mismo PR antes de fusionar si te lo pide).
