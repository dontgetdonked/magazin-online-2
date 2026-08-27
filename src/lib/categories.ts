import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "scule-electrice",
    name: "Scule electrice",
    shortName: "Electrice",
    description:
      "Bormașini, polizoare unghiulare și fierăstraie cu acumulator pentru randament pe șantier.",
    icon: "drill",
    productCount: 5,
  },
  {
    slug: "scule-de-mana",
    name: "Scule de mână",
    shortName: "De mână",
    description:
      "Ciocane, chei și clești forjate, calibrate pentru precizie și rezistență în timp.",
    icon: "hammer",
    productCount: 4,
  },
  {
    slug: "masurare-nivelare",
    name: "Măsurare & nivelare",
    shortName: "Măsurare",
    description:
      "Nivele cu bulă, telemetre laser și rulete de precizie milimetrică.",
    icon: "level",
    productCount: 3,
  },
  {
    slug: "echipament-protectie",
    name: "Echipament de protecție",
    shortName: "Protecție",
    description:
      "Căști, ochelari și mănuși certificate pentru siguranța echipei tale.",
    icon: "helmet",
    productCount: 3,
  },
  {
    slug: "fixare-prindere",
    name: "Fixare & prindere",
    shortName: "Fixare",
    description:
      "Cleme, ancore și sisteme de prindere pentru structuri solide.",
    icon: "clamp",
    productCount: 2,
  },
  {
    slug: "utilaje-santier",
    name: "Utilaje de șantier",
    shortName: "Utilaje",
    description:
      "Generatoare, compresoare și mixere pentru lucrări de amploare.",
    icon: "generator",
    productCount: 3,
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
