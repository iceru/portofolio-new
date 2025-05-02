import type { Metadata } from "next";
import { Oxanium, Nunito } from "next/font/google";
import 'material-symbols';
import "./globals.css";
import Navigation from "./components/Navigation";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhamad Hafiz - Portofolio",
  description: "Collection of works by Muhamad Hafiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${oxanium.variable} antialiased bg-neutral-800`}
      >
        <main className="p-6 px-12 text-neutral-800">
          <section>
            <Navigation />
          </section>
          {children}
          <section className="text-white mt-6 text-center">
            &copy; Copyright  - Muhamad Hafiz 2025
          </section>
        </main>
      </body>
    </html>
  );
}
