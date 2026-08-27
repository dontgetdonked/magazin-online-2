"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/providers/cart-provider";
import { toolIcons, IconClose, IconMinus, IconPlus, IconCart, IconCheck, IconArrowRight } from "@/components/icons";
import { formatPrice } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 500;
const SHIPPING_COST = 25;

export function CartPageContent() {
  const { lines, subtotal, count, setQuantity, removeItem, clear } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber] = useState(() => `STR-${Math.floor(100000 + Math.random() * 899999)}`);

  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  const progress = useMemo(
    () => Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)),
    [subtotal],
  );

  if (orderPlaced) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-28 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-bronze-500 text-ink-950">
          <IconCheck className="h-7 w-7" />
        </div>
        <h1 className="mt-6 font-display text-3xl text-ink-950">Comandă plasată cu succes</h1>
        <p className="mt-3 text-taupe-600">
          Comanda <span className="font-mono text-ink-950">#{orderNumber}</span> a fost
          înregistrată. Acesta este un demo de portofoliu — nu se va procesa nicio plată reală.
        </p>
        <Link
          href="/magazin"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-ink-950 px-7 text-sm text-paper-50 transition-colors hover:bg-bronze-600"
        >
          Continuă cumpărăturile
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-28 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-paper-100 text-taupe-400">
          <IconCart className="h-7 w-7" />
        </div>
        <h1 className="mt-6 font-display text-3xl text-ink-950">Coșul tău este gol</h1>
        <p className="mt-3 text-taupe-600">
          Adaugă unelte din magazin pentru a le regăsi aici.
        </p>
        <Link
          href="/magazin"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-ink-950 px-7 text-sm text-paper-50 transition-colors hover:bg-bronze-600"
        >
          Vezi magazinul
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-3 lg:px-8 lg:py-16">
      <div className="lg:col-span-2">
        <div className="flex items-baseline justify-between">
          <h1 className="font-display text-3xl text-ink-950">Coșul tău</h1>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-taupe-500">
            {count} produse
          </span>
        </div>

        {subtotal < FREE_SHIPPING_THRESHOLD && (
          <div className="mt-6 rounded-2xl border border-ink-950/10 bg-paper-100 p-4">
            <p className="text-sm text-taupe-600">
              Mai adaugă <strong className="text-ink-950">{formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)}</strong>{" "}
              pentru livrare gratuită.
            </p>
            <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-ink-950/10">
              <div
                className="h-full rounded-full bg-bronze-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <ul className="mt-6 divide-y divide-ink-950/10 border-y border-ink-950/10">
          <AnimatePresence initial={false}>
            {lines.map(({ product, quantity }) => {
              const Icon = toolIcons[product.variant];
              return (
                <motion.li
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-5 py-6"
                >
                  <Link
                    href={`/magazin/${product.slug}`}
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-ink-950/10 bg-paper-100"
                  >
                    <Icon className="h-9 w-9 text-bronze-600" strokeWidth={1.2} />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-taupe-400">
                          {product.brand}
                        </p>
                        <Link href={`/magazin/${product.slug}`}>
                          <p className="font-display text-base text-ink-950">{product.name}</p>
                        </Link>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        aria-label="Elimină produsul"
                        className="text-taupe-400 transition-colors hover:text-ember-500"
                      >
                        <IconClose className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-ink-950/10 px-1">
                        <button
                          className="flex h-8 w-8 items-center justify-center text-ink-950/70 hover:text-bronze-600"
                          onClick={() => setQuantity(product.id, quantity - 1)}
                          aria-label="Scade cantitatea"
                        >
                          <IconMinus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-5 text-center font-mono text-xs">{quantity}</span>
                        <button
                          className="flex h-8 w-8 items-center justify-center text-ink-950/70 hover:text-bronze-600"
                          onClick={() => setQuantity(product.id, quantity + 1)}
                          aria-label="Crește cantitatea"
                        >
                          <IconPlus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-display text-lg text-ink-950">
                        {formatPrice(product.price * quantity)}
                      </span>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>

        <button
          onClick={clear}
          className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-taupe-500 underline underline-offset-4 hover:text-ember-500"
        >
          Golește coșul
        </button>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-28 rounded-3xl border border-ink-950/10 bg-paper-100 p-7">
          <h2 className="font-display text-lg text-ink-950">Sumar comandă</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm">
            <div className="flex justify-between text-taupe-600">
              <span>Subtotal</span>
              <span className="font-mono text-ink-950">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-taupe-600">
              <span>Transport</span>
              <span className="font-mono text-ink-950">
                {shipping === 0 ? "Gratuit" : formatPrice(shipping)}
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-ink-950/10 pt-4">
            <span className="font-display text-ink-950">Total</span>
            <span className="font-display text-xl text-ink-950">{formatPrice(total)}</span>
          </div>
          <button
            onClick={() => {
              setOrderPlaced(true);
              clear();
            }}
            className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-ink-950 font-mono text-xs uppercase tracking-[0.16em] text-paper-50 transition-colors hover:bg-bronze-600"
          >
            Plasează comanda
          </button>
          <p className="mt-3 text-center text-xs text-taupe-400">
            Proiect de portofoliu — nicio plată nu va fi procesată.
          </p>
        </div>
      </div>
    </div>
  );
}
