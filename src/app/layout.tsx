import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Header";
import Footer from "@/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fnnbrr",
  description: "Finnbarr O'Callahan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Header />
      </header>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </html>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
