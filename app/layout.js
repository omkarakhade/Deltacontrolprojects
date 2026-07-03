import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { logoDataUri } from "@/data/logo";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  title: "Delta Control Projects | Solutions for Welding & Cutting",
  description:
    "Delta Control Projects manufactures CNC plasma & laser cutting systems, ARC, TIG & MIG welding machines, plasma cutters, welding generators, and torches. ISO 9001:2000 certified, Pune, India.",
  keywords: [
    "welding machines",
    "plasma cutting machine",
    "CNC plasma cutting",
    "TIG welding machine",
    "MIG welding machine",
    "Delta Control Projects",
    "Pune welding equipment manufacturer",
  ],
  icons: {
    icon: logoDataUri,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body bg-steel-50 text-ink antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
