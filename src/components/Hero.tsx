import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-brand-navy pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Approved by Major Insurance Brands</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Professional Vehicle Tracking Installation. <br className="hidden md:block"/>
            <span className="text-brand-orange">Protect What Matters.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Fast, seamless installation of premium tracking and dashcam systems for personal and business vehicles across South Africa. Expert local service you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="#pricing" 
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2"
            >
              View Plans <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#contact" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative hidden md:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" 
              alt="Dashboard display of a modern car" 
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
