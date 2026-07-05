import { FadeIn } from "@/components/ui/FadeIn";

type ResumeEntryCardProps = {
  title: string;
  subtitle: string;
  dateRange: string;
  summary?: string;
  highlights?: string[];
};

export function ResumeEntryCard({
  title,
  subtitle,
  dateRange,
  summary,
  highlights,
}: ResumeEntryCardProps) {
  return (
    <FadeIn className="border-t border-foreground/10 py-10 first:border-t-0 sm:py-12">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h3>
          <p className="text-muted">{subtitle}</p>
        </div>
        <p className="font-mono text-xs text-accent-text sm:shrink-0">{dateRange}</p>
      </div>
      {summary && <p className="mt-4 max-w-2xl text-muted">{summary}</p>}
      {highlights && highlights.length > 0 && (
        <ul className="mt-4 space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <span aria-hidden="true" className="text-accent-text">
                –
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </FadeIn>
  );
}
