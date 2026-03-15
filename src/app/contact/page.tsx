import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Location',
  description: 'Find Yakiniku SAWA in Pattaya. Get directions, call us, or book via WhatsApp and LINE.',
  openGraph: {
    title: 'Contact & Location | Yakiniku SAWA Pattaya',
    images: [{ url: '/images/og-default.jpg' }],
  },
};

const ctaCards = [
  {
    icon: '📞',
    label: 'Call Us',
    desc: 'Speak directly with our team',
    cta: 'Call Now',
    href: 'tel:+66818258899',
    number: '+66 81 825 8899',
    className: 'hover:border-ember/60',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    desc: 'Reserve your table instantly',
    cta: 'Message Us',
    href: 'https://wa.me/66818258899?text=Hello%20I%20would%20like%20to%20make%20a%20reservation',
    number: '+66 81 825 8899',
    className: 'hover:border-green-500/60',
  },
  {
    icon: '🟢',
    label: 'LINE',
    desc: 'Chat with us on LINE',
    cta: 'Add on LINE',
    href: 'https://line.me/R/ti/p/@yakinikusawa',
    number: '@yakinikusawa',
    className: 'hover:border-green-400/60',
  },
];

const gettingThere = [
  { icon: '🚗', label: 'By Car', desc: 'Parking available on 2nd Road. Valet service available on weekends.' },
  { icon: '🛺', label: 'By Baht Bus', desc: 'Baht buses run regularly along 2nd Road. Ask the driver for SAWA.' },
  { icon: '🛵', label: 'By Grab/Taxi', desc: 'Show the driver: ยากินิกุ ซาว่า พัทยา on 2nd Road.' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center bg-charcoal">
        <p className="section-tag mb-3">We&apos;d Love to See You</p>
        <h1 className="font-oswald text-5xl md:text-6xl font-bold text-washi mb-4">Find Us</h1>
        <p className="font-open-sans text-washi/60 max-w-xl mx-auto">
          Yakiniku SAWA is located on 2nd Road, Pattaya City. Reserve online or give us a call.
        </p>
      </section>

      {/* Info cards */}
      <section className="bg-ink py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-charcoal border border-ember/20 p-6 text-center">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-oswald text-ember text-sm tracking-widest uppercase mb-2">Address</h3>
            <p className="font-open-sans text-washi/70 text-sm">2nd Road, Pattaya City<br />Chonburi, Thailand</p>
          </div>
          <div className="bg-charcoal border border-ember/20 p-6 text-center">
            <div className="text-3xl mb-3">🕐</div>
            <h3 className="font-oswald text-ember text-sm tracking-widest uppercase mb-2">Opening Hours</h3>
            <p className="font-open-sans text-washi/70 text-sm">Mon–Fri: 5:00 PM – 12:00 AM<br />Sat–Sun: 4:00 PM – 12:00 AM</p>
          </div>
          <div className="bg-charcoal border border-ember/20 p-6 text-center">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-oswald text-ember text-sm tracking-widest uppercase mb-2">Phone</h3>
            <a href="tel:+66818258899" className="font-open-sans text-washi/70 text-sm hover:text-ember transition-colors">
              +66 81 825 8899
            </a>
          </div>
        </div>

        {/* CTA cards */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-tag mb-2">Reserve Your Table</p>
            <h2 className="section-title text-2xl md:text-3xl">Get in Touch</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ctaCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`bg-charcoal border border-ember/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 ${card.className}`}
              >
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="font-oswald text-washi text-lg font-bold mb-1">{card.label}</h3>
                <p className="font-open-sans text-washi/50 text-sm mb-3">{card.desc}</p>
                <p className="font-oswald text-ember text-sm mb-4">{card.number}</p>
                <span className="btn-outline text-xs px-4 py-2">{card.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.3!2d100.8724!3d12.9236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zWWFraW5pa3UgU0FXQQ!5e0!3m2!1sen!2sth!4v1234567890"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Yakiniku SAWA Pattaya location"
        />
      </section>

      {/* Getting there */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-tag mb-2">Directions</p>
            <h2 className="section-title text-2xl md:text-3xl">Getting Here</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {gettingThere.map((item) => (
              <div key={item.label} className="bg-ink border border-ember/20 p-6 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-oswald text-washi text-base font-bold mb-2">{item.label}</h3>
                <p className="font-open-sans text-washi/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
