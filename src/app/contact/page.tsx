import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { ContactForm } from "@/components/contact/contact-form";
import { FaqAccordion } from "@/components/contact/faq-accordion";
import { LocationPlate } from "@/components/illustrations";
import { IconPhone, IconMail, IconClock, IconMapPin } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează echipa STRATUM pentru întrebări, comenzi en-gros sau service.",
};

const infoItems = [
  { icon: IconMapPin, label: "Adresă", value: "Str. Metalurgiei nr. 24, Cluj-Napoca" },
  { icon: IconPhone, label: "Telefon", value: "0800 112 233" },
  { icon: IconMail, label: "Email", value: "contact@stratum-tools.ro" },
  { icon: IconClock, label: "Program", value: "Luni–Vineri, 07:00–19:00" },
];

export default function ContactPage() {
  return (
    <div className="bg-paper-50">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8 lg:pt-24">
        <Reveal>
          <SectionKicker>Contact</SectionKicker>
          <h1 className="text-balance mt-5 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink-950 sm:text-5xl">
            Hai să discutăm despre proiectul tău.
          </h1>
          <p className="mt-5 max-w-lg text-taupe-600">
            Fie că ai o întrebare tehnică, o comandă en-gros sau ai nevoie de o recomandare —
            echipa STRATUM răspunde rapid.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-12 lg:grid-cols-5 lg:px-8 lg:py-16">
        <Reveal className="lg:col-span-3">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-8 lg:col-span-2">
          <LocationPlate className="aspect-[4/3] w-full" />
          <ul className="flex flex-col gap-5">
            {infoItems.map((item) => (
              <li key={item.label} className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper-100 text-bronze-600">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-taupe-600">
                    {item.label}
                  </p>
                  <p className="text-sm text-ink-950">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-ink-950/10 bg-paper-100 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <SectionKicker>Întrebări frecvente</SectionKicker>
            <h2 className="mt-4 font-display text-3xl text-ink-950 sm:text-4xl">
              Răspunsuri rapide
            </h2>
            <div className="mt-10">
              <FaqAccordion />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
