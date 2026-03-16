# CleanAlta Thailand - Ultimate deployment package

This package is the final corrected static site prepared from the comparative review of the two supplied folders.

## What was kept
- The stronger corporate structure from the GitHub-ready package
- The CleanAlta visual system from the supplied graphic charter
- Real local field images stored inside the repository
- The multilingual routing and hreflang logic already corrected

## What was fixed
- Manual Google Analytics 4 tag added to every HTML page with measurement ID `G-W3W5V675HM`
- CSP updated in `_headers` to allow Google tag loading on hosts that support custom headers
- Legal, privacy and cookies pages added in 4 languages
- Footer legal links added sitewide
- 404 metadata completed
- Final sitemap regenerated after page additions
- Comparative audit notes included in `AUDIT-COMPARATIVE.md`

## Deployment
1. Push the full folder content to the repository root
2. Deploy on GitHub Pages, Netlify or Cloudflare Pages
3. If the production domain changes, update canonical URLs and `robots.txt`
4. Replace provisional legal publisher fields before public launch if a Thai operating entity is finalized

## Analytics
The package uses the exact manual snippet requested by the client:
- Google Analytics measurement ID: `G-W3W5V675HM`
- Google tag reference noted by the client: `GT-P3688WVW`

## QA
Run the included review manually after upload:
- home pages in all 4 languages
- contact page brief generation
- WhatsApp and LINE links
- legal, privacy and cookies pages
- sitemap and robots
