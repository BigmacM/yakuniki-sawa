import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ember/20 pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/yakuniki-logo.png"
                alt="Yakiniku SAWA logo"
                width={80}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="font-oswald text-washi text-base font-bold tracking-wider">YAKINIKU SAWA</div>
                <div className="font-open-sans text-ember text-xs tracking-widest uppercase">Pattaya</div>
              </div>
            </Link>
            <p className="font-open-sans text-washi/60 text-sm leading-relaxed">
              Authentic Japanese yakiniku with premium A5 Wagyu, smoke-free technology, and a curated sake bar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-oswald text-ember text-sm tracking-widest uppercase mb-4">Navigate</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Our Menu' },
                { href: '/experience', label: 'Experience' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-open-sans text-washi/60 text-sm hover:text-ember transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-oswald text-ember text-sm tracking-widest uppercase mb-4">Contact</h3>
            <ul className="space-y-2 font-open-sans text-washi/60 text-sm">
              <li>
                <a href="tel:+66818258899" className="hover:text-ember transition-colors">+66 81 825 8899</a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Yakiniku+SAWA+Pattaya" target="_blank" rel="noopener noreferrer" className="hover:text-ember transition-colors">
                  2nd Road, Pattaya City, Chonburi
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="https://wa.me/66818258899?text=Hello%20I%20would%20like%20to%20make%20a%20reservation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ember transition-colors"
                >
                  WhatsApp Reservation
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-oswald text-ember text-sm tracking-widest uppercase mb-4">Opening Hours</h3>
            <ul className="space-y-1 font-open-sans text-washi/60 text-sm">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span>5:00 PM – 12:00 AM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sat – Sun</span>
                <span>4:00 PM – 12:00 AM</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="https://line.me/R/ti/p/@yakinikusawa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity"
                aria-label="LINE"
              >
                L
              </a>
              <a
                href="https://wa.me/66818258899"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                W
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-open-sans text-washi/30 text-xs">
          <span>© {new Date().getFullYear()} Yakiniku SAWA Pattaya. All rights reserved.</span>
          <span>
            Website by{' '}
            <a
              href="https://nikamarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ember transition-colors"
            >
              Nika Marketing
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
