import React from 'react';
import { Target, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const METHODOLOGY_STEPS = [
  { id: "1", title: "Passive Mapping", desc: "Maps your AI's surface. Tools, authentication, infrastructure, system role. We gather intelligence without triggering alarms." },
  { id: "2", title: "Infrastructure Fingerprinting", desc: "Identifies the tech stack powering your AI (vector databases, embedding models, LLM family, orchestration frameworks)." },
  { id: "3", title: "Vulnerability Detection", desc: "1000+ targeted probes in parallel. SQL injection, jailbreaks, RAG poisoning. We find the cracks." },
  { id: "4", title: "Finding Clustering", desc: "Raw results become organized intelligence. Duplicate findings eliminated, patterns identified, severity assigned." },
  { id: "5", title: "Attack Strategy Design", desc: "Intelligence becomes attack plans. Each vulnerability gets a custom exploitation strategy tuned to your system's specific behavior." },
  { id: "6", title: "Payload Customization", desc: "Generic attack templates become context-specific. Tone adaptation, cultural framing, dialect optimization." },
  { id: "7", title: "Live Exploitation", desc: "Real, reproducible exploits. Multi-turn attack chains that prove the vulnerability works. You get video-game-level proof." },
  { id: "8", title: "Human Authorization Gate", desc: "We don't execute without your explicit permission. Safety by design." },
];

// Simple comparison cell - no Framer Motion
const ComparisonCell: React.FC<{
  company: string,
  text: string,
  isAspexa?: boolean
}> = ({
  company,
  text,
  isAspexa = false
}) => {
    return (
      <div
        className={`p-8 flex flex-col items-center justify-center text-center backdrop-blur-sm ${isAspexa
          ? 'bg-black border-b-4 border-aspexa-red relative overflow-hidden'
          : 'bg-black/80'
          }`}
      >
        {isAspexa && <div className="absolute inset-0 bg-aspexa-red/5"></div>}
        <span className={`font-bold uppercase tracking-widest text-sm mb-2 ${isAspexa ? 'text-aspexa-red' : 'text-gray-500'}`}>
          {company}
        </span>
        <span className={`text-xl font-medium ${isAspexa ? 'font-bold uppercase' : ''}`}>
          {text}
        </span>
      </div>
    );
  };

// Simple methodology step - no Framer Motion
const MethodologyStep: React.FC<{
  id: string,
  title: string,
  desc: string
}> = ({
  id,
  title,
  desc
}) => {
    return (
      <div className="group flex flex-col md:flex-row items-center gap-6 p-6 border border-white/10 hover:border-aspexa-red/40 bg-black/60 transition-all duration-300 hover:translate-x-1">
        <div className="font-mono text-4xl font-bold text-zinc-700 group-hover:text-aspexa-red/20 transition-colors">0{id}</div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold uppercase mb-2 tracking-wider text-white">{title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    );
  };

// Simple compliance card - no Framer Motion
const ComplianceCard: React.FC<{
  icon: React.ElementType,
  title: string,
  items: string[]
}> = ({
  icon: Icon,
  title,
  items
}) => {
    return (
      <div className="bg-black/50 p-8 border border-white/10 hover:border-white/30 transition-colors backdrop-blur-md">
        <h4 className="text-aspexa-red font-bold uppercase mb-6 text-sm tracking-widest flex items-center gap-2">
          <Icon size={16} /> {title}
        </h4>
        <ul className="space-y-3 text-sm text-gray-400">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-white pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">

        {/* Hero/Intro Section */}
        <section className="text-center mb-32 max-w-4xl mx-auto">
          <span className="text-aspexa-red text-xs font-bold uppercase tracking-widest mb-4 inline-block border border-aspexa-red/20 bg-aspexa-red/5 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-aspexa-red inline-block mr-2 animate-pulse"></span>
            Our Mission
          </span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6 tracking-tighter leading-[0.9]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Beyond the Scan.</span><br />
            <span className="text-aspexa-red">Real Attacks.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            We don't run automated scanners. We are a team of offensive security researchers simulating sophisticated adversaries targeting your AI's weakest points.
          </p>
        </section>

        {/* Comparison Grid */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold uppercase mb-12 tracking-tight text-center">
            How We <span className="text-aspexa-red">Differ</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
            {/* Differentiator Labels */}
            <div className="bg-white/5 p-8 flex flex-col justify-center border-r border-white/10">
              <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Focus Area</h3>
              <p className="text-2xl font-bold uppercase text-white tracking-tight">Test Methodology</p>
            </div>
            {/* Comparison Cells */}
            <div className="grid grid-cols-3 gap-px bg-white/10">
              <ComparisonCell company="Global Cybersecurity Firms" text="Best Practices" />
              <ComparisonCell company="Boutique AI Startups" text="Focused, Shallow" />
              <ComparisonCell company="Aspexa" text="Adversarial Simulation" isAspexa />
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-aspexa-red text-xs font-bold uppercase tracking-widest mb-2 block">Process</span>
              <h2 className="text-4xl font-bold uppercase tracking-tight">
                Our MENA-Focused Methodology
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {METHODOLOGY_STEPS.map((step) => (
              <MethodologyStep key={step.id} id={step.id} title={step.title} desc={step.desc} />
            ))}
          </div>
        </section>

        {/* Compliance Grid */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold uppercase mb-12 tracking-tight text-center">
            Compliance <span className="text-aspexa-red">Coverage</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ComplianceCard
              icon={Target}
              title="UAE PDPL"
              items={["Personal data mapping", "Consent mechanisms", "Cross-border transfers", "Breach notification"]}
            />
            <ComplianceCard
              icon={Shield}
              title="SAMA CSF"
              items={["AI governance controls", "Third-party risk", "Incident response", "Security monitoring"]}
            />
            <ComplianceCard
              icon={Globe}
              title="NIST AI RMF"
              items={["MAP: Context awareness", "MEASURE: Risk metrics", "MANAGE: Controls", "GOVERN: Oversight"]}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center p-16 bg-black/60 border border-white/10 backdrop-blur-xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aspexa-red to-transparent opacity-50"></div>
          <h2 className="text-4xl font-bold uppercase mb-6 tracking-tight">
            Ready for a <span className="text-aspexa-red">Real Test</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg font-light leading-relaxed">
            Engage our team for a comprehensive threat assessment of your AI infrastructure.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-aspexa-red text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-300 hover:scale-105">
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;