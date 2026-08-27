import type { Metadata } from "next";
import { ShopBrowser } from "@/components/shop/shop-browser";
import { SectionKicker } from "@/components/ui/section-kicker";
import { getCategory } from "@/lib/categories";
import type { CategorySlug } from "@/lib/types";

export const metadata: Metadata = {
  title: "Magazin",
  description:
    "Scule electrice, scule de mână, echipamente de protecție și utilaje de șantier — gama completă STRATUM.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string; cauta?: string }>;
}) {
  const { categorie, cauta } = await searchParams;
  const category = categorie ? getCategory(categorie) : undefined;

  return (
    <div className="bg-paper-50">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-8">
        <SectionKicker>Magazin</SectionKicker>
        <h1 className="text-balance mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink-950 sm:text-5xl">
          {category ? category.name : "Gama completă de unelte"}
        </h1>
        <p className="mt-4 max-w-xl text-taupe-600">
          {category
            ? category.description
            : "Scule electrice, scule de mână, echipamente de protecție și utilaje de șantier — selectate pentru rezistență la uz intens."}
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <ShopBrowser
          initialCategory={category?.slug as CategorySlug | undefined}
          initialQuery={cauta}
        />
      </div>
    </div>
  );
}
