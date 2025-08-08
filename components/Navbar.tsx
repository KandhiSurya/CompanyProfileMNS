'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  // State untuk mengelola menu mobile (terbuka/tertutup)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Hook untuk mengetahui halaman mana yang sedang aktif
  const pathname = usePathname();

  // Daftar link untuk navigasi agar mudah dikelola
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
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MULTINET
        </Link>
        
        {/* Menu untuk Tampilan Desktop */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={
                pathname === link.href
                  ? 'text-blue-600 font-semibold' // Gaya untuk link aktif
                  : 'text-slate-600 hover:text-blue-600 transition-colors' // Gaya untuk link non-aktif
              }>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger untuk Tampilan Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Buka menu">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>

      {/* Menu Dropdown untuk Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 border-t border-slate-200">
          <ul className="flex flex-col space-y-2 text-base">
            {navLinks.map((link) => (
               <li key={link.href}>
                <Link 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)} // Menutup menu saat link diklik
                  className={
                    pathname === link.href
                      ? 'block py-2 px-2 text-blue-600 font-semibold bg-blue-50 rounded-md' // Gaya untuk link aktif di mobile
                      // PERBAIKAN: Kesalahan ketik 'p:' sebelumnya sudah dihapus dari baris di bawah ini
                      : 'block py-2 px-2 text-slate-600 hover:bg-slate-100 rounded-md' // Gaya untuk link non-aktif di mobile
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