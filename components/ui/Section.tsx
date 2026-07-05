import type { ReactNode } from "react";
import { SectionLabel } from "./SectionLabel";
import { FadeIn } from "./FadeIn";

type SectionProps = {
  id: string;
  label: string;
  heading: string;
  blurb?: string;
  children: ReactNode;
};

export function Section({ id, label, heading, blurb, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="py-6 sm:py-8">
      <div className="container-page px-4 sm:px-6">
        <FadeIn className="mb-12 space-y-4">
          <SectionLabel>{label}</SectionLabel>
          <h2
            id={headingId}
            className="text-section-heading font-sans font-bold text-foreground"
          >
            {heading}
          </h2>
          {blurb && <p className="max-w-xl text-muted">{blurb}</p>}
        </FadeIn>
        {children}
      </div>
    </section>
  );
}
