import { IconStar } from "@/components/icons";
import { cn } from "@/lib/utils";

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
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5 text-bronze-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar
            key={i}
            className={cn(starSize, i < Math.round(value) ? "opacity-100" : "opacity-25")}
          />
        ))}
      </div>
      <span className="font-mono text-xs text-taupe-500">
        {value.toFixed(1)}
        {count !== undefined && ` · ${count}`}
      </span>
    </div>
  );
}
