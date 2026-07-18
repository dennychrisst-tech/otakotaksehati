import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = "https://landing-otak-otak-sehati.vercel.app";
const title = "Otak-Otak Sehati — Otak-Otak Ikan Tenggiri Premium";
const description =
  "Otak-otak ikan tenggiri asli, tanpa pengawet, dibuat dengan sepenuh hati. Pesan sekarang via WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "otak-otak",
    "otak-otak ikan tenggiri",
    "otak-otak sehati",
    "hampers otak-otak",
    "oleh-oleh ikan tenggiri",
  ],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Otak-Otak Sehati",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "Otak-Otak Sehati" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
