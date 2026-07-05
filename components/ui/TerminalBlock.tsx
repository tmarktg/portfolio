type TerminalBlockProps = {
  lines: string[];
};

export function TerminalBlock({ lines }: TerminalBlockProps) {
  return (
    <div className="rounded-md border border-foreground/10 bg-foreground/[0.03] px-5 py-4 font-mono text-sm sm:text-base">
      {lines.map((line, i) => (
        <p key={i} className={i === 0 ? "text-accent-text" : "text-foreground"}>
          {line}
          {i === lines.length - 1 && (
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[1em] w-[0.5ch] translate-y-[0.15em] bg-accent-text animate-blink"
            />
          )}
        </p>
      ))}
    </div>
  );
}
