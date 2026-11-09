import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un article = un fichier .md dans src/content/blog/. Son nom devient l'adresse : /blog/<nom>/.
const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    /** Titre affiché en <h1>, repris tel quel dans les données structurées. */
    title: z.string(),
    /** Dernier maillon du fil d'Ariane. */
    titreCourt: z.string(),
    /** Titre de l'onglet et des résultats de recherche. Sans lui : le <h1> suivi de « — Knead ». */
    seoTitle: z.string().optional(),
    description: z.string(),
    /** Texte de la carte sur la page du blog. */
    resume: z.string(),
    categorie: z.string(),
    date: z.coerce.date(),
    miseAJour: z.coerce.date().optional(),
    chapeau: z.string(),
    auteur: z.string().default('Hubert Le Dorven'),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { blog };
