export const metadata = {
  title: 'Terms of Service | JMW Intelligent Solutions',
  description: 'Terms and conditions for using JMW Intelligent Solutions services.',
};

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-brand-navy p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-brand-blue text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="p-10 md:p-16">
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Please read these Terms of Service carefully before using the JMW Intelligent Solutions website or purchasing our installation services.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">1. Acceptance of Terms</h3>
              <p>
                By accessing our website or engaging our mobile installation services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">2. Installation Services</h3>
              <p>
                JMW Intelligent Solutions provides mobile installation of vehicle tracking units and dashcams. We require a safe, accessible environment to perform the installation. The customer must ensure the vehicle is present at the agreed-upon time and location.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">3. Subscriptions & Billing</h3>
              <p>
                For tracking packages (Beame, MXV Bronze/Silver/Gold), a monthly subscription fee applies as outlined in your individual contract. Billing is handled directly via debit order. Non-payment may result in the suspension of tracking and recovery services.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">4. Liability</h3>
              <p>
                While our tracking systems significantly increase the chances of stolen vehicle recovery, JMW Intelligent Solutions cannot guarantee the recovery of any stolen vehicle. We are not liable for any loss, damage, or theft of the vehicle or its contents.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">5. Governing Law</h3>
              <p>
                These terms shall be governed and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
