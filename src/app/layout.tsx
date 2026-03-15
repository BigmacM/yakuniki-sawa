import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileFooter from '@/components/MobileFooter';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'Yakiniku SAWA Pattaya | Premium Japanese BBQ',
    template: '%s | Yakiniku SAWA Pattaya',
  },
  description: 'Authentic A5 Wagyu yakiniku experience in Pattaya. Premium Japanese BBQ with smoke-free technology, sake bar, and private dining.',
  keywords: ['yakiniku', 'wagyu', 'pattaya', 'japanese bbq', 'A5 wagyu', 'yakiniku sawa'],
  openGraph: {
    type: 'website',
    siteName: 'Yakiniku SAWA Pattaya',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KGDM6T65');
        `}</Script>
      </head>
      <body className="min-h-screen bg-charcoal overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGDM6T65"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileFooter />
      </body>
    </html>
  );
}
