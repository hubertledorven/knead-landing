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
];
