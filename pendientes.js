// =============================================================
//  LISTA DE PENDIENTES
//  Todo lo que podría entrar en la web y todavía no tiene ficha.
//  P(id, sección, nombre, fuente, [mma, hueco, solo, conecta], extra)
//    mma 0–3 · hueco 0–2 · solo 0–2 · conecta 0–2 (ver huecos-calc.js)
//  extra: { interes: 0–3, tanda: nº, estado, en, nota }
//  estado: idea | planificada | en-tanda | publicada
//  Al publicar una ficha: estado "publicada" y ficha: "<id de la ficha>"
// =============================================================
(() => {
const P = (id, seccion, es, fuente, [mma, hueco, solo, conecta], extra = {}) =>
  ({ id, seccion, es, fuente, mma, hueco, solo, conecta, interes: 0, estado: extra.tanda ? "planificada" : "idea", ...extra });

MMA.PENDIENTES = [
  // ---------------- SUELO · SUPERVIVENCIA (Jiu-Jitsu University, parte 1) ----------------
  P("p-sup-espalda", "suelo", "Postura de supervivencia en la espalda", "JJU 1-0", [3, 2, 1, 2], { tanda: 1 }),
  P("p-sup-manos-espalda", "suelo", "Pelea de manos con el rival a tu espalda", "JJU 1-1", [3, 2, 1, 2], { tanda: 1 }),
  P("p-sup-tortuga", "suelo", "Sobrevivir en cuatro apoyos (tortuga) en MMA", "JJU 2-0", [2, 2, 2, 1], { tanda: 1 }),
  P("p-sup-montada", "suelo", "Postura de supervivencia en la montada", "JJU 3-0", [3, 2, 2, 2], { tanda: 1 }),
  P("p-sup-montada-cuello", "suelo", "Anular la estrangulación en la montada", "JJU 3-3", [2, 2, 1, 2], { tanda: 1 }),
  P("p-sup-crossface", "suelo", "Bloquear el crossface en cien kilos", "JJU 4-1", [3, 2, 1, 2], { tanda: 1 }),
  P("p-sup-kesa", "suelo", "Pelea de manos contra kesa-gatame", "JJU 4-3", [2, 2, 1, 1], { tanda: 1 }),
  P("p-sup-rodilla", "suelo", "Supervivencia contra rodilla en el vientre", "JJU 5-0", [2, 2, 2, 1], { tanda: 1 }),

  // ---------------- SUELO · ESCAPES (parte 2) ----------------
  P("p-esc-rodilla", "suelo", "Escape corriendo de rodilla en el vientre", "JJU 9-0", [2, 2, 1, 1], { tanda: 4 }),
  P("p-esc-armbar", "suelo", "Escape de la llave de brazo", "JJU 10-0", [3, 2, 1, 2], { tanda: 4 }),
  P("p-esc-triangulo", "suelo", "Escape del triángulo hacia el pase", "JJU 11-0", [2, 2, 0, 2], { tanda: 4 }),
  P("p-esc-guillotina", "suelo", "Escape de la guillotina", "JJU 12-0", [3, 2, 1, 2], { tanda: 4 }),
  P("p-esc-guillotina-brazo", "suelo", "Escape de la guillotina con brazo dentro", "JJU 12-1", [3, 1, 1, 2], { tanda: 4 }),
  P("p-esc-pie", "suelo", "Escape de la llave de pie", "JJU 13-0", [1, 2, 1, 1], { tanda: 4 }),
  P("p-esc-kimura", "suelo", "Escape de la kimura", "JJU 14-0", [2, 2, 1, 2], { tanda: 4 }),
  P("p-esc-montada-sentada", "suelo", "Escape de la montada sentada", "JJU 7-2", [2, 1, 1, 2]),
  P("p-esc-cien-rodillas", "suelo", "Escape de cien kilos a rodillas", "JJU 8-2", [3, 1, 1, 2], { nota: "En MMA, puente para levantarse o ir a una pierna" }),
  P("p-esc-cien-corriendo", "suelo", "Escape corriendo de cien kilos", "JJU 8-3", [2, 1, 1, 1]),
  P("p-esc-kesa", "suelo", "Escape de kesa-gatame", "JJU 8-4", [2, 1, 1, 1]),
  P("p-esc-control-luchador", "suelo", "Escape del control de luchador", "JJU 8-6", [2, 1, 1, 1]),

  // ---------------- SUELO · GUARDIA (parte 3) ----------------
  P("p-gua-media-knee-shield", "suelo", "Media guardia: knee shield", "Informe MMA", [3, 1, 0, 2], { tanda: 8 }),
  P("p-gua-media-profunda", "suelo", "Media guardia profunda", "JJU 24-3", [2, 1, 0, 1], { tanda: 8 }),
  P("p-gua-mariposa-raspado", "suelo", "Raspado de mariposa clásico", "JJU 18-4", [2, 1, 0, 2], { tanda: 8 }),
  P("p-gua-sentada", "suelo", "Guardia sentada: raspado clásico", "JJU 22-2", [2, 2, 0, 2], { tanda: 8 }),
  P("p-gua-defensa-pase", "suelo", "Defensa del pase: bloquear la rodilla", "JJU 17-7", [3, 2, 0, 1], { tanda: 8 }),
  P("p-gua-media-espalda", "suelo", "Media guardia: salir a la espalda", "JJU 24-5", [3, 1, 0, 2]),
  P("p-gua-media-kimura", "suelo", "Media guardia: kimura desde abajo", "JJU 24-6", [2, 1, 0, 2]),
  P("p-gua-overwrap", "suelo", "Guardia cerrada: control del brazo por encima", "JJU 15-3", [3, 1, 0, 2]),
  P("p-gua-overwrap-espalda", "suelo", "Guardia cerrada: del control del brazo a la espalda", "JJU 15-4", [3, 1, 0, 2]),
  P("p-gua-pendulo", "suelo", "Raspado de péndulo (flower sweep)", "JJU 15-12", [2, 1, 0, 2]),
  P("p-gua-de-pie", "suelo", "Guardia cerrada contra rival de pie: raspado con underhook", "JJU 16-2", [2, 1, 0, 2]),
  P("p-gua-retencion", "suelo", "Retención de guardia en solitario", "Informe MMA", [2, 2, 2, 1]),

  // ---------------- SUELO · PASES (parte 4) ----------------
  P("p-pas-de-pie", "suelo", "Abrir la guardia cerrada de pie", "JJU 25-17", [3, 2, 0, 2]),
  P("p-pas-media-aplastar", "suelo", "Aplastar la media guardia (crossface y underhook)", "JJU 35-1", [3, 2, 0, 2], { tanda: 8 }),
  P("p-pas-knee-cut", "suelo", "Pase de rodilla cruzada (knee cut)", "JJU 26-4", [3, 2, 0, 2]),
  P("p-pas-toreando", "suelo", "Pase torero (toreando)", "JJU 26-7", [3, 2, 0, 1]),
  P("p-pas-doble-underhook", "suelo", "Pase de doble underhook", "JJU 25-12", [2, 1, 0, 2]),
  P("p-pas-mariposa", "suelo", "Pase de mariposa rodeando", "JJU 27-2", [2, 1, 0, 1]),
  P("p-pas-media-espinilla", "suelo", "Pase de media guardia deslizando la espinilla", "JJU 35-6", [2, 1, 0, 2]),

  // ---------------- SUELO · SUMISIONES Y CAPA MMA (parte 5 + informe) ----------------
  P("p-sum-body-triangle", "suelo", "Control de espalda con triángulo de cuerpo", "Informe MMA", [3, 2, 0, 2], { tanda: 6 }),
  P("p-sum-darce", "suelo", "D'Arce", "Informe MMA", [2, 2, 0, 2], { tanda: 6 }),
  P("p-sum-anaconda", "suelo", "Anaconda", "Informe MMA", [2, 2, 0, 1], { tanda: 6 }),
  P("p-mma-gnp-montada", "suelo", "Ground and pound desde la montada", "Informe MMA", [3, 2, 0, 2], { tanda: 6 }),
  P("p-mma-gnp-media", "suelo", "Ground and pound desde la media guardia", "Informe MMA", [3, 2, 0, 1], { tanda: 6 }),
  P("p-sum-toma-espalda", "suelo", "Tomar la espalda desde la montada", "JJU 37", [3, 2, 0, 2], { tanda: 6 }),
  P("p-sum-tortuga-espalda", "suelo", "Tomar la espalda desde la tortuga", "JJU 39", [3, 2, 0, 2]),
  P("p-sum-cien-kimura", "suelo", "Kimura desde cien kilos", "JJU 38-1", [2, 2, 0, 2]),
  P("p-sum-s-mount", "suelo", "Llave de brazo desde la montada en S", "JJU 37-9", [2, 1, 0, 2]),
  P("p-sum-ezequiel", "suelo", "Ezequiel desde la montada (sin gi)", "JJU 37-3", [1, 1, 0, 1]),
  P("p-sum-tobillo", "suelo", "Llave de tobillo recta", "JJU 41-1", [1, 1, 0, 1]),
  P("p-drill-breakfall", "suelo", "Caída y levantada técnica (drill)", "Informe MMA", [3, 2, 2, 2]),
  P("p-drill-puente", "suelo", "Puente sobre el hombro (drill)", "Informe MMA", [2, 1, 2, 2], { estado: "publicada", ficha: "su-drill-puente" }),
  P("p-drill-sombra-suelo", "suelo", "Shadow grappling por cadenas (drill)", "Informe MMA", [2, 1, 2, 2], { estado: "publicada", ficha: "su-drill-sombra" }),

  // ---------------- LUCHA ----------------
  P("p-lu-down-block", "lucha", "Bloqueo abajo y marcos (down block)", "Informe MMA", [3, 2, 1, 2], { tanda: 2 }),
  P("p-lu-crossface", "lucha", "Crossface tras el sprawl", "Informe MMA", [3, 2, 0, 2], { tanda: 2 }),
  P("p-lu-sprawl-brawl", "lucha", "Sprawl y volver a golpear", "Informe MMA", [3, 2, 2, 2], { tanda: 2 }),
  P("p-lu-levantarse-tortuga", "lucha", "Levantarse desde la tortuga (stand-up)", "Informe MMA", [3, 2, 2, 2], { tanda: 2 }),
  P("p-lu-back-step", "lucha", "Paso atrás (back step), habilidad básica 6", "USA Wrestling", [1, 1, 2, 1], { tanda: 2 }),
  P("p-lu-front-headlock", "lucha", "Front headlock y snap down", "Informe MMA", [3, 1, 0, 2], { tanda: 5 }),
  P("p-lu-arm-drag", "lucha", "Arm drag", "Informe MMA", [2, 1, 1, 2], { tanda: 5 }),
  P("p-lu-over-under", "lucha", "Over-under en el clinch", "Informe MMA", [2, 1, 0, 2], { tanda: 5 }),
  P("p-lu-espalda-jaula", "lucha", "Defender con la espalda en la jaula", "Informe MMA", [3, 2, 1, 2], { tanda: 5 }),
  P("p-lu-girar-jaula", "lucha", "Girar y salir de la jaula", "Informe MMA", [3, 2, 1, 2], { tanda: 5 }),
  P("p-lu-high-crotch", "lucha", "High crotch", "Informe MMA", [2, 1, 1, 1], { tanda: 5 }),
  P("p-lu-doble-jaula", "lucha", "Doble pierna contra la jaula", "Informe MMA", [3, 1, 0, 2]),
  P("p-lu-single-jaula", "lucha", "Pierna simple contra la jaula", "Informe MMA", [3, 1, 0, 2]),
  P("p-lu-ankle-pick", "lucha", "Ankle pick", "Informe MMA", [2, 1, 1, 1]),
  P("p-lu-mat-return", "lucha", "Devolver al suelo (mat return)", "Informe MMA", [2, 2, 0, 1]),
  P("p-lu-espalda-de-pie", "lucha", "Control de espalda de pie", "Informe MMA", [2, 2, 0, 1]),
  P("p-lu-levantar", "lucha", "Levantar al rival (lift), habilidad básica 5", "USA Wrestling", [2, 1, 0, 1]),
  P("p-lu-back-arch", "lucha", "Arco atrás (back arch), habilidad básica 7", "USA Wrestling", [1, 1, 1, 0], { nota: "Solo con tatami" }),
  P("p-lu-ogoshi", "lucha", "O-goshi con underhook", "Informe MMA", [2, 1, 1, 1], { en: "Hip toss" }),
  P("p-lu-ura-nage", "lucha", "Ura-nage", "Informe MMA", [1, 1, 0, 1]),
  P("p-lu-sasae", "lucha", "Barrido de pie (de-ashi-barai, sasae)", "Informe MMA", [1, 1, 1, 1]),
  P("p-lu-sumi-gaeshi", "lucha", "Sumi-gaeshi", "Informe MMA", [1, 1, 0, 0]),

  // ---------------- BOXEO ----------------
  P("p-box-bloqueo", "boxeo", "Bloqueo y cubrirse", "AIBA", [2, 2, 2, 2], { tanda: 3, estado: "publicada", ficha: "box-bloqueo" }),
  P("p-box-slip-cross", "boxeo", "Esquiva y directo", "Informe MMA", [3, 2, 2, 2], { tanda: 3, estado: "publicada", ficha: "box-slip-cross" }),
  P("p-box-roll-hook", "boxeo", "Rodar y gancho", "Informe MMA", [1, 2, 2, 1], { tanda: 3, estado: "publicada", ficha: "box-rodar" }),
  P("p-box-catch-pitch", "boxeo", "Parar y devolver (catch and pitch)", "Informe MMA", [2, 2, 1, 2], { tanda: 3, estado: "publicada", ficha: "box-catch-pitch" }),
  P("p-box-2-3-2", "boxeo", "2-3-2", "Informe MMA", [2, 1, 2, 2], { tanda: 3, estado: "publicada", ficha: "box-2-3-2" }),
  P("p-box-1-2-3-2", "boxeo", "1-2-3-2", "Informe MMA", [2, 1, 2, 2], { tanda: 3, estado: "publicada", ficha: "box-1-2-3-2" }),
  P("p-box-angulos", "boxeo", "Salir en ángulo tras la combinación", "Informe MMA", [3, 2, 2, 2], { tanda: 3, estado: "publicada", ficha: "box-angulos" }),
  P("p-box-fintas", "boxeo", "Fintas", "Informe MMA", [3, 2, 2, 1], { tanda: 7, estado: "publicada", ficha: "box-fintas" }),
  P("p-box-cambio-guardia", "boxeo", "Cambio de guardia", "Informe MMA", [2, 2, 2, 1], { tanda: 7 }),
  P("p-box-contra-nivel", "boxeo", "Uppercut al que entra a derribar", "Informe MMA", [3, 2, 1, 2], { tanda: 7 }),
  P("p-box-overhand-nivel", "boxeo", "Overhand y cambio de nivel", "Informe MMA", [3, 1, 2, 2], { tanda: 7 }),
  P("p-box-salir-jaula", "boxeo", "Salir de la jaula golpeando", "Informe MMA", [3, 2, 1, 2], { tanda: 7 }),
  P("p-box-gancho-trasero", "boxeo", "Gancho trasero (4)", "AIBA", [2, 1, 2, 2], { estado: "publicada", ficha: "box-gancho-derecho" }),
  P("p-box-gancho-cuerpo", "boxeo", "Gancho al cuerpo", "AIBA", [2, 1, 2, 2], { estado: "publicada", ficha: "box-gancho-cuerpo" }),
  P("p-box-1-1-2", "boxeo", "1-1-2", "Informe MMA", [2, 1, 2, 2], { estado: "publicada", ficha: "box-1-1-2" }),
  P("p-box-3-6", "boxeo", "Gancho y uppercut corto (3-6)", "Informe MMA", [1, 1, 2, 1]),
  P("p-box-medir-jab", "boxeo", "Medir la distancia con el jab", "Informe MMA", [2, 1, 2, 2], { estado: "publicada", ficha: "box-medir-jab" }),
  P("p-box-cortar-jaula", "boxeo", "Cortar la jaula", "Informe MMA", [2, 2, 1, 1]),
  P("p-box-sombra-defensa", "boxeo", "Sombra solo de defensa (drill)", "Informe MMA", [2, 1, 2, 2], { estado: "publicada", ficha: "box-sombra-defensa" })
];
})();
