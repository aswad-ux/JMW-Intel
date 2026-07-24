import Link from 'next/link';
import { MapPinOff } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-24 h-24 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <MapPinOff className="w-12 h-12 text-brand-orange" />
        </div>
        
        <h1 className="text-6xl font-black text-brand-navy mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Looks like you took a wrong turn!</h2>
        
        <p className="text-gray-600 mb-10 text-lg">
          The page you are looking for has been moved or no longer exists. Let's get you back on track.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange/30"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
