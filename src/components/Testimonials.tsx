import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "David van der Merwe",
      role: "Small Business Owner",
      quote: "The free installation was a game-changer. The technician came to our office, installed the MXV Bronze units in our three delivery vehicles within hours. Incredible service.",
      rating: 5
    },
    {
      name: "Sarah Naidoo",
      role: "Daily Commuter",
      quote: "I was hesitant about the monthly fee, but having the Matrix Vision dashcam gives me total peace of mind on the N1. Setup was fast and the app is very easy to use.",
      rating: 5
    },
    {
      name: "Jonathan Coetzee",
      role: "Fleet Manager",
      quote: "The SARS tax logbook feature on the MXV Gold plan has saved us countless hours of administrative work. Highly recommend JMW for any serious fleet operation.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Trusted by South Africans</h3>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our clients have to say about their experience with JMW Intelligent Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative">
              <div className="flex text-brand-orange mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
