---
name: new-page
description: Crée ou traduit une page du site dronecleaningthailand.com dans les 4 langues (en, fr, th, de) avec head SEO complet, hreflang, JSON-LD et entrées sitemap. Utiliser pour toute nouvelle page, nouvelle ville, nouveau service ou article de blog.
---

# Avant d'écrire
1. Lire le modèle : `en/services/facade-roof-cleaning/index.html` (head complet + JSON-LD Service).
2. Lire `DESIGN_SYSTEM.md` pour les classes disponibles. Ne pas créer de CSS.
3. Prendre les chiffres dans `llms.txt`. Rien d'autre.

# Table des slugs de section
| EN | FR | DE | TH |
|---|---|---|---|
| services | services | dienstleistungen | services |
| locations | zones | standorte | locations |
| industries | secteurs | branchen | industries |
| projects | projets | projekte | projects |
| blog | blog | blog | blog |
| about | a-propos | ueber-uns | about |
| contact | contact | kontakt | contact |
| invest | investir | investieren | invest |
| partners | partenaires | partner | partners |
| technology | technologie | technologie | technology |
| compliance | conformite | compliance | compliance |
| legal / privacy | mentions-legales / confidentialite | impressum / datenschutz | legal / privacy |

Slug de page : traduit en FR et DE (sans accent, tirets), identique à l'EN en TH.

# Squelette de page
```html
<!DOCTYPE html><html lang="XX"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>… | CleanAlta</title><meta name="description" content="… (150 caractères max)">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<link rel="canonical" href="https://dronecleaningthailand.com/XX/section/slug/">
<meta property="og:type" content="website"><meta property="og:title" content="…"><meta property="og:description" content="…"><meta property="og:url" content="…"><meta property="og:image" content="/assets/images/….jpg"><meta property="og:locale" content="xx_XX">
<link rel="icon" type="image/png" href="/assets/images/logo-cleanalta-white.png">
<link rel="stylesheet" href="/assets/css/style.css"><link rel="stylesheet" href="/assets/css/header.css"><link rel="stylesheet" href="/assets/css/footer.css">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="…"><meta name="twitter:description" content="…"><meta name="twitter:image" content="…">
<!-- bloc gtag G-W3W5V675HM copié du modèle -->
<link rel="alternate" hreflang="de" href="…"><link rel="alternate" hreflang="en" href="…"><link rel="alternate" hreflang="fr" href="…"><link rel="alternate" hreflang="th" href="…"><link rel="alternate" hreflang="x-default" href="…/en/…">
<script type="application/ld+json">{ … }</script>
</head><body class=""><div id="ca-header"></div><main>
<section class="pg-hero">…</section>
<section class="sec"><div class="ctn">…</div></section>
</main><div id="ca-footer"></div>
<script src="/assets/js/components.js" defer></script><script src="/assets/js/main.js" defer></script>
</body></html>
```
- `body class="th"` pour le thaï. `og:locale` : en_US, fr_FR, th_TH, de_DE.
- JSON-LD : `Service` pour un service, `LocalBusiness` avec `areaServed` pour une ville, `BlogPosting` pour un article, `FAQPage` si une FAQ figure sur la page.

# Corps
- Écrire d'abord l'EN, puis traduire. Tout le corps doit être dans la langue de la page : aucun `<h2>Method</h2>` sur une page FR.
- Passer le texte FR par le skill `humanizer-fr`. EN et DE suivent les mêmes règles (phrases courtes, chiffres, pas de tiret cadratin).
- Un CTA par page, classe `.btn-p`, vers `/XX/contact/`.

# Après écriture
1. Ajouter 4 blocs `<url>` dans `sitemap.xml` (lastmod = date du jour, priority 0.8 service/ville, 0.7 blog).
2. Si la page remplace une ancienne URL, ajouter un 301 dans `_redirects`.
3. Vérifier :
```
grep -L 'hreflang="x-default"' en/…/index.html fr/…/index.html th/…/index.html de/…/index.html
grep -c 'application/ld+json' en/…/index.html fr/…/index.html th/…/index.html de/…/index.html
```
4. Livrer la liste des 4 URL créées.
