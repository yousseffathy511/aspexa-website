import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple member card - no Framer Motion
const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="group text-center">
      <div className="relative mb-6 mx-auto overflow-hidden rounded-sm">
        {/* Filter for black and white high contrast look with red tint on hover */}
        <div className="w-full aspect-[4/5] bg-black relative grayscale hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
          <div className="absolute inset-0 bg-aspexa-red/10 mix-blend-overlay z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-1">{member.name}</h3>
      <p className="text-aspexa-red text-sm font-bold uppercase tracking-widest mb-4">{member.role}</p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-gray-500 hover:text-white transition-colors hover:scale-110"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
};

// Simple section header - no Framer Motion
const SectionHeader = ({ label, title }: { label: string; title: string }) => {
  return (
    <div className="mb-10">
      <span className="text-aspexa-red text-xs font-bold uppercase tracking-widest mb-2 block">{label}</span>
      <h2 className="text-4xl font-bold uppercase tracking-tight">{title}</h2>
    </div>
  );
};

const Team: React.FC = () => {
  const founders = TEAM_MEMBERS.filter(m => m.group === 'founders');
  const executives = TEAM_MEMBERS.filter(m => m.group === 'executives');
  const technical = TEAM_MEMBERS.filter(m => m.group === 'technical');

  return (
    <div className="min-h-screen bg-transparent text-white pt-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">

        {/* Page Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aspexa-red/10 border border-aspexa-red/20 text-aspexa-red text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-aspexa-red animate-pulse"></span>
            Command Roster
          </div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6 tracking-tighter">
            Our Expert <span className="text-aspexa-red">Team</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            Elite security researchers and AI specialists dedicated to protecting your infrastructure.
          </p>
        </div>

        {/* Founders */}
        {founders.length > 0 && (
          <section className="mb-20">
            <SectionHeader label="Command" title="Founders" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {founders.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Executives */}
        {executives.length > 0 && (
          <section className="mb-20">
            <SectionHeader label="Leadership" title="Executive Team" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {executives.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* Technical */}
        {technical.length > 0 && (
          <section className="mb-20">
            <SectionHeader label="Operators" title="Technical Unit" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {technical.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center p-12 border border-white/10 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-aspexa-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">Join Our Team</h3>
            <p className="text-gray-400 mb-6 text-sm max-w-md mx-auto">We're always looking for talented security researchers and AI specialists.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-aspexa-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-300 text-sm hover:scale-105">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;