import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Experience',
  description: 'Discover what makes Yakiniku SAWA unique — smoke-free grilling, premium sake bar, private dining, and Japanese hospitality in Pattaya.',
  openGraph: {
    title: 'The Experience | Yakiniku SAWA Pattaya',
    images: [{ url: '/images/og-default.jpg' }],
  },
};

function img(folder: string, filename: string) {
  return `/images/${folder}/${encodeURIComponent(filename)}`;
}

const galleryImages = [
  img('experience', 'Yakuniki Sawa (1).jpg'),
  img('experience', 'Yakuniki Sawa (2).jpg'),
  img('experience', 'Yakuniki Sawa (3).jpg'),
  img('experience', 'Yakuniki Sawa (4).jpg'),
  img('experience', 'Yakuniki Sawa (5).jpg'),
  img('experience', 'Yakuniki Sawa (6).jpg'),
  img('experience', 'Yakuniki Sawa (7).jpg'),
  img('experience', 'Yakuniki Sawa (8).jpg'),
  img('experience', 'Yakuniki Sawa (9).jpg'),
  img('experience', 'Yakuniki Sawa (10).jpg'),
  img('experience', 'Yakuniki Sawa (11).jpg'),
  img('experience', 'Yakuniki Sawa (12).jpg'),
];

const interiorImages = [
  img('experience', 'interior  (1).jpg'),
  img('experience', 'interior  (2).jpg'),
  img('experience', 'interior  (3).jpg'),
  img('experience', 'interior  (4).jpg'),
  img('experience', 'interior  (5).jpg'),
  img('experience', 'interior  (6).jpg'),
  img('experience', 'interior  (7).jpg'),
];

const features = [
  {
    icon: '💨',
    title: 'Zero Smoke Technology',
    desc: 'Our state-of-the-art ventilation system extracts smoke at the source. Leave fresh — no odor on your clothes.',
  },
  {
    icon: '🥩',
    title: 'A5 Grade Wagyu',
    desc: 'Only the finest certified A5 Wagyu beef sourced directly from Japan. Unmatched marbling, unmatched flavor.',
  },
  {
    icon: '🍶',
    title: 'Curated Sake Bar',
    desc: 'From Junmai Daiginjo to Umeshu, our sake selection is handpicked to complement your meal perfectly.',
  },
  {
    icon: '🎋',
    title: 'Japanese Hospitality',
    desc: 'Every detail reflects the Japanese concept of omotenashi — wholehearted hospitality that anticipates your every need.',
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src={img('experience', 'Yakuniki Sawa Hero.jpg')}
            alt="Yakiniku SAWA Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="section-tag mb-3">More Than a Meal</p>
          <h1 className="font-oswald text-5xl md:text-6xl font-bold text-washi">The Experience</h1>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-tag mb-3">Why SAWA</p>
          <h2 className="section-title text-3xl md:text-4xl">What Sets Us Apart</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-ink border border-ember/20 p-6 hover:border-ember/50 transition-colors">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-oswald text-ember text-lg font-bold mb-2">{f.title}</h3>
              <p className="font-open-sans text-washi/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story + smoke box */}
      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={img('experience', 'interior  (1).jpg')}
                alt="SAWA interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Smoke odor box */}
            <div className="absolute -bottom-6 -right-6 bg-charcoal border border-ember/50 p-6 max-w-[200px]">
              <div className="font-oswald text-ember text-3xl font-bold">0</div>
              <div className="font-oswald text-washi text-sm tracking-widest uppercase">Smoke Odor</div>
              <div className="font-open-sans text-washi/70 text-xs mt-1">After dining</div>
            </div>
          </div>

          <div>
            <p className="section-tag mb-4">Our Craft</p>
            <h2 className="section-title text-4xl md:text-5xl mb-6">
              An Atmosphere of<br />
              <span className="text-ember">Warmth & Precision</span>
            </h2>
            <p className="font-open-sans text-washi/70 text-base leading-relaxed mb-4">
              The moment you step into Yakiniku SAWA, you enter a world carefully designed to make you feel both welcomed and impressed. Our interior draws on the warmth of natural materials — dark timber, warm lighting, and clean Japanese lines.
            </p>
            <p className="font-open-sans text-washi/70 text-base leading-relaxed mb-8">
              Our individual grill stations are equipped with the latest smoke-extraction technology from Japan, meaning you enjoy the full experience of live-fire grilling without taking the smell home with you.
            </p>
            <Link href="/contact" className="btn-outline">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Interior gallery */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-tag mb-3">Inside SAWA</p>
          <h2 className="section-title text-3xl md:text-4xl">Our Space</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {interiorImages.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group">
              <Image
                src={src}
                alt={`SAWA interior ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Food gallery */}
      <section className="bg-ink py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">On the Grill</p>
            <h2 className="section-title text-3xl md:text-4xl">In the Moment</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <Image
                  src={src}
                  alt={`SAWA dining ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-charcoal">
        <p className="section-tag mb-3">Come Experience It</p>
        <h2 className="section-title text-3xl md:text-4xl mb-6">Reserve Your Table</h2>
        <a
          href="https://wa.me/66818258899?text=Hello%20I%20would%20like%20to%20make%20a%20reservation"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book via WhatsApp
        </a>
      </section>
    </>
  );
}
