import Link from 'next/link';
import { Shield, Truck, BarChart3, MapPin, Clock, Users, CheckCircle2, ArrowRight, Fuel, AlertTriangle, Smartphone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fleet Management Solutions | JMW Intelligent Solutions',
  description: 'Comprehensive GPS fleet tracking, driver behavior monitoring, and fuel management for South African businesses. Reduce costs, improve safety, and stay compliant.',
};

const features = [
  {
    icon: MapPin,
    title: 'Real-Time Fleet Visibility',
    description: 'See every vehicle in your fleet on a live map. Get instant alerts when vehicles deviate from approved routes or enter restricted zones.',
  },
  {
    icon: BarChart3,
    title: 'Driver Behaviour Monitoring',
    description: 'Track harsh braking, rapid acceleration, speeding, and idling. Reduce accidents and extend vehicle lifespan with automated driver scorecards.',
  },
  {
    icon: Fuel,
    title: 'Fuel Management',
    description: 'Identify fuel wastage from excessive idling and route inefficiencies. Our clients typically reduce fuel costs by 15-25% within 3 months.',
  },
  {
    icon: Clock,
    title: 'SARS Logbook Automation',
    description: 'Automatically generate SARS-compliant travel logbooks for every driver. Save hours of admin and ensure your business stays tax-compliant.',
  },
  {
    icon: AlertTriangle,
    title: 'Stolen Vehicle Recovery (SVR)',
    description: '24/7 monitoring with an immediate SVR response team. Our Gold SVR package integrates seamlessly with major insurance providers.',
  },
  {
    icon: Smartphone,
    title: 'MXV Fleet App',
    description: 'Manage your entire fleet from your smartphone. Receive push alerts, view trip history, and generate reports from anywhere in the world.',
  },
];

const plans = [
  {
    name: 'Matrix Bike (MXV Bike)',
    target: 'Motorcycles & Bikes',
    price: 'R189',
    period: 'incl VAT / month',
    features: [
      {
        category: 'Core Tracking',
        items: ['Matrix wired hardware installation', 'Beame recovery service', 'GPS pinpoint positioning', 'Trips and reports']
      },
      {
        category: 'Alerts & Security',
        items: ['Power down alert', 'Border alert', 'GeoLoc advanced alert', 'Auto testing and confidence checks']
      },
      {
        category: 'Support & Compliance',
        items: ['24/7 National Operations Centre', 'National network coverage', 'Smartphone app', 'Insurance approved']
      }
    ],
    cta: 'Get Quote',
    highlight: false,
  },
  {
    name: 'Matrix Commercial',
    target: 'Businesses & Vehicle Operations',
    price: 'R199',
    period: 'incl VAT / month',
    features: [
      {
        category: 'Core Tracking',
        items: ['GPS pinpoint positioning', 'Stolen vehicle recovery', 'Tax logbook', 'Detailed reports']
      },
      {
        category: 'Alerts & Security',
        items: ['Panic alert with remote', 'Power down alert', 'Border alert', 'GeoLoc advanced alert']
      },
      {
        category: 'Support & Compliance',
        items: ['Smartphone app', '24/7 National Operations Centre', 'National network coverage', 'Auto testing', 'Insurance approved']
      }
    ],
    cta: 'Get Quote',
    highlight: true,
  },
  {
    name: 'Matrix Plant (MXV Plant)',
    target: 'Small Business Asset Tracking',
    price: 'R189',
    period: 'incl VAT / month',
    features: [
      {
        category: 'Core Tracking',
        items: ['Matrix wired hardware installation', 'Beame recovery service', 'GPS pinpoint positioning', 'Stolen vehicle recovery', 'Trip monitoring']
      },
      {
        category: 'Alerts & Security',
        items: ['Power down alerts', 'Border alerts', 'GeoLoc advanced alerts', 'Incident & alert reports']
      },
      {
        category: 'Support & Compliance',
        items: ['Auto testing and confidence checks', 'Smartphone app', 'National network coverage', '24/7 National Operations Centre', 'Insurance approved']
      }
    ],
    cta: 'Get Quote',
    highlight: false,
  }
];

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-brand-navy pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-[#1a3a5c] pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="100" r="200" fill="#f97316" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6 border border-brand-orange/30">
              <Truck className="w-4 h-4" />
              <span>Fleet Management Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Take Full Control of <span className="text-brand-orange">Your Fleet</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              From 2 to 500+ vehicles. JMW Intel&apos;s fleet management platform gives you real-time visibility, cost control, and peace of mind — all from a single dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#fleet-contact"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-all flex items-center gap-2 group"
              >
                Get a Fleet Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#contact"
                className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Speak to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {[
              { icon: Shield, text: 'VESA Approved' },
              { icon: Users, text: '500+ Active Fleet Vehicles' },
              { icon: Clock, text: '24/7 SVR Monitoring' },
              { icon: CheckCircle2, text: 'Insurance Accepted' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-brand-navy font-semibold">
                <item.icon className="w-5 h-5 text-brand-orange" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Everything Your Fleet Needs</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              One platform. Total visibility. Built for South African businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-blue/20 transition-all group">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-orange/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Simple Fleet Pricing</h2>
            <p className="text-xl text-gray-500">Volume discounts available. No long-term lock-in.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border-2 transition-all ${
                  plan.highlight
                    ? 'border-brand-orange bg-brand-navy text-white shadow-2xl shadow-brand-navy/20 scale-105'
                    : 'border-gray-100 bg-white hover:border-brand-orange/30'
                }`}
              >
                {plan.highlight && (
                  <div className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-brand-navy'}`}>{plan.name}</h3>
                <p className={`text-sm mb-5 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>{plan.target}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-brand-navy'}`}>{plan.price}</span>
                  <span className={`text-sm ml-1 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>{plan.period}</span>
                </div>
                <div className="space-y-6 mb-8 text-left">
                  {plan.features.map((group, fi) => (
                    <div key={fi}>
                      <h4 className={`text-sm font-bold mb-3 uppercase tracking-wider ${plan.highlight ? 'text-brand-orange' : 'text-brand-navy'}`}>{group.category}</h4>
                      <ul className="space-y-3">
                        {group.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-brand-orange' : 'text-green-500'}`} />
                            <span className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link
                  href="#fleet-contact"
                  className={`block text-center font-bold py-3.5 rounded-xl transition-all ${
                    plan.highlight
                      ? 'bg-brand-orange hover:bg-brand-orange-hover text-white shadow-lg'
                      : 'bg-brand-navy hover:bg-brand-navy-light text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="fleet-contact" className="py-24 bg-brand-orange">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimise Your Fleet?</h2>
          <p className="text-orange-100 text-lg mb-10">
            Our fleet specialists will contact you within 30 minutes with a tailored quote for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-brand-orange font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              Get a Free Fleet Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:0105009626"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-brand-orange transition-all"
            >
              Call: 010 500 9626
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
