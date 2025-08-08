'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/career', label: 'Career' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
      {/* PADDING DIUBAH DI SINI */}
      <div className="container mx-auto flex justify-between items-center px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo Multiple Network Solutions"
            width={50}
            height={35}
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={
                pathname === link.href
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-blue-600 transition-colors'
              }>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Buka menu">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 border-t border-slate-200">
          <ul className="flex flex-col space-y-2 text-base">
            {navLinks.map((link) => (
               <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    pathname === link.href
                      ? 'block py-2 px-2 text-blue-600 font-semibold bg-blue-50 rounded-md'
                      : 'block py-2 px-2 text-slate-600 hover:bg-slate-100 rounded-md'
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
} 