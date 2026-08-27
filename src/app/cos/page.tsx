import type { Metadata } from "next";
import { CartPageContent } from "@/components/cart/cart-page-content";

export const metadata: Metadata = {
  title: "Coșul tău",
  description: "Vezi produsele adăugate în coș și finalizează comanda.",
};

export default function CartPage() {
  return (
    <div className="min-h-[60vh] bg-paper-50">
      <CartPageContent />
    </div>
  );
}
