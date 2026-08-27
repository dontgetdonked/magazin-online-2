"use client";

import { useState } from "react";
import { ProductPlate } from "@/components/illustrations";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

export function ProductGallery({ product }: { product: Product }) {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <ProductPlate
        variant={product.variant}
        accent={product.accent}
        fig={dark ? 2 : 1}
        label={product.sku}
        dark={dark}
        className="w-full"
      />
      <div className="mt-4 grid grid-cols-2 gap-4">
        {[false, true].map((isDark) => (
          <button
            key={String(isDark)}
            onClick={() => setDark(isDark)}
            className={cn(
              "rounded-2xl outline outline-2 outline-offset-2 transition-all",
              dark === isDark ? "outline-bronze-500" : "outline-transparent",
            )}
          >
            <ProductPlate
              variant={product.variant}
              accent={product.accent}
              fig={isDark ? 2 : 1}
              dark={isDark}
              className="aspect-[3/2] w-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
