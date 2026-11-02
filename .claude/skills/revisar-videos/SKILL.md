---
name: revisar-videos
description: Arregla los vídeos caídos que ha detectado la comprobación semanal
disable-model-invocation: true
---

1. Busca el último aviso abierto: `gh issue list --label videos --state open`. Ábrelo con `gh issue view <número>`.
   - Si `gh` no funciona, ejecuta `node scripts/comprobar-videos.js` (necesita internet) y usa su informe.
2. Para cada vídeo roto:
   - Si la ficha tiene otro vídeo, sube el siguiente a primera posición y quita el roto.
   - Si era el único, busca un sustituto como dice CLAUDE.md.
3. `node scripts/validar.js` hasta ✓.
4. Rama `videos-<fecha>`, commit «Sustituye vídeos caídos», push y `gh pr create` con «Closes #<número del aviso>» en la descripción y el enlace de cada vídeo nuevo.
5. Dile a Sergio qué vídeos nuevos tiene que mirar.
