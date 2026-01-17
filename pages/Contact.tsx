import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, Send } from 'lucide-react';
import { FAQ_DATA } from '../constants';
import { FaqItem as FaqItemType } from '../types';

// Simple info card - no Framer Motion
const InfoCard: React.FC<{ icon: React.ElementType, title: string, content: string }> = ({ icon: Icon, title, content }) => {
  return (
    <div className="glow-card group bg-black/40 p-8 border border-white/10 hover:border-aspexa-red/50 transition-all duration-300 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-aspexa-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-aspexa-red/10 border border-aspexa-red/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5 text-aspexa-red" />
        </div>
        <h3 className="font-bold uppercase mb-2 tracking-wider text-sm text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{content}</p>
      </div>
    </div>
  );
};

// Simple FAQ item - no Framer Motion
const FaqItem: React.FC<{ item: FaqItemType, index: number, isOpen: boolean, onToggle: () => void }> = ({ item, index, isOpen, onToggle }) => {
  return (
    <div className="group border border-white/10 bg-black/60 backdrop-blur-sm overflow-hidden hover:border-aspexa-red/30 transition-all duration-300 relative">
      {/* Side indicator */}
      <div className={`absolute left-0 top-0 h-full w-1 bg-aspexa-red transform origin-left transition-all duration-300 ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}></div>

      <button
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none relative"
        onClick={onToggle}
      >
        <div className="flex items-start gap-4 flex-1">
          <span className="font-mono text-base font-bold text-aspexa-red mt-0.5 min-w-[2.5rem]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-bold uppercase text-sm md:text-base tracking-wider text-gray-200 group-hover:text-white transition-colors pr-4">
            {item.question}
          </span>
        </div>
        <div className={`shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-aspexa-red border-aspexa-red rotate-180' : 'group-hover:border-aspexa-red/50'}`}>
          <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-zinc-600 group-hover:text-aspexa-red'}`} />
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pl-[5rem] text-gray-400 text-sm leading-relaxed border-t border-white/5">
          <div className="pt-4">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Red-Team Audit',
    message: '',
    privacy: false
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-transparent text-white pt-32 relative overflow-hidden">

      {/* Header */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aspexa-red/10 border border-aspexa-red/20 text-aspexa-red text-xs font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-aspexa-red animate-pulse"></span>
          Secure Channel
        </div>
        <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6 tracking-tighter">
          Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-aspexa-red to-red-500">Comms</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          Secure your infrastructure. Request a briefing.
        </p>
      </section>

      {/* Info Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard icon={MapPin} title="Location" content="United Arab Emirates" />
          <InfoCard icon={Phone} title="Secure Line" content="+971 (0) 4 123 4567" />
          <InfoCard icon={Mail} title="Electronic Mail" content="info@aspexa.tech" />
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-6 mb-24 relative z-10">
        <div className="bg-black/60 border border-white/10 p-8 md:p-12 shadow-2xl relative backdrop-blur-xl">
          {/* Decorative corner markers */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-aspexa-red"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-aspexa-red"></div>

          <h2 className="text-2xl font-bold uppercase mb-8 tracking-widest flex items-center gap-3">
            <span className="w-2 h-8 bg-aspexa-red"></span> Transmission
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-xs uppercase font-bold text-gray-500 mb-2 tracking-widest group-focus-within:text-aspexa-red transition-colors">Identify Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-aspexa-red focus:outline-none transition-all duration-300 placeholder-zinc-700 focus:bg-white/10"
                  placeholder="FULL NAME"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-xs uppercase font-bold text-gray-500 mb-2 tracking-widest group-focus-within:text-aspexa-red transition-colors">Return Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-aspexa-red focus:outline-none transition-all duration-300 placeholder-zinc-700 focus:bg-white/10"
                  placeholder="EMAIL ADDRESS"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-xs uppercase font-bold text-gray-500 mb-2 tracking-widest group-focus-within:text-aspexa-red transition-colors">Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-aspexa-red focus:outline-none transition-all duration-300 placeholder-zinc-700 focus:bg-white/10"
                  placeholder="COMPANY NAME"
                />
              </div>
              <div className="group">
                <label className="block text-xs uppercase font-bold text-gray-500 mb-2 tracking-widest group-focus-within:text-aspexa-red transition-colors">Directive</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-aspexa-red focus:outline-none transition-all duration-300 appearance-none cursor-pointer focus:bg-white/10"
                >
                  <option className="bg-black">Red-Team Audit</option>
                  <option className="bg-black">RAG Assessment</option>
                  <option className="bg-black">Compliance Help</option>
                  <option className="bg-black">Pricing Inquiry</option>
                  <option className="bg-black">General Intel</option>
                </select>
              </div>
            </div>

            <div className="group">
              <label className="block text-xs uppercase font-bold text-gray-500 mb-2 tracking-widest group-focus-within:text-aspexa-red transition-colors">Transmission Data *</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-aspexa-red focus:outline-none transition-all duration-300 placeholder-zinc-700 resize-none focus:bg-white/10"
                placeholder="ENTER MESSAGE DETAILS..."
                required
              ></textarea>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="accent-aspexa-red w-4 h-4 bg-zinc-900 border-zinc-700 cursor-pointer"
              />
              <label htmlFor="privacy" className="text-xs text-gray-500 uppercase tracking-wide cursor-pointer hover:text-gray-400 transition-colors">Acknowledge privacy protocols</label>
            </div>

            <button
              type="submit"
              className="w-full bg-aspexa-red text-white font-bold uppercase py-5 hover:bg-red-700 transition-all duration-300 tracking-widest flex items-center justify-center gap-2 mt-4 group relative overflow-hidden hover:scale-[1.01] active:scale-[0.99]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Transmission <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aspexa-red/10 border border-aspexa-red/20 text-aspexa-red text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-aspexa-red animate-pulse"></span>
            Intelligence Brief
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Debriefing</span> <span className="text-aspexa-red">(FAQ)</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              isOpen={openFaq === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center p-8 border border-white/10 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-aspexa-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold uppercase mb-3 tracking-tight">Still Have Questions?</h3>
            <p className="text-gray-400 mb-6 text-sm">Our security team is ready to discuss your specific requirements.</p>
            <a
              href="mailto:info@aspexa.tech"
              className="inline-flex items-center gap-2 bg-aspexa-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-300 text-sm hover:scale-105"
            >
              Contact Security Team
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;