import { CheckCircle2, Shield, Clock, Smartphone } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Free Installation",
      description: "Our mobile teams come to you. Professional, seamless installation at your home or office at zero extra cost.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "Lifetime Warranty",
      description: "Complete peace of mind. As long as your subscription is active, the hardware is fully covered.",
      icon: <Shield className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated national control room and recovery teams are on standby round-the-clock, 365 days a year.",
      icon: <Clock className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "Mobile App Access",
      description: "Track your vehicle in real-time, view trip logs, and get instant alerts right from your smartphone.",
      icon: <Smartphone className="w-6 h-6 text-brand-orange" />
    }
  ];

  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">Why Choose JMW</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">The Trusted Experts in Vehicle Security</h3>
          <p className="text-gray-600 text-lg">
            We don't just sell tracking units. We provide a complete security ecosystem with expert local installation and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transform">
              <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
