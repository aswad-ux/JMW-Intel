import { Video, Moon, Maximize, Wifi } from 'lucide-react';
import Link from 'next/link';

export default function Dashcam() {
  const features = [
    {
      title: "FHD 1080p Quality",
      description: "Crystal clear footage that captures license plates and crucial details.",
      icon: <Video className="w-8 h-8 text-brand-orange" />
    },
    {
      title: "Night Vision",
      description: "Advanced sensors ensure perfect visibility even on pitch-black roads.",
      icon: <Moon className="w-8 h-8 text-brand-orange" />
    },
    {
      title: "Wide Angle",
      description: "170-degree field of view to capture everything happening around your vehicle.",
      icon: <Maximize className="w-8 h-8 text-brand-orange" />
    },
    {
      title: "Live Streaming",
      description: "Connect via the app to view live footage from anywhere, anytime.",
      icon: <Wifi className="w-8 h-8 text-brand-orange" />
    }
  ];

  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden" id="dashcams">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">Matrix Vision</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              The Ultimate <span className="text-brand-orange">Dashcam</span> Solution
            </h3>
            <blockquote className="border-l-4 border-brand-orange pl-6 mb-10">
              <p className="text-xl md:text-2xl text-gray-300 font-light italic leading-relaxed">
                "In the heat of an accident, memory fails. Don't let it be your word against theirs."
              </p>
            </blockquote>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Equip your vehicle with our state-of-the-art Matrix Vision dashcam. Designed for reliable, continuous recording to protect you from fraudulent claims and unexpected incidents on the road.
            </p>
            
            <Link 
              href="#contact" 
              className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
            >
              Get a Dashcam Quote
            </Link>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="mb-4 bg-brand-navy-light w-16 h-16 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
