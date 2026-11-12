export interface Project {
  id: string;
  title: string;
  category: "AI & ML" | "Cybersecurity" | "Hybrid Core";
  subtitle: string;
  description: string;
  architectureDetails: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  bentoSpan: "col-span-12 lg:col-span-8" | "col-span-12 lg:col-span-4" | "col-span-12 lg:col-span-6";
  imageBg: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  badgeType: "Gold" | "Cyan";
  skillsVerified: string[];
}

export interface ExperienceTimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "Experience" | "Achievement" | "Research" | "Hackathon";
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; tag: string }[];
}

import { PERSONAL_BRAND } from "./personal";
export { PERSONAL_BRAND };

export const PROJECTS: Project[] = [
  {
    id: "sentinel-rag-engine",
    title: "Sentinel Neural RAG & Hybrid Vector Pipeline",
    category: "AI & ML",
    subtitle: "Enterprise Autonomous Knowledge Retrieval Engine",
    description: "Built a high-performance RAG pipeline utilizing hybrid dense-sparse vector search (Qdrant + BM25) and cross-encoder re-ranking. Engineered to ingest 500k+ enterprise cybersecurity documents with zero-trust token isolation.",
    architectureDetails: [
      "Hybrid Qdrant dense vector search combined with BM25 sparse keyword ranking",
      "BGE-Large embedding pipeline optimized with TensorRT INT8 quantization",
      "Dynamic prompt sanitization layer neutralizing prompt injection payloads in real time"
    ],
    metrics: [
      { label: "Query Retrieval Time", value: "18ms" },
      { label: "Adversarial Defense", value: "100% Injection Blocked" },
      { label: "Context Accuracy", value: "94.8% MRR@10" }
    ],
    tags: ["Python", "Qdrant", "PyTorch", "TensorRT", "FastAPI", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.sentinel-rag.ai",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-8",
    imageBg: "from-cyan-950/40 via-zinc-900 to-black"
  },
  {
    id: "ebpf-zero-trust-sentinel",
    title: "Kernel-Level eBPF Threat Observer",
    category: "Cybersecurity",
    subtitle: "Real-Time Microsegmentation & Packet Inspection",
    description: "Developed a lightweight Linux eBPF kernel module capturing socket events, process execution, and memory mapping anomalies. Automatically executes container microsegmentation upon detecting privilege escalation signatures.",
    architectureDetails: [
      "Hooks directly into Linux kernel tracepoints using Cilium eBPF libraries",
      "Ring buffer telemetry stream processing 2.4M packets per second with <0.5% CPU overhead",
      "Integrates with SIEM via gRPC stream to dispatch mitigation rules dynamically"
    ],
    metrics: [
      { label: "Kernel Overhead", value: "<0.4% CPU" },
      { label: "Detection SLA", value: "<1.2ms" },
      { label: "Packet Throughput", value: "2.4M pps" }
    ],
    tags: ["C", "Rust", "eBPF", "Linux Kernel", "gRPC", "Prometheus"],
    githubUrl: "https://github.com",
    liveUrl: "https://ebpf-sentinel.io",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-4",
    imageBg: "from-amber-950/30 via-zinc-900 to-black"
  },
  {
    id: "multi-agent-secops",
    title: "Multi-Agent Security Triage Orchestrator",
    category: "Hybrid Core",
    subtitle: "LLM-Driven Incident Response & Exploit Synthesizer",
    description: "Multi-agent autonomous framework utilizing specialized LLM agents (Recon Agent, Vulnerability Classifier, Exploit Verification Agent, Patch Authoring Agent) to automate SOC Level 1 & 2 incident response.",
    architectureDetails: [
      "Directed Acyclic Graph (DAG) workflow engine running LangGraph orchestration",
      "Sandboxed Docker execution environment for verifying zero-day exploit PoCs safely",
      "Human-in-the-loop review interface generating automated Git pull requests for vulnerability fixes"
    ],
    metrics: [
      { label: "Mean Time to Repair (MTTR)", value: "Reduced by 82%" },
      { label: "Triage Accuracy", value: "96.2%" },
      { label: "PoC Verification Rate", value: "100% Isolated" }
    ],
    tags: ["LangGraph", "Python", "Docker API", "OpenAI API", "React", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://agentic-secops.ai",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-4",
    imageBg: "from-cyan-950/30 via-zinc-900 to-black"
  },
  {
    id: "quantum-lattice-vault",
    title: "Post-Quantum Lattice Key Management Vault",
    category: "Cybersecurity",
    subtitle: "NIST ML-KEM Cryptographic Key Rotation Engine",
    description: "Implemented a post-quantum cryptographic vault incorporating NIST ML-KEM (Kyber) lattice key exchange and Kyber-768 encryption algorithms for ultra-secure secrets storage and microservice key rotation.",
    architectureDetails: [
      "Pure C++20 implementation of Kyber lattice polynomial matrix operations",
      "Hardware Security Module (HSM) fallback interface with PKCS#11 support",
      "Zeroized memory handling preventing cold boot attacks and memory dump leaks"
    ],
    metrics: [
      { label: "NIST Compliance", value: "ML-KEM 768" },
      { label: "Key Exchange Time", value: "0.42ms" },
      { label: "Memory Safety", value: "100% Zeroized" }
    ],
    tags: ["C++20", "Post-Quantum Crypto", "Rust", "Vault API", "Linux Security"],
    githubUrl: "https://github.com",
    featured: true,
    bentoSpan: "col-span-12 lg:col-span-8",
    imageBg: "from-yellow-950/20 via-zinc-900 to-black"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "oscp",
    title: "Offensive Security Certified Professional (OSCP)",
    issuer: "OffSec",
    issueDate: "2025",
    credentialId: "OSCP-884920",
    verifyUrl: "https://www.offsec.com",
    badgeType: "Gold",
    skillsVerified: ["Penetration Testing", "Buffer Overflow", "Active Directory Attacks", "Privilege Escalation"]
  },
  {
    id: "aws-ml-spec",
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    issueDate: "2025",
    credentialId: "AWS-MLS-90234",
    verifyUrl: "https://aws.amazon.com",
    badgeType: "Cyan",
    skillsVerified: ["SageMaker", "Model Deployment", "Feature Engineering", "Distributed Training"]
  },
  {
    id: "security-plus",
    title: "CompTIA Security+ (SY0-701)",
    issuer: "CompTIA",
    issueDate: "2024",
    credentialId: "COMP-SEC-77391",
    verifyUrl: "https://www.comptia.org",
    badgeType: "Gold",
    skillsVerified: ["Network Security", "Cryptography", "Identity & Access Management", "Risk Analysis"]
  },
  {
    id: "deep-learning-ai",
    title: "Generative AI Engineering & LLM Architecture",
    issuer: "DeepLearning.AI",
    issueDate: "2024",
    credentialId: "DLAI-GENAI-11029",
    verifyUrl: "https://deeplearning.ai",
    badgeType: "Cyan",
    skillsVerified: ["Transformers", "LoRA Fine-tuning", "Vector Databases", "Prompt Engineering"]
  }
];

export const EXPERIENCE_TIMELINE: ExperienceTimelineItem[] = [
  {
    id: "ai-sec-lead",
    role: "Senior AI & Cybersecurity Systems Engineer",
    organization: "Apex Cyber Intelligence Labs",
    period: "2025 - Present",
    type: "Experience",
    summary: "Leading the development of production-grade neural intrusion detection systems and zero-trust microservice mesh.",
    highlights: [
      "Architected LLM security wrapper handling 5M daily queries with zero prompt injection breaches.",
      "Engineered eBPF network monitoring reducing incident triage overhead by 65%.",
      "Spearheaded post-quantum cryptography migration across internal secrets storage."
    ],
    technologies: ["PyTorch", "eBPF", "C++", "Python", "Qdrant", "Kubernetes"]
  },
  {
    id: "ml-engineer-intern",
    role: "Machine Learning Infrastructure Fellow",
    organization: "Neural Core Research",
    period: "2024 - 2025",
    type: "Experience",
    summary: "Built model optimization scripts and distributed data pipelines for LLM fine-tuning.",
    highlights: [
      "Optimized Llama-3 8B model inference using TensorRT-LLM, cutting GPU VRAM consumption by 40%.",
      "Designed synthetic dataset generator producing 2M high-fidelity cybersecurity attack vectors."
    ],
    technologies: ["TensorRT", "vLLM", "Docker", "AWS SageMaker", "Python"]
  },
  {
    id: "hackathon-participant",
    role: "National-Level Hackathon Participant",
    organization: "CyberDefense Summit 2025",
    period: "2025",
    type: "Hackathon",
    summary: "Participated in national-level technical hackathons focused on intelligent malware analysis and security automation.",
    highlights: [
      "Built Ghidra headless integration with Llama-3 for automated binary decompilation and CVE mapping.",
      "Delivered live demonstration identifying memory leaks in synthetic firmware binaries."
    ],
    technologies: ["Ghidra API", "Python", "LLMs", "C", "Reverse Engineering"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Machine Learning Core",
    iconName: "Cpu",
    description: "Deep learning models, neural architecture design, and high-throughput inference.",
    skills: [
      { name: "PyTorch / TensorFlow", level: 95, tag: "Expert" },
      { name: "Transformers & LLMs (HuggingFace)", level: 92, tag: "Expert" },
      { name: "TensorRT & Model Quantization", level: 88, tag: "Advanced" },
      { name: "Vector DBs (Qdrant, Chroma, Pinecone)", level: 90, tag: "Expert" },
      { name: "RAG & LangChain / LangGraph", level: 94, tag: "Expert" },
      { name: "vLLM & Distributed Inference", level: 85, tag: "Advanced" }
    ]
  },
  {
    title: "Cybersecurity & Warfare",
    iconName: "Shield",
    description: "Kernel observation, binary reverse engineering, threat hunting, and cryptography.",
    skills: [
      { name: "eBPF & Linux Kernel Tracepoints", level: 88, tag: "Advanced" },
      { name: "Penetration Testing (OSCP Standard)", level: 92, tag: "Expert" },
      { name: "Post-Quantum Cryptography (ML-KEM)", level: 85, tag: "Advanced" },
      { name: "Ghidra / Binary Reverse Engineering", level: 86, tag: "Advanced" },
      { name: "Zero Trust Architecture & Microsegmentation", level: 90, tag: "Expert" },
      { name: "Adversarial AI Defense & Sanitization", level: 95, tag: "Expert" }
    ]
  },
  {
    title: "Systems Engineering & Infrastructure",
    iconName: "Terminal",
    description: "Production-ready backend architecture, cloud infrastructure, and low-level code.",
    skills: [
      { name: "Python / C++ / Rust", level: 94, tag: "Expert" },
      { name: "TypeScript & Next.js 15", level: 90, tag: "Expert" },
      { name: "Docker & Kubernetes Orchestration", level: 88, tag: "Advanced" },
      { name: "AWS / GCP Cloud Architecture", level: 87, tag: "Advanced" },
      { name: "gRPC & High-Performance Telemetry", level: 89, tag: "Advanced" },
      { name: "CI/CD & Infrastructure as Code", level: 88, tag: "Advanced" }
    ]
  }
];
