import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { Counter } from "@/components/ui/counter";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroBlueprint } from "@/components/illustrations";
import { IconLevel, IconShieldCheck, IconTruck, IconPhone, IconQuote } from "@/components/icons";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Povestea STRATUM — 14 ani de echipat șantiere din România cu unelte de precizie.",
};

const milestones = [
  {
    year: "2011",
    title: "Fondarea STRATUM",
    text: "Primul depozit deschis în Cluj-Napoca, cu un catalog de doar 40 de unelte de mână.",
  },
  {
    year: "2015",
    title: "Extindere națională",
    text: "Rețea logistică proprie și livrare în 24–48h în toată țara.",
  },
  {
    year: "2019",
    title: "Branduri proprii",
    text: "Lansarea liniilor VOLTRAX și IRONGRIP, dezvoltate cu ingineri din industrie.",
  },
  {
    year: "2023",
    title: "2.400+ proiecte pe an",
    text: "STRATUM devine partenerul tehnic al unora dintre cele mai mari șantiere din regiune.",
  },
];

const values = [
  { icon: IconLevel, title: "Precizie", text: "Fiecare unealtă trece prin verificări stricte înainte să ajungă în stoc." },
  { icon: IconShieldCheck, title: "Anduranță", text: "Selectăm doar produse care rezistă la folosire zilnică, intensă." },
  { icon: IconTruck, title: "Rapiditate", text: "Logistică proprie pentru livrări în 24–48h, oriunde în țară." },
  { icon: IconPhone, title: "Parteneriat", text: "Suport tehnic real, de la oameni care înțeleg șantierul." },
];

const team = [
  { initials: "AI", name: "Andrei Ionescu", role: "Fondator & CEO", bio: "A pornit STRATUM din pasiune pentru unelte bine făcute și a rămas fidel acelui standard." },
  { initials: "EM", name: "Elena Marinescu", role: "Director Operațiuni", bio: "Coordonează rețeaua logistică care ține promisiunea de livrare în 24–48h." },
  { initials: "CN", name: "Cristian Nistor", role: "Inginer de produs", bio: "Testează fiecare unealtă nouă direct pe șantier, înainte de a intra în gamă." },
  { initials: "DC", name: "Diana Constantin", role: "Relații clienți", bio: "Primul om cu care vorbești când ai nevoie de o recomandare tehnică rapidă." },
];

export default function AboutPage() {
  return (
    <div className="bg-paper-50">
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <Reveal>
          <SectionKicker>Despre STRATUM</SectionKicker>
          <h1 className="text-balance mt-5 font-display text-4xl font-medium tracking-tight text-ink-950 sm:text-5xl">
            Construim încredere, o unealtă odată.
          </h1>
          <p className="mt-6 max-w-lg text-taupe-600">
            De 14 ani echipăm profesioniști din construcții cu unelte care rezistă la ritmul unui
            șantier real. Nu vindem promisiuni de marketing — vindem scule pe care le-am testat
            noi înșine, în praf, în frig și în termene imposibile.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink-950/10 pt-8">
            <div>
              <p className="font-display text-3xl text-ink-950">
                <Counter value={14} suffix="" />
              </p>
              <p className="mt-1 text-xs text-taupe-600">ani de activitate</p>
            </div>
            <div>
              <p className="font-display text-3xl text-ink-950">
                <Counter value={38} suffix="" />
              </p>
              <p className="mt-1 text-xs text-taupe-600">oameni în echipă</p>
            </div>
            <div>
              <p className="font-display text-3xl text-ink-950">
                <Counter value={12} suffix="k+" />
              </p>
              <p className="mt-1 text-xs text-taupe-600">clienți mulțumiți</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <HeroBlueprint className="aspect-[4/3] w-full" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Reveal>
          <IconQuote className="h-8 w-8 text-bronze-500" />
          <p className="text-balance mt-5 font-display text-2xl leading-snug text-ink-950 sm:text-3xl">
            „Nu am pornit STRATUM ca să vindem cutii. Am pornit-o pentru că eram sătui să
            recomandăm unelte în care nu credeam. Fiecare produs din gama noastră trece testul
            unui șantier adevărat, nu doar al unei fișe tehnice.”
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-taupe-600">
            Andrei Ionescu — Fondator STRATUM
          </p>
        </Reveal>
      </section>

      <section className="bg-paper-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionKicker>Parcurs</SectionKicker>
            <h2 className="mt-4 font-display text-3xl text-ink-950 sm:text-4xl">
              14 ani, în câteva momente
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="border-t-2 border-bronze-500 pt-5">
                  <p className="font-display text-2xl text-bronze-700">{m.year}</p>
                  <p className="mt-2 font-display text-lg text-ink-950">{m.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-taupe-600">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal>
          <SectionKicker>Valori</SectionKicker>
          <h2 className="mt-4 font-display text-3xl text-ink-950 sm:text-4xl">
            Ce ne ghidează deciziile
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper-100 text-bronze-600">
                <v.icon className="h-6 w-6" strokeWidth={1.4} />
              </div>
              <h3 className="mt-4 font-display text-lg text-ink-950">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe-600">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionKicker>Echipa</SectionKicker>
            <h2 className="mt-4 font-display text-3xl text-ink-950 sm:text-4xl">
              Oamenii din spatele STRATUM
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="rounded-3xl border border-ink-950/10 bg-paper-50 p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-950 font-mono text-sm text-paper-50">
                    {member.initials}
                  </div>
                  <p className="mt-5 font-display text-lg text-ink-950">{member.name}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-bronze-700">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-taupe-600">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
