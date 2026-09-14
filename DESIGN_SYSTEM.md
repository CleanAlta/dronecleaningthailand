# Design System — CleanAlta Thailand

Source de vérité : la ligne `:root{...}` de `assets/css/style.css`. Aperçu visuel : `docs/tokens-preview.html`. Toute valeur hors de cette liste est interdite dans les pages.

## Couleurs
| Token | Valeur | Usage |
|---|---|---|
| `--navy` | #1A355C | Fond header, hero, titres h1-h6, `strong` |
| `--navy-90` / `-80` / `-60` / `-30` | #2A4570 / #3A5584 / #6B84A6 / #B5C2D3 | Dégradés et surfaces navy |
| `--teal` | #008D9E | Couleur d'action : CTA, liens actifs, bordure header |
| `--teal-dk` | #00707E | Hover des CTA |
| `--teal-90` / `-60` / `-30` | #1A98A8 / #66B8C3 / #B2DBE1 | Accents, badges, texte sur fond navy |
| `--teal-glow` / `-md` | rgba(0,141,158,.08 / .14) | Halos, fonds de cartes |
| `--aqua` | #00B0B0 | Mot mis en avant dans le h1 (`.tg`) |
| `--green-dk` / `--green-lt` | #409963 / #61B24A | Écologie, validation, ligne hero |
| `--orange` | #DF5900 | Alerte, urgence (rare) |
| `--white` / `--off` | #FFF / #F8FAFB | Fonds de page et sections alternées |
| `--g50` → `--g700` | #F3F5F8 → #2A3A50 | Échelle de gris, texte courant = `--g600` |
| `--black` | #0C1520 | Overlay mobile |

## Typographie
- `--ff` : Montserrat, system-ui, sans-serif. Graisses chargées : 300 à 900.
- `--ff-th` : Noto Sans Thai puis Montserrat. Activée par `body.th`.
- Base 16px, `line-height` 1.75 sur le corps, 1.15 sur les titres.
- Titres : 700, `letter-spacing: -.025em`, couleur navy. Hero h1 : 800, `clamp(2rem, 5vw, 3.8rem)`, blanc.
- Badge : `.73rem`, 600, majuscules, `letter-spacing: .08em`.
- Nav desktop : `.83rem`, 500. Sélecteur langue : `.72rem`, 700, majuscules.

## Espacements et formes
- Conteneur `.ctn` : 1200px max, padding 24px. Header : 1280px, 76px de haut.
- Rayons : `--r2` 10px (boutons, liens nav), `--r3` 14px, `--r4` 20px (images, cartes), `--rf` 9999px (badges).
- Ombres : `--s2` légère, `--s3` carte, `--s4` carte survolée.
- Easing : `--e` standard (.25,.46,.45,.94), `--eo` sortie expressive (.16,1,.3,1). Durées 250 à 450 ms.

## Composants existants (ne pas recréer)
- `.hero` + `.hero-bg` + `.hero-ov` + `.hero-line` + `.hero-c` : hero plein écran avec zoom lent 25 s.
- `.pg-hero` : hero de page intérieure, plus court.
- `.badge` : pastille teal en majuscules au-dessus du h1.
- `.btn-p` / `.btn-s` : bouton principal teal, bouton secondaire contour.
- `.sec` + `.sec-hd` + `.sec-tag` : section standard avec titre.
- `.grid-2` : deux colonnes, passe en une colonne mobile.
- `.stats-bar` + `.stat` + `.stat-n` + `.stat-l` : bandeau de chiffres clés.
- Header et footer : injectés par `components.js`, ne jamais les écrire en dur dans une page.

## Règles
1. Mobile d'abord : tout se lit à 400px, padding latéral 16px minimum.
2. Une seule couleur d'action : teal. Le vert sert à l'écologie, jamais aux boutons.
3. Pas de nouvelle police. Pas de dégradé hors hero.
4. Images en `/assets/images/`, `loading="lazy"`, `border-radius: var(--r4)`.
5. Toute nouveauté passe d'abord par un token ajouté à `:root`, puis par ce fichier.
