'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-gray-50 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-2/5 bg-brand-navy p-10 md:p-16 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
              <p className="text-brand-blue mb-10 text-lg">Ready to secure your vehicle? Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="font-semibold text-lg">010 500 9626</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p className="font-semibold text-lg">admin@jmwintel.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-semibold text-lg">Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400">Working Hours</p>
              <p className="font-semibold">Mon - Fri: 08:00 - 17:00</p>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-10 md:p-16">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-brand-navy">Request Received!</h3>
                <p className="text-gray-600 text-lg max-w-md">Thank you for choosing JMW Intelligent Solutions. One of our experts will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-blue font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-brand-navy mb-8">Request a Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                        placeholder="082 123 4567"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-semibold text-gray-700">What are you interested in?</label>
                    <select 
                      id="interest" 
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all appearance-none"
                    >
                      <option value="" disabled selected>Select a plan or product...</option>
                      <option value="beame">Beame (R99/mo)</option>
                      <option value="mxv-bronze">MXV Bronze (R179/mo)</option>
                      <option value="mxv-silver">MXV Silver (R189/mo)</option>
                      <option value="mxv-gold">MXV Gold (R199/mo)</option>
                      <option value="dashcam">Matrix Vision Dashcam</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Additional Information (Optional)</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your vehicle or specific requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-lg py-4 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Get Free Quote'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
