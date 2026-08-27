"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { toolIcons, IconSearch, IconClose } from "@/components/icons";

export function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q),
      )
      .slice(0, 6);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-24 w-[92%] max-w-xl rounded-3xl border border-paper-50/10 bg-ink-900 p-2 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-paper-50/10 px-4 py-4">
              <IconSearch className="h-5 w-5 text-taupe-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Caută unelte, branduri, categorii…"
                className="flex-1 bg-transparent text-paper-50 placeholder:text-taupe-500 focus:outline-none"
              />
              <button
                onClick={onClose}
                aria-label="Închide căutarea"
                className="flex h-8 w-8 items-center justify-center rounded-full text-taupe-400 hover:bg-paper-50/10 hover:text-paper-50"
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query.trim() && results.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-taupe-500">
                  Niciun rezultat pentru „{query}”.
                </p>
              )}
              {results.map((product) => {
                const Icon = toolIcons[product.variant];
                return (
                  <Link
                    key={product.id}
                    href={`/magazin/${product.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors hover:bg-paper-50/5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper-50/5">
                      <Icon className="h-5 w-5 text-bronze-400" strokeWidth={1.3} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display text-sm text-paper-50">{product.name}</p>
                      <p className="font-mono text-[11px] uppercase tracking-wide text-taupe-500">
                        {product.brand}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-bronze-300">
                      {formatPrice(product.price)}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
