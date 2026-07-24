import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Installation Guide | JMW Intelligent Solutions',
  description: 'Learn about our professional, mobile vehicle tracking installation process.',
};

export default function InstallationGuide() {
  const steps = [
    {
      title: "1. Booking & Confirmation",
      description: "Once you request a quote and select your package, our scheduling team will contact you to confirm a convenient time and location for your mobile installation."
    },
    {
      title: "2. Mobile Dispatch",
      description: "Our certified, VESA-approved technicians will arrive at your specified location (home or office) with all necessary equipment. No need to bring your vehicle to a fitment center."
    },
    {
      title: "3. Professional Installation",
      description: "The technician will discretely install the tracking unit or dashcam. We ensure that all wiring is seamlessly integrated and hidden, maintaining your vehicle's factory warranty."
    },
    {
      title: "4. System Testing",
      description: "Before leaving, the technician will run comprehensive diagnostics to ensure the unit is communicating perfectly with the tracking network and GPS satellites."
    },
    {
      title: "5. Certificate Issuance",
      description: "Upon successful installation and testing, you will receive your official installation certificate. This is crucial for your insurance provider to validate your cover."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-brand-navy p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Installation Guide</h1>
            <p className="text-brand-blue text-lg">Professional, mobile fitment at your convenience.</p>
          </div>
          
          <div className="p-10 md:p-16">
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              At JMW Intelligent Solutions, we understand that your time is valuable. That's why we bring our fitment center to you. Our mobile installation service ensures that securing your vehicle is entirely hassle-free.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-8 h-8 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-brand-orange/10 rounded-2xl border border-brand-orange/20">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Ready to secure your vehicle?</h3>
              <p className="text-gray-700 mb-6">Our mobile technicians are ready to dispatch to your location.</p>
              <Link href="/#contact" className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Book Installation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
