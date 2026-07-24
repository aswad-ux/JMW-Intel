'use client';

import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);

  // Delay the appearance of the widget so it doesn't block initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  // Replace with actual business WhatsApp number (include country code, e.g., 27 for SA)
  const waUrl = 'https://wa.me/c/27833508356';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-10 fade-in duration-500">
      <a 
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 relative"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 group-hover:animate-ping"></span>
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
