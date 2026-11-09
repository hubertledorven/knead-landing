import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('./public', import.meta.url));

// Le blog est en HTML statique dans public/. Netlify sert index.html pour /blog/,
// le serveur de développement non : on reproduit ce comportement en local.
const indexDesDossiers = {
  name: 'index-des-dossiers-public',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const [chemin, requete] = (req.url ?? '').split('?');
      const dossier = chemin.endsWith('/') ? chemin : chemin + '/';
      if (!/\.[a-z0-9]+$/i.test(chemin) && existsSync(publicDir + dossier + 'index.html')) {
        req.url = dossier + 'index.html' + (requete ? '?' + requete : '');
      }
      next();
    });
  },
};

export default defineConfig({
  site: 'https://kneadmanager.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: { plugins: [indexDesDossiers] },
});
