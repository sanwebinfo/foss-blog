import lume from "lume/mod.ts";
import blog from "https://raw.githubusercontent.com/lumeland/theme-simple-blog/main/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
          
const port = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8000;
const site = lume({
    location: new URL("https://foss.sanweb.info/"),
    server: {
        port: port
    }
});

site
  .ignore(
    "README.md",
    "CHANGELOG.md",
    "node_modules",
    "LICENSE",
    "renovate.json",
    "_cache"
  )
  .use(blog({}))
  .copy("favicon.svg")
  .copy("icon-foss.png")
  .use(favicon())
  .use(minifyHTML());

export default site;