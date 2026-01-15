import React from 'react';
import { SERVICES_DATA } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Clock, Users } from 'lucide-react';

const COMPARISON_DATA = [
  { service: "AI Red-Teaming Audit", duration: "2-4 weeks", suited: "Banks, telecoms, government, enterprise SaaS" },
  { service: "RAG Security Assessment", duration: "1-3 weeks", suited: "Financial services, healthcare, legal, government" },
  { service: "Arabic Dialect Testing", duration: "1-2 weeks", suited: "Arabic-facing applications, regional deployments" },
  { service: "Compliance Package", duration: "2-4 weeks", suited: "Regulated industries, public sector" },
  { service: "Incident Readiness Workshop", duration: "1-2 days", suited: "Security teams, critical infrastructure" },
  { service: "Classical ML Assessment", duration: "2-3 weeks", suited: "Hybrid AI stacks, ML-based systems" },
];

// Simple service card - no Framer Motion, just CSS transitions
const ServiceCard = ({ service }: { service: any }) => {
  return (
    <div
      id={service.id}
      className="group bg-black/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 hover:border-white/30 transition-all duration-500 scroll-mt-28 rounded-lg shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
        <div>
          <h3 className="text-3xl font-bold uppercase mb-4 tracking-wide group-hover:text-aspexa-red transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">{service.description}</p>
        </div>
        <div className="p-4 bg-white/5 rounded border border-white/10 text-aspexa-red group-hover:text-white group-hover:bg-aspexa-red transition-colors duration-300 self-start group-hover:scale-105 group-hover:rotate-3">
          {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
        <div>
          <h4 className="flex items-center gap-2 font-bold text-sm uppercase mb-6 text-white tracking-widest bg-white/5 p-2 inline-block rounded">
            <Terminal size={14} className="text-aspexa-red" /> Test Coverage
          </h4>
          <ul className="space-y-3">
            {service.coverage.map((item: string, i: number) => (
              <li key={i} className="text-gray-400 flex items-start gap-3 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 bg-aspexa-red mt-2 rounded-full shrink-0"></span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="flex items-center gap-2 font-bold text-sm uppercase mb-6 text-white tracking-widest bg-white/5 p-2 inline-block rounded">
            <Terminal size={14} className="text-aspexa-red" /> Deliverables
          </h4>
          <ul className="space-y-3">
            {service.deliverables.map((item: string, i: number) => (
              <li key={i} className="text-gray-400 flex items-start gap-3 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 bg-zinc-600 mt-2 rounded-full shrink-0"></span> {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-white/5">
            <span className="text-xs font-bold uppercase text-gray-500 tracking-widest block mb-2">Ideal For:</span>
            <span className="text-white text-sm">{service.idealFor}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-white pt-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">

        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-8 tracking-tighter">
            Comprehensive <span className="text-aspexa-red">AI Security Testing</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed border-l-2 border-aspexa-red pl-6">
            From red-team assessments to compliance validation, we cover the full attack surface of your generative AI infrastructure.
          </p>
        </div>

        {/* Services Grid - no animations */}
        <div className="grid grid-cols-1 gap-16 mb-24">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Service Comparison Table */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold uppercase mb-10 tracking-tight">
            Service Comparison
          </h2>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto pb-4">
            <table className="w-full min-w-[800px] text-left border-collapse border border-white/10 bg-black/40 backdrop-blur-md text-sm">
              <thead>
                <tr className="bg-white/5 text-white border-b border-white/10">
                  <th className="p-4 uppercase tracking-wider font-bold w-1/4">Service</th>
                  <th className="p-4 uppercase tracking-wider font-bold w-1/6">Duration</th>
                  <th className="p-4 uppercase tracking-wider font-bold w-1/3">Best Suited For</th>
                  <th className="p-4 uppercase tracking-wider font-bold w-1/4">Pricing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-400">
                {COMPARISON_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white">{row.service}</td>
                    <td className="p-4">{row.duration}</td>
                    <td className="p-4">{row.suited}</td>
                    <td className="p-4 text-aspexa-red font-bold cursor-pointer hover:underline">
                      <Link to="/contact">Contact for pricing</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {COMPARISON_DATA.map((row, index) => (
              <div key={index} className="bg-black/40 border border-white/10 p-6 relative overflow-hidden flex flex-col gap-5 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-white/10"></div>
                <div className="pl-2">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide leading-tight mb-2">{row.service}</h3>
                  <Link to="/contact" className="text-aspexa-red text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                    Contact for pricing &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-4 pl-2 border-t border-white/5 pt-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-gray-500">
                      <Clock size={14} />
                      <span className="text-xs uppercase font-bold tracking-widest">Duration</span>
                    </div>
                    <span className="text-sm text-gray-300 block">{row.duration}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-gray-500">
                      <Users size={14} />
                      <span className="text-xs uppercase font-bold tracking-widest">Best Suited For</span>
                    </div>
                    <span className="text-sm text-gray-300 leading-relaxed block">{row.suited}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black/60 border border-white/10 p-12 text-center relative overflow-hidden backdrop-blur-lg rounded-lg">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aspexa-red to-transparent opacity-50"></div>
          <h2 className="text-3xl font-bold uppercase text-white mb-6 tracking-tight">Ready To Secure Your AI?</h2>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-aspexa-red text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-300 hover:scale-105">
            Contact Us For A Custom Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;