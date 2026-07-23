import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo.svg" alt="JMW Intelligent Solutions" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#tracking" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Tracking Solutions</Link>
            <Link href="#dashcams" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Dashcams</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Pricing</Link>
            <Link href="#contact" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Contact</Link>
            <Link 
              href="#contact" 
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Request a Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-brand-navy p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
