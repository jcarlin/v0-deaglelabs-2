# deaglelabs.com

Marketing site for Deagle Labs.

## Stack

Pure static HTML / CSS / JS. No build step, no framework.

## Local preview

Open `index.html` in a browser. Or:

```sh
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In Vercel: **New Project** → import the repo.
3. Framework Preset: **Other**
4. Build Command: *(leave empty)*
5. Output Directory: `.` *(or leave empty)*
6. Deploy.
7. Add your custom domain (`deaglelabs.com`) under **Project Settings → Domains** and follow the DNS instructions.

That's it — Vercel will serve the static files directly.

## Files

| File | Purpose |
|---|---|
| `index.html` | Single-page marketing site |
| `styles.css` | All styles |
| `demo.js` | Interactive "Let me Deagle that" widget |
| `site.js` | Reveal-on-scroll, mobile menu, FAQ, demo modal |
| `favicon.svg` / `favicon.png` | Brand mark |

## Brand

- Type: Geist + Geist Mono (Google Fonts)
- Primary: `#5C9CFF` electric blue (CTAs)
- Warm accent: `#F26B5C` coral (moments of yes)
- Surface: `#0A0A09` void
- Cream pricing surface: `#F2EFE7`

## Demo form

The "Book a Demo" form currently fakes a success state. To wire it to Formspree:

1. Get a form ID from formspree.io
2. In `site.js`, replace the `form.addEventListener('submit', ...)` body with a `fetch` to `https://formspree.io/f/YOUR_ID`.

## License

© 2026 Deagle Labs. All rights reserved.
