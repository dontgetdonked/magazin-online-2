import Link from "next/link";
import { categories } from "@/lib/categories";
import { toolIcons, IconArrowUpRight } from "@/components/icons";
import { SectionKicker } from "@/components/ui/section-kicker";
import { Reveal } from "@/components/ui/reveal";

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal>
        <SectionKicker>Colecții</SectionKicker>
        <h2 className="text-balance mt-4 max-w-xl font-display text-4xl font-medium tracking-tight text-ink-950 sm:text-5xl">
          Explorează pe categorii
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => {
          const Icon = toolIcons[cat.icon];
          return (
            <Reveal key={cat.slug} delay={i * 0.06}>
              <Link
                href={`/magazin?categorie=${cat.slug}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink-950/10 bg-paper-100 p-7 transition-colors hover:border-bronze-500/40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper-50 text-bronze-600 transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-6 w-6" strokeWidth={1.4} />
                  </div>
                  <IconArrowUpRight className="h-5 w-5 text-taupe-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bronze-600" />
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-xl text-ink-950">{cat.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-taupe-500">{cat.description}</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-bronze-600">
                    {cat.productCount} produse
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
