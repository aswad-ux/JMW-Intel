import { ShieldCheck, Map, Users, Clock } from 'lucide-react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-navy/5 transform -rotate-6 rounded-3xl"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-xl">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative">
                {/* Fallback pattern in case we don't have a real image yet */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1a2e4a 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-2xl mb-2">JMW Intelligent Solutions</p>
                    <p className="text-brand-orange">Securing South Africa, One Vehicle at a Time.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Card Floating */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="text-3xl font-black text-brand-navy">1000+</p>
                  <p className="text-sm text-gray-500 font-medium">Vehicles Secured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              Your Trusted Partner in <span className="text-brand-orange">Vehicle Security</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Based in South Africa, JMW Intelligent Solutions was founded with a single mission: to provide uncompromising vehicle security and fleet management tools that actually work when you need them most. We don't just sell trackers; we provide peace of mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-brand-blue" />
                  <h4 className="font-bold text-brand-navy text-lg">Insurance Approved</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our systems meet the strict VESA standards required by all major South African insurance providers.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-brand-blue" />
                  <h4 className="font-bold text-brand-navy text-lg">24/7 Operations</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our National Operations Center monitors and responds to emergencies and theft alerts around the clock.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Map className="w-6 h-6 text-brand-blue" />
                  <h4 className="font-bold text-brand-navy text-lg">Nationwide Recovery</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  In the event of a theft, our dedicated ground and air recovery teams are immediately dispatched.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h4 className="font-bold text-brand-navy text-lg">Mobile Fitment</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We come to you. Our certified technicians install your system at your home or office for ultimate convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
