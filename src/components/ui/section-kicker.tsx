import { cn } from "@/lib/utils";

export function SectionKicker({
  children,
  className,
  light = false,
}: {
  children: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em]",
        light ? "text-bronze-300" : "text-bronze-700",
        className,
      )}
    >
      <span className={cn("h-px w-8", light ? "bg-bronze-300" : "bg-bronze-600")} />
      {children}
    </div>
  );
}
