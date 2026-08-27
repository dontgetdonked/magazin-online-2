"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight, IconCheck, IconChevronDown } from "@/components/icons";
import { cn } from "@/lib/utils";

const subjects = [
  "Întrebare despre un produs",
  "Comandă en-gros / B2B",
  "Garanție și service",
  "Parteneriat",
];

type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Introdu numele tău complet.";
    if (!email) nextErrors.email = "Introdu o adresă de email.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Adresa de email nu pare validă.";
    if (!subject) nextErrors.subject = "Alege un subiect.";
    if (!message) nextErrors.message = "Scrie câteva cuvinte despre cum te putem ajuta.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
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
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label htmlFor="contact-name" className="flex flex-col gap-2 text-sm text-ink-950">
                Nume complet
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Ion Popescu"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={cn(
                    "h-12 rounded-xl border bg-paper-50 px-4 text-sm focus:outline-none",
                    errors.name
                      ? "border-ember-500 focus:border-ember-500"
                      : "border-ink-950/15 focus:border-bronze-500",
                  )}
                />
                {errors.name && (
                  <span id="contact-name-error" className="text-xs text-ember-600">
                    {errors.name}
                  </span>
                )}
              </label>
              <label htmlFor="contact-email" className="flex flex-col gap-2 text-sm text-ink-950">
                Email
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="ion@exemplu.ro"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={cn(
                    "h-12 rounded-xl border bg-paper-50 px-4 text-sm focus:outline-none",
                    errors.email
                      ? "border-ember-500 focus:border-ember-500"
                      : "border-ink-950/15 focus:border-bronze-500",
                  )}
                />
                {errors.email && (
                  <span id="contact-email-error" className="text-xs text-ember-600">
                    {errors.email}
                  </span>
                )}
              </label>
            </div>

            <label htmlFor="contact-subject" className="flex flex-col gap-2 text-sm text-ink-950">
              Subiect
              <span className="relative">
                <select
                  id="contact-subject"
                  name="subject"
                  defaultValue=""
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  className={cn(
                    "h-12 w-full appearance-none rounded-xl border bg-paper-50 pl-4 pr-10 text-sm focus:outline-none",
                    errors.subject
                      ? "border-ember-500 focus:border-ember-500"
                      : "border-ink-950/15 focus:border-bronze-500",
                  )}
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
                <IconChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-taupe-600" />
              </span>
              {errors.subject && (
                <span id="contact-subject-error" className="text-xs text-ember-600">
                  {errors.subject}
                </span>
              )}
            </label>

            <label htmlFor="contact-message" className="flex flex-col gap-2 text-sm text-ink-950">
              Mesaj
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Spune-ne cu ce te putem ajuta…"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={cn(
                  "resize-none rounded-xl border bg-paper-50 px-4 py-3 text-sm focus:outline-none",
                  errors.message
                    ? "border-ember-500 focus:border-ember-500"
                    : "border-ink-950/15 focus:border-bronze-500",
                )}
              />
              {errors.message && (
                <span id="contact-message-error" className="text-xs text-ember-600">
                  {errors.message}
                </span>
              )}
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
