import fs from "fs";
import { create as createXMLBuilder } from "xmlbuilder";

const xmlBuilder = createXMLBuilder({ version: "1.0", encoding: "UTF-8" });
const sitemap = xmlBuilder.ele("urlset", {
  xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
});

sitemap.ele("url").ele("loc").txt("https://www.mahmudbuilders.com/");
sitemap.ele("url").ele("loc").txt("https://www.mahmudbuilders.com/projects");
sitemap
  .ele("url")
  .ele("loc")
  .txt("https://www.mahmudbuilders.com/company-profile");
sitemap
  .ele("url")
  .ele("loc")
  .txt("https://www.mahmudbuilders.com/company-team");
sitemap.ele("url").ele("loc").txt("https://www.mahmudbuilders.com/land-owner");
sitemap.ele("url").ele("loc").txt("https://www.mahmudbuilders.com/buyer");
sitemap.ele("url").ele("loc").txt("https://www.mahmudbuilders.com/contact-us");
const sitemapXML = sitemap.end({ prettyPrint: true });

fs.writeFileSync("public/sitemap.xml", sitemapXML);
