// Source unique de la FAQ : le texte visible et le balisage Schema.org en sont générés,
// pour qu'ils ne puissent pas diverger.
export const faq: { question: string; reponse: string }[] = [
  {
    question: "L'essai est-il vraiment gratuit ?",
    reponse: "Oui. Vous testez Knead pendant 7 jours, sans carte bancaire, et vous ne payez que si vous décidez de continuer. Si vous choisissez la formule Équipe, le premier mois est offert : la carte est demandée, mais rien n'est prélevé avant 30 jours.",
  },
  {
    question: "Je ne suis pas à l'aise avec l'informatique. C'est compliqué ?",
    reponse: "Knead a été pensé par un pâtissier, pas par un comptable. Tout se passe dans votre navigateur, sans installation, et l'assistant intégré répond à vos questions au fur et à mesure.",
  },
  {
    question: "Comment fonctionne le scan de factures ?",
    reponse: "Vous photographiez une facture fournisseur. L'IA lit les ingrédients et les prix, crée ou met à jour vos fiches, puis recalcule vos marges.",
  },
  {
    question: "Puis-je connecter ma boutique Shopify ?",
    reponse: "Oui. Vous importez vos commandes Shopify dans Knead en un clic.",
  },
  {
    question: "Mes données sont-elles en sécurité ?",
    reponse: "Votre base de données est hébergée à Paris et vos données vous appartiennent. Vous pouvez les exporter à tout moment. Certains prestataires, pour le paiement, l'envoi d'e-mails ou l'IA, sont établis hors de l'Union européenne : le détail figure dans nos mentions légales.",
  },
  {
    question: "Et la facture électronique obligatoire ?",
    reponse: "Vos factures Knead respectent déjà les mentions légales françaises. L'obligation d'émission concerne les TPE et les indépendants à partir de septembre 2027. Nous préparons la conformité pour cette échéance : format Factur-X et transmission via une plateforme agréée.",
  },
];
