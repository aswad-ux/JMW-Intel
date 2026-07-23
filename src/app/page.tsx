import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import WhyChooseUs from '@/components/WhyChooseUs';
import Pricing from '@/components/Pricing';
import Dashcam from '@/components/Dashcam';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustSignals />
      <WhyChooseUs />
      
      {/* Tracking Section anchor */}
      <div id="tracking">
        <Pricing />
      </div>
      
      <Dashcam />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
