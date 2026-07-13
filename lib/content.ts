export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  originLink?: { label: string; url: string };
  /** Base filename (no extension) under public/ — see ProjectCard's image resolution. */
  image: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Cinephile",
    description:
      "Conversational movie recommendation engine built on a RAG pipeline with an agentic LangGraph path, multi-turn context, and an evaluation harness.",
    tags: [
      "Python",
      "FastAPI",
      "Qdrant",
      "FastEmbed",
      "LangGraph",
      "Claude API",
      "React",
    ],
    githubUrl: "https://github.com/tmarktg/cinephile",
    image: "project-cinephile",
  },
  {
    number: "02",
    title: "Serverless Stock Data Pipeline",
    description:
      "Event-driven market data pipeline on AWS — EventBridge → Lambda → DynamoDB → API Gateway → S3 — provisioned with Terraform and deployed via GitHub Actions CI/CD.",
    tags: [
      "AWS Lambda",
      "DynamoDB",
      "EventBridge",
      "Terraform",
      "GitHub Actions",
      "Python",
    ],
    githubUrl: "https://github.com/tmarktg/stocks-serverless-pipeline",
    image: "project-stock-data-pipeline",
  },
  {
    number: "03",
    title: "AI Image Captioning Project",
    description:
      "Image captioning pipeline that grew out of AI Club at SDSU — BLIP generates captions, Claude rewrites them as memes, and Pillow renders them onto the image, served via a FastAPI + React app.",
    tags: [
      "Python",
      "Hugging Face",
      "BLIP",
      "Claude API",
      "Pillow",
      "FastAPI",
      "React",
      "Vite",
    ],
    githubUrl: "https://github.com/tmarktg/image-captioning",
    image: "project-image-captioning",
    originLink: {
      label: "origin: aiclub.sdsu.edu ↗",
      url: "https://aiclub.sdsu.edu",
    },
  },
  {
    number: "04",
    title: "ATO in a Pipeline",
    description:
      "Secure software delivery reference pipeline that hard-blocks on SAST, secrets, and CVE scans, signs and attests every image with Syft/Cosign, and enforces signature and policy checks at Kubernetes admission via Kyverno — with Terraform drift detection and every control mapped to NIST 800-53.",
    tags: [
      "GitLab CI",
      "Semgrep",
      "Gitleaks",
      "Trivy",
      "Syft",
      "Cosign",
      "Kyverno",
      "Kubernetes",
      "Terraform",
      "NIST 800-53",
    ],
    githubUrl: "https://github.com/tmarktg/ato-in-a-pipeline",
    image: "project-ato-in-a-pipeline",
  },
  {
    number: "05",
    title: "PortCheck",
    description:
      "Full-stack cargo entry screening system simulating a port-of-entry workflow — importers file manifests, a risk engine flags shipments, and officers/supervisors review and track them through an Angular console backed by a Spring Boot REST/SOAP API and PostgreSQL, deployable via Docker Compose, Kubernetes, or Terraform-provisioned AWS (ECS Fargate + RDS + ALB).",
    tags: [
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "SOAP",
      "Docker Compose",
      "Kubernetes",
      "Terraform",
      "AWS",
    ],
    githubUrl: "https://github.com/tmarktg/portcheck",
    image: "project-portcheck",
  },
  {
    number: "06",
    title: "Sentinel-Grid",
    description:
      "Sensor-telemetry ingestion and analytics platform that joins an existing field-sensor deployment mid-stream — idempotent ingestion, rolling-window anomaly detection and alerting, a documented REST API, a React operator dashboard, and a C#/.NET notifier consuming that same API as a second-language client, deployed live to AWS via Terraform.",
    tags: [
      "FastAPI",
      "TimescaleDB",
      "Redis",
      "React",
      "C# / .NET",
      "Terraform",
      "AWS EC2",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/tmarktg/sentinel-grid",
    image: "project-sentinel-grid",
  },
];

export type InterestTile = {
  name: string;
  descriptor: string;
  url: string;
  glyph: string;
  /** Base filename (no extension) under public/ — see InterestTile's image resolution. */
  image: string;
};

export const interests: InterestTile[] = [
  {
    name: "gpt-oss",
    descriptor: "OpenAI's open-weight model family.",
    url: "https://github.com/openai/gpt-oss",
    glyph: "[oss]",
    image: "interest-gpt-oss",
  },
  {
    name: "Ollama",
    descriptor: "Running LLMs locally on my own hardware.",
    url: "https://ollama.com",
    glyph: "$_",
    image: "interest-ollama",
  },
  {
    name: "DeepSeek",
    descriptor: "Open research pushing the frontier of efficient models.",
    url: "https://github.com/deepseek-ai",
    glyph: "::",
    image: "interest-deepseek",
  },
  {
    name: "ComfyUI",
    descriptor: "Node-based diffusion pipelines for local image generation.",
    url: "https://www.comfy.org",
    glyph: "{ }",
    image: "interest-comfyui",
  },
  {
    name: "Hermes Agent",
    descriptor:
      "Nous Research's agentic model interface for tool use and reasoning.",
    url: "https://hermes-agent.nousresearch.com",
    glyph: ">_",
    image: "interest-hermes-agent",
  },
  {
    name: "Stable Diffusion",
    descriptor: "Open-source image generation models.",
    url: "https://github.com/Stability-AI/stablediffusion",
    glyph: "◆",
    image: "interest-stable-diffusion",
  },
  {
    name: "OS Development",
    descriptor: "Learning how operating systems work from the bare metal up.",
    url: "https://wiki.osdev.org",
    glyph: "0x00",
    image: "interest-os-development",
  },
  {
    name: "Lichess",
    descriptor: "Free, open-source chess server and analysis platform.",
    url: "https://github.com/lichess-org/lila",
    glyph: "♞",
    image: "interest-lichess",
  },
  {
    name: "Stockfish",
    descriptor: "Open-source chess engine, among the strongest in the world.",
    url: "https://github.com/official-stockfish/stockfish",
    glyph: "♛",
    image: "interest-stockfish",
  },
  {
    name: "Asahi Linux",
    descriptor: "Community-driven Linux support for Apple Silicon Macs.",
    url: "https://asahilinux.org",
    glyph: "⌘",
    image: "interest-asahi-linux",
  },
];

export type Involvement = {
  name: string;
  blurb: string;
  url: string;
};

export const involvements: Involvement[] = [
  {
    name: "AI Club at SDSU",
    blurb: "Built a portfolio project through the club.",
    url: "https://aiclub.sdsu.edu",
  },
  {
    name: "CyberTech Defense (SDSU)",
    blurb: "Cyber defense club — hands-on security practice.",
    url: "https://www.sdsucyberdefense.org",
  },
];

export const bio =
  "From 2023 to 2025 I studied Computer Science at San Diego State University, graduating summa cum laude with a 3.9 GPA. In early 2026 I worked as a software engineer for CineStar Cinemas, where I owned a production booking platform serving live traffic across multiple client sites. Since then I've been heads-down building a RAG-based movie recommender, a serverless AWS data pipeline, and an AI meme generator, while looking for my next full-time role. Below are the clubs I was a part of in SDSU";

export const contact = {
  github: "https://github.com/tmarktg",
};

export type NavLink = { label: string; href: string; external?: boolean };

export const nav: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume/" },
  { label: "Blog", href: "https://marktruong.dev", external: true },
];
