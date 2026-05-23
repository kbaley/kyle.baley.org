# kyle.baley.org

Modern static personal site for Kyle Baley, replacing the old Jekyll blog with an Astro landing site and archived writing.

## Stack

- Astro static output
- Plain CSS
- No Jekyll runtime
- Sitemap generation through `@astrojs/sitemap`

## Install

```bash
npm install
```

## Local Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

The generated static site is written to `dist/`.

## Deployment Notes

This site is static and suitable for GitHub Pages, Netlify, Cloudflare Pages, Azure Static Web Apps, or similar hosting.

The production site at `kyle.baley.org` deploys through GitHub Actions on every push to `main`.

Set the build command to:

```bash
npm run build
```

Set the publish/output directory to:

```bash
dist
```

## Editing Case Studies

The homepage case-study placeholders live in:

```text
src/pages/index.astro
```

Edit the `cases` array near the top of that file. Each case has:

- `title`
- `problem`
- `approach`
- `result`

## Editing Homepage Services / Stack

The "What I Do" and "Technical Stack" sections are also data arrays in:

```text
src/pages/index.astro
```

Edit `services` or `stacks` and rebuild.

## Blog Archive Migration

Old posts are stored in:

```text
_posts
```

Astro reads those files at build time through:

```text
src/lib/archive.ts
```

The new archive index is available at:

```text
/writing/archive/
```

There is also a shorter alias:

```text
/archive/
```

Archived posts are generated under:

```text
/archive/YYYY/MM/post-slug/
```

The old Jekyll permalink pattern was:

```text
/:year/:month/:title
```

For reasonable URL preservation, Astro also generates static redirect pages at the old paths:

```text
/YYYY/MM/post-slug/
```

Those pages immediately redirect to the new archive URL for the same post.

Legacy images from the old Jekyll `assets` directory were copied to:

```text
public/legacy-assets
```

The archive renderer rewrites old `/assets/...` references to `/legacy-assets/...`.

## LinkedIn Context

The homepage uses public LinkedIn context from Kyle's profile, including current association with NimblePros, 25+ years of software engineering and consulting experience, and the Manning publication "Brownfield Application Development in .NET."
