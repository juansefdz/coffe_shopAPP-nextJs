import type { Metadata } from "next";

import "./globals.css";

const inter = { subsets: ["latin"] };

export const metadata: Metadata = {
  title: "Coffee Shop APP",
  description: "Coffee Shop APP built with Next.js and PRISMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.subsets} bg-gray-100`}>{children}</body>
    </html>
  );
}
