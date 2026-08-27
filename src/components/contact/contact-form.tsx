"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight, IconCheck } from "@/components/icons";

const subjects = [
  "Întrebare despre un produs",
  "Comandă en-gros / B2B",
  "Garanție și service",
  "Parteneriat",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink-950/10 bg-paper-100 p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-bronze-500 text-ink-950">
              <IconCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl text-ink-950">Mesaj trimis</h3>
            <p className="mt-2 max-w-xs text-sm text-taupe-600">
              Îți răspundem în cel mult o zi lucrătoare. Mulțumim!
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-ink-950">
                Nume complet
                <input
                  required
                  type="text"
                  placeholder="Ion Popescu"
                  className="h-12 rounded-xl border border-ink-950/15 bg-paper-50 px-4 text-sm focus:border-bronze-500 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-ink-950">
                Email
                <input
                  required
                  type="email"
                  placeholder="ion@exemplu.ro"
                  className="h-12 rounded-xl border border-ink-950/15 bg-paper-50 px-4 text-sm focus:border-bronze-500 focus:outline-none"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-ink-950">
              Subiect
              <select
                required
                defaultValue=""
                className="h-12 appearance-none rounded-xl border border-ink-950/15 bg-paper-50 px-4 text-sm focus:border-bronze-500 focus:outline-none"
              >
                <option value="" disabled>
                  Alege un subiect
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm text-ink-950">
              Mesaj
              <textarea
                required
                rows={5}
                placeholder="Spune-ne cu ce te putem ajuta…"
                className="resize-none rounded-xl border border-ink-950/15 bg-paper-50 px-4 py-3 text-sm focus:border-bronze-500 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink-950 text-sm font-medium text-paper-50 transition-colors hover:bg-bronze-600"
            >
              Trimite mesajul
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
