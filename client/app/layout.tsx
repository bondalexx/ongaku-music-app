import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Ongaku Music App",
  description: "Listen music you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
