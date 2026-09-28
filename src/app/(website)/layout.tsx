import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inlaw.kz'),
  title: {
    default: "Inlaw.kz — Регистрация и Сопровождение Международного Бизнеса",
    template: "%s | Inlaw.kz",
  },
  description: "Регистрация компаний, открытие счетов и лицензирование в Казахстане, ОАЭ, МФЦА и Гонконге. Полное юридическое и корпоративное сопровождение.",
  keywords: ["регистрация компании", "МФЦА", "ОАЭ", "Дубай", "открытие счета", "лицензия", "AIFC", "business setup", "Kazakhstan", "UAE"],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://inlaw.kz',
    siteName: 'Inlaw.kz',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Inlaw.kz',
      },
    ],
  },
  alternates: {
    canonical: 'https://inlaw.kz',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Inlaw.kz",
  "alternateName": "Inlaw",
  "url": "https://inlaw.kz",
  "logo": "https://inlaw.kz/logo.png",
  "description": "Регистрация и Сопровождение Международного Бизнеса в Казахстане, ОАЭ, Кыргызстане и Шанхае",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "ул. Гейдара Алиева 1",
      "addressLocality": "Astana",
      "addressCountry": "KZ"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "IFZA Business Park, Building A2",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  ],
  "telephone": "+77001466646",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+77001466646",
      "contactType": "customer service",
      "areaServed": "KZ"
    },
     {
      "@type": "ContactPoint",
      "telephone": "+971523524196",
      "contactType": "customer service",
      "areaServed": "AE"
    }
  ],
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8KJ2SQB');`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white min-h-screen flex flex-col`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8KJ2SQB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          
          <Footer />
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
