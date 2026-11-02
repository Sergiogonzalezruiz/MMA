---
name: verificar
description: Marca vídeos como revisados y ajusta dónde empiezan y acaban, o cambia los que no valen
argument-hint: "[id de ficha y lo que has visto, por ejemplo: box-jab ok · lu-single empieza en 1:20 y acaba en 3:05 · su-granby no vale]"
disable-model-invocation: true
---

Sergio ha revisado vídeos: $ARGUMENTS

Para cada ficha mencionada:
1. Si dice «ok» (o similar): añade `verificado: "<fecha de hoy AAAA-MM-DD>"` a ese vídeo (al primero si no dice cuál).
2. Si da tiempos («empieza en 1:20 y acaba en 3:05»): convierte a segundos (1:20 → 80, 3:05 → 185), pon `inicio` y `fin`, y añade `verificado` con la fecha de hoy.
3. Si dice que no vale: quita ese vídeo, busca otro como dice CLAUDE.md y deja el nuevo sin `verificado`. Dile el enlace del nuevo para que lo mire.
4. Si dice que una parte del vídeo es otra técnica: propón `segmentos` o una ficha nueva.

Después: `node scripts/validar.js` hasta ✓. Si estás en la rama de una tanda abierta, haz commit y push ahí (el PR se actualiza solo). Si no, rama `verificar-<fecha>`, commit, push y `gh pr create`.
Termina diciendo qué vídeos quedan sin revisar en las fichas que ha mencionado.
