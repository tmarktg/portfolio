import { contact } from "@/lib/content";
import { GitHubIcon, ChessIcon, XIcon } from "@/lib/icons";
import { IconLink } from "@/components/ui/IconLink";
import { RevealEmail } from "@/components/ui/RevealEmail";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="container-page flex flex-col items-center gap-4 px-4 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          Mark Truong · v1.0.0 · © {year}
        </p>
        <div className="flex items-center gap-4">
          <IconLink label="Mark Truong on GitHub" href={contact.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="h-4 w-4" />
          </IconLink>
          <IconLink label="Mark Truong on Chess.com" href={contact.chess} target="_blank" rel="noopener noreferrer">
            <ChessIcon className="h-4 w-4" />
          </IconLink>
          <IconLink label="Mark Truong on X" href={contact.twitter} target="_blank" rel="noopener noreferrer">
            <XIcon className="h-4 w-4" />
          </IconLink>
          <RevealEmail variant="icon" />
        </div>
      </div>
    </footer>
  );
}
