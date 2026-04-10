import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jasper de Shields — Product Engineer",
  description: "I build products from zero to revenue. Product engineer, founder, and AI systems builder running 5 parallel projects.",
  openGraph: {
    title: "Jasper de Shields",
    description: "I build products from zero to revenue.",
    url: "https://jasd.com",
    siteName: "jasd.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasper de Shields",
    description: "I build products from zero to revenue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
