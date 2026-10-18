/*
  PROCHAINS RENDEZ-VOUS D'ANNICK : SALONS, DÉDICACES ET CONFÉRENCES
  -----------------------------------------------------------------
  Pour ajouter un rendez-vous : copiez un bloc { ... }, collez-le dans la liste,
  puis changez les informations. N'oubliez pas la virgule entre deux blocs.

  - type         : "salon" (salon du livre, dédicaces) ou "conference"
  - date         : le jour, au format AAAA-MM-JJ (ex. "2026-11-07")
  - debut        : heure de début, au format HH:MM (ex. "10:00")
  - fin          : heure de fin, au format HH:MM (ex. "18:00")
  - nom          : le nom de l'événement
  - intervention : pour une conférence, le titre de son intervention (sinon "")
  - lieu         : le nom du lieu
  - adresse      : l'adresse complète (sert aussi pour l'itinéraire)
  - public       : à qui s'adresse l'événement, si c'est réservé (sinon "")
  - gratuit      : true si l'entrée est gratuite, false sinon
  - lien         : le site de l'événement (ou "" s'il n'y en a pas)

  L'ordre n'a pas d'importance : le site trie par date.
  Un rendez-vous passé disparaît tout seul le lendemain.
*/
window.SALONS = [
  {
    type: "salon",
    date: "2026-11-07",
    debut: "10:00",
    fin: "18:00",
    nom: "Salon du livre « Lignes urbaines »",
    intervention: "",
    lieu: "Maison de la Laïcité de La Louvière",
    adresse: "Rue Warocqué 124, 7100 La Louvière (Belgique)",
    public: "",
    gratuit: true,
    lien: "https://www.laicite-lalouviere.be"
  },
  {
    type: "conference",
    date: "2026-11-30",
    debut: "14:00",
    fin: "16:00",
    nom: "Journée d'étude des psychologues en soins palliatifs et en oncologie",
    intervention: "Parfois, le cœur dit « stop »…",
    lieu: "Salle de conférence du CHRSM, site Sambre",
    adresse: "Rue Chère Voie 75, 5060 Auvelais (Belgique)",
    public: "",
    gratuit: false,
    lien: ""
  },
  {
    type: "conference",
    date: "2026-12-05",
    debut: "09:30",
    fin: "10:00",
    nom: "Bien-être des médecins : prévention du burn-out",
    intervention: "Le soignant, un sauveur ?",
    lieu: "Ferme Mont-Saint-Jean",
    adresse: "Chaussée de Charleroi 591, 1410 Waterloo (Belgique)",
    public: "Journée organisée par le CRGOLF, sur inscription avant le 30 novembre 2026",
    gratuit: false,
    lien: "https://www.crgolf.be"
  },
];
