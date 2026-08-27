"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { products, searchProducts } from "@/lib/products";
import { categories } from "@/lib/categories";
import { ProductCard } from "@/components/ui/product-card";
import { IconChevronDown, IconSearch, IconClose } from "@/components/icons";
import { cn, formatCount } from "@/lib/utils";
import type { CategorySlug } from "@/lib/types";

type SortKey = "recomandate" | "pret-asc" | "pret-desc" | "rating";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "recomandate", label: "Recomandate" },
  { value: "pret-asc", label: "Preț: crescător" },
  { value: "pret-desc", label: "Preț: descrescător" },
  { value: "rating", label: "Cele mai bine notate" },
];

export function ShopBrowser({
  initialCategory,
  initialQuery,
}: {
  initialCategory?: CategorySlug;
  initialQuery?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState<CategorySlug | "toate">(initialCategory ?? "toate");
  const [query, setQuery] = useState(initialQuery ?? "");
  const [sort, setSort] = useState<SortKey>("recomandate");
  const isFirstRender = useRef(true);

  // Reflect category + search in the URL so a filtered view can be shared,
  // bookmarked, or restored with the browser's Back button.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const params = new URLSearchParams();
    if (active !== "toate") params.set("categorie", active);
    if (query.trim()) params.set("cauta", query.trim());
    const qs = params.toString();
    const timeout = setTimeout(() => {
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, 300);
    return () => clearTimeout(timeout);
  }, [active, query, pathname, router]);

  const filtered = useMemo(() => {
    const searched = query.trim() ? searchProducts(query) : products;
    const base =
      active === "toate" ? searched : searched.filter((p) => p.category === active);
    const sorted = [...base];
    if (sort === "pret-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "pret-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [active, query, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-ink-950/10 pb-8">
        <div className="relative w-full sm:max-w-xs">
          <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-taupe-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Caută în magazin…"
            aria-label="Caută produse în magazin"
            className="h-11 w-full rounded-full border border-ink-950/15 bg-paper-50 pl-11 pr-10 text-sm text-ink-950 placeholder:text-taupe-500 focus:border-bronze-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Șterge căutarea"
              className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-taupe-500 hover:bg-ink-950/5 hover:text-ink-950"
            >
              <IconClose className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActive("toate")}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                active === "toate"
                  ? "border-ink-950 bg-ink-950 text-paper-50"
                  : "border-ink-950/15 text-ink-950/70 hover:border-ink-950/40",
              )}
            >
              Toate
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActive(cat.slug)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  active === cat.slug
                    ? "border-ink-950 bg-ink-950 text-paper-50"
                    : "border-ink-950/15 text-ink-950/70 hover:border-ink-950/40",
                )}
              >
                {cat.shortName}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.14em] text-taupe-600">
              {formatCount(filtered.length, "produs", "produse")}
            </span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="h-11 appearance-none rounded-full border border-ink-950/15 bg-paper-50 pl-4 pr-10 text-sm text-ink-950 focus:border-bronze-500 focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <IconChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-taupe-600" />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={product} index={i + 1} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-24 text-center text-taupe-600">
          {query.trim()
            ? `Niciun produs pentru „${query.trim()}”.`
            : "Niciun produs în această categorie momentan."}
        </p>
      )}
    </div>
  );
}
