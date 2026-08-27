import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Marquee({
  children,
  className,
  fast = false,
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-center gap-16 pr-16",
          fast ? "animate-marquee-fast" : "animate-marquee",
          "group-hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex items-center gap-16">{children}</div>
        <div className="flex items-center gap-16" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
