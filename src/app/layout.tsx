import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillyTree",
  description: "upskill with a personal touch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
