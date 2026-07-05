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
    descriptor: "Nous Research's agentic model interface for tool use and reasoning.",
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
  "B.S. Computer Science, San Diego State University — summa cum laude, 3.9 GPA. ";

export const contact = {
  github: "https://github.com/tmarktg",
};

export type NavLink = { label: string; href: string };

export const nav: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume/" },
];
