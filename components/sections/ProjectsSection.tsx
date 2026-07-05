import { projects } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsSection() {
  return (
    <Section id="projects" label="#1 Build" heading="Projects">
      <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:grid-rows-[repeat(5,auto)] md:gap-x-8 md:gap-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
