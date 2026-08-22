// Avis Google — source : fiche Google Business Profile « Pompe à chaleur BW »
// (33 avis, 5,0/5, relevé du 22/08/2026). Triés du plus récent au plus ancien.
// `date` (AAAA-MM-JJ) = date de publication sur Google : les 8 plus récents sont
// injectés dans le schema HVACBusiness (Layout.astro), tous alimentent le carrousel.
export interface Review {
  initials: string
  name: string
  text: string
  date?: string
  rating?: number
}

export const reviews: Review[] = [
  {
    initials: 'FM',
    name: 'Fabrizio Montorro',
    date: '2026-08-20',
    text: "Le chauffe-eau était fichu et la chaudière suivait de près. Le chauffe-eau thermodynamique a été placé en même temps, tant qu'à faire. Bref, on a bien fait de les appeler. Je recommande chaudement !",
  },
  {
    initials: 'M',
    name: 'Mégane',
    date: '2026-08-05',
    text: "J'ai d'abord appelé pour la clim, puis pour le chauffage. Un voisin de Genappe avait fait poser sa pompe à chaleur par eux. Le contact est resté simple et direct, ça change. Deux techniciens, une camionnette, rien qui traîne dans le jardin. Du travail comme on aimerait en voir plus souvent. Je recommande chaudement !",
  },
  {
    initials: 'D',
    name: 'Dorine',
    date: '2026-08-04',
    text: "Le patron a refusé de me vendre plus gros que nécessaire. Des professionnels comme on n'en fait plus beaucoup ✨",
  },
  {
    initials: 'CV',
    name: 'Cedric Vanhamme',
    date: '2026-08-02',
    text: "On hésitait depuis plusieurs mois à passer à une pompe à chaleur et on est vraiment contents de l'avoir fait. L'installation s'est très bien passée, les ouvriers étaient soigneux et ont pris le temps de répondre à toutes nos questions. Tout fonctionne parfaitement depuis plusieurs semaines. Une entreprise sérieuse que je n'hésiterai pas à conseiller autour de moi.",
  },
  {
    initials: 'RP',
    name: 'Romain Peerenboom',
    date: '2026-08-02',
    text: "Nous souhaitions installer une pompe à chaleur pour réduire notre consommation d'énergie et nous avons été accompagnés avec beaucoup de professionnalisme. Le devis était clair, les techniciens étaient ponctuels et le travail a été réalisé avec soin. Depuis la mise en service, le confort est excellent et les performances sont au rendez-vous.",
  },
  {
    initials: 'LV',
    name: 'Lola Vandendries',
    date: '2026-07-28',
    text: "Excellente expérience du début à la fin. Nous avons été parfaitement conseillés pour choisir la pompe à chaleur la plus adaptée à notre habitation. L'installation a été réalisée avec soin, les délais ont été respectés et le chantier a été laissé impeccable. Une équipe compétente, disponible et très professionnelle.",
  },
  {
    initials: 'HE',
    name: 'Hanane El Bouzaggaoui',
    date: '2026-07-26',
    text: "Une entreprise sérieuse du premier contact jusqu'à la mise en service de notre installation. Les conseils étaient personnalisés, le chantier a été réalisé proprement et les délais ont été respectés. Nous sommes très satisfaits du résultat et du confort apporté par notre nouvelle pompe à chaleur.",
  },
  {
    initials: 'CS',
    name: 'Christine Souday',
    date: '2026-07-22',
    text: "Dès le premier rendez-vous, nous avons reçu des conseils clairs et une étude adaptée à notre habitation. Les travaux ont été réalisés dans les délais, avec beaucoup de soin, et l'équipe est restée disponible pour répondre à toutes nos questions. Notre consommation a déjà diminué et le confort est au rendez-vous.",
  },
  {
    initials: 'IK',
    name: 'Ibrahim Kavak',
    date: '2026-07-19',
    text: "Je recherchais une entreprise spécialisée en pompe à chaleur dans le Brabant wallon et j'ai été très satisfait du service. Les explications étaient claires, le devis transparent et l'installation s'est déroulée de manière professionnelle. Un accompagnement sérieux du début à la fin.",
  },
  {
    initials: 'CK',
    name: 'Coskun Karakoc',
    date: '2026-07-12',
    text: "Excellent service du début à la fin. L'installation de notre pompe à chaleur s'est déroulée parfaitement, avec une équipe ponctuelle, professionnelle et de très bon conseil. Les finitions sont impeccables et la consommation a déjà diminué.",
  },
  {
    initials: 'GG',
    name: 'Gazi Gazi',
    date: '2026-07-07',
    text: "Entreprise très sérieuse avec un excellent suivi du premier contact jusqu'à la mise en service de notre pompe à chaleur. Les explications étaient claires, le travail a été réalisé avec soin et les délais ont été respectés.",
  },
  {
    initials: 'JC',
    name: 'Jacques Couvert',
    date: '2026-07-06',
    text: "Excellente expérience avec Pompe à Chaleur BW. L'équipe a pris le temps de nous conseiller la solution la plus adaptée à notre maison. L'installation a été réalisée proprement, dans les délais annoncés, et tout le fonctionnement nous a été expliqué.",
  },
  {
    initials: 'DS',
    name: 'Delfosse Sigrid',
    date: '2026-07-05',
    text: 'Installation de ma climatisation super soignée et disponible très rapidement ! Merci',
  },
  {
    initials: 'MC',
    name: 'Maëlle Croly',
    date: '2026-06-10',
    text: "Installation de notre pompe à chaleur réalisée avec beaucoup de professionnalisme. L'équipe a pris le temps de répondre à toutes nos questions et le travail a été effectué proprement et dans les délais. Nous constatons déjà une nette amélioration du confort à la maison.",
  },
  {
    initials: 'AA',
    name: 'Aurelia Arias Y Garcia',
    date: '2026-06-03',
    text: "Installation de notre pompe à chaleur impeccable. Devis détaillé et honnête dès le départ, équipe ponctuelle et soignée, chantier laissé propre. On nous a bien expliqué le fonctionnement et les économies à attendre sur la facture de chauffage.",
  },
  {
    initials: 'NJ',
    name: 'Noëmie Jacri',
    date: '2026-04-22',
    text: "On a fait installer une pompe à chaleur avec climatisation à La Hulpe, franchement rien à dire. Technicien sympa, boulot propre, et on est prêts pour l'été.",
  },
  {
    initials: 'JD',
    name: 'Jc Desmet',
    date: '2026-04-21',
    text: "Super expérience avec cette société de pompes à chaleur. Intervention rapide à Jodoigne, technicien à l'écoute et résultat au top. Hâte de profiter du mode clim cet été.",
  },
  {
    initials: 'MG',
    name: 'Martin Garcia Navio',
    date: '2026-04-19',
    text: "Installation de notre pompe à chaleur à Wavre impeccable, devis clair, prime Brabant Wallon expliquée et belle économie sur les factures. Je recommande.",
  },
]
