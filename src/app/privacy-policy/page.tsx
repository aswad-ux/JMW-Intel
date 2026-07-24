export const metadata = {
  title: 'Privacy Policy | JMW Intelligent Solutions',
  description: 'Our privacy policy regarding the collection and use of your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-brand-navy p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-brand-blue text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="p-10 md:p-16">
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                At JMW Intelligent Solutions, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website or use our vehicle tracking and dashcam services.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">1. Information We Collect</h3>
              <p>
                <strong>Personal Information:</strong> When you request a quote or contact us, we collect your name, email address, phone number, and vehicle details (make, model, year).
              </p>
              <p>
                <strong>Telematics Data:</strong> For clients using our tracking services, the installed devices collect geolocation data, vehicle speed, ignition status, and battery voltage. This data is transmitted securely to our tracking servers.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">2. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide you with accurate quotes and schedule installations.</li>
                <li>Provide the core tracking and stolen vehicle recovery services you have subscribed to.</li>
                <li>Generate automated SARS-compliant logbooks on your behalf (if applicable).</li>
                <li>Communicate with you regarding service updates, maintenance, or security alerts.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">3. Sharing Your Information</h3>
              <p>
                We do not sell your personal information to third parties. We only share your information with trusted partners (such as the National Operations Center and emergency responders) strictly for the purpose of stolen vehicle recovery or emergency medical response as outlined in your service agreement.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">4. Data Security</h3>
              <p>
                We implement stringent, industry-standard security measures to protect your personal and telematics data. Data transmitted between your tracking unit and our servers is encrypted.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">5. Contact Us</h3>
              <p>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:admin@jmwintel.com" className="text-brand-orange font-semibold hover:underline">admin@jmwintel.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
