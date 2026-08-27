"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/components/providers/cart-provider";
import { toolIcons, IconClose, IconMinus, IconPlus, IconCart } from "@/components/icons";
import { formatPrice, cn } from "@/lib/utils";

export function CartDrawer() {
  const { lines, isOpen, closeCart, setQuantity, removeItem, subtotal, count } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-ink-950/10 bg-paper-50"
          >
            <div className="flex items-center justify-between border-b border-ink-950/10 px-6 py-5">
              <h2 className="font-display text-lg text-ink-950">
                Coșul tău {count > 0 && <span className="text-taupe-400">({count})</span>}
              </h2>
              <button
                onClick={closeCart}
                aria-label="Închide coșul"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-ink-950/5"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-paper-100 text-taupe-400">
                  <IconCart className="h-7 w-7" />
                </div>
                <p className="text-taupe-600">Coșul tău este gol momentan.</p>
                <Link
                  href="/magazin"
                  onClick={closeCart}
                  className="font-mono text-xs uppercase tracking-[0.14em] text-bronze-600 underline underline-offset-4"
                >
                  Vezi magazinul
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  <ul className="flex flex-col gap-5">
                    {lines.map(({ product, quantity }) => {
                      const Icon = toolIcons[product.variant];
                      return (
                        <li key={product.id} className="flex gap-4">
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-ink-950/10 bg-paper-100">
                            <Icon className="h-7 w-7 text-bronze-600" strokeWidth={1.3} />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-taupe-400">
                                  {product.brand}
                                </p>
                                <p className="font-display text-sm text-ink-950">{product.name}</p>
                              </div>
                              <button
                                onClick={() => removeItem(product.id)}
                                aria-label="Elimină produsul"
                                className="text-taupe-400 transition-colors hover:text-ember-500"
                              >
                                <IconClose className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center gap-2 rounded-full border border-ink-950/10 px-1">
                                <button
                                  className="flex h-7 w-7 items-center justify-center text-ink-950/70 hover:text-bronze-600"
                                  onClick={() => setQuantity(product.id, quantity - 1)}
                                  aria-label="Scade cantitatea"
                                >
                                  <IconMinus className="h-3.5 w-3.5" />
                                </button>
                                <span className="w-4 text-center font-mono text-xs">{quantity}</span>
                                <button
                                  className="flex h-7 w-7 items-center justify-center text-ink-950/70 hover:text-bronze-600"
                                  onClick={() => setQuantity(product.id, quantity + 1)}
                                  aria-label="Crește cantitatea"
                                >
                                  <IconPlus className="h-3.5 w-3.5" />
                                </button>
                              </div>
                              <span className="font-mono text-sm text-ink-950">
                                {formatPrice(product.price * quantity)}
                              </span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="border-t border-ink-950/10 px-6 py-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-taupe-600">Subtotal</span>
                    <span className="font-display text-lg text-ink-950">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="mt-1 text-xs text-taupe-400">
                    Transportul se calculează la finalizarea comenzii.
                  </p>
                  <Link
                    href="/cos"
                    onClick={closeCart}
                    className={cn(
                      "mt-4 flex h-12 w-full items-center justify-center rounded-full bg-ink-950 font-mono text-xs uppercase tracking-[0.14em] text-paper-50 transition-colors hover:bg-bronze-600",
                    )}
                  >
                    Finalizează comanda
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
