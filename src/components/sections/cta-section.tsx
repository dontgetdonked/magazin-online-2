import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { LogoMark, IconArrowRight } from "@/components/icons";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-paper-50">
      <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center lg:px-8">
        <Reveal className="flex flex-col items-center">
          <LogoMark className="h-10 w-10 text-bronze-400" />
          <h2 className="text-balance mt-6 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Pregătit să echipezi șantierul cu unelte pe care te poți baza?
          </h2>
          <p className="mt-5 max-w-lg text-balance text-taupe-400">
            Explorează gama completă STRATUM sau discută cu echipa noastră tehnică pentru o
            recomandare personalizată.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/magazin"
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-bronze-500 px-8 text-sm font-medium tracking-wide text-ink-950 transition-colors hover:bg-bronze-400"
            >
              Vezi magazinul
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-paper-50/20 px-8 text-sm font-medium text-paper-50 transition-colors hover:border-paper-50/50"
            >
              Contactează-ne
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
