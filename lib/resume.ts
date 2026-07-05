import rawResume from "@/data/resume.json";
import { siteUrl } from "@/lib/site-config";

// The only place data/resume.json is imported directly — every consumer
// (the /resume page and the build scripts) imports from here instead, so
// a future data/resume-devops.json variant is a one-line change in this
// file, not a hunt across the codebase.
//
// This file only types the fields actually consumed, not the full JSON
// Resume schema. Runtime validation against the real schema is
// scripts/validate-resume.ts's job — the type assertion below is an
// editor-ergonomics convenience only, not a runtime guarantee.
//
// basics deliberately has no email/phone fields — those were removed from
// data/resume.json entirely (not just excluded at render time) per the
// site's privacy requirements. The only place the email address exists
// anywhere in this codebase is the encoded constant in
// components/ui/RevealEmail.tsx.

export type ResumeLocation = {
  city: string;
  region: string;
  countryCode: string;
};

export type ResumeProfile = {
  network: string;
  username: string;
  url: string;
};

export type ResumeBasics = {
  name: string;
  label: string;
  url: string;
  summary: string;
  location: ResumeLocation;
  profiles: ResumeProfile[];
  clearance?: string;
};

export type ResumeWork = {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  summary?: string;
  highlights: string[];
};

export type ResumeEducation = {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score?: string;
};

export type ResumeProject = {
  name: string;
  description: string;
  keywords: string[];
  url?: string;
};

export type ResumeSkill = {
  name: string;
  keywords: string[];
};

export type ResumeMeta = {
  version: string;
  lastModified: string;
};

export type ResumeData = {
  basics: ResumeBasics;
  work: ResumeWork[];
  education: ResumeEducation[];
  projects: ResumeProject[];
  skills: ResumeSkill[];
  certificates: unknown[];
  meta: ResumeMeta;
};

const resumeData = rawResume as ResumeData;

export { resumeData };

// The JSON's basics.url is an inert placeholder (matches the rest of the
// site's pattern of never hardcoding a guessed deployment URL) — always
// overridden here with the real siteUrl computed from SITE_URL / GitHub
// Pages' configure-pages output, never read literally from the JSON.
export const basics: ResumeBasics = { ...resumeData.basics, url: siteUrl };
