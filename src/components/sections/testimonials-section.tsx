import { IconQuote } from "@/components/icons";
import { Rating } from "@/components/ui/rating";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";

const testimonials = [
  {
    initials: "MP",
    name: "Mihai Popescu",
    role: "Antreprenor general, Iași",
    quote:
      "Am echipat trei șantiere cu scule STRATUM în ultimul an. Bormașinile VOLTRAX au trecut testul betonului armat fără nicio problemă.",
    rating: 5,
  },
  {
    initials: "AD",
    name: "Ana Dumitrescu",
    role: "Șef de șantier, Timișoara",
    quote:
      "Livrarea rapidă contează enorm când o echipă de 12 oameni așteaptă sculele. Nu am întârziat niciodată din vina STRATUM.",
    rating: 5,
  },
  {
    initials: "RV",
    name: "Radu Vasile",
    role: "Dulgher, atelier propriu",
    quote:
      "Trusa IRONGRIP e cea mai bună investiție din ultimii ani — arată premium și rezistă la folosire zilnică intensă.",
    rating: 4.8,
  },
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal>
        <SectionKicker>Recenzii</SectionKicker>
        <h2 className="text-balance mt-4 max-w-xl font-display text-4xl font-medium tracking-tight text-ink-950 sm:text-5xl">
          Echipe care se bazează pe STRATUM
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-3xl border border-ink-950/10 bg-paper-100 p-8">
              <IconQuote className="h-7 w-7 text-bronze-500" />
              <blockquote className="mt-5 flex-1 text-balance text-[15px] leading-relaxed text-ink-900">
                “{t.quote}”
              </blockquote>
              <Rating value={t.rating} className="mt-6" />
              <figcaption className="mt-4 flex items-center gap-3 border-t border-ink-950/10 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-950 font-mono text-xs text-paper-50">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display text-sm text-ink-950">{t.name}</p>
                  <p className="text-xs text-taupe-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
