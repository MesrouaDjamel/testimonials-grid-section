import type { Metadata } from "next";
import {Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlow_semi_condensed = Barlow_Semi_Condensed({ subsets: ["latin"] , weight: ["500", "600"]});

export const metadata: Metadata = {
  title: "Testimonials Grid Section",
  description: "Challenge proposed by FrontEndMentor.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_semi_condensed.className}>{children}</body>
    </html>
  );
}
