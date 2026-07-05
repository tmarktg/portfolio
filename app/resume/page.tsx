import type { Metadata } from "next";
import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { ResumeActionBar } from "@/components/resume/ResumeActionBar";
import { ResumeEntryCard } from "@/components/resume/ResumeEntryCard";
import { ResumeProjectCard } from "@/components/resume/ResumeProjectCard";
import { basics, resumeData } from "@/lib/resume";
import { GitHubIcon } from "@/lib/icons";
import { RevealEmail } from "@/components/ui/RevealEmail";

export const metadata: Metadata = {
  title: "Resume — Mark Truong",
  description: basics.summary,
};

function findProfile(network: string) {
  return basics.profiles.find(
    (p) => p.network.toLowerCase() === network.toLowerCase(),
  );
}

export default function ResumePage() {
  const github = findProfile("github");

  return (
    <div className="resume-print-fallback">
      <SiteNav />
      <ResumeActionBar />
      <main>
        <section className="pt-16 pb-8 sm:pt-20">
          <div className="container-page space-y-6 px-4 sm:px-6">
            <p className="font-mono text-sm text-accent-text tracking-wide">
              {basics.label.toUpperCase()}
            </p>
            <h1 className="text-section-heading font-sans font-bold text-foreground">
              {basics.name}
            </h1>
            <p className="max-w-2xl text-lg text-muted">{basics.summary}</p>
            {basics.clearance && (
              <p className="inline-block w-fit rounded border border-accent-text/30 px-3 py-1 font-mono text-xs text-accent-text">
                Active DoD {basics.clearance} Clearance
              </p>
            )}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <RevealEmail variant="text" />
              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-foreground transition-colors hover:text-accent-text"
                >
                  <GitHubIcon className="h-4 w-4" />
                  {github.url.replace("https://", "")}
                </a>
              )}
            </div>
          </div>
        </section>

        <Section id="experience" label="#1 Experience" heading="Experience">
          <div>
            {resumeData.work.map((job) => (
              <ResumeEntryCard
                key={job.name + job.position}
                title={job.position}
                subtitle={job.name}
                dateRange={`${job.startDate} — ${job.endDate}`}
                summary={job.summary}
                highlights={job.highlights}
              />
            ))}
          </div>
        </Section>

        <Section id="education" label="#2 Education" heading="Education">
          <div>
            {resumeData.education.map((edu) => (
              <ResumeEntryCard
                key={edu.institution + edu.studyType}
                title={`${edu.studyType}, ${edu.area}`}
                subtitle={edu.institution}
                dateRange={`${edu.startDate} — ${edu.endDate}`}
                summary={edu.score}
              />
            ))}
          </div>
        </Section>

        <Section id="projects" label="#3 Projects" heading="Projects">
          <div>
            {resumeData.projects.map((project) => (
              <ResumeProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section id="skills" label="#4 Skills" heading="Skills">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resumeData.skills.map((group) => (
              <div key={group.name} className="space-y-3">
                <h3 className="font-mono text-sm text-accent-text">
                  {group.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.keywords.map((keyword) => (
                    <li
                      key={keyword}
                      className="rounded border border-foreground/10 px-2 py-1 font-mono text-xs text-muted"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <div className="pb-24 sm:pb-32" />
      </main>
      <Footer />
    </div>
  );
}
