// Black Friday 2026 : offre publique du 19/11 00:00 (avancée le 19/11, d'abord prévue le 20/11) au 30/11 23:59:59, heure de Paris.
// COPIE des dates de l'application (src/lib/blackFriday.js du dépôt Knead) :
// les deux doivent rester identiques, sinon le site annonce une offre que le
// paiement n'applique pas (ou l'inverse).
// Le site est statique : la date est lue dans le navigateur, au chargement de
// la page, pas au moment du build (un build de la veille doit afficher l'offre le jour J).
export const BF_DEBUT = '2026-11-19T00:00:00+01:00';
export const BF_FIN = '2026-12-01T00:00:00+01:00'; // exclusif : le 30/11 est inclus
export const BF_CODE = 'BLACKFRIDAY';
// Le lien de l'application : Tarifs avec le bandeau, code appliqué au paiement.
export const BF_LIEN = 'https://app.kneadmanager.com/#pricing?offre=blackfriday';

export function blackFridayActif(now: number = Date.now()): boolean {
  return Number.isFinite(now) && now >= Date.parse(BF_DEBUT) && now < Date.parse(BF_FIN);
}
