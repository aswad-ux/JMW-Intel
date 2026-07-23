import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: "Beame",
      price: "99",
      description: "Essential stolen vehicle recovery",
      features: [
        "Single wireless unit",
        "Stolen vehicle recovery",
        "Insurance approved",
        "Mobile app (limited)",
      ],
      popular: false,
    },
    {
      name: "MXV Bronze",
      price: "179",
      description: "Live tracking & trip logging",
      features: [
        "Two devices installed",
        "Live GPS tracking",
        "Detailed trip logs",
        "Stolen vehicle recovery",
        "Full mobile app access",
      ],
      popular: false,
    },
    {
      name: "MXV Silver",
      price: "189",
      description: "Advanced alerts & security",
      features: [
        "Everything in Bronze",
        "Panic button remote",
        "Advanced geo-loc alerts",
        "Power down/tamper alerts",
      ],
      popular: true,
    },
    {
      name: "MXV Gold",
      price: "199",
      description: "Premium B2B & Tax Compliance",
      features: [
        "Everything in Silver",
        "Roadside assistance",
        "Crash alert notification",
        "No-Go zones setup",
        "SARS tax logbook generation",
      ],
      popular: false,
      highlight: true
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">Pricing Plans</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Choose the Right Protection</h3>
          <p className="text-gray-600 text-lg">
            Simple, transparent pricing. All plans include free professional installation and our lifetime hardware warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 border ${plan.popular ? 'border-brand-orange shadow-xl scale-105 z-10' : 'border-gray-200 shadow-sm'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-md">
                  Most Popular
                </div>
              )}
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-navy text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-md">
                  Best for Business
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-brand-navy mb-2">{plan.name}</h4>
                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-brand-navy">R{plan.price}</span>
                <span className="text-gray-500 font-medium">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular || plan.highlight ? 'text-brand-orange' : 'text-gray-400'}`} />
                    <span className={`text-sm ${fIndex === plan.features.length - 1 && plan.name === 'MXV Gold' ? 'font-bold text-brand-navy bg-yellow-100 px-1 rounded' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href={`#contact`} 
                className={`w-full text-center py-3 rounded-lg font-bold transition-colors ${plan.popular ? 'bg-brand-orange hover:bg-brand-orange-hover text-white' : 'bg-gray-100 hover:bg-gray-200 text-brand-navy'}`}
              >
                Select Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
