"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/components/providers/cart-provider";
import { useOverlayDialog } from "@/hooks/use-overlay-dialog";
import { categories } from "@/lib/categories";
import { toolIcons, LogoMark, IconSearch, IconCart, IconMenu, IconClose, IconChevronDown, IconPhone } from "@/components/icons";
import { SearchOverlay } from "./search-overlay";
import { cn, formatCount } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/magazin", label: "Magazin" },
  { href: "/despre", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { count, openCart } = useCart();
  const categoriesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useOverlayDialog<HTMLDivElement>(mobileOpen, () => setMobileOpen(false));

  // Reset transient nav state when the route changes. Adjusted during
  // render (React's documented pattern for this) rather than in an
  // effect, so it lands before paint instead of a frame after.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setCategoriesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The Categorii popover is a lightweight inline disclosure, not a modal
  // (no scroll lock/focus trap) — just close it on outside click or Escape.
  useEffect(() => {
    if (!categoriesOpen) return;
    function handlePointer(e: PointerEvent) {
      if (categoriesRef.current && !categoriesRef.current.contains(e.target as Node)) {
        setCategoriesOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setCategoriesOpen(false);
    }
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [categoriesOpen]);

  return (
    <>
      <div className="hidden bg-ink-950 text-paper-50/70 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 font-mono text-[11px] uppercase tracking-[0.14em] lg:px-8">
          <span>Unelte profesionale pentru șantiere care nu-și permit compromisuri.</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <IconPhone className="h-3.5 w-3.5" /> 0800 112 233
            </span>
            <span>Livrare 24–48h în toată țara</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-ink-950/10 bg-paper-50/90 backdrop-blur-md"
            : "border-transparent bg-paper-50",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-ink-950" />
            <span className="font-display text-xl font-medium tracking-tight text-ink-950">
              STRATUM
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-sm font-medium text-ink-950/80 transition-colors hover:text-ink-950",
                  pathname === link.href && "text-ink-950",
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-px w-full bg-bronze-500"
                  />
                )}
              </Link>
            ))}
            <div
              ref={categoriesRef}
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button
                onClick={() => setCategoriesOpen((open) => !open)}
                aria-expanded={categoriesOpen}
                aria-haspopup="true"
                aria-controls="categories-popover"
                className="flex items-center gap-1 text-sm font-medium text-ink-950/80 transition-colors hover:text-ink-950"
              >
                Categorii
                <IconChevronDown
                  className={cn("h-3.5 w-3.5 transition-transform", categoriesOpen && "rotate-180")}
                />
              </button>
              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    id="categories-popover"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full grid w-[560px] -translate-x-1/2 grid-cols-2 gap-1 rounded-2xl border border-ink-950/10 bg-paper-50 p-3 shadow-2xl"
                  >
                    {categories.map((cat) => {
                      const Icon = toolIcons[cat.icon];
                      return (
                        <Link
                          key={cat.slug}
                          href={`/magazin?categorie=${cat.slug}`}
                          onClick={() => setCategoriesOpen(false)}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-paper-100"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper-100 text-bronze-600">
                            <Icon className="h-5 w-5" strokeWidth={1.4} />
                          </div>
                          <div>
                            <p className="font-display text-sm text-ink-950">{cat.name}</p>
                            <p className="mt-0.5 line-clamp-1 text-xs text-taupe-600">
                              {cat.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Deschide căutarea"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink-950/80 transition-colors hover:bg-ink-950/5 hover:text-ink-950"
            >
              <IconSearch className="h-5 w-5" />
            </button>
            <button
              onClick={openCart}
              aria-label={count > 0 ? `Deschide coșul (${formatCount(count, "produs", "produse")})` : "Deschide coșul"}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink-950/80 transition-colors hover:bg-ink-950/5 hover:text-ink-950"
            >
              <IconCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-bronze-500 font-mono text-[9px] text-ink-950">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Deschide meniul"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink-950/80 transition-colors hover:bg-ink-950/5 hover:text-ink-950 md:hidden"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Meniu de navigare"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] overflow-y-auto bg-ink-950 focus:outline-none md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                <LogoMark className="h-8 w-8 text-paper-50" />
                <span className="font-display text-xl text-paper-50">STRATUM</span>
              </Link>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setSearchOpen(true);
                  }}
                  aria-label="Deschide căutarea"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-paper-50 hover:bg-paper-50/10"
                >
                  <IconSearch className="h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    openCart();
                  }}
                  aria-label={count > 0 ? `Deschide coșul (${formatCount(count, "produs", "produse")})` : "Deschide coșul"}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full text-paper-50 hover:bg-paper-50/10"
                >
                  <IconCart className="h-5 w-5" />
                  {count > 0 && (
                    <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-bronze-500 font-mono text-[9px] text-ink-950">
                      {count}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Închide meniul"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-paper-50 hover:bg-paper-50/10"
                >
                  <IconClose className="h-5 w-5" />
                </button>
              </div>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col gap-1 px-6 py-6"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-paper-50/10 py-4 font-display text-2xl text-paper-50"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <div className="px-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-taupe-500">Categorii</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {categories.map((cat) => {
                  const Icon = toolIcons[cat.icon];
                  return (
                    <Link
                      key={cat.slug}
                      href={`/magazin?categorie=${cat.slug}`}
                      className="flex items-center gap-2 rounded-xl border border-paper-50/10 px-3 py-2.5 text-sm text-paper-50/90"
                    >
                      <Icon className="h-4 w-4 text-bronze-400" strokeWidth={1.4} />
                      {cat.shortName}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 px-6 font-mono text-sm text-paper-50/70">
              <IconPhone className="h-4 w-4" /> 0800 112 233
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
