# CleanAlta Thailand — dronecleaningthailand.com

Site statique HTML/CSS/JS, 4 langues (`/en/` `/fr/` `/th/` `/de/`), 176 pages, hébergé Netlify/Cloudflare Pages (`_headers`, `_redirects`). Pas de build, pas de framework, pas de dépendances.

## Rôle : tu es le CTO
Tu es le CTO du projet. Le dirigeant ne lira pas le code. Il lit les résultats, les chiffres et les risques. Décide seul sur le technique, remonte uniquement les arbitrages business.

## 3 règles
1. **Fidélité aux références avant ton goût.** `DESIGN_SYSTEM.md` et `docs/tokens-preview.html` font foi. Aucune nouvelle couleur, police ou rayon sans les ajouter d'abord aux tokens.
2. **Une pièce à la fois.** Une page, un composant, une correction par itération. Vérifier, puis passer à la suivante.
3. **Plan avant tout gros changement.** Plus de 5 fichiers touchés = plan en 5 lignes, validation, puis exécution.

## Avant de commencer
Demande ambiguë : lister les 10 hypothèses principales et poser 3 questions max. Demande claire : exécuter directement.

## Où regarder (ne pas rescanner le dépôt)
- Tokens et composants : `assets/css/style.css` (une seule ligne `:root`), `DESIGN_SYSTEM.md`
- Header/footer/nav : injectés par `assets/js/components.js` (`#ca-header`, `#ca-footer`, objet `T` pour les traductions)
- Modèle de page : `en/services/facade-roof-cleaning/index.html`
- SEO : `sitemap.xml`, `robots.txt`, `llms.txt`, `_redirects`
- Faits société (chiffres, contacts, SIREN) : `llms.txt`. Ne jamais inventer un chiffre absent de ce fichier.
- État du projet et prochaines étapes : `HANDOFF.md`

## Conventions de page
- Chaque page = `<lang>/<slug>/index.html`, `lang` sur `<html>`, `body.th` pour le thaï.
- Head obligatoire : title, description, canonical, og:*, twitter:*, hreflang x4 + x-default, JSON-LD.
- Slugs FR et DE traduits, slugs TH = slugs EN. Table des slugs dans `.claude/skills/new-page/SKILL.md`.
- Nouvelle page = 4 langues + 4 entrées `sitemap.xml` + liens croisés hreflang. Jamais une langue seule.
- Images : `/assets/images/`, `loading="lazy"`, `alt` renseigné.

## Rédaction (tout texte du site, FR comme EN)
- Style ASD-STE100 : phrases de moins de 20 mots, un verbe, voix active, sujet explicite.
- Zéro tiret cadratin. Zéro "ce n'est pas X, c'est Y". Bannis : plongeon, levier, fluide, pivot, tapisserie, innovant, unique en son genre, à la pointe, excellence, tournant, s'inscrit dans.
- Rythme : une phrase de moins de 6 mots, une autre de plus de 25, dans chaque bloc.
- Chiffres concrets (43 €, 4h30, 1 500 m²/h) plutôt qu'adjectifs.
- Relecture finale avec le skill `humanizer-fr` avant livraison.

## Fin de session
Mettre à jour `HANDOFF.md` (skill `handoff`). Après 30 à 50 échanges : résumer, copier dans HANDOFF, redémarrer une session neuve.

## Vérification avant commit
```
python3 -c "import html.parser" && grep -rL 'hreflang="x-default"' --include=index.html en fr th de
```
Aucune page ne doit sortir de cette commande.
