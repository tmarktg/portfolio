import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { InterestTile as InterestTileType } from "@/lib/content";
import { basePath } from "@/lib/site-config";
import { ArrowUpRightIcon } from "@/lib/icons";

// Server Component only — runs at build time under static export. Mirrors
// ProjectCard's resolver: whichever extension exists under public/ wins,
// checked in this order.
function resolveInterestImage(image: string): string {
  const publicDir = path.join(process.cwd(), "public");
  const ext = ["svg", "png", "jpg"].find((candidate) =>
    existsSync(path.join(publicDir, `${image}.${candidate}`)),
  );
  return `${basePath}/${image}.${ext}`;
}

export function InterestTile({ tile }: { tile: InterestTileType }) {
  return (
    <a
      href={tile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 sm:grid sm:grid-rows-subgrid sm:row-span-3"
    >
      <div>
        <span aria-hidden="true" className="font-mono text-lg text-accent-text">
          {tile.glyph}
        </span>
        <span className="flex items-center gap-1.5 font-semibold text-foreground">
          {tile.name}
          <ArrowUpRightIcon className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent-text" />
        </span>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-foreground/10 transition-colors group-hover:border-accent-text">
        <Image
          src={resolveInterestImage(tile.image)}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <span className="text-sm text-muted">{tile.descriptor}</span>
    </a>
  );
}
