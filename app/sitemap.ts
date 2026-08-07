import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap():MetadataRoute.Sitemap{
  const routes=["","/services","/sectors","/work","/ai-readiness","/about","/blog","/contact","/privacy","/cookies"];
  return routes.map(route=>({url:`https://tekh.co.uk${route}`,lastModified:new Date(),changeFrequency:route==="/blog"?"weekly":"monthly",priority:route===""?1:route==="/ai-readiness"?0.9:0.7}));
}
