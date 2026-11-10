// Témoignages réels fournis par le client, avec son accord pour publication.
// Tant que cette liste est vide, les blocs de témoignages ne s'affichent pas en production.
export interface Temoignage {
  citation: string;
  /** Version courte affichée sous le hero, pour ne pas répéter la citation du mur. */
  extrait?: string;
  nom: string;
  /** Le nom est un compte Instagram : affiche le logo à côté. */
  instagram?: boolean;
  boutique?: string;
  ville?: string;
  /** Portrait importé depuis src/assets, facultatif. Affiché en rond à côté du nom. */
  photo?: ImageMetadata;
  /** Citation affichée en grand sous le hero. */
  enAvant?: boolean;
}

// L'ordre compte : sur ordinateur, les cartes vont par rangées de deux, large puis étroite, puis étroite puis large
// (voir Testimonials.astro). Mettre les citations les plus longues dans les cartes larges.
export const temoignages: Temoignage[] = [
  {
    citation: "Avant Knead, je faisais mes calculs moi-même, en reprenant les prix des matières premières et les quantités utilisées dans mes recettes. Ça prenait du temps et je n'avais pas forcément une vision précise de ce que me coûtait réellement chaque création. Knead m'a permis de mieux m'organiser et surtout d'avoir une vision beaucoup plus claire de mes coûts de revient et de mes marges. Je peux facilement calculer la rentabilité de mes recettes et ajuster mes prix si besoin.",
    extrait: "Knead permet de gagner du temps, d'y voir plus clair et surtout de ne pas travailler à perte sans s'en rendre compte.",
    nom: '@clemp_patisserie',
    instagram: true,
    enAvant: true,
  },
  {
    citation: "Pour calculer mes coûts et mes marges, j'utilisais un tableau Excel. Aujourd'hui, une fois la recette rentrée, Knead calcule automatiquement le coût de revient et les charges. Un gain de temps énorme. Je le recommande fortement : j'en ai d'ailleurs parlé à un ami boulanger qui sature avec son tableau Excel.",
    nom: '@delyss.patisserie',
    instagram: true,
  },
  {
    citation: "Quand j'étais pâtissière indépendante, Knead n'existait pas encore. J'utilisais deux tableaux Google Sheets, et je devais actualiser moi-même les prix à chaque hausse des matières premières. Une vraie prise de tête. Alors quand Hubert m'a parlé de Knead, j'ai tout de suite été conquise\u00a0! Aujourd'hui, toutes les pâtissières que j'accompagne l'utilisent. Elles gagnent un temps fou pour calculer leurs prix et gérer les achats et l'inventaire de leurs matières premières. Je recommande l'app à 100\u00a0%.",
    nom: '@sorenza_patisserie',
    instagram: true,
  },
  {
    citation: "J'avais un tableau Excel pour calculer mes prix : matières premières, charges, puis un coefficient multiplicateur. Mais mon temps de travail n'y était pas du tout intégré, et je me basais beaucoup sur les prix du marché. Knead m'aide à avoir une meilleure vision de mon activité, à mieux m'organiser et à fixer des prix plus justes. Une petite prise en main est nécessaire au départ pour rentrer ses recettes, mais c'est un vrai gain de temps par la suite. C'est aussi un vrai soutien quand on travaille seul et qu'on doit gérer plusieurs aspects de son entreprise. Je le recommande sans hésiter\u00a0!",
    nom: '@maison.sucree.emilie',
    instagram: true,
  },
];
