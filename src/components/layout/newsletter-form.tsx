"use client";

import { useState, type FormEvent } from "react";
import { IconArrowRight, IconCheck } from "@/components/icons";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="flex items-center gap-2 text-sm text-bronze-300">
        <IconCheck className="h-4 w-4" /> Te-ai abonat. Verifică-ți inboxul.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm gap-2">
      <input
        required
        type="email"
        placeholder="adresa@exemplu.ro"
        className="h-11 w-full min-w-0 rounded-full border border-paper-50/15 bg-transparent px-4 text-sm text-paper-50 placeholder:text-taupe-500 focus:border-bronze-400 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Abonează-te"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bronze-500 text-ink-950 transition-colors hover:bg-bronze-400"
      >
        <IconArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
