import type { Metadata } from "next";
import "./globals.css";
import Header from "@/Header";
import Footer from "@/Footer";

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
        <body>{children}</body>
      </html>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
