import type { Metadata } from "next";
import { Oxanium, Nunito } from "next/font/google";
import 'material-symbols';
import "./globals.css";

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
        className={`${nunito.variable} ${oxanium.variable} antialiased bg-gray-900 p-4 lg:p-8`}
      >
        {children}
      </body>
    </html>
  );
}
