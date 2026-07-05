import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "outline";
};

export function Button({ variant = "solid", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-mono text-sm font-medium transition-colors";
  const variants = {
    solid: "bg-accent text-on-accent hover:bg-accent-hover",
    outline:
      "border border-foreground/20 text-foreground hover:border-accent-text hover:text-accent-text",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
