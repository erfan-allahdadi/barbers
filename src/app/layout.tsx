import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Babar app",
  description: "Find your favorite barber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
