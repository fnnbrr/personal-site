import type { Metadata } from "next";
import "@/Root.css";
import Header from "@/Header";
import Footer from "@/Footer";

export const metadata: Metadata = {
  title: "fnnbrr - Finnbarr O'Callahan",
  description: "Finnbarr O'Callahan, Software Engineer in Toronto, Canada",
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
