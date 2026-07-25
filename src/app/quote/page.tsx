'use client';

import { useState } from 'react';
import { Shield, CheckCircle2, ChevronRight, ShieldCheck, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function QuoteLandingPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xrenywgr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Simplified Header for Landing Page */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 flex justify-between items-center shadow-sm relative z-10">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-md">
            <Shield className="w-6 h-6 text-brand-orange" />
          </div>
          <div>
            <span className="text-xl font-bold text-brand-navy tracking-tight block leading-none">JMW Intel</span>
            <span className="text-[10px] uppercase tracking-wider text-brand-orange font-semibold">Vehicle Tracking</span>
          </div>
        </Link>
        <div className="hidden sm:flex items-center gap-4 text-sm font-semibold text-gray-600">
          <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-500" /> VESA Approved</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-brand-orange" /> 24/7 Support</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row items-stretch max-w-7xl mx-auto w-full">
        
        {/* Left Column: Value Prop */}
        <div className="flex-1 bg-brand-navy text-white p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6 border border-brand-orange/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Insurance Approved Tracking</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Secure Your Vehicle. <br/>
              <span className="text-brand-orange">Lower Your Premium.</span>
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 max-w-md">
              Get an instant quote for premium, VESA-approved vehicle tracking and dashcam installations. We come to you, anywhere in Gauteng.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Insurance & SARS logbook compliant",
                "Free, neat mobile installation at your location",
                "Real-time smartphone tracking app",
                "24/7 Stolen Vehicle Recovery (SVR)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-orange/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span className="text-blue-50 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Lead Form */}
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.02)] relative z-10">
          
          <div className="max-w-md mx-auto w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-navy mb-2">Get Your Free Quote</h2>
              <p className="text-gray-500">Fill in your details below and our team will contact you within 15 minutes.</p>
            </div>

            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-6">Thank you. One of our vehicle security experts will be in touch shortly with your custom quote.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-brand-blue font-semibold hover:underline"
                >
                  Submit another vehicle
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="source" value="Ads Landing Page" />
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    autoComplete="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    autoComplete="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    autoComplete="tel"
                    placeholder="082 123 4567"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                
                {/* Vehicle Make/Model */}
                <div>
                  <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-700 mb-1">Vehicle Make & Model</label>
                  <input 
                    type="text" 
                    id="vehicle" 
                    name="vehicle" 
                    required
                    autoComplete="off"
                    placeholder="e.g. Toyota Hilux 2023"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Suburb/City */}
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">Installation Area</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      id="location" 
                      name="location" 
                      required
                      autoComplete="address-level2"
                      placeholder="e.g. Sandton, Johannesburg"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                {formStatus === 'error' && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-brand-orange hover:bg-[#e65a00] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-orange/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {formStatus === 'submitting' ? 'Sending Request...' : 'Get My Free Quote'}
                  {formStatus !== 'submitting' && <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" /> Your information is secure and encrypted.
                </p>
              </form>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}
