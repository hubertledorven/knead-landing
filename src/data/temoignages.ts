// Témoignages réels fournis par le client, avec son accord pour publication.
// Tant que cette liste est vide, les blocs de témoignages ne s'affichent pas en production.
export interface Temoignage {
  citation: string;
  nom: string;
  boutique: string;
  ville?: string;
  /** Citation affichée en grand sous le hero. */
  enAvant?: boolean;
}

export const temoignages: Temoignage[] = [];
