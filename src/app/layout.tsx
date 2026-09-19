import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tekton Digital — Design e desenvolvimento para negócios reais",
    template: "%s — Tekton Digital",
  },
  description: siteConfig.description,
  keywords: [
    "desenvolvimento de sites",
    "landing pages",
    "sistemas web",
    "design de interfaces",
    "Tekton Digital",
  ],
  openGraph: {
    title: "Tekton Digital — Design e desenvolvimento para negócios reais",
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
    siteName: "Tekton Digital",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekton Digital",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
