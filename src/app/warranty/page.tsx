import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Warranty Information | JMW Intelligent Solutions',
  description: 'Learn about our hardware and workmanship warranty for vehicle tracking and dashcam installations.',
};

export default function WarrantyInfo() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-brand-navy p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Warranty Information</h1>
            <p className="text-brand-blue text-lg">Guaranteed hardware and professional workmanship.</p>
          </div>
          
          <div className="p-10 md:p-16">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-8">
                At JMW Intelligent Solutions, we stand behind the quality of our products and the expertise of our technicians. We provide comprehensive warranties to ensure your peace of mind.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <ShieldCheck className="w-12 h-12 text-brand-orange mb-4" />
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Hardware Warranty</h3>
                  <p className="text-sm">
                    All Matrix Vision dashcams and Matrix/Beame tracking units come with a standard <strong>12-month to 36-month manufacturer warranty</strong> (depending on the specific unit). This covers any factory defects or hardware failures under normal operating conditions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <ShieldCheck className="w-12 h-12 text-brand-orange mb-4" />
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Workmanship Guarantee</h3>
                  <p className="text-sm">
                    Our installations are backed by a <strong>lifetime workmanship guarantee</strong>. If you experience any issues directly related to the physical installation or wiring performed by our technicians, we will rectify it free of charge.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-4">What is Not Covered?</h3>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Damage caused by accidents, collisions, or natural disasters.</li>
                <li>Tampering, unauthorized repairs, or removal of the unit by third parties.</li>
                <li>Water damage (unless the specific unit is rated as waterproof and failed within spec).</li>
                <li>Normal wear and tear of external components.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-4">Claiming Warranty</h3>
              <p>
                If you suspect a fault with your unit or installation, please contact our support team immediately at <a href="mailto:admin@jmwintel.com" className="text-brand-orange font-semibold hover:underline">admin@jmwintel.com</a> or call us at 010 500 9626. We will dispatch a technician to assess and resolve the issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
