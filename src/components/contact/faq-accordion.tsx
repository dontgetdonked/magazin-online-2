"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconPlus } from "@/components/icons";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Cât durează livrarea?",
    a: "Livrăm în 24–48h în toată țara prin curier propriu sau partener, în funcție de zonă.",
  },
  {
    q: "Ofertați reduceri pentru comenzi en-gros?",
    a: "Da, pentru echipe și firme de construcții avem prețuri speciale — contactează-ne la secțiunea „Comandă en-gros”.",
  },
  {
    q: "Cum funcționează garanția?",
    a: "Fiecare produs are garanția afișată pe pagina sa. Pentru service, ne poți contacta direct cu numărul comenzii.",
  },
  {
    q: "Pot returna o unealtă dacă nu mi se potrivește?",
    a: "Ai la dispoziție 30 de zile pentru retur, cu condiția ca produsul să fie nefolosit și în ambalajul original.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-950/10 border-y border-ink-950/10">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base text-ink-950">{faq.q}</span>
              <IconPlus
                className={cn(
                  "h-4 w-4 shrink-0 text-bronze-600 transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-taupe-600">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
