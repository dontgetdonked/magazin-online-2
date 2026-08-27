"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { searchProducts } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useOverlayDialog } from "@/hooks/use-overlay-dialog";
import { toolIcons, IconSearch, IconClose, IconArrowRight } from "@/components/icons";

const RESULT_LIMIT = 6;

export function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const panelRef = useOverlayDialog<HTMLDivElement>(isOpen, onClose);

  const matches = useMemo(() => searchProducts(query), [query]);
  const results = matches.slice(0, RESULT_LIMIT);
  const hasMore = matches.length > RESULT_LIMIT;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Căutare produse"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-24 w-[92%] max-w-xl rounded-3xl border border-paper-50/10 bg-ink-900 p-2 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-paper-50/10 px-4 py-4">
              <IconSearch className="h-5 w-5 text-taupe-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Caută unelte, branduri, categorii…"
                aria-label="Text de căutare"
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
              {hasMore && (
                <Link
                  href={`/magazin?cauta=${encodeURIComponent(query.trim())}`}
                  onClick={onClose}
                  className="mt-1 flex items-center justify-center gap-2 rounded-2xl px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-bronze-300 transition-colors hover:bg-paper-50/5"
                >
                  Vezi toate cele {matches.length} rezultate în magazin
                  <IconArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
