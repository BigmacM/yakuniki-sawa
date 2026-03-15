import type { Metadata } from 'next';
import Image from 'next/image';
import { menuCategories } from '@/data/menu';
import MenuGallery from '@/components/MenuGallery';

export const metadata: Metadata = {
  title: 'Our Menu',
  description: 'Explore the full Yakiniku SAWA menu — Premium A5 Wagyu cuts, seafood, sashimi, sake and more.',
  openGraph: {
    title: 'Our Menu | Yakiniku SAWA Pattaya',
    images: [{ url: '/images/og-default.jpg' }],
  },
};

function img(folder: string, filename: string) {
  return `/images/${folder}/${encodeURIComponent(filename)}`;
}

const galleryImages = [
  { src: img('menu-gallery', 'Premium Wagyu (2).jpg'), label: 'Premium Wagyu' },
  { src: img('menu-gallery', 'Beef Wagyu Internal Organs (1).jpg'), label: 'Wagyu Specials' },
  { src: img('menu-gallery', 'Sashimi and Salad (1).jpg'), label: 'Sashimi & Salads' },
  { src: img('menu-gallery', 'Appetizers (1).jpg'), label: 'Appetizers' },
  { src: img('menu-gallery', 'Fresh Pork (1).jpg'), label: 'Fresh Pork' },
  { src: img('menu-gallery', 'Rice and Soup (1).jpg'), label: 'Rice & Soups' },
  { src: img('menu-gallery', 'Sake (1).jpg'), label: 'Sake' },
  { src: img('menu-gallery', 'Beer (1).jpg'), label: 'Beer' },
  { src: img('menu-gallery', 'Whisky (1).jpg'), label: 'Whisky' },
  { src: img('menu-gallery', 'Sochu (1).jpg'), label: 'Shochu' },
  { src: img('menu-gallery', 'Soft Drinks (1).jpg'), label: 'Soft Drinks' },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src={img('menu-gallery', 'Premium Wagyu (2).jpg')}
            alt="Our Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="section-tag mb-3">Curated with Care</p>
          <h1 className="font-oswald text-5xl md:text-6xl font-bold text-washi">Our Menu</h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-tag mb-3">Photo Gallery</p>
          <h2 className="section-title text-3xl md:text-4xl">What Awaits You</h2>
        </div>
        <MenuGallery images={galleryImages} />
      </section>

      {/* Menu Categories */}
      <section className="bg-ink py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-tag mb-3">Full Menu</p>
            <h2 className="section-title text-3xl md:text-4xl">All Categories</h2>
          </div>
          <div className="space-y-16">
            {menuCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-ember/20">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-oswald text-2xl text-washi font-bold">{cat.title}</h3>
                    {cat.subtitle && (
                      <p className="font-open-sans text-ember text-sm tracking-wider">{cat.subtitle}</p>
                    )}
                  </div>
                </div>
                {/* Items grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-start justify-between gap-4 p-4 rounded ${
                        item.highlight ? 'bg-ember/10 border border-ember/30' : 'bg-charcoal/50'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className={`font-oswald text-sm font-semibold leading-tight ${item.highlight ? 'text-ember' : 'text-washi'}`}>
                          {item.name}
                          {item.highlight && <span className="ml-2 text-[10px] bg-ember text-charcoal px-1.5 py-0.5 rounded font-bold">SIGNATURE</span>}
                        </p>
                        {item.nameJp && (
                          <p className="font-open-sans text-washi/40 text-xs mt-0.5">{item.nameJp}</p>
                        )}
                        {item.nameTh && (
                          <p className="font-open-sans text-washi/40 text-xs mt-0.5">{item.nameTh}</p>
                        )}
                        {item.description && (
                          <p className="font-open-sans text-washi/50 text-xs mt-1 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      <div className="font-oswald text-ember font-bold text-sm whitespace-nowrap">
                        {typeof item.price === 'number' ? `฿${item.price}` : item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 px-4 text-center bg-charcoal">
        <p className="section-tag mb-3">Ready to Order?</p>
        <h2 className="section-title text-3xl md:text-4xl mb-6">Book Your Table</h2>
        <a
          href="https://wa.me/66818258899?text=Hello%20I%20would%20like%20to%20make%20a%20reservation"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Reserve via WhatsApp
        </a>
      </section>
    </>
  );
}
