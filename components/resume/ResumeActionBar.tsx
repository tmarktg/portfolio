import { basePath } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function ResumeActionBar() {
  const lastUpdated = new Date().toISOString().slice(0, 10);

  return (
    <div className="no-print border-b border-foreground/10 bg-background/80">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex flex-wrap gap-3">
          <Button href={`${basePath}/resume.txt`} variant="outline">
            Plaintext
          </Button>
        </div>
        <p className="font-mono text-xs text-muted">last updated: {lastUpdated}</p>
      </div>
    </div>
  );
}
