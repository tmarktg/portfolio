import type { AnchorHTMLAttributes, ReactNode } from "react";

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  children: ReactNode;
};

export function IconLink({ label, children, className = "", ...props }: IconLinkProps) {
  return (
    <a
      aria-label={label}
      className={`inline-flex items-center justify-center text-muted transition-colors hover:text-accent-text ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
