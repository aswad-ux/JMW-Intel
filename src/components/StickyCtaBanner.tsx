'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function StickyCtaBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px past the hero
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-brand-navy border-t border-white/10 px-4 py-3 flex items-center gap-3 shadow-2xl">
        <div className="flex-1">
          <p className="text-white font-bold text-sm leading-tight">Ready to secure your vehicle?</p>
          <p className="text-brand-orange text-xs font-medium">Free installation · Instant quote</p>
        </div>
        <Link
          href="#contact"
          className="flex-shrink-0 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm px-5 py-2.5 rounded-lg flex items-center gap-1 shadow-lg transition-colors"
        >
          Get Quote <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
