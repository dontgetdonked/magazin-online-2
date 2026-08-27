"use client";

import { useState } from "react";
import { useCart } from "@/components/providers/cart-provider";
import { IconMinus, IconPlus, IconCheck, IconCart } from "@/components/icons";
import type { Product } from "@/lib/types";

export function PurchasePanel({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 items-center rounded-full border border-ink-950/15">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          aria-label="Scade cantitatea"
          className="flex h-full w-12 items-center justify-center text-ink-950/70 hover:text-bronze-600"
        >
          <IconMinus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center font-mono text-sm">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          aria-label="Crește cantitatea"
          className="flex h-full w-12 items-center justify-center text-ink-950/70 hover:text-bronze-600"
        >
          <IconPlus className="h-4 w-4" />
        </button>
      </div>
      <button
        onClick={() => {
          addItem(product, quantity);
          setJustAdded(true);
          window.setTimeout(() => setJustAdded(false), 1600);
        }}
        className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-ink-950 font-mono text-xs uppercase tracking-[0.16em] text-paper-50 transition-all duration-300 hover:bg-bronze-600 active:scale-[0.98]"
      >
        {justAdded ? (
          <>
            <IconCheck className="h-4 w-4" /> Adăugat în coș
          </>
        ) : (
          <>
            <IconCart className="h-4 w-4" /> Adaugă în coș
          </>
        )}
      </button>
    </div>
  );
}
