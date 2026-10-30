# Déco & Design — site vitrine

Site vitrine one-page pour l'artisan plaquiste **Déco & Design** (Nay, 64800 —
Pays de Nay, près de Pau, Pyrénées-Atlantiques). Site statique, minimaliste,
orienté photos de réalisations et SEO local.

## Stack

- **Astro 5** (output statique) + **Tailwind CSS 4** (via `@tailwindcss/vite`, config CSS-first dans `src/styles/global.css`)
- Fonts : Space Grotesk (titres, `font-display`) + Inter (texte), en local via fontsource — pas d’italique décoratif, on joue sur graisse et couleur
- `@astrojs/sitemap` pour le sitemap SEO
- Aucun framework JS côté client — uniquement du JS vanilla dans les composants (menu mobile, formulaire)

## Commandes

- `npm run dev` — serveur de dev
- `npm run build` — build statique dans `dist/`
- `npm run check` — vérif types Astro (`astro check`)
- `npm run preview` — prévisualiser le build

Déploiement : **Vercel** (site statique, aucune config serveur nécessaire).

## Structure

```
public/
  logo/logo.png           # logo source 2000px — logo-512.png est la version utilisée
  favicon.png             # générés depuis le logo (sips -Z)
  apple-touch-icon.png
  images/realisations/    # photos de chantier numérotées N.jpg (carousel)
src/
  consts.ts               # infos entreprise, SEO, prestations, réalisations (source unique)
  layouts/Base.astro      # <head> : meta, canonical, OG, JSON-LD LocalBusiness
  components/
    Header.astro          # nav sticky + menu mobile
    Hero.astro            # accroche + chiffres clés
    SectionHeading.astro  # titre de section numéroté (01 — …)
    Prestations.astro     # grille des services
    Realisations.astro    # galerie photo
    APropos.astro         # présentation entreprise + RGE
    Contact.astro         # coordonnées + formulaire devis
    Footer.astro
  pages/
    index.astro           # one-page
    mentions-legales.astro
public/
  images/realisations/    # déposer les photos de chantier ici (voir README du dossier)
```

## Règles du projet

- **Contenu** : toute info de l'entreprise (tel, mail, zone, libellés SEO) passe par
  `src/consts.ts` — jamais en dur dans les composants.
- **Photos** : déposer `N.jpg` dans `public/images/realisations/` puis ajouter le numéro dans
  `PHOTO_NUMS` (consts.ts). Cible : ~1600 px de grand côté. Le carousel gère
  portrait et paysage (hauteur fixe, largeur auto).
- **Langue** : tout le contenu affiché est en **français** soigné (accents, espaces
  insécables avant `:` `;` `!` `?` via `&nbsp;`).
- **SEO local** : cibler Nay / Pays de Nay / Pau / Béarn / Pyrénées-Atlantiques (64)
  dans les titres, descriptions et alts. Le JSON-LD `HomeAndConstructionBusiness`
  est dans `Base.astro` — le tenir à jour si les infos changent.
- **Domaine** : `siteUrl` dans consts.ts + `site` dans astro.config.mjs + sitemap dans
  robots.txt sont des placeholders — remplacer par le domaine final avant la mise en ligne.
- **Style** : monochrome nuit dérivé du logo — fond `night` (noir verdâtre)
  uniforme sur TOUT le site (jamais de section d'une autre couleur, y compris
  le formulaire), texte `pale`, secondaire `sage`, accents `lime`.
  Titres en Space Grotesk (font-display), pas d'italique décoratif.
  Écran d'accroche pleine page (`Intro.astro`) avant le site, navbar en pilule
  de verre masquée tant que l'intro est visible, reveals au scroll
  (`reveal` + d1/d2/d3), marquee en bas de hero.
  Côté fun : étoiles `spin-slow`/`float`, photos `sticker` penchées,
  badges inclinés (`rotate-1/-rotate-1`), ton décontracté dans les libellés. Pas de nouvelle dépendance
  sans raison, pas de JS framework.
- **Formulaire** : envoi via FormSubmit (ajax) vers `decoetdesign64@gmail.com`.
  ⚠️ Une **activation unique** est requise : le 1er envoi réel déclenche un mail de
  confirmation FormSubmit à cette adresse — cliquer le lien pour activer.

## À faire avant mise en ligne

- [ ] Déposer les vraies photos dans `public/images/realisations/`
- [ ] Acheter le domaine et mettre à jour `siteUrl` (consts.ts), `site` (astro.config.mjs), robots.txt
- [ ] Compléter mentions-legales.astro (SIRET, dirigeant)
- [ ] Activer le formulaire FormSubmit (1er envoi test)
