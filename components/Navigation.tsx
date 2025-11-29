'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'WORK', href: '/work' },
  { label: 'ABOUT', href: '/about' },
  { label: 'RESUME', href: '/resume' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Left Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-24 lg:w-32 flex-col items-center justify-center z-50">
        <div className="flex flex-col gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{ writingMode: 'vertical-rl' }}
              className="text-accent font-display font-bold text-sm tracking-wider hover:text-tertiary transition-smooth"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-primary/95 backdrop-blur-sm z-50 border-b border-secondary/10">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-accent font-display font-bold text-sm relative z-10"
            aria-label="Toggle menu"
          >
            {isOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {/* Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 bg-primary border-t border-secondary/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-accent font-display font-bold text-lg tracking-wider hover:text-tertiary transition-all duration-300 transform"
                  style={{
                    animation: isOpen ? `slideDown 0.3s ease-out ${index * 0.1}s both` : 'none',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
