"use client";

import { useState } from "react";
import { useCart } from "@/components/providers/cart-provider";
import { IconCart, IconCheck } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

export function AddToCartButton({
  product,
  quantity = 1,
  className,
  full = false,
}: {
  product: Product;
  quantity?: number;
  className?: string;
  full?: boolean;
}) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  if (!product.inStock) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 cursor-not-allowed items-center justify-center gap-2 whitespace-nowrap rounded-full bg-taupe-200/60 font-mono text-xs uppercase tracking-[0.14em] text-taupe-600",
          full ? "h-12 w-full px-6 text-sm" : "h-10 px-4",
          className,
        )}
      >
        Stoc epuizat
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product, quantity);
        setJustAdded(true);
        window.setTimeout(() => setJustAdded(false), 1600);
      }}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink-950 font-mono text-xs uppercase tracking-[0.14em] text-paper-50 transition-colors duration-300 hover:bg-bronze-600 active:scale-95",
        full ? "h-12 w-full px-6 text-sm" : "h-10 px-4",
        className,
      )}
    >
      {justAdded ? (
        <>
          <IconCheck className="h-4 w-4" /> Adăugat
        </>
      ) : (
        <>
          <IconCart className="h-4 w-4" /> Adaugă în coș
        </>
      )}
    </button>
  );
}
