import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://iverleads.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Iverleads | Creating Digital Solutions", template: "%s | Iverleads" },
  description: "Iverleads creates distinctive websites, marketing design and intelligent digital tools for ambitious London businesses.",
  applicationName: "Iverleads",
  keywords: ["web design London", "website development London", "digital agency London", "restaurant websites", "real estate websites", "marketing design", "business automation"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", url: siteUrl, siteName: "Iverleads", title: "Iverleads | Creating Digital Solutions", description: "Distinctive websites, design and digital systems for London businesses ready to grow.", locale: "en_GB", images: [{ url: "/assets/iverleads-submark.png", width: 512, height: 512, alt: "Iverleads blue and violet monogram" }] },
  twitter: { card: "summary_large_image", title: "Iverleads | Creating Digital Solutions", description: "Distinctive websites, design and digital systems for ambitious London businesses.", images: ["/assets/iverleads-submark.png"] },
  category: "Digital agency"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
