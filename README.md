# STRATUM — unelte profesionale de construcții

Portofoliu: magazin e-commerce complet pentru un brand fictiv de instrumente de
construcții, construit ca proiect de portofoliu (Next.js 16 / App Router +
Tailwind CSS v4 + Framer Motion). Toate produsele, brandurile și persoanele
sunt fictive; textele lungi de tip "lorem ipsum" sunt folosite intenționat ca
placeholder de conținut.

## Stack

- **Next.js 16** (App Router, Turbopack, TypeScript)
- **Tailwind CSS v4** — design tokens definite în `src/app/globals.css` prin `@theme`
- **Framer Motion** — reveal-uri la scroll, tranziții, cart drawer, accordion
- **next/font** — Space Grotesk (display), Inter (text), JetBrains Mono (etichete/prețuri)
- Fără imagini foto: fiecare produs are o ilustrație SVG proprie, în stil
  schiță tehnică ("blueprint"), generată din `src/components/icons.tsx` +
  `src/components/illustrations.tsx` — nu placeholdere generice.

## Pornire locală

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producție
npm run lint    # ESLint
```

## Structură

```
src/
  app/            rute (App Router): / , /magazin , /magazin/[slug] , /cos , /despre , /contact
  components/
    icons.tsx           set de icon-uri SVG desenate manual
    illustrations.tsx    plăci ilustrative "blueprint" (ProductPlate, HeroBlueprint, LocationPlate)
    layout/              header, footer, cart drawer, meniu mobil, căutare
    sections/             secțiunile paginii principale
    shop/, cart/, contact/  componente specifice fiecărei pagini
    providers/            context-ul coșului de cumpărături (persistat în localStorage)
  lib/              date produse/categorii (mock) + utilitare
```

## Notă

Coșul, căutarea și formularul de contact sunt complet funcționale pe partea
de client (stare locală + `localStorage`), dar nu există backend real —
plasarea unei comenzi este simulată, fără nicio procesare de plată.
