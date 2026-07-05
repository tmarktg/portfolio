import Image from "next/image";
import { basePath } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { TerminalBlock } from "@/components/ui/TerminalBlock";

export function Hero() {
  return (
    <section className="pt-6 pb-6 sm:pt-8 sm:pb-8">
      <div className="container-page px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            <p className="font-mono text-sm text-accent-text tracking-wide">
              SOFTWARE ENGINEER • SAN DIEGO, CA
            </p>
            <h1 className="text-hero font-sans font-bold text-foreground">
              <span className="block">Build.</span>
              <span className="block">Ship.</span>
              <span className="block">Iterate.</span>
            </h1>
            <p className="max-w-xl text-lg text-muted">
              Full-stack engineer specializing in Python, TypeScript, and cloud
              infrastructure. Active DoD Secret clearance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#projects" variant="solid">
                View Projects
              </Button>
            </div>
            <TerminalBlock
              lines={["$ whoami", "full-stack engineer → devops → cleared defense tech"]}
            />
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-foreground/10 lg:aspect-auto lg:h-[560px]">
            <Image
              src={`${basePath}/hero.jpg`}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
