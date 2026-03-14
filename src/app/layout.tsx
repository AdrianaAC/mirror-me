import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MirrorMe",
  description: "Meet the AI version of you.",
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
