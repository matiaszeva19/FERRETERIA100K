---
name: evaluar-skill-entrante
description: >-
  Usa esta skill siempre que el usuario entregue una nueva skill, prompt, framework
  o flujo de trabajo para evaluar qué sirve, qué adaptar y qué descartar del sistema.
---

# Evaluar Skill Entrante (Curaduría)

## Objetivo
Evitar que el sistema se llene de instrucciones genéricas o pesadas. Mantener solo lo que realmente mejora la producción de videos grabados, el crecimiento en Campana o las ventas minoristas/mayoristas.

## Pasos

1. **Leer el estado actual**:
   - Revisa `cerebro/05_registro_skills_y_decisiones.md` y lista qué skills ya existen en `.agents/skills/`.
2. **Aplicar la Matriz de 4 Filtros**:
   - **Relevancia:** ¿Impacta directo en hooks, guiones, edición, redes locales o e-commerce ferretero?
   - **Fricción operativa:** ¿Un creador grabando en una ferretería puede aplicarlo rápido en su rutina real?
   - **Diferencial:** ¿Aporta algo mejor o distinto a lo que ya tenemos?
   - **Autenticidad:** ¿Respeta la voz cercana de ferretería argentina, o suena a marketing enlatado / corporativo?
3. **Emitir Veredicto**:
   - **ADOPTAR:** Suma directo y se integra tal cual en `.agents/skills/<nombre>/SKILL.md`.
   - **ADAPTAR:** Tiene partes valiosas pero viene con relleno o pensada para otro rubro -> extraer solo lo útil, reescribirla al estándar Ferretería 100K y descartar el resto.
   - **DESCARTAR:** Redundante, demasiado teórica, incompatible con video grabado real o contraproducente. Explicar en 2–3 líneas concretas por qué se descarta.
4. **Registrar y Comunicar**:
   - Dejar asentada la decisión en `cerebro/05_registro_skills_y_decisiones.md`.
   - Informar al usuario qué quedó integrado, qué se podó y por qué.
