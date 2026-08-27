import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { IconShieldCheck, IconTruck, IconClock } from "@/components/icons";

const stats = [
  { value: 14, suffix: " ani", label: "experiență pe șantier" },
  { value: 2400, suffix: "+", label: "proiecte echipate" },
  { value: 320, suffix: "+", label: "unelte în gamă" },
  { value: 4.9, decimals: 1, label: "satisfacție clienți" },
];

const values = [
  {
    icon: IconShieldCheck,
    title: "Garanție extinsă",
    text: "Până la 5 ani garanție pe sculele profesionale, cu service dedicat.",
  },
  {
    icon: IconTruck,
    title: "Livrare 24–48h",
    text: "Stoc verificat zilnic și livrare rapidă oriunde în țară.",
  },
  {
    icon: IconClock,
    title: "Suport tehnic real",
    text: "Echipă de specialiști disponibilă șapte zile din șapte.",
  },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-paper-50">
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-bronze-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionKicker light>De ce STRATUM</SectionKicker>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-8 border-b border-paper-50/10 pb-16 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-4xl text-bronze-300 sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 text-sm text-taupe-400">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <v.icon className="h-8 w-8 text-bronze-400" strokeWidth={1.3} />
              <h3 className="mt-4 font-display text-lg text-paper-50">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe-400">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
