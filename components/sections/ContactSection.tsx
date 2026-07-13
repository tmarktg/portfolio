import { contact } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { GlyphDivider } from "@/components/ui/GlyphDivider";
import { GitHubIcon } from "@/lib/icons";
import { RevealEmail } from "@/components/ui/RevealEmail";

export function ContactSection() {
  return (
    <Section id="contact" label="#4 Connect" heading="Contact">
      <div className="space-y-8">
        <p className="max-w-xl text-lg text-muted">
          Open to software engineering and DevOps roles - cleared and civilian.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <RevealEmail variant="text" />
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-foreground transition-colors hover:text-accent-text"
          >
            <GitHubIcon className="h-4 w-4" />
            {contact.github.replace("https://", "")}
          </a>
        </div>
        <GlyphDivider />
        <TerminalBlock lines={["$ contact --email <click above to reveal>"]} />
      </div>
    </Section>
  );
}
