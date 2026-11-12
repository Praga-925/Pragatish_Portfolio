import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { DEFAULT_SEO } from "@/constants/seo";
import { PERSONAL_BRAND } from "@/data/personal";
import { Providers } from "@/providers/Providers";
import { HeaderLayout } from "@/components/layout";
import { AICursor } from "@/components/ui";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: DEFAULT_SEO.title,
  description: DEFAULT_SEO.description,
  keywords: [...DEFAULT_SEO.keywords],
  authors: [{ name: PERSONAL_BRAND.fullName }],
  openGraph: {
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    type: "website",
    locale: DEFAULT_SEO.openGraph.locale,
    siteName: DEFAULT_SEO.openGraph.siteName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_BRAND.fullName,
    "jobTitle": "AI & Machine Learning Enthusiast | Cybersecurity Enthusiast",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Cybersecurity",
      "Geospatial AI",
      "Python"
    ]
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth scroll-pt-24`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var t=(s==="dark"||s==="light")?s:"dark";document.documentElement.setAttribute("data-theme",t);if(t==="dark"){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}}catch(e){document.documentElement.setAttribute("data-theme","dark");document.documentElement.classList.add("dark");}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[var(--bg-primary)] text-[var(--text-main)] antialiased selection:bg-[var(--accent-cyan)]/25 selection:text-[var(--accent-cyan)] bg-noise min-h-screen flex flex-col font-body transition-colors duration-300"
      >
        <Providers>
          <AICursor />
          <HeaderLayout />
          {children}
        </Providers>
      </body>
    </html>
  );
}
