import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-white pt-20 relative">
        
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-20 md:gap-25">
             {/* Sticky Sidebar */}
            <div className="md:w-1/4">
                <div className="sticky top-[110px]">
                    <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-4 leading-none">
                        Terms of <br/> Service
                    </h1>
                    <p className="text-aspexa-red font-mono text-xs uppercase tracking-widest font-bold">
                        Last Updated: January 2025
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="md:w-3/4 bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/5">
                 {/* 1. Agreement to Terms */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        1. Agreement to Terms
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>By accessing our website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                         <p>These terms apply to all visitors, users, and clients of ASPEXA services.</p>
                    </div>
                 </div>

                  {/* 2. Services Description */}
                  <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        2. Services Description
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>ASPEXA provides AI security assessment services including:</p>
                         <ul className="space-y-2">
                             {[
                                 "AI Red-Teaming Audits",
                                 "RAG Security Assessments",
                                 "Arabic Dialect Jailbreak Testing",
                                 "Compliance and Regulatory Assurance",
                                 "Incident Readiness Workshops",
                                 "Classical ML Security Assessments"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                        <p>Specific service terms, scope, and deliverables are defined in individual engagement agreements.</p>
                    </div>
                 </div>

                 {/* 3. Engagement Process */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        3. Engagement Process
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-6 text-sm md:text-base">
                        <div>
                            <h3 className="text-white font-bold uppercase mb-2 tracking-wide text-sm">3.1 Scope Agreement</h3>
                            <p className="mb-2">Before any assessment begins, both parties will agree on:</p>
                            <ul className="space-y-2">
                                {[
                                    "Systems to be tested",
                                    "Testing methodology and boundaries",
                                    "Timeline and deliverables",
                                    "Authorized testing windows",
                                    "Communication protocols"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-aspexa-red mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold uppercase mb-2 tracking-wide text-sm">3.2 Authorization</h3>
                            <p>Client must provide written authorization for all testing activities. We do not execute exploitation tests without explicit client permission. All testing is conducted under the Human Authorization Gate protocol.</p>
                        </div>
                    </div>
                 </div>

                 {/* 4. Client Responsibilities */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        4. Client Responsibilities
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>Clients agree to:</p>
                         <ul className="space-y-2">
                             {[
                                 "Provide accurate information about systems to be tested",
                                 "Ensure legal authority to authorize testing",
                                 "Designate authorized points of contact",
                                 "Respond to critical findings in a timely manner",
                                 "Not use our findings to harm third parties"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                    </div>
                 </div>

                 {/* 5. Confidentiality */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        5. Confidentiality
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>All assessment activities are conducted under strict confidentiality:</p>
                         <ul className="space-y-2">
                             {[
                                 "All findings remain confidential to the client",
                                 "We do not disclose vulnerabilities to third parties",
                                 "Assessment data is destroyed within 72 hours of engagement completion",
                                 "Non-Disclosure Agreements (NDAs) are executed before assessments begin"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                    </div>
                 </div>

                 {/* 6. Intellectual Property */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        6. Intellectual Property
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-6 text-sm md:text-base">
                        <div>
                            <h3 className="text-white font-bold uppercase mb-2 tracking-wide text-sm">6.1 Client Property</h3>
                            <p>All client systems, data, and proprietary information remain the property of the client.</p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold uppercase mb-2 tracking-wide text-sm">6.2 ASPEXA Property</h3>
                            <p>Our testing methodologies, tools, attack libraries, and general security knowledge remain our intellectual property. Clients receive deliverables as specified in engagement agreements but do not acquire rights to our underlying methodologies.</p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold uppercase mb-2 tracking-wide text-sm">6.3 Deliverables</h3>
                            <p>Upon payment, clients receive a license to use assessment reports and recommendations for internal purposes. Reports may not be resold or publicly disclosed without our written consent.</p>
                        </div>
                    </div>
                 </div>

                 {/* 7. Payment Terms */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        7. Payment Terms
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <ul className="space-y-2">
                             {[
                                 "Payment terms are specified in individual engagement agreements",
                                 "Invoices are due within 30 days unless otherwise agreed",
                                 "Late payments may incur interest charges",
                                 "We reserve the right to suspend services for non-payment"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                    </div>
                 </div>

                 {/* 8. Limitation of Liability */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        8. Limitation of Liability
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>To the maximum extent permitted by law:</p>
                         <ul className="space-y-2">
                             {[
                                 "Our liability is limited to the fees paid for the specific engagement",
                                 "We are not liable for indirect, consequential, or punitive damages",
                                 "We are not liable for damages arising from client's failure to implement recommendations",
                                 "We are not liable for pre-existing vulnerabilities in client systems"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                    </div>
                 </div>

                 {/* 9. Warranty Disclaimer */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        9. Warranty Disclaimer
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>Our services are provided "as is." While we employ industry-standard methodologies:</p>
                         <ul className="space-y-2">
                             {[
                                 "We do not guarantee detection of all vulnerabilities",
                                 "Security is an ongoing process; assessments reflect a point in time",
                                 "New vulnerabilities may emerge after assessment completion"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                    </div>
                 </div>

                 {/* 10. Acceptable Use */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        10. Acceptable Use
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>You agree not to:</p>
                         <ul className="space-y-2">
                             {[
                                 "Use our services for illegal purposes",
                                 "Misrepresent your authority to authorize testing",
                                 "Share our tools or methodologies with unauthorized parties",
                                 "Use our findings to attack systems you don't own",
                                 "Publicly disclose vulnerabilities without coordinated disclosure"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                    </div>
                 </div>

                 {/* 11. Termination */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        11. Termination
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>Either party may terminate an engagement:</p>
                         <ul className="space-y-2">
                             {[
                                 "With 30 days written notice",
                                 "Immediately for material breach",
                                 "Immediately if testing poses unexpected risks"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                        <p className="pt-2">Upon termination, client pays for work completed. Confidentiality obligations survive termination.</p>
                    </div>
                 </div>

                 {/* 12. Dispute Resolution */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        12. Dispute Resolution
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>Disputes will be resolved through:</p>
                         <ul className="space-y-2">
                             {[
                                 "Good faith negotiation between parties",
                                 "Mediation if negotiation fails",
                                 "Arbitration under UAE law if mediation fails"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                        <p className="pt-2">These terms are governed by the laws of the United Arab Emirates.</p>
                    </div>
                 </div>

                 {/* 13. Indemnification */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        13. Indemnification
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>Client agrees to indemnify ASPEXA against claims arising from:</p>
                         <ul className="space-y-2">
                             {[
                                 "Client's misuse of our services or findings",
                                 "Client's failure to have proper authorization",
                                 "Client's violation of third-party rights"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                    </div>
                 </div>

                 {/* 14. Force Majeure */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        14. Force Majeure
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>Neither party is liable for delays or failures due to circumstances beyond reasonable control, including natural disasters, war, government actions, or internet outages.</p>
                    </div>
                 </div>

                 {/* 15. Changes to Terms */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        15. Changes to Terms
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>We may update these terms periodically. Continued use of our services after changes constitutes acceptance of new terms. Existing engagements are governed by terms in effect at engagement signing.</p>
                    </div>
                 </div>

                 {/* 16. Severability */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        16. Severability
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                         <p>If any provision of these terms is found unenforceable, remaining provisions continue in effect.</p>
                    </div>
                 </div>

                 {/* 17. Contact Information */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        17. Contact Information
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>For questions about these terms:</p>
                        <p>
                            <strong className="text-gray-300">Email:</strong> <a href="mailto:legal@aspexa.ai" className="hover:text-aspexa-red transition-colors">legal@aspexa.ai</a><br/>
                            <strong className="text-gray-300">General Inquiries:</strong> <a href="mailto:contact@aspexa.ai" className="hover:text-aspexa-red transition-colors">contact@aspexa.ai</a><br/>
                            <strong className="text-gray-300">Location:</strong> United Arab Emirates
                        </p>
                    </div>
                 </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;