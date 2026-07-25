import { Smartphone, History, PowerOff, BellRing, Navigation } from 'lucide-react';

export default function AppShowcase() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Features Side */}
          <div className="order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-6">
              <Smartphone className="w-4 h-4" />
              <span>Full Control in Your Pocket</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6">
              The Power of the <span className="text-brand-orange">MXV</span> Smartphone App
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Every Matrix Vision package includes complete access to our advanced smartphone tracking application. Monitor, manage, and secure your vehicle from anywhere in the world.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-blue">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Live Pinpoint Tracking</h3>
                  <p className="text-gray-600">See your vehicle&apos;s exact location in real-time, updated every few seconds on a high-definition street map.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-blue">
                  <PowerOff className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Remote Immobilization</h3>
                  <p className="text-gray-600">In the event of a theft, securely cut your engine power directly from the app (available on Silver & Gold).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-blue">
                  <History className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Trip History & Logbooks</h3>
                  <p className="text-gray-600">Review past journeys, speeds, and easily export automated, SARS-compliant tax logbooks.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-blue">
                  <BellRing className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Instant Alerts</h3>
                  <p className="text-gray-600">Get push notifications for battery tampering, unauthorized movement, or entering geofenced areas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup Side */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Background decorative blob */}
            <div className="absolute inset-0 bg-brand-blue/10 blur-3xl rounded-full transform scale-150 -z-10"></div>
            
            {/* The Phone */}
            <div className="relative w-72 h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl p-2 z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
              
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative flex flex-col">
                
                {/* Map Interface Simulation */}
                <div className="flex-1 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/streets-v2/256/0/0/0.png')] bg-repeat opacity-50 mix-blend-luminosity"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-brand-blue/20 rounded-full animate-ping absolute -inset-3"></div>
                    <div className="w-10 h-10 bg-brand-navy rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10">
                      <Navigation className="w-4 h-4 text-white transform rotate-45" />
                    </div>
                  </div>
                  
                  {/* Floating Action Button on map */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-navy">
                    <PowerOff className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom Sheet */}
                <div className="h-48 bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.05)] rounded-t-3xl relative z-10 p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h4 className="font-bold text-lg text-brand-navy mb-1">Toyota Hilux GD-6</h4>
                    <p className="text-sm text-green-500 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span> Online & Secure
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Speed</p>
                      <p className="font-bold text-brand-navy">0 km/h</p>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Battery</p>
                      <p className="font-bold text-brand-navy">12.4V</p>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Ignition</p>
                      <p className="font-bold text-brand-navy">OFF</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Floating UI Elements overlapping the phone */}
            <div className="absolute top-32 -left-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-bounce z-20" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <BellRing className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">Engine Started</p>
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-40 -right-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-bounce z-20" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <History className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">Trip Logged</p>
                  <p className="text-xs text-gray-500">Business | 45km</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
