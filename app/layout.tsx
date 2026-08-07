import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieConsent from "./cookie-consent";
import { sitePath } from "./site-path";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const shareTechMono = localFont({
  src: "./fonts/share-tech-mono-latin.woff2",
  variable: "--font-share-tech-mono",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tekh.co.uk"),
  title: { default: "Tekh | Make complexity useful", template: "%s | Tekh" },
  description: "Responsible technology consultancy helping government, agrifood and industry turn complex challenges into useful, trusted solutions.",
  openGraph: {
    title: "Tekh | Make complexity useful",
    description: "Responsible technology for government, agrifood and industry.",
    url: "https://tekh.co.uk",
    siteName: "Tekh",
    images: [{ url: sitePath("/og.png"), width: 1200, height: 630, alt: "Tekh: Make complexity useful" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekh | Make complexity useful",
    description: "Responsible technology for government, agrifood and industry.",
    images: [sitePath("/og.png")],
  },
  icons: {
    icon: sitePath("/tekh-logo.svg"),
    shortcut: sitePath("/tekh-logo.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${shareTechMono.variable} antialiased`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
