import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yakiniku SAWA Pattaya | Premium Japanese BBQ',
  description: 'Authentic A5 Wagyu yakiniku experience in Pattaya. Premium Japanese BBQ with smoke-free technology, sake bar, and private dining.',
  openGraph: {
    title: 'Yakiniku SAWA Pattaya | Premium Japanese BBQ',
    description: 'Authentic A5 Wagyu yakiniku experience in Pattaya.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

function img(folder: string, filename: string) {
  return `/images/${folder}/${encodeURIComponent(filename)}`;
}

const menuPreview = [
  { src: img('menu-gallery', 'Premium Wagyu (2).jpg'), label: 'Premium Wagyu' },
  { src: img('menu-gallery', 'Beef Wagyu Internal Organs (1).jpg'), label: 'Wagyu Specials' },
  { src: img('menu-gallery', 'Sashimi and Salad (1).jpg'), label: 'Sashimi & Salads' },
  { src: img('menu-gallery', 'Sake (1).jpg'), label: 'Sake Bar' },
];

const experienceImages = [
  img('experience', 'interior  (1).jpg'),
  img('experience', 'interior  (2).jpg'),
  img('experience', 'Yakuniki Sawa (1).jpg'),
  img('experience', 'Yakuniki Sawa (2).jpg'),
];

const stats = [
  { value: '15+', label: 'Wagyu Cuts' },
  { value: 'A5', label: 'Highest Grade' },
  { value: '0', label: 'Smoke Odor' },
];

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Yakiniku SAWA Pattaya',
  servesCuisine: ['Japanese', 'Korean BBQ', 'Yakiniku'],
  priceRange: '฿฿฿',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2nd Road',
    addressLocality: 'Pattaya City',
    addressRegion: 'Chonburi',
    addressCountry: 'TH',
  },
  telephone: '+66818258899',
  url: 'https://yakinikusawa.com',
  openingHours: ['Mo-Fr 17:00-24:00', 'Sa-Su 16:00-24:00'],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={img('hero', 'Yakuniki Sawa Hero.jpg')}
            alt="Yakiniku SAWA Pattaya"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="section-tag mb-4">Premium Japanese BBQ · Pattaya</p>
          <h1 className="font-oswald text-5xl md:text-7xl font-bold text-washi mb-6 leading-tight">
            THE FINEST<br />
            <span className="text-ember">YAKINIKU</span><br />
            EXPERIENCE
          </h1>
          <p className="font-open-sans text-washi/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Authentic A5 Wagyu grilled over premium charcoal. Smoke-free technology. An unforgettable taste of Japan in the heart of Pattaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/66818258899?text=Hello%20I%20would%20like%20to%20make%20a%20reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Reserve a Table
            </a>
            <Link href="/menu" className="btn-outline">
              View Our Menu
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-washi/40">
          <span className="font-oswald text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-ember/50" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-12 border-y border-ember/20">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-oswald text-ember text-4xl font-bold">{s.value}</div>
              <div className="font-open-sans text-washi/60 text-sm mt-1 tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-tag mb-3">Crafted with Precision</p>
          <h2 className="section-title text-4xl md:text-5xl">Our Menu</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {menuPreview.map((item) => (
            <div key={item.label} className="relative aspect-square overflow-hidden group">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/menu" className="btn-outline">
            Explore Full Menu
          </Link>
        </div>
      </section>

      {/* Experience Story */}
      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-3">
            {experienceImages.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${i === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'}`}
              >
                <Image src={src} alt={`Yakiniku SAWA interior ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div>
            <p className="section-tag mb-4">Our Story</p>
            <h2 className="section-title text-4xl md:text-5xl mb-6">
              Where Fire Meets<br />
              <span className="text-ember">Mastery</span>
            </h2>
            <p className="font-open-sans text-washi/70 text-base leading-relaxed mb-4">
              At Yakiniku SAWA, we believe that great food is an act of devotion. Every cut of A5 Wagyu is sourced with care, every grill station is equipped with state-of-the-art smoke-extraction, and every guest is welcomed into a space that honors the Japanese tradition of yakiniku.
            </p>
            <p className="font-open-sans text-washi/70 text-base leading-relaxed mb-8">
              Our chefs have trained in Japan to bring you an experience that is both authentic and elevated — the finest beef, grilled exactly as you like it, in an atmosphere of warmth and precision.
            </p>
            <Link href="/experience" className="btn-outline">
              Discover the Experience
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-charcoal" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="section-tag mb-4">Ready to Dine?</p>
          <h2 className="section-title text-4xl md:text-5xl mb-6">Make Your Reservation</h2>
          <p className="font-open-sans text-washi/60 mb-10">
            Reserve your table now via WhatsApp for the fastest response. Walk-ins welcome, reservations preferred.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/66818258899?text=Hello%20I%20would%20like%20to%20make%20a%20reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book via WhatsApp
            </a>
            <Link href="/contact" className="btn-outline">
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
