import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Lock, ArrowRight, Terminal } from 'lucide-react';

// Helper for corners
const Corner = ({ className }: { className?: string }) => (
   <div className={`absolute w-3 h-3 border-aspexa-red/60 transition-all duration-300 ${className}`}></div>
);

// Simple pricing card - no Framer Motion
const PricingCard = ({ title, price, period, description, features, recommended = false, link, icon: Icon }: any) => {
   return (
      <div className={`glow-card relative flex flex-col h-full bg-black/40 backdrop-blur-md border ${recommended ? 'border-aspexa-red/50 shadow-[0_0_30px_rgba(236,0,0,0.15)]' : 'border-white/10'} p-8 group hover:border-aspexa-red/30 transition-all duration-500`}>

         {/* Tech Corners */}
         <Corner className="top-0 left-0 border-t border-l group-hover:w-6 group-hover:h-6" />
         <Corner className="top-0 right-0 border-t border-r group-hover:w-6 group-hover:h-6" />
         <Corner className="bottom-0 left-0 border-b border-l group-hover:w-6 group-hover:h-6" />
         <Corner className="bottom-0 right-0 border-b border-r group-hover:w-6 group-hover:h-6" />

         {recommended && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-aspexa-red px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-red-900/50 z-10">
               Recommended
            </div>
         )}

         <div className="flex items-center gap-4 mb-8 mt-2 relative z-10">
            <div className={`p-3 rounded bg-zinc-900 border ${recommended ? 'border-aspexa-red text-aspexa-red' : 'border-zinc-700 text-gray-400'} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
               <Icon size={24} />
            </div>
            <h3 className={`text-lg font-bold uppercase tracking-widest ${recommended ? 'text-white' : 'text-gray-400'} group-hover:text-white transition-colors`}>
               {title}
            </h3>
         </div>

         <div className="mb-6 flex items-baseline gap-2 relative z-10">
            <span className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tighter">{price}</span>
            {period && <span className="text-gray-500 font-mono text-xs uppercase tracking-wide">{period}</span>}
         </div>

         <p className="text-sm text-gray-400 mb-8 leading-relaxed min-h-[40px] border-l-2 border-zinc-800 pl-4 relative z-10">{description}</p>

         <div className="flex-grow space-y-4 mb-8 relative z-10">
            {features.map((feat: any, i: number) => (
               <div key={i} className="flex items-start gap-3 text-sm">
                  <div className={`w-1.5 h-1.5 mt-1.5 transform rotate-45 ${feat.highlight ? 'bg-aspexa-red shadow-[0_0_5px_#EC0000]' : 'bg-zinc-700'}`}></div>
                  <span className={`${feat.highlight ? 'text-white font-medium' : 'text-gray-400'} ${feat.faded ? 'opacity-50' : ''}`}>{feat.text}</span>
               </div>
            ))}
         </div>

         <div className="group/btn">
            <Link to={link} className={`relative w-full py-4 text-center font-bold uppercase tracking-widest text-xs transition-all duration-300 overflow-hidden z-10 block ${recommended ? 'bg-aspexa-red text-white hover:bg-red-600' : 'bg-transparent border border-zinc-700 text-white hover:border-white'}`}>
               <span className="relative z-10 flex items-center justify-center gap-2">Initiate <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" /></span>
               {/* Hover fill effect for outline buttons */}
               {!recommended && <div className="absolute inset-0 bg-white transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 z-0"></div>}
               {!recommended && <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-black opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">Initiate <ArrowRight size={14} /></span>}
            </Link>
         </div>
      </div>
   );
}

const Pricing: React.FC = () => {
   return (
      <div className="min-h-screen bg-transparent text-white pt-32 pb-20 relative overflow-hidden">

         <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Header */}
            <div className="text-center mb-20 max-w-3xl mx-auto">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aspexa-red/10 border border-aspexa-red/20 text-aspexa-red text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="w-2 h-2 rounded-full bg-aspexa-red animate-pulse"></span>
                  Security Investment
               </div>
               <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6 tracking-tight leading-none">
                  Defensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-aspexa-red to-red-500">Engineering</span>
               </h1>
               <p className="text-xl text-gray-400 font-light leading-relaxed">
                  We don't sell PDF reports. We sell the assurance that your AI infrastructure
                  can withstand sophisticated, adversarial attacks in the real world.
               </p>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

               <PricingCard
                  title="Spot Audit"
                  price="$15k"
                  period="/ Engagement"
                  description="Single-point assessment for a specific model release or feature launch."
                  icon={Shield}
                  link="/contact"
                  features={[
                     { text: "Prompt Injection Testing", highlight: false },
                     { text: "Basic Jailbreak Patterns", highlight: false },
                     { text: "Executive Risk Report", highlight: false },
                     { text: "2-Week Turnaround", highlight: false },
                     { text: "Post-Fix Verification", highlight: false, faded: true },
                  ]}
               />

               <PricingCard
                  title="Retainer"
                  price="$8k"
                  period="/ Month"
                  description="Continuous offensive testing for agile teams deploying frequent updates."
                  icon={Zap}
                  link="/contact"
                  recommended={true}
                  features={[
                     { text: "Everything in Spot Audit", highlight: true },
                     { text: "RAG & Vector DB Poisoning", highlight: false },
                     { text: "Arabic Dialect Jailbreaks", highlight: true },
                     { text: "Weekly Re-testing", highlight: false },
                     { text: "Direct Slack Access", highlight: false },
                  ]}
               />

               <PricingCard
                  title="Enterprise"
                  price="Custom"
                  period=""
                  description="Full-spectrum security partnership for high-risk, regulated industries."
                  icon={Lock}
                  link="/contact"
                  features={[
                     { text: "Everything in Retainer", highlight: true },
                     { text: "Compliance Mapping (SAMA/UAE)", highlight: false },
                     { text: "On-premise / Air-gapped", highlight: false },
                     { text: "Source Code Review", highlight: false },
                     { text: "Dedicated Threat Lead", highlight: false },
                  ]}
               />

            </div>

            {/* Bottom Call to Action */}
            <div className="mt-24 p-8 border border-white/10 bg-black/40 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
               <div className="flex items-start gap-6">
                  <div className="p-4 bg-black border border-white/10 rounded-full hidden md:block group-hover:scale-110 transition-transform">
                     <Terminal className="text-aspexa-red" size={24} />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold uppercase mb-2">Need a Technical SOW?</h3>
                     <p className="text-gray-400 text-sm max-w-md">
                        We provide detailed Statements of Work mapping out our exact offensive methodology, kill-chain phases, and deliverables for your procurement team.
                     </p>
                  </div>
               </div>
               <Link to="/contact" className="flex items-center gap-3 text-aspexa-red font-bold uppercase tracking-wider hover:text-white transition-colors duration-300 whitespace-nowrap hover:translate-x-1">
                  Request SOW <ArrowRight size={20} />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Pricing;