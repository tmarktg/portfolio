// Serializes lib/resume.ts's basics/resumeData into a plain-text resume,
// written to public/resume.txt. No dependency on rendered HTML, so this runs
// before `next build` — Next's static export copies everything already in
// public/ into out/, so out/resume.txt needs no extra copy step.
// No email/phone anywhere — data/resume.json's basics has neither field at
// all (see lib/resume.ts), and the contact line below is a fixed string
// pointing at the site's obfuscated-email reveal button instead.
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { basics, resumeData } from "../lib/resume";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WIDTH = 80;

function wrap(text: string, width = WIDTH): string {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > width) {
      lines.push(line.trim());
      line = word;
    } else {
      line = `${line} ${word}`.trim();
    }
  }
  if (line) lines.push(line);
  return lines.join("\n");
}

function heading(title: string): string {
  const bar = "-".repeat(WIDTH);
  return `${bar}\n${title.toUpperCase()}\n${bar}`;
}

const lines: string[] = [];

lines.push("=".repeat(WIDTH));
lines.push(basics.name);
lines.push(basics.label);
if (basics.clearance) lines.push(`Active DoD ${basics.clearance} Clearance`);
lines.push("=".repeat(WIDTH));
lines.push("");
lines.push(
  wrap(
    [
      `${basics.location.city}, ${basics.location.region}`,
      ...basics.profiles.map((p) => p.url),
    ].join(" | ")
  )
);
lines.push("contact: see marktruong.com/#contact");
lines.push("");
lines.push(wrap(basics.summary));
lines.push("");

lines.push(heading("Experience"));
for (const job of resumeData.work) {
  lines.push("");
  lines.push(`${job.position}, ${job.name} (${job.startDate} - ${job.endDate})`);
  if (job.summary) lines.push(wrap(job.summary));
  for (const item of job.highlights) {
    lines.push(wrap(`- ${item}`));
  }
}
lines.push("");

lines.push(heading("Education"));
for (const edu of resumeData.education) {
  lines.push("");
  lines.push(
    wrap(
      `${edu.studyType}, ${edu.area}, ${edu.institution}${
        edu.score ? ` — ${edu.score}` : ""
      } (${edu.startDate} - ${edu.endDate})`
    )
  );
}
lines.push("");

lines.push(heading("Projects"));
for (const project of resumeData.projects) {
  lines.push("");
  lines.push(project.name);
  lines.push(wrap(project.description));
  lines.push(project.keywords.join(", "));
  if (project.url) lines.push(project.url);
}
lines.push("");

lines.push(heading("Skills"));
for (const group of resumeData.skills) {
  lines.push("");
  lines.push(wrap(`${group.name}: ${group.keywords.join(", ")}`));
}
lines.push("");

const outPath = path.join(ROOT, "public", "resume.txt");
writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outPath}`);
