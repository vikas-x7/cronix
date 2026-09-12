'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiSolidSquare } from 'react-icons/bi';

const NAV_LINKS = [
  { name: 'Features', id: 'features' },
  {
    name: 'GitHub',
    href: 'https://github.com/vikas-x7/cronix',
    external: true,
  },
  { name: 'Get start', href: '/dashboard' },
  { name: 'FAQ', id: 'faq' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0  right-0 z-50 px-4 sm:px-20 transition-all duration-300 ${
        isScrolled ? 'bg-white  text-black' : 'bg-transparent text-white py-3'
      }`}
    >
      <div className="w-full max-w-[100rem] mx-auto">
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center gap-5 px-1 py-2 transition-colors duration-300">
            <Link href="/" className="flex items-center gap-1">
              <BiSolidSquare size={25} className="text-[#DF5BCC]" />
              <h1
                className={`text-[19px] font-bold tracking-[-1px] ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                Cronix.
              </h1>
            </Link>
          </div>

          <div className="flex gap-8 sm:gap-10 items-center">
            {NAV_LINKS.map((link) =>
              link.href ? (
                <Link
                  key={link.name}
                  href={link.href}
                  {...('external' in link && link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className={`text-[15px] font-medium transition-colors tracking-[-0.5px] flex items-center gap-1 ${
                    isScrolled
                      ? 'text-black hover:text-black/70'
                      : 'text-white hover:text-white/70'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleSmoothScroll(link.id!)}
                  className={`text-[15px] font-medium transition-colors tracking-[-0.1px] cursor-pointer ${
                    isScrolled
                      ? 'text-black hover:text-black/70'
                      : 'text-white hover:text-white/70'
                  }`}
                >
                  {link.name}
                </button>
              ),
            )}
          </div>

          <Link
            href="/login"
            className="text-[15px] font-medium text-white rounded-[10px] transition-colors cursor-pointer bg-black px-4 py-1.5"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
