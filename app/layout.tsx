import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Only the weights/styles actually used in the design are loaded, to keep
// the font payload as light as possible.
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://mo20.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MO20 Imperial | Rule Beyond Limits",
  description:
    "MO20 Imperial is building a premium ecosystem on Solana focused on power, prestige, innovation and long-term expansion.",
  keywords: [
    "MO20",
    "MO20 Imperial",
    "Solana",
    "Solana token",
    "Web3",
    "crypto",
    "SPL token",
  ],
  openGraph: {
    title: "MO20 Imperial | Rule Beyond Limits",
    description:
      "The rise of a new era. MO20 Imperial is a symbol of absolute power, nobility, and dominance on the Solana blockchain.",
    url: siteUrl,
    siteName: "MO20 Imperial",
    images: [
      {
        url: "/images/lion-medallion.jpg",
        width: 1290,
        height: 1290,
        alt: "MO20 Imperial crest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MO20 Imperial | Rule Beyond Limits",
    description:
      "The throne is waiting. MO20 Imperial — power, prestige and long-term dominance on Solana.",
    images: ["/images/lion-medallion.jpg"],
    creator: "@mo20_sol",
  },
  icons: {
    icon: "/images/lion-medallion.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${manrope.variable} ${jetbrains.variable} font-sans bg-void text-ivory antialiased`}
      >
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
