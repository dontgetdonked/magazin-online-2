import { cn } from "@/lib/utils";
import type { Badge as BadgeType } from "@/lib/types";

const styles: Record<BadgeType, string> = {
  Nou: "bg-steel-600 text-paper-50",
  Bestseller: "bg-bronze-500 text-ink-950",
  Reducere: "bg-ember-500 text-paper-50",
  "Stoc limitat": "bg-ink-950 text-paper-50",
};

export function ProductBadge({ tone, className }: { tone: BadgeType; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]",
        styles[tone],
        className,
      )}
    >
      {tone}
    </span>
  );
}
