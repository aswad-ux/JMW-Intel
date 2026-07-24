import Link from 'next/link';
import { FileText, Calculator, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'SARS Compliant Logbooks | JMW Intelligent Solutions',
  description: 'Learn how our tracking systems generate automated, SARS-compliant logbooks for business travel tax claims.',
};

export default function SarsCompliance() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-brand-navy p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">SARS Compliant Logbooks</h1>
            <p className="text-brand-blue text-lg">Automate your tax claims with pinpoint accuracy.</p>
          </div>
          
          <div className="p-10 md:p-16">
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              If you use your personal vehicle for business purposes, or if you manage a fleet of company vehicles, maintaining an accurate logbook is a strict requirement by the South African Revenue Service (SARS) to claim travel expenses. Our MXV tracking systems automate this entirely.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2">100% Automated</h4>
                <p className="text-sm text-gray-500">Every trip is automatically logged with exact GPS coordinates and distances.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2">Easy Categorization</h4>
                <p className="text-sm text-gray-500">Swipe left or right on the smartphone app to categorize trips as Business or Personal.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2">Export Ready</h4>
                <p className="text-sm text-gray-500">Generate and export fully compliant PDF or Excel reports directly for your accountant.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brand-navy mb-4">Why is this important?</h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                SARS requires exact details for travel claims, including:
              </p>
              <ul>
                <li>The date of travel</li>
                <li>The destination</li>
                <li>The reason for travel</li>
                <li>The opening and closing odometer readings</li>
              </ul>
              <p>
                Manually recording this information is tedious and prone to human error. A single mistake can result in a rejected tax claim. Our MXV tracking systems handle the administrative burden so you can focus on your business.
              </p>
            </div>

            <div className="mt-12 p-8 bg-brand-orange/10 rounded-2xl border border-brand-orange/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Upgrade to MXV Silver or Gold</h3>
                <p className="text-gray-700 text-sm">Automated logbooks are included standard in our premium packages.</p>
              </div>
              <Link href="/#pricing" className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
