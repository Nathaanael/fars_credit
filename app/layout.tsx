import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "FARS – Financing Application & Review System",
  description: "Digitalisasi proses kredit perbankan dari marketing ke Direktur dalam satu platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}