/*
  PROCHAINS SALONS ET DÉDICACES D'ANNICK
  --------------------------------------
  Pour ajouter un salon : copiez un bloc { ... }, collez-le dans la liste,
  puis changez les informations. N'oubliez pas la virgule entre deux blocs.

  - date    : le jour, au format AAAA-MM-JJ (ex. "2026-11-07")
  - debut   : heure de début, au format HH:MM (ex. "10:00")
  - fin     : heure de fin, au format HH:MM (ex. "18:00")
  - nom     : le nom du salon
  - lieu    : le nom du lieu
  - adresse : l'adresse complète (sert aussi pour l'itinéraire)
  - gratuit : true si l'entrée est gratuite, false sinon
  - lien    : le site du salon (ou "" s'il n'y en a pas)

  L'ordre n'a pas d'importance : le site trie par date.
  Un salon passé disparaît tout seul le lendemain.
*/
window.SALONS = [
  {
    date: "2026-11-07",
    debut: "10:00",
    fin: "18:00",
    nom: "Salon du livre « Lignes urbaines »",
    lieu: "Maison de la Laïcité de La Louvière",
    adresse: "Rue Warocqué 124, 7100 La Louvière (Belgique)",
    gratuit: true,
    lien: "https://www.laicite-lalouviere.be"
  },
];
