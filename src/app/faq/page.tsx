import Link from 'next/link';

export const metadata = {
  title: 'Frequently Asked Questions | JMW Intelligent Solutions',
  description: 'Answers to common questions about vehicle tracking, installation, and our services.',
};

export default function FAQ() {
  const faqs = [
    {
      question: "Are your tracking systems approved by insurance companies?",
      answer: "Yes, absolutely. Both our Beame and Matrix (MXV) packages are fully VESA-approved and recognized by all major South African insurance providers. Upon installation, you will receive an official certificate to submit to your insurer."
    },
    {
      question: "Where do you install the devices? Do I need to come to you?",
      answer: "No, we come to you! We offer a fully mobile installation service. Our technicians will install the device at your home, office, or dealership at a time that suits you."
    },
    {
      question: "How long does the installation take?",
      answer: "A standard tracking unit installation typically takes between 45 to 90 minutes. A dual-channel (front and rear) dashcam installation may take up to 2 hours to ensure all wiring is properly hidden and secured."
    },
    {
      question: "Will installing a tracker or dashcam void my vehicle's factory warranty?",
      answer: "No. Our technicians are highly trained and follow strict installation protocols that do not interfere with your vehicle's OEM electronics or CAN bus systems, preserving your factory warranty."
    },
    {
      question: "Can I track my vehicle on my smartphone?",
      answer: "Yes. All our MXV tracking packages come with a dedicated smartphone app (available on iOS and Android) that allows you to view your vehicle's location in real-time, view historical trips, and receive alerts."
    },
    {
      question: "What happens if my vehicle is stolen?",
      answer: "In the unfortunate event of theft, you should immediately contact the 24/7 National Operations Center (the number is provided on your app and welcome pack). They will initiate the recovery protocol in coordination with private recovery teams and the SAPS."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-brand-navy p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-brand-blue text-lg">Everything you need to know about our services.</p>
          </div>
          
          <div className="p-10 md:p-16">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Our team is ready to help you find the perfect solution.</p>
              <Link href="/#contact" className="inline-block bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
