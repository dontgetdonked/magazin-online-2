import Link from "next/link";
import { LogoMark, IconArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <LogoMark className="h-10 w-10 text-taupe-400" />
      <p className="mt-6 font-mono text-sm tracking-[0.2em] text-bronze-700">EROARE 404</p>
      <h1 className="text-balance mt-3 font-display text-4xl text-ink-950 sm:text-5xl">
        Această unealtă nu se află în inventar.
      </h1>
      <p className="mt-4 max-w-md text-taupe-600">
        Pagina căutată nu există sau a fost mutată. Hai să te ducem înapoi în magazin.
      </p>
      <Link
        href="/magazin"
        className="group mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-ink-950 px-8 text-sm font-medium text-paper-50 transition-colors hover:bg-bronze-600"
      >
        Vezi magazinul
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
