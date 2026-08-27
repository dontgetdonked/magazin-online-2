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
