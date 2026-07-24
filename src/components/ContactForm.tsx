'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Car, User, ArrowRight, ArrowLeft, CheckCircle2, Shield, Video, HelpCircle, Navigation } from 'lucide-react';

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    product: '',
    make: '',
    model: '',
    year: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectProduct = (product: string) => {
    setFormData({ ...formData, product });
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xrenywgr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-between mb-8">
      {[1, 2, 3].map((num) => (
        <div key={num} className="flex flex-col items-center relative z-10 flex-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
            step === num 
              ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-110' 
              : step > num 
                ? 'bg-brand-navy text-white' 
                : 'bg-gray-200 text-gray-400'
          }`}>
            {step > num ? <CheckCircle2 className="w-6 h-6" /> : num}
          </div>
          <p className={`mt-2 text-xs font-semibold ${step >= num ? 'text-brand-navy' : 'text-gray-400'}`}>
            {num === 1 ? 'Product' : num === 2 ? 'Vehicle' : 'Details'}
          </p>
        </div>
      ))}
      <div className="absolute left-[15%] right-[15%] top-5 h-1 bg-gray-200 -z-0">
        <div 
          className="h-full bg-brand-navy transition-all duration-500 ease-in-out" 
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gray-50 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Sidebar */}
          <div className="lg:w-2/5 bg-brand-navy p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
              <p className="text-brand-blue mb-10 text-lg">Ready to secure your vehicle? Complete our quick form and our experts will provide a free, accurate quote.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="font-semibold text-lg">010 500 9626</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <p className="font-semibold text-lg">admin@jmwintel.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-semibold text-lg">Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
              <p className="text-sm text-gray-400">Working Hours</p>
              <p className="font-semibold">Mon - Fri: 08:00 - 17:00</p>
            </div>
          </div>
          
          {/* Right Form Area */}
          <div className="lg:w-3/5 p-10 md:p-16 relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-bold text-brand-navy">Request Received!</h3>
                <p className="text-gray-600 text-lg max-w-md">Thank you for choosing JMW Intelligent Solutions. One of our experts will contact you shortly.</p>
                <button 
                  onClick={() => { setSubmitted(false); setStep(1); setFormData({product: '', make: '', model: '', year: '', name: '', phone: '', email: '', message: ''}) }}
                  className="mt-8 text-brand-blue font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col">
                <div className="relative">
                  {renderStepIndicator()}
                </div>

                <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                  
                  {/* Step 1: Product Selection */}
                  {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                      <h3 className="text-2xl font-bold text-brand-navy mb-6">What are you looking for?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'beame', title: 'Beame', desc: 'Stolen Vehicle Recovery', icon: Navigation },
                          { id: 'mxv', title: 'MXV Packages', desc: 'Premium Tracking (Bronze/Silver/Gold)', icon: Shield },
                          { id: 'dashcam', title: 'Dashcam', desc: 'Matrix Vision HD Recording', icon: Video },
                          { id: 'other', title: 'Not Sure', desc: 'I need expert advice', icon: HelpCircle },
                        ].map((item) => (
                          <div 
                            key={item.id}
                            onClick={() => selectProduct(item.id)}
                            className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 group ${formData.product === item.id ? 'border-brand-orange bg-brand-orange/5' : 'border-gray-100 bg-gray-50 hover:border-brand-blue/30'}`}
                          >
                            <item.icon className={`w-8 h-8 mb-3 ${formData.product === item.id ? 'text-brand-orange' : 'text-gray-400 group-hover:text-brand-blue'}`} />
                            <h4 className="font-bold text-brand-navy text-lg">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Vehicle Details */}
                  {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                      <h3 className="text-2xl font-bold text-brand-navy mb-6">Tell us about your vehicle</h3>
                      <p className="text-gray-500 mb-6 -mt-4">This helps us provide the most accurate installation quote.</p>
                      
                      <div className="space-y-5">
                        <div className="relative">
                          <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                          <input 
                            type="text" 
                            id="make" 
                            name="make"
                            value={formData.make}
                            onChange={handleChange}
                            className="peer w-full pl-12 pr-4 pt-6 pb-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder-transparent"
                            placeholder="Make"
                          />
                          <label htmlFor="make" className="absolute text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-12 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 font-semibold">Vehicle Make (e.g. Toyota)</label>
                        </div>
                        
                        <div className="relative">
                          <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                          <input 
                            type="text" 
                            id="model" 
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            className="peer w-full pl-12 pr-4 pt-6 pb-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder-transparent"
                            placeholder="Model"
                          />
                          <label htmlFor="model" className="absolute text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-12 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 font-semibold">Vehicle Model (e.g. Hilux)</label>
                        </div>

                        <div className="relative">
                          <input 
                            type="text" 
                            id="year" 
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder-transparent"
                            placeholder="Year"
                          />
                          <label htmlFor="year" className="absolute text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 font-semibold">Vehicle Year</label>
                        </div>
                      </div>

                      <div className="mt-8 flex gap-4">
                        <button type="button" onClick={() => setStep(1)} className="px-6 py-3 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
                          <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button type="button" onClick={() => setStep(3)} className="flex-1 bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2">
                          Next Step <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Details */}
                  {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col h-full">
                      <h3 className="text-2xl font-bold text-brand-navy mb-6">Your Details</h3>
                      
                      <div className="space-y-4 flex-grow">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            <input 
                              type="text" 
                              id="name" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="peer w-full pl-12 pr-4 pt-6 pb-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder-transparent"
                              placeholder="Name"
                            />
                            <label htmlFor="name" className="absolute text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-12 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 font-semibold">Full Name *</label>
                          </div>
                          
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            <input 
                              type="tel" 
                              id="phone" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="peer w-full pl-12 pr-4 pt-6 pb-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder-transparent"
                              placeholder="Phone"
                            />
                            <label htmlFor="phone" className="absolute text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-12 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 font-semibold">Phone Number *</label>
                          </div>
                        </div>

                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="peer w-full pl-12 pr-4 pt-6 pb-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder-transparent"
                            placeholder="Email"
                          />
                          <label htmlFor="email" className="absolute text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-12 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 font-semibold">Email Address *</label>
                        </div>
                        
                        <div className="relative">
                          <textarea 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3} 
                            className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none placeholder-transparent"
                            placeholder="Message"
                          ></textarea>
                          <label htmlFor="message" className="absolute text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 font-semibold">Additional Comments</label>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex gap-4">
                        <button type="button" onClick={() => setStep(2)} className="px-6 py-4 rounded-lg border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
                          <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="flex-1 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-lg py-4 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : 'Submit Request'}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
