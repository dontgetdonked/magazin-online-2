import { Marquee } from "@/components/ui/marquee";

const brands = ["VOLTRAX", "IRONGRIP", "PRECIA", "AEGIS", "FORGEWORKS"];

export function BrandMarquee() {
  return (
    <div className="border-y border-paper-50/10 bg-ink-950 py-6">
      <Marquee>
        {brands.map((brand) => (
          <span
            key={brand}
            className="font-display text-2xl tracking-wide text-paper-50/25"
          >
            {brand}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
