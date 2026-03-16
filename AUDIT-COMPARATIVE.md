# Comparative audit - CleanAlta Thailand source folders

## Compared folders
- `cleanalta-thailand-github-ready.zip`
- `dronecleaningthailand-V11-CORRECTED.zip`

## Findings

### Folder A - GitHub-ready package
- 130 HTML pages before final corrections
- 0 broken internal links in automated audit
- 0 broken local assets in automated audit
- 0 external hotlinked images or scripts outside Google Fonts
- Stronger corporate hierarchy
- Real field images stored locally
- Cleaner multilingual structure and cleaner page-to-page language switching
- Missing Google Analytics tag
- Missing legal, privacy and cookies pages
- 404 page metadata incomplete
- CSP in `_headers` would have blocked Google tag if analytics was added without changes

### Folder B - V11 corrected package
- 148 HTML pages
- 249 external references to remote images and backgrounds in automated audit
- 1 broken asset reference on the 404 page
- Root page forced redirect to English instead of offering a language selector
- More pages, but weaker deployment hygiene because of hotlinked visuals and heavier marketing claims
- Includes legal, privacy and cookies sections that were not present in Folder A

## Decision
The final package uses Folder A as the base because it is materially cleaner for deployment:
- fewer technical liabilities
- internalized image assets
- cleaner international SEO structure
- stronger corporate tone

Then it integrates the missing governance pieces:
- Google Analytics tag on all pages
- legal, privacy and cookies pages in 4 languages
- footer links to those pages
- CSP update for analytics loading
- regenerated sitemap

## Final automated QA after corrections
The final folder was checked for:
- HTML page count
- broken internal links
- broken local assets
- missing titles
- missing meta descriptions
- missing canonical URLs
- missing hreflang on language pages
- missing Google Analytics tag
