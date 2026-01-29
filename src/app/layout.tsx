import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALB Property Maintenance & Landscapes | Adelaide",
  description: "High-quality, fully custom outdoor services. Landscaping, property maintenance, and garden design across Adelaide.",
  keywords: ["landscaping", "property maintenance", "Adelaide", "gardens", "outdoor", "lawn care"],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "ALB Property Maintenance & Landscapes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
