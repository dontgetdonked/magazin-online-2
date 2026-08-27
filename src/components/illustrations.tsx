import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { ToolVariant } from "@/lib/types";
import { toolIcons, IconMapPin } from "./icons";

type Accent = "bronze" | "steel" | "ember";

const accentClasses: Record<
  Accent,
  { icon: string; glow: string; ring: string; tick: string }
> = {
  bronze: {
    icon: "text-bronze-600",
    glow: "bg-bronze-400/25",
    ring: "border-bronze-500/30",
    tick: "bg-bronze-500",
  },
  steel: {
    icon: "text-steel-600",
    glow: "bg-steel-400/25",
    ring: "border-steel-500/30",
    tick: "bg-steel-500",
  },
  ember: {
    icon: "text-ember-600",
    glow: "bg-ember-400/25",
    ring: "border-ember-500/30",
    tick: "bg-ember-500",
  },
};

function CornerTicks({ className }: { className?: string }) {
  return (
    <>
      <span className={cn("absolute left-4 top-4 h-3 w-3 border-l border-t", className)} />
      <span className={cn("absolute right-4 top-4 h-3 w-3 border-r border-t", className)} />
      <span className={cn("absolute bottom-4 left-4 h-3 w-3 border-b border-l", className)} />
      <span className={cn("absolute bottom-4 right-4 h-3 w-3 border-b border-r", className)} />
    </>
  );
}

export function ProductPlate({
  variant,
  accent = "bronze",
  label,
  fig,
  className,
  dark = false,
}: {
  variant: ToolVariant;
  accent?: Accent;
  label?: string;
  fig?: string | number;
  className?: string;
  dark?: boolean;
}) {
  const Icon = toolIcons[variant];
  const palette = accentClasses[accent];

  return (
    <div
      className={cn(
        "group/plate relative isolate flex aspect-square items-center justify-center overflow-hidden rounded-[28px] border",
        dark
          ? "border-ink-700 bg-ink-900 grid-dark"
          : "border-paper-200 bg-paper-100 grid-light",
        className,
      )}
    >
      <div
        className={cn(
          "absolute -left-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-transform duration-700 ease-out group-hover/plate:scale-125",
          palette.glow,
        )}
      />
      <div
        className={cn(
          "absolute -bottom-12 -right-12 h-48 w-48 rounded-full blur-3xl transition-transform duration-700 ease-out group-hover/plate:scale-110",
          palette.glow,
        )}
      />

      <div
        className={cn(
          "absolute h-[62%] w-[62%] rounded-full border border-dashed",
          dark ? "border-paper-50/15" : "border-ink-950/10",
        )}
      />

      <Icon
        strokeWidth={1.1}
        className={cn(
          "relative h-[38%] w-[38%] transition-transform duration-500 ease-out group-hover/plate:-translate-y-1 group-hover/plate:scale-[1.04]",
          palette.icon,
          dark && accent === "bronze" && "text-bronze-300",
          dark && accent === "steel" && "text-steel-300",
          dark && accent === "ember" && "text-ember-400",
        )}
      />

      <CornerTicks className={dark ? "border-paper-50/20" : "border-ink-950/15"} />

      {fig !== undefined && (
        <span
          className={cn(
            "absolute left-5 bottom-5 font-mono text-[10px] tracking-[0.2em]",
            dark ? "text-paper-50/40" : "text-ink-950/35",
          )}
        >
          FIG.{String(fig).padStart(2, "0")}
        </span>
      )}
      {label && (
        <span
          className={cn(
            "absolute right-5 bottom-5 font-mono text-[10px] tracking-[0.15em]",
            dark ? "text-paper-50/40" : "text-ink-950/35",
          )}
        >
          {label}
        </span>
      )}
      <span
        className={cn(
          "absolute right-5 top-5 h-1.5 w-1.5 rounded-full",
          palette.tick,
        )}
      />
    </div>
  );
}

const HERO_ITEMS: Array<{
  variant: ToolVariant;
  top: string;
  left: string;
  size: string;
  rotate: string;
  accent: Accent;
  depth: number;
}> = [
  { variant: "drill", top: "6%", left: "58%", size: "8rem", rotate: "-8deg", accent: "bronze", depth: 1 },
  { variant: "level", top: "54%", left: "68%", size: "7rem", rotate: "6deg", accent: "steel", depth: 2 },
  { variant: "helmet", top: "12%", left: "8%", size: "6rem", rotate: "4deg", accent: "ember", depth: 2 },
  { variant: "wrench", top: "62%", left: "10%", size: "6.5rem", rotate: "-10deg", accent: "bronze", depth: 3 },
  { variant: "grinder", top: "70%", left: "42%", size: "6rem", rotate: "10deg", accent: "steel", depth: 1 },
];

export function HeroBlueprint({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-ink-700 bg-ink-950 grid-dark",
        className,
      )}
    >
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-bronze-400/20" />
      <div className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-paper-50/10" />
      <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-bronze-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-steel-500/20 blur-3xl" />

      {HERO_ITEMS.map((item, i) => {
        const Icon = toolIcons[item.variant];
        const palette = accentClasses[item.accent];
        return (
          <div
            key={item.variant + i}
            data-depth={item.depth}
            className="hero-float absolute flex items-center justify-center rounded-3xl border border-paper-50/10 bg-ink-900/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-sm"
            style={
              {
                top: item.top,
                left: item.left,
                width: item.size,
                height: item.size,
                "--rot": item.rotate,
                animationDelay: `${i * 0.6}s`,
              } as CSSProperties
            }
          >
            <Icon
              strokeWidth={1}
              className={cn("h-[44%] w-[44%]", palette.icon, "opacity-90")}
            />
          </div>
        );
      })}

      <CornerTicks className="border-paper-50/20" />
      <span className="absolute left-6 top-6 font-mono text-[10px] tracking-[0.25em] text-paper-50/40">
        STRATUM / SCH.01
      </span>
      <span className="absolute right-6 top-6 font-mono text-[10px] tracking-[0.25em] text-paper-50/40">
        EST. 2011
      </span>
    </div>
  );
}

const ROUTE_LINES = [
  "M 8 78 C 40 60, 55 70, 82 40",
  "M 4 40 C 30 45, 48 30, 70 20",
];

export function LocationPlate({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden rounded-[28px] border border-ink-700 bg-ink-950 grid-dark",
        className,
      )}
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-bronze-500/15 blur-3xl" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-40">
        {ROUTE_LINES.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            strokeDasharray="1.6 1.6"
            className="text-bronze-300"
          />
        ))}
      </svg>

      <div className="absolute h-24 w-24 rounded-full border border-dashed border-bronze-400/30" />
      <div className="absolute h-24 w-24 animate-ping rounded-full border border-bronze-400/20 [animation-duration:3s]" />

      <div className="relative flex flex-col items-center gap-3">
        <IconMapPin className="h-9 w-9 text-bronze-400" strokeWidth={1.3} />
        <div className="text-center">
          <p className="font-display text-sm text-paper-50">Cluj-Napoca, România</p>
          <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-taupe-500">
            46.7712° N · 23.6236° E
          </p>
        </div>
      </div>

      <CornerTicks className="border-paper-50/20" />
    </div>
  );
}
