import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card";
import { SectionKicker } from "@/components/ui/section-kicker";
import { Reveal } from "@/components/ui/reveal";
import { IconArrowRight } from "@/components/icons";

export function FeaturedSection() {
  const featured = getFeaturedProducts(8);

  return (
    <section className="bg-paper-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionKicker>Selecție</SectionKicker>
            <h2 className="text-balance mt-4 max-w-xl font-display text-4xl font-medium tracking-tight text-ink-950 sm:text-5xl">
              Cele mai cerute unelte
            </h2>
          </div>
          <Link
            href="/magazin"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-950"
          >
            Vezi tot magazinul
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 0.06}>
              <ProductCard product={product} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
