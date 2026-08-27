import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { ProductPlate } from "@/components/illustrations";
import { ProductBadge } from "./badge";
import { Rating } from "./rating";
import { AddToCartButton } from "./add-to-cart-button";

export function ProductCard({ product, index = 1 }: { product: Product; index?: number }) {
  return (
    <div className="group relative flex flex-col">
      <Link
        href={`/magazin/${product.slug}`}
        className={product.inStock ? "block" : "block opacity-60 grayscale"}
      >
        <ProductPlate variant={product.variant} accent={product.accent} fig={index} label={product.sku} />
      </Link>

      {product.badges.length > 0 && (
        <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.badges.map((b) => (
            <ProductBadge key={b} tone={b} />
          ))}
        </div>
      )}

      <div className="mt-4 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-taupe-600">
            {product.brand}
          </p>
          <Link href={`/magazin/${product.slug}`}>
            <h3 className="mt-0.5 truncate font-display text-lg text-ink-950 transition-colors group-hover:text-bronze-600">
              {product.name}
            </h3>
          </Link>
        </div>
      </div>

      <p className="mt-1.5 line-clamp-2 text-sm text-taupe-600">{product.shortDescription}</p>

      <div className="mt-3">
        <Rating value={product.rating} count={product.reviewsCount} />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-3">
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="font-display text-xl text-ink-950">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="font-mono text-xs text-taupe-600 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
