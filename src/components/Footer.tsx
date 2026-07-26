import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6 bg-white p-2 rounded">
              <img src="/logo.svg" alt="JMW Intelligent Solutions" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Professional, insurance-approved vehicle tracking and dashcam installations across South Africa.
            </p>

          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#tracking" className="hover:text-brand-orange transition-colors">Tracking Solutions</Link></li>
              <li><Link href="#dashcams" className="hover:text-brand-orange transition-colors">Matrix Vision Dashcams</Link></li>
              <li><Link href="/fleet" className="hover:text-brand-orange transition-colors">Fleet Management</Link></li>
              <li><Link href="#pricing" className="hover:text-brand-orange transition-colors">Pricing Plans</Link></li>
              <li><Link href="#why-us" className="hover:text-brand-orange transition-colors">Why Choose Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/installation-guide" className="hover:text-brand-orange transition-colors">Installation Guide</Link></li>
              <li><Link href="/warranty" className="hover:text-brand-orange transition-colors">Warranty Info</Link></li>
              <li><Link href="/faq" className="hover:text-brand-orange transition-colors">FAQ</Link></li>
              <li><Link href="/#contact" className="hover:text-brand-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-brand-orange transition-colors">Terms of Service</Link></li>
              <li><Link href="/sars-compliance" className="hover:text-brand-orange transition-colors">SARS Compliance</Link></li>
            </ul>
          </div>
        </div>

        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JMW Intelligent Solutions. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed for South African Roads
          </p>
        </div>
      </div>
    </footer>
  );
}
