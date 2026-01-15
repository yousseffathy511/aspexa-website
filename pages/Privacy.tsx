import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-white pt-20 relative">
       
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-20 md:gap-25">
            {/* Sticky Sidebar */}
            <div className="md:w-1/4">
                <div className="sticky top-[110px]">
                    <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-4 leading-none">
                        Privacy <br/> Policy
                    </h1>
                    <p className="text-aspexa-red font-mono text-xs uppercase tracking-widest font-bold">
                        Last Updated: January 2025
                    </p>
                </div>
            </div>

            {/* Content Column */}
            <div className="md:w-3/4 bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/5">
                
                {/* 1. Introduction */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        1. Introduction
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>
                            ASPEXA ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and services.
                        </p>
                        <p>
                            We understand that your privacy is important. We process your data in compliance with applicable laws including the UAE Personal Data Protection Law (PDPL), SAMA AI Guidelines, and other regional regulations.
                        </p>
                    </div>
                </div>

                {/* 2. Information We Collect */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        2. Information We Collect
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-6 text-sm md:text-base">
                        <p>We collect information in the following ways:</p>
                        
                        <div>
                            <h3 className="text-white font-bold uppercase mb-2 tracking-wide text-sm">2.1 Information You Provide Directly</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-aspexa-red mt-1">•</span>
                                    <span><strong className="text-gray-300">Contact Information:</strong> Name, email address, phone number, company name, job title</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-aspexa-red mt-1">•</span>
                                    <span><strong className="text-gray-300">Assessment Data:</strong> Technical information about your AI systems, system prompts, test results, and vulnerability findings (shared under NDA)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-aspexa-red mt-1">•</span>
                                    <span><strong className="text-gray-300">Communication Data:</strong> Messages, inquiries, and feedback you send through our website or email</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-aspexa-red mt-1">•</span>
                                    <span><strong className="text-gray-300">Payment Information:</strong> Billing address, payment method details (processed securely through third-party providers)</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold uppercase mb-2 tracking-wide text-sm">2.2 Information Collected Automatically</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-aspexa-red mt-1">•</span>
                                    <span><strong className="text-gray-300">Usage Data:</strong> Pages visited, time spent on pages, links clicked, referral sources</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-aspexa-red mt-1">•</span>
                                    <span><strong className="text-gray-300">Device Information:</strong> Browser type, operating system, IP address, device type</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-aspexa-red mt-1">•</span>
                                    <span><strong className="text-gray-300">Cookies and Tracking:</strong> Session cookies for website functionality and analytics</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. How We Use Your Information */}
                <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        3. How We Use Your Information
                    </h2>
                     <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>We use collected information for:</p>
                        <ul className="space-y-2">
                             {[
                                 "Service Delivery: Conducting red-team assessments, providing reports, and delivering security recommendations",
                                 "Communication: Responding to inquiries, sending assessment updates, and contract fulfillment",
                                 "Legal Compliance: Meeting regulatory requirements, handling legal disputes, and enforcing agreements",
                                 "Security: Protecting against fraud, unauthorized access, and system abuse",
                                 "Improvement: Analyzing usage patterns to enhance our services (aggregated and anonymized)",
                                 "Marketing: Sending newsletters and updates (with your consent)"
                             ].map((item, i) => {
                                 const [bold, rest] = item.split(': ');
                                 return (
                                     <li key={i} className="flex items-start gap-3">
                                         <span className="text-aspexa-red mt-1">•</span>
                                         <span><strong className="text-gray-300">{bold}:</strong> {rest}</span>
                                     </li>
                                 )
                             })}
                        </ul>
                     </div>
                </div>

                 {/* 4. Data Retention */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        4. Data Retention
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p><strong className="text-gray-300">Assessment Data:</strong> Raw findings and test payloads are destroyed within 72 hours of engagement completion via certified data destruction. You receive a Certificate of Destruction.</p>
                        <p><strong className="text-gray-300">Contact Information:</strong> Retained for the duration of our business relationship plus 2 years for legal and compliance purposes.</p>
                        <p><strong className="text-gray-300">Cookies:</strong> Session cookies expire when you close your browser. Analytics data is retained for up to 12 months.</p>
                        <p className="pt-2">You may request deletion of your personal data at any time, subject to legal retention requirements.</p>
                    </div>
                 </div>

                 {/* 5. Data Security */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        5. Data Security
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>We implement industry-standard security measures to protect your information:</p>
                        <ul className="space-y-2">
                             {[
                                 "Encryption of data in transit (TLS 1.2+) and at rest (AES-256)",
                                 "Isolated environments for assessment data accessible only to your dedicated team",
                                 "Regular security audits and vulnerability assessments",
                                 "Strict access controls and employee confidentiality agreements",
                                 "Compliance with NIST Cybersecurity Framework principles"
                             ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-3">
                                     <span className="text-aspexa-red mt-1">•</span>
                                     <span>{item}</span>
                                 </li>
                             ))}
                        </ul>
                        <p>While we implement comprehensive security measures, no system is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.</p>
                    </div>
                 </div>

                 {/* 6. Third-Party Sharing */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        6. Third-Party Sharing
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>We do NOT sell your personal data. We share information only in these cases:</p>
                         <ul className="space-y-2">
                             {[
                                 "Service Providers: Payment processors, email providers, hosting services (under data processing agreements)",
                                 "Legal Requirements: When required by law, court orders, or government requests",
                                 "Assessment Findings: Only shared with authorized stakeholders you designate, under NDA"
                             ].map((item, i) => {
                                 const [bold, rest] = item.split(': ');
                                 return (
                                     <li key={i} className="flex items-start gap-3">
                                         <span className="text-aspexa-red mt-1">•</span>
                                         <span><strong className="text-gray-300">{bold}:</strong> {rest}</span>
                                     </li>
                                 )
                             })}
                        </ul>
                    </div>
                 </div>

                 {/* 7. Your Rights Under UAE PDPL */}
                 <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        7. Your Rights Under UAE PDPL
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>If you are a UAE resident, you have the following rights under the UAE PDPL:</p>
                        <ul className="space-y-2">
                             {[
                                 "Right to Access: Request a copy of your personal data we hold",
                                 "Right to Correction: Request correction of inaccurate information",
                                 "Right to Deletion: Request deletion of your data (subject to legal requirements)",
                                 "Right to Data Portability: Receive your data in a portable format",
                                 "Right to Object: Object to processing for marketing purposes"
                             ].map((item, i) => {
                                 const [bold, rest] = item.split(': ');
                                 return (
                                     <li key={i} className="flex items-start gap-3">
                                         <span className="text-aspexa-red mt-1">•</span>
                                         <span><strong className="text-gray-300">{bold}:</strong> {rest}</span>
                                     </li>
                                 )
                             })}
                        </ul>
                        <p>To exercise these rights, contact us at <a href="mailto:privacy@aspexa.ai" className="text-white hover:text-aspexa-red transition-colors">privacy@aspexa.ai</a> with your request and supporting documentation.</p>
                    </div>
                 </div>

                  {/* 8. Cookies and Tracking Technologies */}
                  <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        8. Cookies and Tracking Technologies
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>We use cookies for:</p>
                        <ul className="space-y-2">
                             {[
                                 "Session Cookies: Maintaining your login session and preferences",
                                 "Analytics Cookies: Understanding how you use our website (optional)",
                                 "Security Cookies: Preventing fraud and unauthorized access"
                             ].map((item, i) => {
                                 const [bold, rest] = item.split(': ');
                                 return (
                                     <li key={i} className="flex items-start gap-3">
                                         <span className="text-aspexa-red mt-1">•</span>
                                         <span><strong className="text-gray-300">{bold}:</strong> {rest}</span>
                                     </li>
                                 )
                             })}
                        </ul>
                        <p>You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
                    </div>
                 </div>

                  {/* 9. International Data Transfers */}
                  <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        9. International Data Transfers
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>Your data may be processed in the UAE, KSA, or other MENA jurisdictions. We ensure all international transfers comply with data protection regulations and include appropriate safeguards.</p>
                    </div>
                 </div>

                  {/* 10. Contact Us */}
                  <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        10. Contact Us
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>If you have questions about this Privacy Policy or our data handling practices, contact us:</p>
                        <p>
                            <strong className="text-gray-300">Email:</strong> <a href="mailto:privacy@aspexa.ai" className="hover:text-aspexa-red transition-colors">privacy@aspexa.ai</a><br/>
                            <strong className="text-gray-300">Address:</strong> ASPEXA, UAE
                        </p>
                        <p>You also have the right to lodge a complaint with your local data protection authority if you believe we have violated your rights.</p>
                    </div>
                 </div>

                 {/* 11. Changes to This Policy */}
                  <div className="mb-16">
                     <h2 className="text-2xl font-bold uppercase mb-6 flex items-center text-white">
                        <span className="w-1.5 h-6 bg-aspexa-red mr-4 inline-block"></span>
                        11. Changes to This Policy
                    </h2>
                    <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>We may update this Privacy Policy from time to time. We will notify you of material changes via email or prominent notice on our website. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
                    </div>
                 </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;