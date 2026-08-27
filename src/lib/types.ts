export type ToolVariant =
  | "drill"
  | "grinder"
  | "saw"
  | "sander"
  | "hammer"
  | "wrench"
  | "pliers"
  | "level"
  | "tapeMeasure"
  | "laser"
  | "helmet"
  | "gloves"
  | "goggles"
  | "generator"
  | "mixer"
  | "compressor"
  | "anchor"
  | "clamp"
  | "prybar"
  | "impactDriver";

export type CategorySlug =
  | "scule-electrice"
  | "scule-de-mana"
  | "masurare-nivelare"
  | "echipament-protectie"
  | "fixare-prindere"
  | "utilaje-santier";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  icon: ToolVariant;
  productCount: number;
}

export type Badge = "Nou" | "Bestseller" | "Reducere" | "Stoc limitat";

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  variant: ToolVariant;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  sku: string;
  inStock: boolean;
  badges: Badge[];
  shortDescription: string;
  description: string[];
  specs: Spec[];
  accent: "bronze" | "steel" | "ember";
}
