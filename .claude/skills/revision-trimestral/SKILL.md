---
name: revision-trimestral
description: Revisión de cada 3 meses - estadísticas, reglamento, fuentes nuevas e ideas para pendientes
disable-model-invocation: true
---

Revisión trimestral de la web. Usa búsqueda web y abre las páginas de las que saques datos.

1. **Estadísticas de la UFC:** busca el reparto actualizado de sumisiones (mataleón, guillotina, llave de brazo, llaves de pierna…). Si cambian, actualiza las cifras de `datos-comun.js` (nota de Suelo) y de las `mmaNota` que las citen, con la fuente y la fecha.
2. **Reglamento:** cambios en las reglas unificadas de MMA y en las llaves de pierna permitidas por la IBJJF. Si afecta a alguna ficha, corrígela.
3. **Técnicas que están funcionando:** busca análisis recientes de combates (últimos 3 meses) y técnicas que se repitan. Añádelas a `pendientes.js` como `idea` con `fuente` y `nota`, si no existen.
4. **Vídeos:** busca vídeos nuevos de instructores reconocidos para las fichas con un solo vídeo o sin vídeo en español (`node scripts/huecos.js` los lista). Propón como mucho 10.
5. **Ruta:** pregunta a Sergio cómo va y si quiere subir el `interes` de algo.
6. `node scripts/validar.js` hasta ✓, rama `revision-<fecha>`, commit, push y `gh pr create` con un resumen: qué cifras cambiaron (con fuente), qué pendientes nuevos, qué vídeos nuevos.
