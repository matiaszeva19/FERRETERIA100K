// Estado en tiempo real del Equipo Indunor Ferretería — leído por oficina3d/index.html
window.ESTADO_EQUIPO = {
  negocio: "Indunor Ferretería (@indunorferreteria) — Campana",
  actualizado: "2026-11-27 04:25",
  foco: "Secuencia Telaraña de Contenido (4 Fichas de Mostrador Cero Memorización) para rodaje hoy Viernes 14:00 hs + registro en MEMORY.md",
  ciclo_actual: "Viernes 14:00 hs: 4 Fichas de Mostrador conectadas (Contraste -> Autoridad -> Objeciones -> Combo Finde) + Checklist de Bandeja (15 min)",
  agentes: [
    {
      id: "maestro",
      nombre: "Agente Maestro",
      subtitulo: "Orquestador & Quality Gate",
      estado: "ENTREGADO",
      color: "#38bdf8",
      rol: "Reemplazó los videos sueltos por la Secuencia de 4 Roles en Ficha de Mostrador (Telaraña de Contenido) para grabar hoy viernes 14:00 hs en 15 minutos y fijó el estándar en MEMORY.md.",
      analisis_previo: "Cruzó catálogo prioritario de /cerebro/ (discos 115mm, siliconas, bulonería fraccionada y combo pintura/sellado) con el formato Cero Memoria validado (1.602 vs 818 vistas).",
      conexiones: ["cerebro", "analista", "guionista", "carruseles", "editor"],
      entregable_actual: "produccion/guiones/viernes_secuencia_4_fichas_mostrador.md"
    },
    {
      id: "analista",
      nombre: "Subagente 1: Analista & Calendario",
      subtitulo: "Métricas + Competencia Chrome (26/11)",
      estado: "ENTREGADO",
      color: "#a78bfa",
      rol: "Relevó 15 cuentas en Chrome (8 locales de Campana + 7 referentes de Argentina), detectó el liderazgo de @pinturerias_ultracolor (13.7K) y los outliers de @boschherramientasar (95.6K) y @lusqtoff (89.2K).",
      analisis_previo: "Confirmó que 1.602 vistas ya supera a toda ferretería directa de Campana (61-1.049) y extrajo 5 mecánicas replicables para el Formato Ping-Pong.",
      conexiones: ["maestro", "guionista", "carruseles", "editor"],
      entregable_actual: "inputs/referentes/investigacion_competencia_reels_2026_11.md"
    },
    {
      id: "guionista",
      nombre: "Subagente 2: Guionista & Hooks",
      subtitulo: "5 Guiones Ping-Pong (Productos Nuevos)",
      estado: "ENTREGADO",
      color: "#f59e0b",
      rol: "Redactó los 5 Ping-Pong nuevos (Pregunta 1 Hook tuyo + Respuesta libre de ella + Pregunta 2 de cierre y copy corto) para Electrodos, Alambre, Siliconas, Cintas y Bulonería.",
      analisis_previo: "Cero memoria para la clienta y cero temas repetidos con la primera tanda.",
      conexiones: ["analista", "carruseles", "editor", "maestro"],
      entregable_actual: "produccion/guiones/semana_02_guiones_cero_memoria.md"
    },
    {
      id: "carruseles",
      nombre: "Subagente 3: Creador de Carruseles",
      subtitulo: "2 Carruseles Minimalistas 1:1 Nuevos",
      estado: "ENTREGADO",
      color: "#10b981",
      rol: "Diseñó la estructura de 3 placas 1:1 para el Carrusel 1 (Electrodos y Alambre) y Carrusel 2 (Combos Siliconas + Cintas de Papel + Cintas Métricas) con estética minimalista.",
      analisis_previo: "6 fotos cuadradas rápidas de sacar en la misma mesa de rodaje del viernes para duplicar la plantilla minimalista de Canva.",
      conexiones: ["analista", "guionista", "editor", "maestro"],
      entregable_actual: "produccion/carruseles/semana_02_carruseles.md"
    },
    {
      id: "editor",
      nombre: "Subagente 4: Rodaje & Edición",
      subtitulo: "5 Pilas en Mostrador (25 min)",
      estado: "ENTREGADO",
      color: "#fb7185",
      rol: "Organizó la mesa de rodaje con las 5 pilas de productos nuevos para sacar las 6 fotos y grabar los 5 Ping-Pong en 25-30 minutos.",
      analisis_previo: "Contraste de subtítulos (Azul en pregunta del creador -> Blanco con zoom 108% en respuesta de la clienta) + B-roll de 4s por producto.",
      conexiones: ["analista", "guionista", "carruseles", "maestro"],
      entregable_actual: "produccion/edicion/semana_02_rodaje_y_edicion.md"
    }
  ],
  flujos: [
    ["cerebro", "maestro"],
    ["maestro", "analista"],
    ["analista", "guionista"],
    ["analista", "carruseles"],
    ["analista", "editor"],
    ["guionista", "carruseles"],
    ["guionista", "editor"],
    ["carruseles", "editor"],
    ["editor", "maestro"]
  ]
};
