"use client";

import { useState } from "react";
import { MailIcon } from "@/lib/icons";

// The ONLY place this address exists anywhere in the codebase, and only
// ever in this encoded form. Decoded client-side, only inside the click
// handler below — never during render — so it never appears in the
// server-rendered HTML, the initial hydration state, or a static grep of
// the built output. (Verified: this base64 string contains neither
// "marktruongsha1" nor "gmail" as a substring.)
const ENCODED_EMAIL = "bWFya3RydW9uZ3NoYTFAZ21haWwuY29t";

type RevealEmailProps = {
  variant?: "icon" | "text";
};

export function RevealEmail({ variant = "text" }: RevealEmailProps) {
  const [email, setEmail] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function reveal() {
    const decoded = atob(ENCODED_EMAIL);
    setEmail(decoded);
    try {
      await navigator.clipboard.writeText(decoded);
      setCopied(true);
    } catch {
      // Clipboard API unavailable/denied — the address is still revealed
      // as a working mailto: link below, so this is a soft failure.
    }
  }

  if (email) {
    return (
      <span className="inline-flex items-center gap-2">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 font-mono text-sm text-foreground transition-colors hover:text-accent-text"
        >
          <MailIcon className="h-4 w-4" />
          {variant === "text" && email}
        </a>
        <span aria-live="polite" className="text-xs text-muted">
          {copied ? "Copied to clipboard" : ""}
        </span>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={reveal}
      aria-label="Reveal email address"
      className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent-text"
    >
      <MailIcon className="h-4 w-4" />
      {variant === "text" && "Reveal email"}
    </button>
  );
}
