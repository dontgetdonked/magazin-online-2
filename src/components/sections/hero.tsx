"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { HeroBlueprint } from "@/components/illustrations";
import { Rating } from "@/components/ui/rating";
import { SectionKicker } from "@/components/ui/section-kicker";
import { IconArrowRight, IconArrowUpRight } from "@/components/icons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-16 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <SectionKicker>Scule &amp; echipamente de șantier</SectionKicker>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink-950 sm:text-6xl lg:text-[4rem]"
          >
            Unelte care nu cedează.
            <br />
            <span className="text-bronze-600">Nici la ora 8, nici la ora 18.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-md text-balance text-lg text-taupe-600">
            Selecție curatoriată de scule electrice, de mână și echipamente de protecție,
            testate pe șantiere reale — pentru echipe care nu au timp de rebuturi.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/magazin"
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-ink-950 px-8 text-sm font-medium tracking-wide text-paper-50 transition-colors hover:bg-bronze-600"
            >
              Vezi magazinul
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/despre"
              className="group inline-flex h-14 items-center gap-2 rounded-full border border-ink-950/15 px-8 text-sm font-medium text-ink-950 transition-colors hover:border-ink-950"
            >
              Despre noi
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink-950/10 pt-8"
          >
            <div>
              <Rating value={4.8} size="md" />
              <p className="mt-1 text-xs text-taupe-500">peste 1.200 de recenzii verificate</p>
            </div>
            <div className="h-8 w-px bg-ink-950/10" />
            <div>
              <p className="font-display text-2xl text-ink-950">14 ani</p>
              <p className="text-xs text-taupe-500">de echipat șantiere</p>
            </div>
            <div className="h-8 w-px bg-ink-950/10" />
            <div>
              <p className="font-display text-2xl text-ink-950">320+</p>
              <p className="text-xs text-taupe-500">unelte profesionale</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <HeroBlueprint className="aspect-[4/5] w-full lg:aspect-square" />
        </motion.div>
      </div>
    </section>
  );
}
