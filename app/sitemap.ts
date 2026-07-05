import type { MetadataRoute } from "next";
import { siteUrl, basePath } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}${basePath}/resume/`, lastModified: new Date() },
  ];
}
