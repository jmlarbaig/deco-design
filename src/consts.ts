// Source unique de vérité pour les infos de l'entreprise et le SEO.
// Tout texte affiché sur le site doit passer par ces constantes ou par
// les tableaux de contenu ci-dessous — jamais de valeurs en dur dans les composants.

export const BUSINESS = {
  name: 'Déco & Design',
  // TODO: remplacer par le domaine final une fois acheté (utilisé pour canonical, OG, sitemap)
  siteUrl: 'https://deco-design-64.fr',
  phone: '07 77 30 70 38',
  phoneHref: 'tel:+33777307038',
  email: 'decoetdesign64@gmail.com',
  founded: 2021,
  locality: 'Nay',
  postalCode: '64800',
  region: 'Pyrénées-Atlantiques',
  area: 'Pays de Nay · Béarn · Pau et alentours',
  tagline: 'Plafonds, cloisons & aménagements sur mesure en plaque de plâtre',
} as const;

export const SEO = {
  title: 'Plaquiste à Nay, près de Pau — Plafonds, cloisons, isolation | Déco & Design',
  description:
    'Déco & Design, artisan plaquiste à Nay (64), près de Pau. Création de plafonds, cloisons et meubles en plaque de plâtre sur mesure, isolation intérieure et rénovation. Qualification RGE. Devis gratuit.',
} as const;

export const PRESTATIONS = [
  {
    title: 'Plafonds & faux plafonds',
    text: 'Création et rénovation de plafonds : faux plafonds, caissons, intégration de spots et éclairage indirect.',
    icon: 'ceiling',
  },
  {
    title: 'Cloisons & doublage',
    text: 'Montage de cloisons, séparation d’espaces, doublage de murs en plaque de plâtre, neuf et rénovation.',
    icon: 'wall',
  },
  {
    title: 'Meubles sur mesure',
    text: 'Meubles décoratifs en plaque de plâtre : bibliothèques, niches, bureaux et agencements uniques.',
    icon: 'furniture',
  },
  {
    title: 'Isolation intérieure',
    text: 'Isolation par l’intérieur des murs et plafonds pour plus de confort thermique et phonique.',
    icon: 'insulation',
  },
  {
    title: 'Rénovation — RGE',
    text: 'Entreprise qualifiée RGE : vos travaux de rénovation énergétique peuvent ouvrir droit aux aides de l’État.',
    icon: 'renovation',
  },
] as const;

// Photos déposées dans public/images/realisations/, nommées par numéro (1.jpg … 38.jpg).
// Pour ajouter/retirer une photo : déposer le fichier et ajuster la liste ci-dessous.
const PHOTO_NUMS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
];

export const REALISATIONS = PHOTO_NUMS.map((n) => ({
  img: `/images/realisations/${n}.jpg`,
  num: String(n).padStart(2, '0'),
  alt: `Réalisation ${n} — plafonds, cloisons et aménagements en plaque de plâtre, Déco & Design (Pays de Nay, 64)`,
}));
