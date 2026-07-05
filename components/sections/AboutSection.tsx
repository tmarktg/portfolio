import Image from "next/image";
import { bio, involvements } from "@/lib/content";
import { basePath } from "@/lib/site-config";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRightIcon } from "@/lib/icons";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-6 sm:py-8">
      <div className="container-page px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="space-y-10">
            <FadeIn className="space-y-4">
              <SectionLabel>#2 Background</SectionLabel>
              <h2
                id="about-heading"
                className="text-section-heading font-sans font-bold text-foreground"
              >
                About
              </h2>
            </FadeIn>
            <p className="max-w-2xl text-lg text-muted">{bio}</p>
            <ul className="space-y-4">
              {involvements.map((item) => (
                <li key={item.name}>
                  <FadeIn>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-1 rounded-md border border-foreground/10 p-5 transition-colors hover:border-accent-text"
                    >
                      <span className="flex items-center gap-1.5 font-semibold text-foreground">
                        {item.name}
                        <ArrowUpRightIcon className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent-text" />
                      </span>
                      <span className="text-sm text-muted">{item.blurb}</span>
                    </a>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-foreground/10 lg:aspect-auto lg:h-full">
            <Image
              src={`${basePath}/SDSU.jpg`}
              alt="San Diego State University"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
