import Link from "next/link";
import { categories } from "@/lib/categories";
import {
  LogoMark,
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconInstagram,
  IconFacebook,
  IconLinkedin,
} from "@/components/icons";
import { NewsletterForm } from "./newsletter-form";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-paper-50">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-paper-50/10 pb-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8 text-bronze-400" />
              <span className="font-display text-xl text-paper-50">STRATUM</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-taupe-400">
              Unelte de precizie pentru echipe care construiesc la superlativ. Selecție
              curatoriată de scule electrice, scule de mână și echipamente de șantier,
              testate pentru anduranță.
            </p>
            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-taupe-500">
                Abonează-te la noutăți
              </p>
              <div className="mt-3">
                <NewsletterForm />
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-taupe-500">
              Categorii
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/magazin?categorie=${cat.slug}`}
                    className="text-sm text-taupe-300 transition-colors hover:text-bronze-300"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-taupe-500">
              Companie
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-taupe-300">
              <li>
                <Link href="/despre" className="transition-colors hover:text-bronze-300">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link href="/magazin" className="transition-colors hover:text-bronze-300">
                  Magazin
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-bronze-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cos" className="transition-colors hover:text-bronze-300">
                  Coșul meu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-taupe-500">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-taupe-300">
              <li className="flex items-start gap-2.5">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze-400" />
                Str. Metalurgiei nr. 24, Cluj-Napoca
              </li>
              <li className="flex items-center gap-2.5">
                <IconPhone className="h-4 w-4 shrink-0 text-bronze-400" />
                0800 112 233
              </li>
              <li className="flex items-center gap-2.5">
                <IconMail className="h-4 w-4 shrink-0 text-bronze-400" />
                contact@stratum-tools.ro
              </li>
              <li className="flex items-center gap-2.5">
                <IconClock className="h-4 w-4 shrink-0 text-bronze-400" />
                Luni–Vineri, 07:00–19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-xs text-taupe-500">
            © {new Date().getFullYear()} STRATUM Tools. Proiect de portofoliu — toate produsele
            și denumirile sunt fictive.
          </p>
          <div className="flex items-center gap-3">
            {[IconInstagram, IconFacebook, IconLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rețea socială"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-50/10 text-taupe-400 transition-colors hover:border-bronze-400 hover:text-bronze-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
