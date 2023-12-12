---
title: Create a Simple blog in 5 Minutes
description: Create a Simple blog in 5 Minutes using lume the static site generator for deno
date: 2023-12-12T12:57:50
author: Santhosh Veer
tags:
  - FOSS
comments:
  src: https://fosstodon.org/@santhosh/111566294265249397
---

Create a Simple blog in 5 Minutes using lume the static site generator for deno.  

<!--more-->

- Free and Open Source
- Host it on any Free static site Hosting services
- Easy to setup
- less time for setup and spend more time for content creation

## Setup

- Github account
- setup kinsta account for static content hosting
- Connect github and kinsta for auto deployment

## Create Blog

- Refer this repo for blog setup - <https://github.com/lumeland/theme-simple-blog/tree/main/demo>

```js
import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.10.2/mod.ts";

const site = lume();

site.use(blog());

export default site;
```

- Post your content on `/posts` folder
- push and deploy to github and it also deploy and build content to kinsta
- Done

it does not take much time to set up but it takes a few more minutes to understand the site setup and deployment.
