/*
  PHOTOS QUI DÉFILENT DANS « POURSUIVRE LA LECTURE »
  ---------------------------------------------------
  À gauche : les salons et dédicaces. À droite : les conférences.

  Pour ajouter une photo : déposez-la dans le dossier img/rencontres/,
  puis ajoutez une ligne { src: "...", alt: "..." } dans la bonne liste.
  - src : le chemin de la photo
  - alt : une courte description (lue par les lecteurs d'écran)
  - pos : (facultatif) la partie de la photo à garder au centre, ex. "70% 50%"
          pour une photo en largeur où Annick est sur la droite
  N'oubliez pas la virgule entre deux lignes.
  Une liste vide = la colonne de photos ne s'affiche pas.
*/
window.PHOTOS = {
  salons: [
    { src: "img/rencontres/dedicace-salon.jpg", alt: "Annick Taquet-Assoignons à sa table de dédicaces, devant ses livres" },
    { src: "img/rencontres/dedicace-plein-air.jpg", alt: "Annick dédicace un livre à une lectrice lors d'un salon en plein air", pos: "75% 50%" },
    { src: "img/rencontres/dedicace-librairie.jpg", alt: "Annick en séance de dédicaces dans une librairie" },
    { src: "img/rencontres/dedicace-village.jpg", alt: "Annick dédicace ses livres pour enfants sur une place de village", pos: "68% 50%" },
    { src: "img/rencontres/dedicace-salon-livre.jpg", alt: "Annick, souriante, dédicace un livre dans un salon du livre" }
  ],
  conferences: [
  ]
};
