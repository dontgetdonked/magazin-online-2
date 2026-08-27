import { IconStar } from "@/components/icons";
import { cn, formatCount } from "@/lib/utils";

export function Rating({
  value,
  count,
  className,
  size = "sm",
}: {
  value: number;
  count?: number;
  className?: string;
  size?: "sm" | "md";
}) {
  const starSize = size === "md" ? "h-4 w-4" : "h-3.5 w-3.5";
  const label =
    count !== undefined
      ? `Evaluare ${value.toFixed(1)} din 5, ${formatCount(count, "recenzie", "recenzii")}`
      : `Evaluare ${value.toFixed(1)} din 5`;
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("flex items-center gap-1.5", className)}
    >
      <div aria-hidden="true" className="flex items-center gap-0.5 text-bronze-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar
            key={i}
            className={cn(starSize, i < Math.round(value) ? "opacity-100" : "opacity-25")}
          />
        ))}
      </div>
      <span aria-hidden="true" className="font-mono text-xs text-taupe-600">
        {value.toFixed(1)}
        {count !== undefined && ` · ${count}`}
      </span>
    </div>
  );
}
