// =============================================================
//  GUÍA (pestaña «Guía» de la web)
//  Cada sección: { id, t: título, r: resumen, html: texto o función (M) => texto }
//  Bloques útiles dentro del html:
//    <div class="prompt"><pre>texto para copiar</pre></div>  → aparece con botón «Copiar»
//    <div class="tip">nota</div> · <table class="gt">…</table> · <ol class="gsteps">…</ol>
// =============================================================
(() => {
const pr = (txt, label = "Escríbelo en Claude Code") => `<div class="prompt" data-label="${label}"><pre>${txt}</pre></div>`;
const sh = txt => pr(txt, "Escríbelo en la terminal");

MMA.GUIA = [
{
  id: "empezar", t: "Empieza aquí",
  r: "Qué es cada pieza y a qué página ir según lo que quieras hacer.",
  html: `
<p class="glead">La web se mantiene sola en un 90 %: tú decides qué entra y miras los vídeos; Claude Code escribe las fichas, busca los vídeos y prepara los cambios; GitHub comprueba y publica.</p>
<h3>Las cuatro piezas</h3>
<table class="gt"><thead><tr><th>Pieza</th><th>Qué es</th><th>Dónde está</th></tr></thead><tbody>
<tr><td><b>La web</b></td><td>Esto que estás leyendo: fichas, vídeos, rutas, plan, guía y «Qué falta».</td><td>GitHub Pages: <code>https://TU-USUARIO.github.io/mapa-mma/</code></td></tr>
<tr><td><b>Los datos</b></td><td>Archivos <code>.js</code> con las fichas y los pendientes. Todo el contenido vive ahí.</td><td>En el repositorio y en la carpeta <code>mapa-mma</code> de tu ordenador</td></tr>
<tr><td><b>GitHub</b></td><td>Guarda la única copia buena, comprueba cada cambio y publica la web.</td><td><code>github.com/TU-USUARIO/mapa-mma</code></td></tr>
<tr><td><b>Claude Code</b></td><td>Claude trabajando dentro de la carpeta: lee <code>CLAUDE.md</code> y tiene comandos propios (<code>/tanda</code>, <code>/pendiente</code>…).</td><td>Tu terminal, la app de escritorio o <code>claude.ai/code</code></td></tr>
</tbody></table>
<h3>El ciclo, cada dos semanas</h3>
<ol class="gsteps">
<li><b>Mira <a href="#falta">Qué falta</a></b> para ver la siguiente tanda.</li>
<li><b>En Claude Code escribe <code>/tanda N</code>.</b> Prepara las fichas y abre un pull request (PR).</li>
<li><b>Mira los vídeos nuevos</b> y dile cuáles valen con <code>/verificar</code>.</li>
<li><b>Fusiona el PR en GitHub.</b> En un par de minutos está publicado.</li>
</ol>
<h3>¿Qué quieres hacer?</h3>
<table class="gt"><thead><tr><th>Quiero…</th><th>Ve a</th></tr></thead><tbody>
<tr><td>Dejarlo todo montado por primera vez</td><td><a href="#guia-montar">Montarlo (una vez)</a></td></tr>
<tr><td>Añadir contenido nuevo</td><td><a href="#guia-tanda">Añadir una tanda</a></td></tr>
<tr><td>Apuntar una técnica que he visto</td><td><a href="#guia-que-anadir">Decidir qué añadir</a></td></tr>
<tr><td>Arreglar o recortar un vídeo</td><td><a href="#guia-videos">Revisar y recortar vídeos</a></td></tr>
<tr><td>Cambiar una frase sin Claude</td><td><a href="#guia-a-mano">Editar a mano</a></td></tr>
<tr><td>Entender un aviso en rojo</td><td><a href="#guia-automatico">Comprobaciones automáticas</a> y <a href="#guia-problemas">Si algo falla</a></td></tr>
<tr><td>Saber qué toca este mes</td><td><a href="#guia-calendario">Calendario y revisiones</a></td></tr>
</tbody></table>`
},
{
  id: "montar", t: "Montarlo (una vez)",
  r: "De la carpeta descargada a la web publicada y Claude Code funcionando. Entre 30 y 60 minutos.",
  html: `
<p class="glead">Se hace una sola vez. Al final tendrás la web publicada, el repositorio en GitHub y Claude Code abriendo la carpeta.</p>
<ol class="gsteps">
<li><b>Cuenta de GitHub.</b> Si no tienes, créala en <a href="https://github.com/signup" target="_blank" rel="noopener">github.com/signup</a>. Es gratis.</li>
<li><b>Instala Git.</b>
  <ul><li>Windows: <a href="https://git-scm.com/downloads/win" target="_blank" rel="noopener">Git for Windows</a> (Claude Code también lo recomienda).</li>
  <li>Mac: abre la Terminal y escribe <code>git --version</code>; si no lo tienes, te ofrece instalarlo.</li>
  <li>Linux: <code>sudo apt install git</code>.</li></ul></li>
<li><b>Instala Node.js</b> (versión LTS) desde <a href="https://nodejs.org" target="_blank" rel="noopener">nodejs.org</a>. Hace falta para los scripts de comprobación y para ver la web en local.</li>
<li><b>Instala GitHub CLI</b> desde <a href="https://cli.github.com" target="_blank" rel="noopener">cli.github.com</a> e inicia sesión. Así Claude Code puede abrir PRs por ti.
${sh("gh auth login")}
Elige GitHub.com → HTTPS → «Login with a web browser».</li>
<li><b>Instala Claude Code.</b> Necesita tu suscripción de Claude.
  ${sh("curl -fsSL https://claude.ai/install.sh | bash")}
  <p class="gsmall">Eso es para Mac, Linux y WSL. En Windows PowerShell: <code>irm https://claude.ai/install.ps1 | iex</code>. Después abre una terminal nueva y comprueba con <code>claude --version</code>. Instrucciones oficiales: <a href="https://code.claude.com/docs/en/overview" target="_blank" rel="noopener">code.claude.com/docs</a>.</p></li>
<li><b>Descomprime <code>mapa-mma.zip</code></b> donde quieras guardar el proyecto, por ejemplo en <code>Documentos</code>.</li>
<li><b>Crea el repositorio y súbelo.</b> En la terminal, dentro de la carpeta:
${sh("cd ~/Documentos/mapa-mma\ngit init -b main\ngit add .\ngit commit -m \"Primera versión de Mapa MMA\"\ngh repo create mapa-mma --public --source=. --push")}
<p class="gsmall">Público porque GitHub Pages gratis solo publica repositorios públicos. El contenido no tiene nada privado.</p></li>
<li><b>Activa GitHub Pages.</b> En <code>github.com/TU-USUARIO/mapa-mma</code>: Settings → Pages → Source: «Deploy from a branch» → Branch: <code>main</code> y <code>/ (root)</code> → Save. En uno o dos minutos la web está en <code>https://TU-USUARIO.github.io/mapa-mma/</code>.</li>
<li><b>Comprueba las acciones.</b> Pestaña Actions del repositorio: «Validar datos» tiene que salir en verde. Lanza a mano «Comprobar vídeos» (Run workflow) para ver que funciona.</li>
<li><b>Abre Claude Code en la carpeta</b> y haz la primera prueba:
${sh("cd ~/Documentos/mapa-mma\nclaude")}
${pr("/huecos")}
Te resume qué falta y te propone la tanda 1.</li>
</ol>
<div class="tip"><b>Sin instalar nada:</b> Claude Code también funciona en <a href="https://claude.ai/code" target="_blank" rel="noopener">claude.ai/code</a> conectando el repositorio de GitHub. Sirve para preparar tandas desde el navegador o el móvil; lo que no podrás es ver la web en local antes de fusionar.</div>`
},
{
  id: "claude-code", t: "Trabajar con Claude Code",
  r: "Cómo abrirlo, los comandos del proyecto y qué escribir en cada caso.",
  html: `
<p class="glead">Abre una terminal en la carpeta del proyecto y escribe <code>claude</code>. Claude Code lee <code>CLAUDE.md</code> al empezar, así que ya sabe cómo es la web, las reglas de las fichas y cómo buscar vídeos.</p>
${sh("cd ~/Documentos/mapa-mma\ngit pull\nclaude")}
<p class="gsmall">El <code>git pull</code> trae lo último de GitHub antes de empezar. Hazlo siempre.</p>
<h3>Comandos del proyecto</h3>
<table class="gt"><thead><tr><th>Comando</th><th>Qué hace</th><th>Cuándo</th></tr></thead><tbody>
<tr><td><code>/huecos</code></td><td>Resume qué falta y cuál es la siguiente tanda. No cambia nada.</td><td>Antes de cada tanda</td></tr>
<tr><td><code>/tanda 1</code></td><td>Escribe las fichas de la tanda, busca vídeos, valida y abre el PR. Sin número, usa la propuesta por puntuación.</td><td>Cada dos semanas</td></tr>
<tr><td><code>/verificar …</code></td><td>Marca vídeos como revisados, pone inicio y fin, o cambia los que no valen.</td><td>Después de ver los vídeos</td></tr>
<tr><td><code>/pendiente …</code></td><td>Apunta una técnica nueva en la lista, puntuada.</td><td>Cuando veas algo que quieras aprender</td></tr>
<tr><td><code>/ficha …</code></td><td>Crea o mejora una ficha concreta.</td><td>Cuando algo no te convenza</td></tr>
<tr><td><code>/revisar-videos</code></td><td>Sustituye los vídeos que la comprobación semanal ha marcado como caídos.</td><td>Cuando llegue un aviso</td></tr>
<tr><td><code>/revision-trimestral</code></td><td>Actualiza estadísticas y reglamento, busca técnicas y vídeos nuevos.</td><td>Cada 3 meses</td></tr>
</tbody></table>
<h3>Ejemplos listos para copiar</h3>
${pr("/tanda 1")}
${pr("/pendiente el ko-uchi que usa Makhachev contra la jaula para pasar a pierna simple")}
${pr("/verificar box-jab ok · lu-single empieza en 1:20 y acaba en 3:05 · su-granby no vale")}
${pr("He fusionado el PR de la tanda 1. Marca sus pendientes como publicados y abre un PR con ese cambio.")}
${pr("/ficha upa: añade un vídeo en español")}
<h3>Ver la web en tu ordenador</h3>
${sh("node scripts/servir.js")}
<p>Abre <code>http://localhost:8000</code>. Para ver cómo queda una tanda antes de fusionarla:</p>
${sh("git fetch\ngit switch tanda-1\nnode scripts/servir.js")}
<p class="gsmall">Al terminar, vuelve a la rama principal con <code>git switch main</code>.</p>
<div class="tip"><b>Si un comando no aparece</b> (por ejemplo en claude.ai/code), pide lo mismo con palabras: «Lee CLAUDE.md y sigue las instrucciones de .claude/skills/tanda/SKILL.md para la tanda 1».</div>
<h3>Consejos</h3>
<ul>
<li>Claude Code te pide permiso antes de ejecutar comandos o editar. Lee lo que va a hacer y acepta.</li>
<li>Una tarea por conversación. Entre tareas escribe <code>/clear</code>.</li>
<li>Si algo no te gusta, díselo tal cual: «la ficha de ankle pick tiene demasiados pasos, déjala en cuatro».</li>
</ul>`
},
{
  id: "tanda", t: "Añadir una tanda",
  r: "El proceso completo de cada dos semanas, de Qué falta a la web publicada. Unos 45 minutos tuyos.",
  html: (M) => {
    const plan = [...new Set((M.PENDIENTES || []).filter(p => p.estado === "planificada" && p.tanda).map(p => p.tanda))].sort((a, b) => a - b);
    const sig = plan[0];
    return `
<p class="glead">${sig ? `La siguiente tanda planificada es la <b>${sig}</b>.` : "No quedan tandas planificadas: usa la propuesta por puntuación."} Cada tanda son 8–10 fichas que pasan por tus ojos antes de publicarse.</p>
<ol class="gsteps">
<li><b>Mira qué toca</b> en <a href="#falta">Qué falta</a> (o con <code>/huecos</code>). Si quieres cambiar algo, súbele el interés a un pendiente (ver <a href="#guia-que-anadir">Decidir qué añadir</a>).</li>
<li><b>Abre Claude Code</b> en la carpeta (<code>git pull</code> y <code>claude</code>) y pide la tanda:
${pr(sig ? `/tanda ${sig}` : "/tanda")}
Te enseña la lista y espera tu «sí». Luego escribe las fichas, busca los vídeos, valida y abre el PR. Tarda unos minutos.</li>
<li><b>Abre el PR</b> desde el enlace que te da (o GitHub → Pull requests). Debajo del título verás «Validar datos» en verde.</li>
<li><b>Mira cada vídeo</b> de la lista del PR. Para cada uno apunta: vale / no vale / dónde empieza y acaba lo útil. Mira la guía de <a href="#guia-videos">vídeos</a>.</li>
<li><b>Díselo a Claude Code</b> en una sola línea:
${pr("/verificar lu-front-headlock ok · lu-arm-drag empieza en 0:45 · lu-over-under no vale")}
Actualiza el mismo PR.</li>
<li><b>Opcional: mírala en local</b> antes de publicar:
${sh("git fetch\ngit switch tanda-" + (sig || "N") + "\nnode scripts/servir.js")}</li>
<li><b>Fusiona el PR:</b> botón verde «Merge pull request» → «Confirm merge». En uno o dos minutos la web publicada se actualiza.</li>
<li><b>Cierra el ciclo:</b>
${pr(`He fusionado el PR de la tanda ${sig || "N"}. Marca sus pendientes como publicados y abre un PR con ese cambio.`)}
Fusiona ese PR pequeño también. Y marca la tanda en el calendario de tu plan.</li>
</ol>
<h3>Qué revisar en cada ficha nueva (2 minutos por ficha)</h3>
<ul class="checks">
<li><span>El vídeo enseña esa técnica, no otra parecida.</span></li>
<li><span>Los pasos se entienden sin ver el vídeo.</span></li>
<li><span>La nota de MMA tiene sentido para ti.</span></li>
<li><span>Está en la categoría y la posición correctas.</span></li>
</ul>`;
  }
},
{
  id: "que-anadir", t: "Decidir qué añadir",
  r: "La lista de pendientes, cómo se puntúa y cómo apuntar ideas nuevas.",
  html: (M) => `
<p class="glead">Todo lo que podría entrar está en una sola lista de pendientes (<code>pendientes.js</code>). Cada pendiente tiene una puntuación de 0 a 12, y cada tanda sale de las mejor puntuadas. La lista completa, ordenada, está en <a href="#falta">Qué falta</a>.</p>
<h3>De dónde salen las ideas</h3>
<ul>
<li>El índice de <i>Jiu-Jitsu University</i> (campo «Fuente»: <code>JJU 3-0</code> = capítulo 3, apartado 0).</li>
<li>Los catálogos del informe de MMA (boxeo, lucha, judo sin gi y suelo).</li>
<li>Temarios: las 7 habilidades básicas de USA Wrestling y el manual de entrenadores de boxeo de la AIBA.</li>
<li>Tus ideas, con <code>/pendiente</code>.</li>
<li>La revisión trimestral, que busca técnicas que estén funcionando en la UFC.</li>
</ul>
<h3>Cómo se puntúa</h3>
<table class="gt"><thead><tr><th>Criterio</th><th>Puntos</th><th>Cómo se decide</th></tr></thead><tbody>
${M.CRITERIOS.map(c => `<tr><td>${c.n}</td><td>0–${c.max}</td><td>${c.como}</td></tr>`).join("")}
</tbody></table>
<p>Cada tanda: las 8–10 con más puntos, como mucho 4 por sección para que avancen las tres. Las 8 primeras tandas ya están planificadas a mano; cuando se acaben, manda la puntuación.</p>
<h3>Apuntar algo que has visto</h3>
${pr("/pendiente el body lock de Khabib contra la jaula, lo quiero pronto")}
<p class="gsmall">Con «lo quiero pronto» le pone interés 3 y entra en la siguiente tanda.</p>
<h3>Cambiar prioridades</h3>
${pr("Sube el interés de p-lu-ankle-pick a 3 y baja p-box-roll-hook a 0.")}
<h3>Huecos que se detectan solos</h3>
<p>La página <a href="#falta">Qué falta</a> los calcula a partir de los datos. Una ficha que llena un hueco suma puntos en «Cubre un hueco».</p>
<ul>
<li>Capítulos de <i>Jiu-Jitsu University</i> sin ninguna ficha.</li>
<li>Fases del combate con menos de ${M.UMBRALES.fase} fichas.</li>
<li>Posiciones de suelo «próximamente».</li>
<li>Categorías con ${M.UMBRALES.categoria} ficha o ninguna.</li>
<li>«Si el rival reacciona» que no enlaza a una ficha.</li>
<li>Nivel avanzado con menos de ${M.UMBRALES.avanzado} fichas.</li>
<li>Fichas sin vídeo, con uno solo, sin vídeo en español o sin revisar.</li>
</ul>`
},
{
  id: "videos", t: "Revisar y recortar vídeos",
  r: "Qué mirar en cada vídeo, cómo sacar dónde empieza y acaba, y qué hacer si no carga.",
  html: `
<p class="glead">Los vídeos los busca Claude Code, pero no puede verlos. Por eso cada vídeo nuevo sale como «Sin revisar» en su ficha hasta que tú lo miras.</p>
<h3>Qué mirar (1–2 minutos por vídeo)</h3>
<ul class="checks">
<li><span>Enseña exactamente esa técnica.</span></li>
<li><span>El instructor explica el porqué, no solo el cómo, y enseña algún error.</span></li>
<li><span>Se ve bien: buena luz, buen ángulo, sin música encima de la explicación.</span></li>
<li><span>Sin gi, o al menos la técnica funciona sin gi.</span></li>
<li><span>Lo útil está en una parte concreta (para recortarlo).</span></li>
</ul>
<h3>Sacar inicio y fin</h3>
<ol class="gsteps">
<li>Pausa en YouTube donde empieza la explicación y mira el tiempo, por ejemplo <code>1:20</code>.</li>
<li>Haz lo mismo donde termina, por ejemplo <code>3:05</code>.</li>
<li>Díselo a Claude Code con los tiempos tal cual; él los pasa a segundos:
${pr("/verificar lu-single empieza en 1:20 y acaba en 3:05")}</li>
</ol>
<p>Si el vídeo enseña varias cosas útiles, pide partes: «divide el vídeo de lu-single en: entrada 0:30–1:40, terminar 1:40–3:00». Saldrán como botones bajo el vídeo.</p>
<h3>Si un vídeo no vale o no carga</h3>
<ul>
<li>No vale: <code>/verificar ficha-id no vale</code>. Busca otro y te pasa el enlace.</li>
<li>La ficha dice «El canal no deja ver este vídeo fuera de YouTube»: el canal bloquea el incrustado. Lo mismo: <code>no vale</code>.</li>
<li>La comprobación de los lunes ha abierto un aviso: <code>/revisar-videos</code>.</li>
</ul>
<h3>Vídeos en español</h3>
${pr("/ficha box-gancho: busca un vídeo bueno en español y añádelo como alternativo")}`
},
{
  id: "a-mano", t: "Editar a mano",
  r: "Cambiar una frase o crear una ficha sin Claude Code, con las plantillas.",
  html: `
<p class="glead">Para un cambio pequeño (una frase, un tiempo de vídeo) no hace falta Claude Code. Se puede hacer desde la web de GitHub o con cualquier editor.</p>
<h3>Desde GitHub, sin instalar nada</h3>
<ol class="gsteps">
<li>Abre el archivo de la sección: <code>datos-boxeo.js</code>, <code>datos-lucha.js</code> o <code>datos-suelo.js</code>.</li>
<li>Pulsa el lápiz («Edit this file») y busca la ficha con Ctrl+F por su id (lo ves en la dirección de la ficha: <code>#f-box-jab</code> → <code>box-jab</code>).</li>
<li>Cambia el texto entre comillas. No borres comas, comillas ni corchetes.</li>
<li>«Commit changes» → «Create a new branch» → «Propose changes». Se crea un PR y el validador lo comprueba. Si sale verde, fusiónalo.</li>
</ol>
<h3>Desde tu ordenador</h3>
${sh("git pull\n# edita el archivo\nnode scripts/validar.js\ngit commit -am \"Corrige pasos del jab\"\ngit push")}
<p class="gsmall">Esto publica directamente en <code>main</code>, sin PR. Úsalo solo para cambios pequeños y con el validador en ✓.</p>
<h3>Plantilla de técnica</h3>
<div class="prompt" data-label="Copia y rellena"><pre>{
  id: "lu-ankle-pick", seccion: "lucha", tipo: "tecnica", cat: "derribos",
  es: "Ankle pick", en: "Ankle pick", nivel: "I", mma: "media",
  mmaNota: "Por qué importa en MMA, en una frase.",
  fases: ["clinch"], solo: "parcial", material: ["companero"],
  objetivo: "Para qué sirve, en una frase.",
  pasos: ["Paso 1.", "Paso 2.", "Paso 3."],
  detalles: ["Detalle clave 1.", "Detalle clave 2."],
  errores: ["Error típico 1.", "Error típico 2."],
  reacciones: [],
  drills: ["lu-drill-penetraciones"],
  combina: ["lu-collar"],
  videos: [V("XXXXXXXXXXX", "Nombre del instructor")]
},</pre></div>
<h3>Plantilla de drill</h3>
<div class="prompt" data-label="Copia y rellena"><pre>{
  id: "box-sombra-defensa", seccion: "boxeo", tipo: "drill",
  es: "Sombra solo de defensa", en: "Defensive shadowboxing", nivel: "I", mma: "alta",
  fases: ["distancia"], solo: "si", material: ["ninguno"],
  objetivo: "Para qué sirve.",
  pasos: ["Cómo se hace, paso 1.", "Paso 2."],
  detalles: [], errores: [],
  dosis: "3 × 3 min · 1 min de descanso",
  criterio: "Cuándo lo has superado, medible.",
  videos: []
},</pre></div>
<p>Los valores que admite cada campo están en <a href="#guia-campos">Referencia de campos</a>.</p>`
},
{
  id: "curso-boxeo", t: "Curso de boxeo",
  r: "Cómo funciona el curso, cómo marcar un módulo como dominado y cómo usar el modo entrenamiento.",
  html: `
<p class="glead">Está en <a href="#boxeo">Boxeo</a>, pestaña Curso. Son 9 módulos en 4 fases para 24 semanas, pensados para diestro, en casa y sin saco.</p>
<h3>Cómo se aprende cada módulo</h3>
<ol class="gsteps">
<li><b>Ver:</b> un vídeo de referencia, de Tony Jeffries o de Oracle Boxing.</li>
<li><b>Entender:</b> 3 o 4 claves y las fichas del módulo.</li>
<li><b>Practicar:</b> los drills, de lento a rápido: shadow lento ante el espejo, velocidad media y después dentro de combinaciones.</li>
<li><b>Comprobar:</b> te grabas y respondes la checklist mirando el vídeo.</li>
<li><b>Aplicar:</b> lo nuevo entra en el shadow libre y en las sesiones siguientes.</li>
</ol>
<h3>Dominio, no calendario</h3>
<ul>
<li>Cada módulo tiene un <b>criterio de dominio</b> que se ve en vídeo. El calendario de 24 semanas es orientativo.</li>
<li>«Marcar como dominado» solo se activa cuando respondes «Sí» a todas las preguntas de la checklist.</li>
<li>El módulo siguiente se abre al dominar el anterior. Si ya lo sabes, usa «Saltar hasta aquí»: los anteriores quedan como saltados, no como dominados.</li>
<li>Si te equivocas, en el módulo tienes «Desmarcar».</li>
</ul>
<h3>Modo entrenamiento</h3>
<ul>
<li>Pulsa «Empezar» en la sesión de hoy. La pantalla se pone oscura y con letra grande para leerla a un metro.</li>
<li>Cada asalto tiene un solo objetivo. En el descanso ves el objetivo del siguiente y, si tiene drill, su vídeo ya cargado.</li>
<li>Suena un pitido doble a 10 segundos del final y uno largo al acabar. Sube el volumen del móvil.</li>
<li>«Pausa» para y sigue; con teclado, también la barra espaciadora. «Saltar» pasa al siguiente asalto.</li>
<li>La pantalla no se apaga mientras entrenas, si el navegador lo permite.</li>
<li>Al terminar, la sesión se guarda como hecha. La primera sesión marca el inicio de la semana 1.</li>
</ul>
<h3>Grabarte</h3>
<p>En <a href="#boxeo-revisar">Revisar</a> tienes los ángulos (de frente y de lado), la checklist de cada fase y el registro de las grabaciones de las semanas 1, 4, 8, 16 y 24. Los vídeos se quedan en tu móvil: aquí solo apuntas la fecha.</p>
<div class="tip">Tu progreso del curso se guarda solo en este navegador, como el de las fichas. Para pasarlo a otro dispositivo, usa <a href="#copia">Copia de seguridad</a>.</div>
<h3>Cambiar el curso</h3>
<p>Los módulos y las sesiones están en <code>datos-curso-boxeo.js</code> y citan las fichas por su id. El validador comprueba que todo cuadre: fichas que existen, al menos un drill por módulo y sesiones cuya duración coincide con sus asaltos.</p>
${pr("Añade al curso de boxeo una sesión de la fase 2 centrada en el gancho derecho")}`
},
{
  id: "mapa-suelo", t: "El mapa de suelo",
  r: "Cómo se dibuja, cómo mover una posición y cómo comprobar lo que añades.",
  html: `
<p class="glead">Está en Suelo, pestaña <a href="#suelo-mapa">Mapa</a>. No hay que mantenerlo a mano: se dibuja solo a partir de las fichas.</p>
<h3>De dónde sale cada cosa</h3>
<ul>
<li><b>Técnicas:</b> sale cada técnica de suelo. Se une a su posición por <code>desde</code> y, con una flecha, a la posición a la que llega por <code>hasta</code>. Las sumisiones no llevan <code>hasta</code>: son el final.</li>
<li><b>Colocación:</b> las técnicas se colocan solas alrededor de su posición, y salen siempre en el mismo sitio.</li>
<li><b>Drills:</b> no salen en el mapa. Los ves en el panel de cada técnica.</li>
<li><b>Posiciones vacías:</b> una posición sin técnicas sale con borde discontinuo. Es un hueco por llenar.</li>
</ul>
<h3>Mover una posición</h3>
<p>Cada posición tiene su sitio en <code>datos-suelo.js</code>, en el campo <code>mapa</code>. El lienzo mide 1000 de ancho por 680 de alto, y cuanto más arriba, más dominante para el de arriba.</p>
${pr("Mueve la posición «Tortuga» un poco a la derecha en el mapa de suelo")}
<p>El validador da error si una posición no tiene <code>mapa</code> o se sale del lienzo, y avisa si dos posiciones quedan a menos de 140 de distancia.</p>
<h3>Comprobar lo que añades</h3>
<p>Después de una tanda de suelo, abre el mapa y mira que las técnicas nuevas salen junto a su posición y que las flechas llevan a donde tienen que llevar.</p>
<div class="tip">En el móvil, si el mapa se te queda pequeño, usa «Ver como lista».</div>`
},
{
  id: "automatico", t: "Comprobaciones automáticas",
  r: "Qué comprueba GitHub solo, dónde verlo y qué hacer cuando sale en rojo.",
  html: `
<table class="gt"><thead><tr><th>Comprobación</th><th>Cuándo</th><th>Qué revisa</th><th>Si falla</th></tr></thead><tbody>
<tr><td><b>Validar datos</b></td><td>En cada cambio (push o PR)</td><td>Ids repetidos, enlaces rotos entre fichas, categorías, fases, materiales, posiciones, capítulos, formato de vídeos y pendientes</td><td>El PR sale con una ✗ roja y no conviene fusionarlo</td></tr>
<tr><td><b>Comprobar vídeos</b></td><td>Cada lunes a las 7:00 (hora peninsular en invierno)</td><td>Que cada vídeo sigue existiendo y se puede incrustar</td><td>Abre un aviso (issue) con la lista de fichas afectadas</td></tr>
</tbody></table>
<h3>Ver el resultado</h3>
<p>Pestaña <b>Actions</b> del repositorio. Verde = bien. Rojo = pulsa en la ejecución y luego en el paso que falló para leer el mensaje.</p>
<h3>Arreglarlo</h3>
${pr("El validador ha fallado en GitHub. Ejecuta node scripts/validar.js, arregla los errores y actualiza el PR.")}
${pr("/revisar-videos")}
<h3>Mensajes del validador</h3>
<table class="gt"><thead><tr><th>Mensaje</th><th>Qué significa</th></tr></thead><tbody>
<tr><td>Error de sintaxis en datos-…js</td><td>Falta o sobra una coma, comilla o corchete cerca de la línea indicada. La web sale en blanco hasta arreglarlo.</td></tr>
<tr><td>id repetido</td><td>Dos fichas con el mismo id. Cambia uno.</td></tr>
<tr><td>combina con «x», que no existe</td><td>Enlace a una ficha con otro nombre o que no existe todavía.</td></tr>
<tr><td>falta «drills»</td><td>Cada técnica necesita al menos un drill. Añade su id en <code>drills</code> o crea el drill.</td></tr>
<tr><td>categoría «x» no existe</td><td>El campo <code>cat</code> no coincide con las categorías de la sección. El mensaje dice cuáles valen.</td></tr>
<tr><td>id de YouTube no válido</td><td>El id son las 11 letras tras <code>watch?v=</code>, sin el resto del enlace.</td></tr>
<tr><td>fin tiene que ser mayor que inicio</td><td>Tiempos al revés o en minutos en vez de segundos.</td></tr>
</tbody></table>
<p class="gsmall">Los «avisos» (por ejemplo, «sin vídeo») no bloquean nada: son recordatorios.</p>`
},
{
  id: "calendario", t: "Calendario y revisiones",
  r: "Las tandas planificadas y qué revisar cada semana, mes y trimestre.",
  html: (M) => {
    const tandas = {};
    (M.PENDIENTES || []).filter(p => p.tanda).forEach(p => (tandas[p.tanda] ??= []).push(p));
    const sec = id => M.SECCIONES.find(s => s.id === id)?.nombre ?? id;
    return `
<h3>Tandas planificadas</h3>
<table class="gt"><thead><tr><th>Tanda</th><th>Sección</th><th>Qué entra</th><th>Estado</th></tr></thead><tbody>
${Object.entries(tandas).sort((a, b) => a[0] - b[0]).map(([n, l]) => {
  const pub = l.filter(p => p.estado === "publicada").length;
  const est = pub === l.length ? "Publicada" : l.some(p => p.estado === "en-tanda") ? "En curso" : pub ? `${pub}/${l.length} publicadas` : "Pendiente";
  return `<tr><td><b>${n}</b></td><td>${[...new Set(l.map(p => sec(p.seccion)))].join(", ")}</td><td>${l.map(p => p.es).join(" · ")}</td><td>${est}</td></tr>`;
}).join("")}
</tbody></table>
<p class="gsmall">Una tanda cada dos semanas. Si una quincena no puedes, se corre todo. El estado se actualiza solo con los datos.</p>
<h3>Revisiones</h3>
<table class="gt"><thead><tr><th>Cada</th><th>Qué haces</th><th>Tiempo</th></tr></thead><tbody>
<tr><td>Lunes</td><td>Si llega un aviso de vídeos caídos: <code>/revisar-videos</code> y fusionar el PR.</td><td>5 min</td></tr>
<tr><td>2 semanas</td><td>Una tanda: <a href="#guia-tanda">el proceso completo</a>.</td><td>30–45 min</td></tr>
<tr><td>Mes</td><td>En <a href="#falta">Qué falta</a>, mira los vídeos sin revisar de las fichas que más usas y recórtalos con <code>/verificar</code>.</td><td>15 min</td></tr>
<tr><td>3 meses</td><td><code>/revision-trimestral</code>: estadísticas, reglamento, técnicas y vídeos nuevos.</td><td>20 min</td></tr>
<tr><td>6 meses</td><td>Revisión grande: ¿sobran categorías?, ¿toca una sección nueva (kickboxing, muay thai)?, ¿la ruta sigue encajando con tu nivel? Hazlo hablándolo con Claude Code.</td><td>1 h</td></tr>
</tbody></table>
<h3>Cuándo cambiar el plan</h3>
<ul>
<li><b>Vuelves a entrenar con compañero:</b> pide «sube el interés de los pendientes que necesitan compañero y añade drills por parejas».</li>
<li><b>Quieres golpeo con piernas:</b> pide «añade una sección de kickboxing con el mismo modelo que boxeo».</li>
<li><b>Paras unas semanas:</b> no pasa nada; las tandas no se acumulan.</li>
</ul>`;
  }
},
{
  id: "calidad", t: "Reglas de calidad",
  r: "Lo que tiene que cumplir cada ficha y cada vídeo antes de publicarse.",
  html: `
<p class="glead">Claude Code las conoce (están en <code>CLAUDE.md</code>). Están aquí para que sepas qué exigir al revisar.</p>
<h3>Fichas</h3>
<ul>
<li>Texto propio, en español: ni copiado del libro ni transcrito del vídeo.</li>
<li>Completa: para qué sirve, 3–5 pasos, 2 detalles, 2 errores, nivel, fases, material, si se entrena solo y nota de MMA.</li>
<li>Una técnica, una ficha. Las variantes, como partes del vídeo o en «Encadena con».</li>
<li>Cualquier cifra con fuente y fecha.</li>
<li>Lo que necesita tatami o compañero lo dice en los detalles.</li>
</ul>
<h3>Vídeos</h3>
<ul>
<li>Instructor con trayectoria comprobable, que explique el porqué.</li>
<li>Recortado a la parte útil cuando el vídeo es largo.</li>
<li>Sin gi primero; con gi solo si no hay alternativa, y marcado.</li>
<li>Si hay uno bueno en español, como alternativo.</li>
<li>No se da por bueno hasta que lo ves tú (<code>verificado</code>).</li>
</ul>`
},
{
  id: "problemas", t: "Si algo falla",
  r: "Los problemas más probables y cómo salir de cada uno.",
  html: `
<table class="gt"><thead><tr><th>Lo que ves</th><th>Por qué pasa</th><th>Qué hacer</th></tr></thead><tbody>
<tr><td>Los vídeos no se reproducen (error 153)</td><td>Has abierto <code>index.html</code> con doble clic</td><td><code>node scripts/servir.js</code> y abre <code>http://localhost:8000</code></td></tr>
<tr><td>Una ficha dice que el canal no deja ver el vídeo</td><td>El canal bloquea el incrustado</td><td><code>/verificar id-ficha no vale</code></td></tr>
<tr><td>La web sale en blanco</td><td>Error de sintaxis en un archivo de datos</td><td><code>node scripts/validar.js</code> te dice archivo y línea; o pídeselo a Claude Code</td></tr>
<tr><td>La web publicada no cambia</td><td>GitHub Pages tarda 1–2 min, o el navegador guarda la versión vieja</td><td>Espera, recarga con Ctrl+Shift+R. En Actions, «pages build and deployment» tiene que estar en verde</td></tr>
<tr><td>El PR sale con ✗ roja</td><td>El validador ha encontrado un error</td><td>Ver <a href="#guia-automatico">Comprobaciones automáticas</a></td></tr>
<tr><td><code>claude</code> no se reconoce</td><td>La terminal no encuentra el programa</td><td>Abre una terminal nueva. Si sigue: <a href="https://code.claude.com/docs/en/troubleshoot-install" target="_blank" rel="noopener">guía oficial de instalación</a></td></tr>
<tr><td>Claude Code no puede abrir el PR</td><td><code>gh</code> no está instalado o sin sesión</td><td><code>gh auth login</code>; o en GitHub pulsa el aviso «Compare &amp; pull request» de la rama</td></tr>
<tr><td>«conflict» al fusionar</td><td>Dos ramas cambiaron lo mismo</td><td>En Claude Code: «resuelve el conflicto de esta rama con main»</td></tr>
<tr><td>Claude Code no encuentra vídeos</td><td>La búsqueda web no está disponible en esa sesión</td><td>Pásale tú los enlaces: «usa este vídeo para lu-arm-drag: https://…»</td></tr>
<tr><td>Algo se ha roto y no sabes qué</td><td>—</td><td>En GitHub, el PR fusionado tiene el botón «Revert»: deshace ese cambio entero</td></tr>
</tbody></table>`
},
{
  id: "campos", t: "Referencia de campos",
  r: "Todos los campos de una ficha y los valores que admiten.",
  html: (M) => `
<table class="gt"><thead><tr><th>Campo</th><th>Valores</th><th>Notas</th></tr></thead><tbody>
<tr><td><code>id</code></td><td>minúsculas, números y guiones</td><td>Único. Prefijo <code>box-</code>, <code>lu-</code> o <code>su-</code></td></tr>
<tr><td><code>seccion</code></td><td>${M.SECCIONES.map(s => `<code>${s.id}</code>`).join(" · ")}</td><td></td></tr>
<tr><td><code>tipo</code></td><td><code>tecnica</code> · <code>drill</code></td><td></td></tr>
${M.SECCIONES.map(s => `<tr><td><code>cat</code> (${s.nombre.toLowerCase()})</td><td>${s.categorias.map(c => `<code>${c.id}</code>`).join(" · ")}</td><td>Obligatorio en técnicas</td></tr>`).join("")}
<tr><td><code>nivel</code></td><td><code>F</code> · <code>I</code> · <code>A</code></td><td>Fundamentos, intermedio, avanzado</td></tr>
<tr><td><code>mma</code></td><td><code>muy alta</code> · <code>alta</code> · <code>media</code> · <code>baja</code></td><td>Con <code>mmaNota</code> explicando por qué</td></tr>
<tr><td><code>fases</code></td><td>${M.FASES.map(f => `<code>${f.id}</code>`).join(" · ")}</td><td>Una o varias</td></tr>
<tr><td><code>solo</code></td><td><code>si</code> · <code>parcial</code> · <code>no</code></td><td>Parcial: solo el patrón sin compañero</td></tr>
<tr><td><code>material</code></td><td>${Object.keys(M.MATERIAL).map(m => `<code>${m}</code>`).join(" · ")}</td><td>Lista; <code>ninguno</code> si no hace falta nada</td></tr>
<tr><td><code>golpes</code></td><td>números del 1 al 6</td><td>Boxeo, para diestro. 1 jab · 2 directo · 3 gancho izquierdo · 4 gancho derecho · 5 uppercut izquierdo · 6 uppercut derecho</td></tr>
<tr><td><code>gi</code></td><td><code>ambos</code> · <code>gi</code> · <code>nogi</code></td><td>Suelo</td></tr>
<tr><td><code>desde</code> / <code>hasta</code></td><td><code>{ pos, lado }</code> con posiciones: ${(M.POSICIONES || []).map(p => `<code>${p.id}</code>`).join(" · ")}</td><td>Suelo. Lados: <code>arriba</code>, <code>abajo</code> o <code>neutral</code></td></tr>
<tr><td><code>mapa</code></td><td><code>{ x, y }</code></td><td>Posiciones de suelo: su sitio en el mapa (lienzo de 1000 × 680)</td></tr>
<tr><td><code>jju</code></td><td>id de capítulo (en <code>datos-comun.js</code>)</td><td>Suelo</td></tr>
<tr><td><code>dosis</code> / <code>criterio</code></td><td>texto</td><td>Drills: rondas y tiempo / cuándo está superado</td></tr>
<tr><td><code>videos</code></td><td><code>V(id, instructor, { inicio, fin, etiqueta, idioma, segmentos, verificado })</code></td><td>id = 11 caracteres; tiempos en segundos; <code>verificado: "AAAA-MM-DD"</code></td></tr>
</tbody></table>`
}
];
})();
