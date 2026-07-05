import type { ResumeProject } from "@/lib/resume";
import { ArrowUpRightIcon } from "@/lib/icons";
import { FadeIn } from "@/components/ui/FadeIn";

export function ResumeProjectCard({ project }: { project: ResumeProject }) {
  return (
    <FadeIn className="border-t border-foreground/10 py-10 first:border-t-0 sm:py-12">
      <h3 className="text-xl font-bold text-foreground sm:text-2xl">{project.name}</h3>
      <p className="mt-3 max-w-2xl text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.keywords.map((keyword) => (
          <li
            key={keyword}
            className="rounded border border-foreground/10 px-2 py-1 font-mono text-xs text-muted"
          >
            {keyword}
          </li>
        ))}
      </ul>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm text-foreground transition-colors hover:text-accent-text"
        >
          View project
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </a>
      )}
    </FadeIn>
  );
}
