import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileCheck, Code, Globe, ArrowRight, Terminal, Activity, Crosshair, Plus, Send, Zap } from 'lucide-react';

/* --- Components --- NO FRAMER MOTION --- */

const GlitchText = ({ text }: { text: string }) => (
  <span className="glitch-wrapper block" data-text={text}>
    {text}
  </span>
);

const HudCounter = ({ value, label }: { value: number, label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [inView, value]);

  return (
    <div ref={ref} className="relative group">
      {/* HUD Corners */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-zinc-700 group-hover:border-aspexa-red transition-colors"></div>
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-zinc-700 group-hover:border-aspexa-red transition-colors"></div>

      <div className="bg-zinc-900/50 backdrop-blur-sm p-6 border border-white/5">
        <div className="font-mono text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
          {count}{value === 100 ? '%' : '+'}
        </div>
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-aspexa-red transition-colors">
          {label}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, link }: any) => {
  return (
    <Link to={link} className="group relative block h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>
      <div className="glow-card relative h-full bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-aspexa-red/50 group-hover:-translate-y-2">
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aspexa-red/5 to-transparent h-[200%] w-full -translate-y-full group-hover:animate-scanline pointer-events-none z-0"></div>

        <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-white group-hover:bg-aspexa-red group-hover:text-white transition-colors duration-300 relative z-10">
          <Icon size={24} />
        </div>

        <h3 className="text-2xl font-bold uppercase mb-4 tracking-wide text-white group-hover:text-aspexa-red transition-colors relative z-10">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-gray-300 relative z-10">
          {desc}
        </p>

        <div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
          <ArrowRight className="text-aspexa-red" />
        </div>
      </div>
    </Link>
  );
};

const KillChainStep = ({ number, title }: { number: string, title: string }) => {
  return (
    <div className="group relative border-r border-b border-white/10 p-8 h-48 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.02]">
      {/* Interactive Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-aspexa-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Active Border Indicator */}
      <div className="absolute left-0 top-0 h-0 w-[2px] bg-aspexa-red group-hover:h-full transition-all duration-500 ease-out"></div>
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-aspexa-red group-hover:w-full transition-all duration-500 ease-out delay-100"></div>

      {/* Crosshair Decoration */}
      <div className="absolute -bottom-1.5 -right-1.5 text-zinc-700/50 z-10">
        <Plus size={12} strokeWidth={1} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <span className="font-mono text-xs text-gray-600 group-hover:text-aspexa-red transition-colors duration-300 block mb-2 tracking-widest">
          // STEP {number}
        </span>
        <Crosshair className="text-zinc-800 w-6 h-6 group-hover:text-aspexa-red/50 group-hover:rotate-90 transition-all duration-500" />
      </div>

      <div className="relative z-10">
        <h3 className="font-bold text-lg uppercase tracking-wider text-gray-300 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-white relative">

      {/* === HERO SECTION === */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

        <div className="max-w-[1600px] mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* Hero Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-aspexa-red/10 to-purple-600/10 border border-aspexa-red/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(236,0,0,0.2)] hover:border-aspexa-red/50 transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aspexa-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-aspexa-red shadow-[0_0_10px_rgba(236,0,0,0.8)]"></span>
              </span>
              <span className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                System Status: <span className="text-aspexa-red">Active Defense</span>
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.85] mb-4">
                <span className="block text-outline mb-2">Advanced</span>
                <span className="block text-aspexa-red drop-shadow-[0_0_30px_rgba(236,0,0,0.5)]">AI WARFARE</span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-aspexa-red to-transparent mt-8 shadow-[0_0_20px_rgba(236,0,0,0.6)]"></div>
            </div>

            {/* Description */}
            <div className="relative pl-8 border-l-2 border-aspexa-red/50 bg-gradient-to-r from-aspexa-red/5 to-transparent py-6 pr-4 backdrop-blur-sm">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-aspexa-red via-aspexa-red/50 to-transparent"></div>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl">
                Adversarial testing for the Generative AI era. We identify prompt injections,
                jailbreaks, and RAG poisoning before your adversaries do.
              </p>
              <p className="text-lg md:text-xl text-white font-semibold mt-3 leading-relaxed">
                Specializing in Arabic Dialects & MENA Compliance.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                to="/contact"
                className="group relative px-8 py-4 font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 inline-flex items-center gap-2 bg-aspexa-red text-white shadow-[0_0_30px_rgba(236,0,0,0.4)] hover:shadow-[0_0_50px_rgba(236,0,0,0.8)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Audit <Terminal size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                to="/services"
                className="group relative px-8 py-4 font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 inline-flex items-center gap-2 border-2 border-white/30 hover:border-aspexa-red text-white bg-white/5 backdrop-blur-sm hover:bg-aspexa-red/10 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Vectors <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>

          {/* Hero Visual - Video Player */}
          <div className="relative hidden lg:block">
            {/* Ambient Glow */}
            <div className="absolute -inset-8 bg-gradient-radial from-zinc-700/30 to-transparent blur-[80px] opacity-40 pointer-events-none"></div>

            {/* Video Container */}
            <div className="relative hover-3d" style={{
              transform: 'perspective(1500px) rotateY(-8deg) rotateX(4deg)',
              transition: 'transform 0.6s ease'
            }}>

              {/* Terminal Window Frame */}
              <div className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9),0_20px_40px_-10px_rgba(0,0,0,0.7)]">

                {/* Top Bar */}
                <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-b border-zinc-700 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-500 ml-4">ASPEXA_DEMO_TERMINAL.mp4</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-aspexa-red">
                    <div className="w-2 h-2 bg-aspexa-red rounded-full animate-pulse"></div>
                    <span>RECORDING</span>
                  </div>
                </div>

                {/* Video */}
                <div className="relative bg-black">
                  <video
                    className="w-full aspect-video object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/video/Video_Demo_Prompt_Request.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-aspexa-red pointer-events-none"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-white/60 pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-white/60 pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-aspexa-red pointer-events-none"></div>
            </div>

            <style>{`
               .hover-3d:hover {
                 transform: perspective(1500px) rotateY(-4deg) rotateX(2deg) scale(1.02) !important;
               }
             `}</style>

            {/* Metadata */}
            <div className="mt-8 flex items-center justify-between text-xs font-mono text-gray-600 uppercase tracking-wider pointer-events-none">
              <span className="flex items-center gap-2">
                <Crosshair size={14} className="text-aspexa-red" />
                SYSTEM_ID: ASP-DEMO-2025
              </span>
              <span className="flex items-center gap-2">
                <Zap size={14} className="text-yellow-500" />
                REAL-TIME ANALYSIS
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50 hover:opacity-100 hover:text-aspexa-red transition-all duration-300 cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.3em] animate-bounce">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent"></div>
        </div>
      </section>

      {/* === STATS HUD === */}
      <section className="py-20 relative z-10 border-y border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <HudCounter value={50} label="Red Teams" />
          <HudCounter value={15} label="Industries" />
          <HudCounter value={100} label="Success Rate" />
          <HudCounter value={8} label="Specialists" />
        </div>
      </section>

      {/* === SERVICES BENTO === */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                Operational <span className="text-aspexa-red">Capabilities</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-lg">
                We employ a full-spectrum offensive methodology designed to dismantle AI safety guardrails.
              </p>
            </div>
            <Link to="/services" className="text-sm font-bold uppercase tracking-widest border-b border-aspexa-red pb-1 hover:text-aspexa-red transition-colors">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Main Card - Large */}
            <div className="md:col-span-2 md:row-span-1">
              <ServiceCard
                icon={Shield}
                title="Red-Team Audit"
                desc="Comprehensive adversarial attack simulation covering prompt injections, jailbreaks, and data exfiltration vectors tailored to your specific model architecture."
                link="/services#red-teaming"
              />
            </div>

            {/* Card 2 */}
            <div className="md:col-span-1">
              <ServiceCard
                icon={Globe}
                title="Arabic Dialect Testing"
                desc="Native Khaleeji, Levantine, and Egyptian jailbreak patterns that bypass English-centric safety filters."
                link="/services#arabic-dialect"
              />
            </div>

            {/* Card 3 */}
            <div className="md:col-span-1">
              <ServiceCard
                icon={FileCheck}
                title="Compliance"
                desc="UAE PDPL, SAMA, and NIST AI RMF alignment reports."
                link="/services#compliance"
              />
            </div>

            {/* Card 4 - Large */}
            <div className="md:col-span-2">
              <ServiceCard
                icon={Code}
                title="Remediation Engineering"
                desc="We don't just break it. We provide the exact code, system prompt adjustments, and guardrail configurations to fix it."
                link="/services"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === KILL CHAIN METHODOLOGY === */}
      <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col xl:flex-row gap-16">

            {/* Left Column: Header */}
            <div className="xl:w-1/3 pt-8">
              <Activity className="text-aspexa-red w-16 h-16 mb-8 animate-pulse" />
              <h2 className="text-6xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                Kill Chain <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Methodology</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-aspexa-red pl-6">
                Our 8-step process mirrors sophisticated APT (Advanced Persistent Threat) behaviors.
                We don't just scan; we simulate a dedicated adversary.
              </p>
            </div>

            {/* Right Column: Tactical Grid */}
            <div className="xl:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                <KillChainStep number="01" title="Reconnaissance" />
                <KillChainStep number="02" title="Fingerprinting" />
                <KillChainStep number="03" title="Vuln Discovery" />
                <KillChainStep number="04" title="Clustering" />
                <KillChainStep number="05" title="Strategy Design" />
                <KillChainStep number="06" title="Payload Dev" />
                <KillChainStep number="07" title="Exploitation" />
                <KillChainStep number="08" title="Reporting" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === INTELLIGENCE FEED SECTION === */}
      <section className="relative py-24 border-y border-white/5 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-aspexa-red/5 z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-aspexa-red/10 border border-aspexa-red/20 rounded-full">
                  <Zap size={16} className="text-aspexa-red" />
                </div>
                <span className="font-mono text-sm text-aspexa-red font-bold tracking-widest uppercase">Intelligence Feed</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-6">
                Stay Ahead of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Zero-Day Exploits</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-aspexa-red/50 pl-6 max-w-md">
                Receive critical vulnerability alerts, MENA-specific threat intelligence, and RAG poisoning signatures directly to your inbox.
              </p>
            </div>

            {/* Terminal Input Side */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-zinc-800"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-zinc-800"></div>

              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-1 rounded-sm shadow-2xl">
                <div className="bg-black border border-white/5 p-6 md:p-8">
                  <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                    <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">SECURE_CHANNEL_V1</span>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                      <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                    </div>
                  </div>

                  <form className="relative flex items-center group">
                    <span className="absolute left-0 text-aspexa-red font-mono font-bold text-xl">{'>'}</span>
                    <input
                      type="email"
                      placeholder="ENTER_EMAIL_ADDRESS"
                      className="w-full bg-transparent py-4 pl-8 pr-12 text-white font-mono text-lg focus:outline-none placeholder-zinc-700 uppercase tracking-wider border-b border-zinc-800 focus:border-aspexa-red transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 text-gray-500 hover:text-aspexa-red transition-colors hover:scale-110"
                    >
                      <Send size={20} />
                    </button>
                  </form>

                  <div className="mt-6 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                    <span>Encryption: AES-256</span>
                    <span>Status: <span className="text-emerald-500">Active</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;