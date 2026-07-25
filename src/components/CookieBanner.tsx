'use client';

import { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('jmw-cookie-consent');
    if (!consent) {
      // Slight delay so it doesn't flash immediately on page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('jmw-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('jmw-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom-8 fade-in duration-500">
      <div className="max-w-4xl mx-auto bg-brand-navy border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="flex-shrink-0 w-9 h-9 bg-brand-orange/20 rounded-full flex items-center justify-center mt-0.5">
            <Shield className="w-5 h-5 text-brand-orange" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">We value your privacy</p>
            <p className="text-gray-400 text-xs leading-relaxed">
              JMW Intel uses cookies to improve your experience and ensure our services work correctly. By continuing, you agree to our{' '}
              <Link href="/privacy-policy" className="text-brand-orange hover:underline">Privacy Policy</Link>
              {' '}in accordance with POPIA.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 sm:flex-none text-gray-400 hover:text-white text-sm font-medium transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-md"
          >
            Accept
          </button>
          <button
            onClick={handleAccept}
            className="text-gray-500 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
