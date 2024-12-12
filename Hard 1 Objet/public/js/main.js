let personnage = {

  identite: {
    nom: "Matin",
    prenom: "Martin"
  },

  argent: 100,
  lieu: "chez soi",
  humeur: "neutre",
  
  changerHumeur: function() {

    this.humeur = Math.random() > 0.5 ? "positive" : "negative"
    console.log(`${this.identite.prenom} ${this.identite.nom} est maintenant ${this.humeur}.`)

  }

}

function changerLieu(personnage) {

  personnage.lieu = "au travail"

  console.log(`${personnage.identite.prenom} se rend sur son lieu de travail.`)

}

function gagnerArgent(personnage) {

  let heures = 8

  let gainParHeure = personnage.humeur === "positive" ? 15 : 10

  let totalGagne = gainParHeure * heures

  personnage.argent += totalGagne

  console.log(`${personnage.identite.prenom} gagne ${totalGagne}€ pour ${heures} heures de travail. Il a maintenant ${personnage.argent}€.`)

  if (personnage.humeur === "positive") {

    console.log(`${personnage.identite.prenom} dit : "J'aime mon travail"`)

  } else {

    console.log(`${personnage.identite.prenom} dit : "Je préfère mon lit"`)

  }

}

// Fonction bonus

function itérationGagnerArgent(personnage) {

  let heures = 8
  let gainParHeure = personnage.humeur === "positive" ? 15 : 10

  let totalGagne = 0
  let heuresTravaillées = 0

  let interval = setInterval(() => {

    if (heuresTravaillées < heures) {
      totalGagne += gainParHeure
      heuresTravaillées++
      console.log(`${personnage.identite.prenom} a gagné ${gainParHeure}€ cette heure.`)

    } else {

      clearInterval(interval)
      personnage.argent += totalGagne
      console.log(`${personnage.identite.prenom} a terminé sa journée. Il a gagné ${totalGagne}€.`)
      console.log(`Il a maintenant ${personnage.argent}€. Humeur : ${personnage.humeur}`)

    }

  }, 2000)

}

personnage.changerHumeur()
changerLieu(personnage)
itérationGagnerArgent(personnage)
