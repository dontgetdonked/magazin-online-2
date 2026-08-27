import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const currency = new Intl.NumberFormat("ro-RO", {
  style: "currency",
  currency: "RON",
  minimumFractionDigits: 2,
});

export function formatPrice(value: number) {
  return currency.format(value);
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("ro-RO", { notation: "compact" }).format(value);
}

/** Romanian numeral agreement: "de" is required between a count ≥20 and its noun. */
export function formatCount(count: number, singular: string, plural: string) {
  const noun = count === 1 ? singular : plural;
  return count >= 20 ? `${count} de ${noun}` : `${count} ${noun}`;
}

/**
 * Folds diacritics and case for search matching, so "bormasina" matches
 * "bormașină" — most Romanian typing (and every keyboard layout without
 * dedicated ș/ț/â keys) drops diacritics by default.
 */
export function normalizeForSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}
