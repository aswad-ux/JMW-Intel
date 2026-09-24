import { Camera, User, EyeOff, ShieldAlert, Radio, BarChart2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Dashcam() {
  const features = [
    {
      title: "Dual AI Cameras",
      description: "Road-facing and in-cab, 4G-connected, with an included data bundle.",
      icon: <Camera className="w-6 h-6 text-brand-orange" />,
    },
    {
      title: "AI Driver Monitoring",
      description: "Phone use, texting, distraction, drowsiness and seatbelt — with Face ID.",
      icon: <User className="w-6 h-6 text-brand-orange" />,
    },
    {
      title: "Privacy Built In",
      description: "Privacy mode with blurring for faces, licence plates and passers-by.",
      icon: <EyeOff className="w-6 h-6 text-brand-orange" />,
    },
    {
      title: "ADAS that Watches the Road",
      description: "Collision, tailgating and rollover warnings — plus harsh driving and speed alerts.",
      icon: <ShieldAlert className="w-6 h-6 text-brand-orange" />,
    },
    {
      title: "Live Streaming & Push-to-Talk",
      description: "Watch any vehicle live and talk to the cab, from the web UI or the app.",
      icon: <Radio className="w-6 h-6 text-brand-orange" />,
    },
    {
      title: "Reports & Coaching",
      description: "Fleet safety and event reports — coaching and geofencing on Vision Pro.",
      icon: <BarChart2 className="w-6 h-6 text-brand-orange" />,
    },
  ];

  const plans = [
    {
      name: "Vision",
      price: "R359",
      period: "/month incl VAT",
      planParam: "vision",
      features: [
        "Full ADAS and AI driver monitoring",
        "3 months event cloud storage",
        "60 minutes live streaming & push-to-talk",
        "Web UI, reports and privacy controls",
      ],
      highlight: false,
    },
    {
      name: "Vision Pro",
      price: "R399",
      period: "/month incl VAT",
      planParam: "vision-pro",
      features: [
        "Everything in Vision",
        "6 months event cloud storage",
        "100 minutes live streaming & push-to-talk",
        "Coaching, geofencing, roles & event tagging",
      ],
      highlight: true,
    },
  ];

  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden" id="dashcams">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">Matrix Vision · AI Dashcams · From R359/month</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Your journey, captured.<br />
              <span className="text-brand-orange">Your peace of mind</span>, protected.
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Matrix Vision puts road-facing ADAS and in-cab AI cameras in your vehicles. Collision and distraction alerts, live streaming, and privacy controls, all managed from one platform.
            </p>
            <Link
              href="/?product=dashcam#contact"
              className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
            >
              Get a Dashcam Quote
            </Link>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="absolute -inset-4 bg-brand-orange/20 blur-2xl rounded-full"></div>
            <Image
              src="/dashcam.svg"
              alt="Matrix Vision AI Dashcam"
              width={600}
              height={400}
              className="relative w-full h-auto drop-shadow-2xl rounded-2xl border border-white/10"
            />
          </div>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors flex gap-4 items-start">
              <div className="flex-shrink-0 bg-brand-navy-light w-12 h-12 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border-2 ${
                plan.highlight
                  ? 'bg-brand-navy border-brand-orange shadow-2xl shadow-brand-orange/20'
                  : 'bg-white text-brand-navy border-gray-200'
              }`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? 'text-brand-blue' : 'text-brand-blue'}`}>
                MATRIX
              </p>
              <h4 className={`text-3xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-brand-navy'}`}>
                {plan.name}
              </h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-brand-navy'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlight ? 'text-blue-200' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-brand-orange' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-700'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/?plan=${plan.planParam}#contact`}
                className={`block text-center font-bold py-3 rounded-xl transition-all ${
                  plan.highlight
                    ? 'bg-brand-orange hover:bg-brand-orange-hover text-white shadow-lg'
                    : 'bg-brand-navy hover:bg-brand-navy-light text-white'
                }`}
              >
                Get Quote
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <p className="text-center text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto">
          * Data bundle limits apply. Web UI included on both; smartphone apps for managers and drivers (iOS and Android) from October 2026. Not ideal for long haul night time operation.
        </p>

      </div>
    </section>
  );
}
