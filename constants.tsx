import React from 'react';
import { ShieldAlert, Database, Languages, FileText, Users, Cpu } from 'lucide-react';
import { TeamMember, Service, FaqItem } from './types';

const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Baraa Al Refai",
    role: "Co-Founder & CEO",
    image: getAssetPath("/team/baraa.png"),
    linkedin: "#",
    group: 'founders'
  },
  {
    name: "Abdulrahman Ali",
    role: "Co-Founder & CTO",
    image: getAssetPath("/team/abdulrahman.png"),
    linkedin: "#",
    group: 'founders'
  },
  {
    name: "Hamza Khaled",
    role: "Co-Founder & CAIO",
    image: getAssetPath("/team/hamza.png"),
    linkedin: "#",
    group: 'founders'
  },
  {
    name: "Abdullah Othman",
    role: "Chief Financial Officer",
    image: getAssetPath("/team/abdulla.png"),
    linkedin: "#",
    group: 'executives'
  },
  {
    name: "Youssef Fathy",
    role: "Chief Partnerships Officer",
    image: getAssetPath("/team/youssef.png"),
    linkedin: "#",
    group: 'executives'
  },
  {
    name: "Soultan Toure",
    role: "AI Research & Testing Lead",
    image: getAssetPath("/team/soultan.png"),
    linkedin: "#",
    group: 'technical'
  },
  {
    name: "Kawsar",
    role: "Technical Research Lead",
    image: getAssetPath("/team/kawsar.png"),
    linkedin: "#",
    group: 'technical'
  },
  {
    name: "Yasser",
    role: "Senior Red Team & AI Tester",
    image: getAssetPath("/team/yasser.png"),
    linkedin: "#",
    group: 'technical'
  },
  {
    name: "Mooad Ali",
    role: "Senior Red Team & AI Tester",
    image: getAssetPath("/team/moaad.jpg"),
    linkedin: "#",
    group: 'technical'
  },
  {
    name: "Osama",
    role: "QA & Compliance Lead",
    image: getAssetPath("/team/osama.png"),
    linkedin: "#",
    group: 'technical'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "red-teaming",
    title: "AI Red-Teaming Audit",
    description: "Adversarial testing of LLMs, chatbots, AI agents, and autonomous systems. Our flagship service for organizations deploying AI at scale.",
    icon: <ShieldAlert className="w-8 h-8 text-aspexa-red" />,
    coverage: [
      "Prompt injection attacks (direct & indirect)",
      "Multi-turn jailbreak sequences",
      "RAG knowledge base poisoning and data exfiltration",
      "Bias and cultural/religious bypass attempts in Arabic contexts",
      "System prompt leakage and role-play manipulation",
      "Excessive agency and unauthorized tool execution"
    ],
    deliverables: [
      "Executive risk report with severity ratings",
      "Technical proof-of-concepts and reproduction steps",
      "Mitigation roadmap aligned with your timeline",
      "MITRE ATLAS + OWASP LLM Top 10 mappings"
    ],
    idealFor: "Banks, telecoms, government digital services, enterprise SaaS platforms"
  },
  {
    id: "rag-security",
    title: "RAG-Specific Security Assessment",
    description: "Retrieval-augmented generation systems (document Q&A, enterprise knowledge bases, internal AI assistants) require specialized security testing.",
    icon: <Database className="w-8 h-8 text-aspexa-red" />,
    coverage: [
      "Knowledge base poisoning via malicious document injection",
      "Indirect prompt injection through retrieval context",
      "PII and confidential data exfiltration",
      "Vector database manipulation and metadata exploitation",
      "Retrieval ranking manipulation",
      "Context overflow and context window attacks"
    ],
    deliverables: [
      "RAG-specific vulnerability report",
      "Database hardening recommendations",
      "Data access control audit",
      "Retrieval safety testing report"
    ],
    idealFor: "Organizations using AI on internal documents—financial services, healthcare, energy, legal, government ministries"
  },
  {
    id: "arabic-dialect",
    title: "Arabic Dialect Jailbreak Library & Testing",
    description: "Proprietary adversarial prompt sets designed for MENA-specific contexts. Our core differentiator in AI security testing.",
    icon: <Languages className="w-8 h-8 text-aspexa-red" />,
    coverage: [
      "Gulf Arabic (Khaleeji) formal and colloquial bypasses",
      "Saudi Najdi dialect exploits",
      "Emirati code-switching and cultural triggers",
      "Egyptian and Levantine Arabic attack vectors",
      "North African (Moroccan, Algerian, Tunisian) dialect patterns",
      "Religious/cultural phrasing to evade content filters",
      "RTL/LTR encoding and Unicode manipulation"
    ],
    deliverables: [
      "Benchmark report showing model vulnerability in Arabic across dialects",
      "Proprietary attack template library (for ongoing testing)",
      "Cultural sensitivity and compliance analysis",
      "Recommendations for Arabic-aware safety filters"
    ],
    idealFor: "Government services, banks, telecoms, and any organization serving Arabic-speaking populations"
  },
  {
    id: "compliance",
    title: "AI Compliance & Regulatory Assurance Package",
    description: "Translating technical findings into auditable, governance-ready artifacts for regulatory review and board presentation.",
    icon: <FileText className="w-8 h-8 text-aspexa-red" />,
    coverage: [
      "Red-team findings mapped to UAE AI Principles, SAMA AI Guidelines, Saudi NDAL framework",
      "Model Cards (per NIST standards)",
      "Data Protection Impact Assessments (DPIA) aligned with UAE PDPL",
      "AI Risk Registers with control recommendations",
      "Executive risk briefs for board/regulator presentations",
      "SAQ (Self-Assessment Questionnaire) completion support"
    ],
    deliverables: [
      "Model Cards (NIST)",
      "AI Risk Registers",
      "Executive risk briefs",
      "Audit-ready artifacts"
    ],
    idealFor: "Public-sector tenders, regulated industries (banking, insurance, healthcare), entities preparing for regulatory audits"
  },
  {
    id: "incident-readiness",
    title: "AI Incident Readiness Workshop",
    description: "Preparedness training for detection, response, and containment of AI abuse in real-time. Hands-on exercises with your team.",
    icon: <Users className="w-8 h-8 text-aspexa-red" />,
    coverage: [
      "Tabletop exercises using real jailbreak scenarios in Arabic and English",
      "Role-playing across teams: SOC, legal, product, communication",
      "Live demonstration of attack/defense cycles",
      "Custom incident playbooks for your industry and AI systems"
    ],
    deliverables: [
      "Incident response playbook (customized to your environment)",
      "Detection rules and monitoring guidance",
      "Communication templates for regulators and customers",
      "Team training certificate"
    ],
    idealFor: "Enterprise security teams, government agencies, critical infrastructure operators"
  },
  {
    id: "classical-ml",
    title: "Classical ML Security Assessment",
    description: "Security testing for classical machine learning systems (spam classifiers, fraud detectors, recommendation engines, malware scanners).",
    icon: <Cpu className="w-8 h-8 text-aspexa-red" />,
    coverage: [
      "Evasion attacks (FGSM, JSMA, adversarial perturbations)",
      "Data poisoning and label manipulation",
      "Model inversion and membership inference",
      "Feature space manipulation",
      "Supply chain vulnerabilities (model registries, dependencies)"
    ],
    deliverables: [
      "Evasion vulnerability report",
      "Robustness recommendations",
      "Model hardening guidance"
    ],
    idealFor: "Organizations with hybrid AI stacks, recommendation platforms, financial risk models"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "What Is Prompt Injection And Why Should I Care?",
    answer: "Prompt injection is when an attacker manipulates your AI system through text input to override its safety guidelines, extract confidential information, or execute unauthorized actions. If your system handles sensitive data, processes transactions, or makes decisions, you're at risk."
  },
  {
    question: "How Long Does A Red-Team Assessment Take?",
    answer: "Standard assessments run 2-4 weeks depending on system complexity. Phase 1 (reconnaissance) is fastest; Phase 4 (exploitation) is most thorough. Rush engagements are available for critical systems."
  },
  {
    question: "What Languages And Dialects Do You Test?",
    answer: "We conduct adversarial testing in Khaleeji (Gulf Arabic), Egyptian, Levantine, and Maghrebi Arabic—plus Modern Standard Arabic. This is our core differentiator."
  },
  {
    question: "How Are Findings Reported For Compliance?",
    answer: "Each finding is mapped to OWASP LLM Top 10, MITRE ATLAS, UAE PDPL, and SAMA guidelines. Reports include executive summaries for boards and technical details for engineers."
  },
  {
    question: "What's The Difference Between Scanning And Exploitation Testing?",
    answer: "Scanning identifies potential vulnerabilities through automated probes. Exploitation proves the vulnerability is real by executing a working attack and capturing evidence. We do both."
  },
  {
    question: "Can You Test Systems Still In Development?",
    answer: "Yes. Early-stage testing prevents vulnerabilities from being baked into production. We offer pre-deployment assessments and staging environment testing."
  },
  {
    question: "How Is Our Data Stored And Protected?",
    answer: "All assessment data is encrypted and stored in isolated environments. Raw findings are destroyed within 72 hours of engagement completion. Everything is confidential under strict NDA."
  },
  {
    question: "What Happens If You Find Critical Vulnerabilities?",
    answer: "We document everything with severity ratings, reproducible proof-of-concepts, and step-by-step remediation guidance. We don't disclose anything to third parties."
  },
  {
    question: "Do You Provide Remediation Guidance?",
    answer: "Yes. Each finding includes step-by-step remediation steps, code examples, implementation priority, and mitigation strategies."
  },
  {
    question: "Are You Compliant With UAE PDPL, SAMA Guidelines, And GCC Regulations?",
    answer: "Yes. Every finding is mapped to UAE PDPL, SAMA AI Guidelines, UAE AI Principles, and Saudi NDAL framework."
  }
];