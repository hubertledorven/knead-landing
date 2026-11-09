import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'blog'>;

/** Articles publiés, du plus récent au plus ancien. */
export async function articles(): Promise<Article[]> {
  const tous = await getCollection('blog', ({ data }) => !data.brouillon);
  return tous.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

const format = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const dateLisible = (d: Date) => format.format(d);
export const dateIso = (d: Date) => d.toISOString().slice(0, 10);

/** Environ 200 mots par minute, chapeau compris. */
export function tempsDeLecture(article: Article): string {
  const mots = `${article.data.chapeau} ${article.body ?? ''}`.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(mots / 200))} min de lecture`;
}
