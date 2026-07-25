import { Smartphone, History, BellRing, Navigation, Car, Map, Moon, ChevronLeft } from 'lucide-react';

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
                
                {/* Header Simulation */}
                <div className="h-14 bg-[#2B70B0] flex items-center justify-center px-4 relative z-20 shadow-md">
                  <div className="absolute left-4">
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-bold text-xs tracking-wider">VEHICLE POSITION</span>
                </div>

                {/* Map Interface Simulation */}
                <div className="flex-1 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/streets-v2/256/0/0/0.png')] bg-cover opacity-60 mix-blend-multiply"></div>
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] w-full flex flex-col items-center">
                    
                    {/* Blue Info Box */}
                    <div className="bg-[#4878A6] text-white rounded-xl shadow-2xl p-4 w-[85%] max-w-[280px] relative mb-2 border border-[#5d8dbb]">
                      <div className="flex justify-between items-start mb-3 border-b border-white/20 pb-3">
                        <div>
                          <p className="font-bold text-sm leading-tight">MATRIX1GP</p>
                          <p className="text-xs text-blue-100">HYUNDAI ATOS CARGO</p>
                        </div>
                        <Moon className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="flex justify-between items-center text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white flex items-center justify-center mb-1">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <span className="text-[9px]">View Trips</span>
                        </div>
                        
                        <div className="flex-1 px-2 flex flex-col items-center">
                          <span className="text-[10px] text-blue-100 truncate w-full text-center mb-1">Matekula Kyalami</span>
                          <span className="font-bold text-xs mb-1">Speed: 0 km/h</span>
                          <span className="text-[10px] flex items-center gap-1 border border-white/20 px-2 py-0.5 rounded-full">Unit Status <span className="w-2 h-2 rounded-full bg-green-400 ml-1"></span></span>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full border-2 border-red-500 bg-white flex items-center justify-center mb-1">
                            <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                          </div>
                          <span className="text-[9px]">Refresh</span>
                        </div>
                      </div>
                      
                      {/* Triangle Pointer */}
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#4878A6]"></div>
                    </div>
                    
                    {/* Car Map Pin */}
                    <div className="w-10 h-10 bg-white rounded-full border-[3px] border-brand-navy shadow-lg flex items-center justify-center relative z-10">
                      <Car className="w-5 h-5 text-red-500" />
                    </div>
                  </div>
                  
                </div>

                {/* Bottom Navigation */}
                <div className="h-16 bg-[#2B70B0] flex items-center justify-around px-2 relative z-20">
                  <div className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center shadow-md cursor-pointer hover:bg-red-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center shadow-md cursor-pointer hover:bg-red-600 transition-colors">
                    <Navigation className="w-5 h-5 text-white transform rotate-45" />
                  </div>
                  <div className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center shadow-md cursor-pointer hover:bg-red-600 transition-colors">
                    <Car className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center shadow-md cursor-pointer hover:bg-red-600 transition-colors">
                    <Map className="w-5 h-5 text-white" />
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
