# MedicalPracticeAI

Interactive educational medical simulation for health-science learners.

## Vision

MedicalPracticeAI is a browser-based clinical simulation where learners interview a simulated patient, perform focused assessments, review a live chart and vitals, order tests, use an evidence-reference assistant, make clinical decisions, and receive a timeline-based debrief.

> Educational simulation only. It is not medical advice, a diagnostic device, or a substitute for supervised clinical training.

## Design principles

- The simulation engine knows the hidden case state; MedCheckAI does not.
- Learners must gather evidence rather than being handed a diagnosis.
- Time, unnecessary testing, communication, safety, and escalation can affect outcomes.
- Cases are data-driven so new scenarios can be added without rewriting the UI.
- Patient depictions and examination interactions remain appropriate for school use.
- Authoritative reference material is attributed and separated from scenario logic.

## V1

The first playable case is a fictional adult with evolving respiratory symptoms. It demonstrates the cockpit UI, patient interview, examination tools, changing vitals, orders/results, clinical decision submission, and debrief.

## Planned architecture

- `index.html` — simulation cockpit
- `css/app.css` — responsive clinical UI
- `js/scenario.js` — scenario data
- `js/app.js` — simulation state engine and interactions

Future versions can add a backend, authentication, instructor dashboard, saved student sessions, scenario authoring, and live MedlinePlus-backed retrieval.
