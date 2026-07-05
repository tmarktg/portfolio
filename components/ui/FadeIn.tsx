"use client";

import { useEffect, useRef, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
};

// The "pending" (dimmed) class is only ever applied inside useEffect, which
// only runs once React has hydrated. A browser with JavaScript disabled
// never receives it, so the server-rendered markup stays fully visible —
// the fade is a pure progressive enhancement, never a requirement.
export function FadeIn({ children, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.classList.add("fade-pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.remove("fade-pending");
          node.classList.add("fade-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
