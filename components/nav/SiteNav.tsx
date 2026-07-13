import { nav, contact } from "@/lib/content";
import { basePath } from "@/lib/site-config";
import { GitHubIcon, ChessIcon } from "@/lib/icons";
import { IconLink } from "@/components/ui/IconLink";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav className="container-page flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-4 sm:px-6">
        <a href={`${basePath}/`} className="font-mono text-sm font-medium text-foreground">
          mark@sd:~$
        </a>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-6">
          {nav.map((link) => {
            // Hash links (#projects, etc.) only exist on the homepage, so they
            // must resolve there even when clicked from another page like
            // /resume — otherwise clicking them on /resume does nothing.
            const href = link.external
              ? link.href
              : link.href.startsWith("#")
                ? `${basePath}/${link.href}`
                : `${basePath}${link.href}`;
            return (
              <a
                key={link.href}
                href={href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="font-mono text-xs text-muted transition-colors hover:text-accent-text sm:text-sm"
              >
                {link.label}
              </a>
            );
          })}
          <IconLink label="Mark Truong on GitHub" href={contact.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="h-5 w-5" />
          </IconLink>
          <IconLink label="Mark Truong on Chess.com" href={contact.chess} target="_blank" rel="noopener noreferrer">
            <ChessIcon className="h-5 w-5" />
          </IconLink>
        </div>
      </nav>
    </header>
  );
}
