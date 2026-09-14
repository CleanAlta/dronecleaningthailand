# HANDOFF — dronecleaningthailand.com

Dernière mise à jour : 2026-09-14. À relire en début de session, à réécrire en fin de session (skill `handoff`).

## État
- Site statique 4 langues, 176 pages, en production sur dronecleaningthailand.com.
- Aucun outil de build. Déploiement par push sur `main` (Netlify/Cloudflare Pages).
- Configuration Claude en place depuis le 2026-09-14 : `CLAUDE.md`, `DESIGN_SYSTEM.md`, `docs/tokens-preview.html`, `.claude/settings.json`, 4 skills.

## Décisions
- Slugs FR et DE traduits, slugs TH identiques aux slugs EN.
- Header et footer injectés en JS (`components.js`), jamais en dur.
- Une seule couleur d'action (teal). Vert réservé aux messages écologie.
- `docs/` est réservé aux fichiers internes : `noindex` via `_headers` et `Disallow` dans `robots.txt`.

## Dette connue (relevée le 2026-09-14)
| Sujet | Volume | Priorité |
|---|---|---|
| Corps de page en anglais sur des pages FR/TH/DE (`<h2>Method</h2>`) | 1 page par langue : `services/nettoyage-facade` et équivalents | Haute |
| Pages sans JSON-LD | 142 sur 176 | Moyenne |
| Diacritiques absents dans `components.js` FR (« echafaudage », « Modelisation ») | objet `T.fr` | Moyenne |
| `X-XSS-Protection` obsolète dans `_headers` | 1 ligne | Basse |

## Prochaines étapes
1. Traduire les 3 pages façade FR/TH/DE (skill `new-page`, section « Corps »).
2. Ajouter le JSON-LD `Service` / `LocalBusiness` / `BlogPosting` aux 142 pages sans balisage.
3. Corriger les accents de `T.fr` dans `components.js`.

## Ne pas toucher
- `_redirects` : les 301 protègent le référencement de l'ancien site.
- `llms.txt` : chiffres validés par le dirigeant, à modifier uniquement sur sa demande.
