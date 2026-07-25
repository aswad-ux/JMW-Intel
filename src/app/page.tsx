
import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import WhyChooseUs from '@/components/WhyChooseUs';
import Pricing from '@/components/Pricing';
import AppShowcase from '@/components/AppShowcase';
import Dashcam from '@/components/Dashcam';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';


export default function Home() {
  return (
    <main className="min-h-screen">

      <Hero />
      <TrustSignals />
      <WhyChooseUs />
      
      {/* Tracking Section anchor */}
      <div id="tracking">
        <Pricing />
      </div>
      
      <AppShowcase />
      <Dashcam />
      <AboutUs />
      <Testimonials />
      <ContactForm />

    </main>
  );
}
