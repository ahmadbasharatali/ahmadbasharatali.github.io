import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name + " | " + siteConfig.title,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  keywords: [
    "Full Stack Developer",
    "React.js",
    "Node.js",
    "Golang",
    "PostgreSQL",
    "Docker",
    "Linux Administration",
    "API Development",
    "AI Applications",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name + " | Portfolio",
    title: siteConfig.name + " | " + siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name + " - " + siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ahmadbasharat",
    creator: "@ahmadbasharat",
    title: siteConfig.name + " | " + siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        alt: siteConfig.name + " - " + siteConfig.title,
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.upwork,
  ],
  knowsAbout: [
    "React.js",
    "Node.js",
    "Golang",
    "PostgreSQL",
    "Docker",
    "Linux Administration",
    "API Development",
    "AI Applications",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
