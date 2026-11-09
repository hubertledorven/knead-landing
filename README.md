# knead-landing

Site vitrine de Knead, [kneadmanager.com](https://kneadmanager.com) : la page d'accueil et le blog. Fait avec [Astro](https://astro.build), publié par Netlify à chaque push sur `main`.

## Lancer le site en local

```sh
nvm use        # Node 22.23.4, indiqué dans .nvmrc : Astro refuse les versions plus anciennes
npm install
npm run dev    # http://localhost:4321
```

`npm run build` génère le site dans `dist/`, comme sur Netlify.

## Où modifier quoi

| Quoi | Où |
|---|---|
| Sections de la page d'accueil | `src/components/`, assemblées dans `src/pages/index.astro` |
| Questions de la FAQ | `src/data/faq.ts` (le texte et les données pour Google en sont générés) |
| Témoignages | `src/data/temoignages.ts` |
| Couleurs, polices, espacements | `src/styles/global.css` |
| Pages fixes (mentions légales, désabonnement, `robots.txt`, `sitemap.xml`) | `public/` |

## Ajouter un article au blog

1. Créer un fichier dans `src/content/blog/`. Son nom devient l'adresse : `prix-des-buches.md` donne `/blog/prix-des-buches/`.
2. Recopier l'en-tête de l'article existant et l'adapter : `title`, `titreCourt`, `description`, `resume`, `categorie`, `date`, `chapeau`. Le champ `seoTitle` est facultatif.
3. Écrire le texte en Markdown, avec des intertitres `##`.
4. Ajouter l'adresse dans `public/sitemap.xml`.

La page du blog, le temps de lecture et les données pour Google se mettent à jour seuls. Pour préparer un article sans le publier, ajouter `brouillon: true` dans son en-tête.

## Avant d'écrire

`PRODUCT.md` fixe les règles des textes : vouvoiement, écriture inclusive quand c'est possible, et rien sans preuve. `points-ouverts.md` liste ce qui reste à produire ou à faire confirmer.
