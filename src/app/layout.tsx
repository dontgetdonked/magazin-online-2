import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/layout/cart-drawer";
import { CartProvider } from "@/components/providers/cart-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "STRATUM — Unelte profesionale de construcții",
    template: "%s · STRATUM",
  },
  description:
    "STRATUM este un magazin de portofoliu cu scule electrice, scule de mână, echipamente de protecție și utilaje de șantier, gândit pentru profesioniști exigenți.",
  keywords: [
    "unelte constructii",
    "scule electrice",
    "scule profesionale",
    "magazin unelte",
    "STRATUM",
  ],
};

export const viewport = {
  themeColor: "#0d0c0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-svh flex-col bg-paper-50 font-sans text-ink-950 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-950 focus:px-5 focus:py-3 focus:text-sm focus:text-paper-50"
        >
          Sari la conținut
        </a>
        <MotionConfig reducedMotion="user">
          <CartProvider>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
