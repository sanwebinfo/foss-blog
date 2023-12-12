# FOSS Blog

[![Build and Publish](https://github.com/sanwebinfo/foss-blog/actions/workflows/build.yml/badge.svg)](https://github.com/sanwebinfo/foss-blog/actions/workflows/build.yml) [![cf-pages](https://github.com/sanwebinfo/foss-blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/sanwebinfo/foss-blog/actions/workflows/deploy.yml)  

A blog for sharing a topic related to FOSS, Sports and Random things.  

## Tech Stack

- Deno and Lume static site generator
- A simple and minimal `lume` theme - <https://github.com/lumeland/theme-simple-blog>  

```js
import lume from "lume/mod.ts";
import blog from "https://raw.githubusercontent.com/lumeland/theme-simple-blog/main/mod.ts";

const site = lume();

site.use(blog());

export default site;
```

- Vento template engine
- Markdown
- Free Static Site Hosting at Cloudflare Pages

## LICENSE

MIT
