'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Our Menu' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal/95 shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/yakuniki-logo.png"
              alt="Yakiniku SAWA logo"
              width={80}
              height={40}
              className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
            <div>
              <div className="font-oswald text-washi text-lg font-bold tracking-wider leading-tight">YAKINIKU SAWA</div>
              <div className="font-open-sans text-ember text-xs tracking-widest uppercase">Pattaya</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-oswald text-sm tracking-widest uppercase transition-colors duration-200 ${
                  pathname === link.href ? 'text-ember' : 'text-washi/80 hover:text-ember'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/66818258899?text=Hello%20I%20would%20like%20to%20make%20a%20reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-5 py-2"
            >
              Reserve Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-50 flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-washi transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-washi transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-washi transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal/98 border-t border-ember/20 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-oswald text-base tracking-widest uppercase py-2 border-b border-ink ${
                pathname === link.href ? 'text-ember' : 'text-washi/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/66818258899?text=Hello%20I%20would%20like%20to%20make%20a%20reservation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center mt-2"
          >
            Reserve Now
          </a>
        </div>
      )}
    </header>
  );
}
