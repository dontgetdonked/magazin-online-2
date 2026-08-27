import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getRelatedProducts, products } from "@/lib/products";
import { getCategory } from "@/lib/categories";
import { formatPrice } from "@/lib/utils";
import { Rating } from "@/components/ui/rating";
import { ProductBadge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ui/product-card";
import { Reveal } from "@/components/ui/reveal";
import { ProductGallery } from "@/components/shop/product-gallery";
import { PurchasePanel } from "@/components/shop/purchase-panel";
import { IconChevronRight, IconShieldCheck, IconTruck, IconClock } from "@/components/icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.brand}`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product, 3);

  return (
    <div className="bg-paper-50">
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <nav className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-taupe-600">
          <Link href="/" className="hover:text-ink-950">
            Acasă
          </Link>
          <IconChevronRight className="h-3 w-3" />
          <Link href="/magazin" className="hover:text-ink-950">
            Magazin
          </Link>
          {category && (
            <>
              <IconChevronRight className="h-3 w-3" />
              <Link href={`/magazin?categorie=${category.slug}`} className="hover:text-ink-950">
                {category.shortName}
              </Link>
            </>
          )}
          <IconChevronRight className="h-3 w-3" />
          <span className="text-ink-950">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-10 lg:grid-cols-2 lg:px-8 lg:py-14">
        <Reveal>
          <ProductGallery product={product} />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-wrap gap-1.5">
            {product.badges.map((b) => (
              <ProductBadge key={b} tone={b} />
            ))}
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-bronze-700">
            {product.brand} · SKU {product.sku}
          </p>
          <h1 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink-950 sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4">
            <Rating value={product.rating} count={product.reviewsCount} size="md" />
          </div>

          <p className="mt-6 max-w-lg text-taupe-600">{product.shortDescription}</p>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-display text-4xl text-ink-950">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="font-mono text-base text-taupe-600 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <div className="mt-8">
            <PurchasePanel product={product} />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-ink-950/10 py-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <IconShieldCheck className="h-5 w-5 text-bronze-600" />
              <span className="text-xs text-taupe-600">Garanție inclusă</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <IconTruck className="h-5 w-5 text-bronze-600" />
              <span className="text-xs text-taupe-600">Livrare 24–48h</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <IconClock className="h-5 w-5 text-bronze-600" />
              <span className="text-xs text-taupe-600">Retur 30 zile</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-taupe-600">
              Specificații tehnice
            </h2>
            <dl className="mt-4 divide-y divide-ink-950/10 border-t border-ink-950/10">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between py-3 text-sm">
                  <dt className="text-taupe-600">{spec.label}</dt>
                  <dd className="font-medium text-ink-950">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <Reveal>
          <h2 className="font-display text-2xl text-ink-950">Descriere</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-relaxed text-taupe-600">
            {product.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="border-t border-ink-950/10 bg-paper-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl text-ink-950">S-ar putea să-ți placă și</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.08}>
                  <ProductCard product={p} index={i + 1} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
