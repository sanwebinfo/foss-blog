import lume from "lume/mod.ts";
import blog from "https://raw.githubusercontent.com/lumeland/theme-simple-blog/main/mod.ts";

const port = Deno.env.get("PORT") ? Number(Deno.env.get("PORT")) : 8000;
const site = lume({
    location: new URL("https://foss.sanweb.info/"),
    server: {
        port: port
    }
});

site.use(blog({}));
site.ignore("README.md", "LICENSE", "node_modules", "renovate.json");

export default site;