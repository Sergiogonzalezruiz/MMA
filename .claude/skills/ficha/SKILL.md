---
name: ficha
description: Crea una ficha concreta o mejora una existente (texto, enlaces o vídeos)
argument-hint: "[nombre de la técnica o id de la ficha, y qué quieres cambiar]"
disable-model-invocation: true
---

Tarea: $ARGUMENTS

1. Busca si la ficha ya existe (por id o por nombre en `datos-*.js`).
   - Si existe: haz solo el cambio pedido y no toques el resto.
   - Si no existe: créala siguiendo el modelo de CLAUDE.md, con 1–3 vídeos buscados como dice CLAUDE.md. Si estaba en `pendientes.js`, cambia su estado a `en-tanda`.
2. Enlázala con fichas relacionadas (`combina`, `reacciones`).
3. `node scripts/validar.js` hasta ✓.
4. Rama `ficha-<id>`, commit, push y `gh pr create` con los enlaces de los vídeos nuevos.
5. Dile a Sergio qué vídeos tiene que mirar.
