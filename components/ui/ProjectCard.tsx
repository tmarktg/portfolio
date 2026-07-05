import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Project } from "@/lib/content";
import { basePath } from "@/lib/site-config";
import { ArrowUpRightIcon, GitHubIcon } from "@/lib/icons";
import { FadeIn } from "./FadeIn";

// Server Component only — runs at build time under static export, so
// checking the filesystem here is safe (this never runs in the browser).
// Each project's image (lib/content.ts's `image` field, e.g.
// "project-cinephile") can be either a .png or .jpg file under public/ —
// whichever extension exists wins, .png checked first since it's lossless
// and the better fit for most graphics.
function resolveProjectImage(image: string): string {
  const publicDir = path.join(process.cwd(), "public");
  const hasPng = existsSync(path.join(publicDir, `${image}.png`));
  const ext = hasPng ? "png" : "jpg";
  return `${basePath}/${image}.${ext}`;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn className="flex flex-col gap-4 md:grid md:grid-rows-subgrid md:row-span-5">
      <div>
        <span className="font-mono text-sm text-accent-text">{project.number}</span>
        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
        {project.originLink && (
          <a
            href={project.originLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-mono text-xs text-muted transition-colors hover:text-accent-text"
          >
            {project.originLink.label}
          </a>
        )}
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-foreground/10">
        <Image
          src={resolveProjectImage(project.image)}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <p className="text-muted">{project.description}</p>
      <ul className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded border border-foreground/10 px-2 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-mono text-sm text-foreground transition-colors hover:text-accent-text"
      >
        <GitHubIcon className="h-4 w-4" />
        View on GitHub
        <ArrowUpRightIcon className="h-3.5 w-3.5" />
      </a>
    </FadeIn>
  );
}
