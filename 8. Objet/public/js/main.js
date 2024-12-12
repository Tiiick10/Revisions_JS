// Exercice 1

let voiture = {

  marque: "Audi",
  model: "A6",
  type: "break",
  color: "grise",
  prix: 20000,

  description: function() {

    console.log(`Ma voiture ${this.marque} ${this.model} est de type ${this.type}. Elle est ${this.color} et vaut ${this.prix}€. `)

  }

}

voiture.description()

// Exercice 2

let personnage = {

  nom: "Matin",
  prenom: "Martin",
  argent: 100,

  acheter: function(article) {

    if (this.argent >= article.prix && article.stock > 0) {

      this.argent -= article.prix

      article.stock -= 1

      console.log(`${this.prenom} ${this.nom} a acheté un ${article.nomProduit}. Il lui reste ${this.argent}€ et il reste ${article.stock} en stock.`)

    } else if (this.argent < article.prix) {

      console.log("Pas assez d'argent.")

    } else {

      console.log("Désolé, l'article est en rupture de stock.")

    }

  }

}

let article = {

  nomProduit: "Téléphone",
  prix: 80,
  stock: 10

}

personnage.acheter(article)

// Exercice 3

let molenGeek = {

  nombreEmployes: 0,
  patron: {

    nom: "Dupont",
    prenom: "Pierre"
  },

  employes: [],
  
  // Ajouter un employé

  addEmploye: function(nom, prenom) {
    this.employes.push({ nom: nom, prenom: prenom })
    this.nombreEmployes++
    console.log(`${prenom} ${nom} a été ajouté à l'équipe.`)
  },

  // Supprimer un employé

  delEmploye: function(nom, prenom) {

    let index = this.employes.findIndex(emp => emp.nom === nom && emp.prenom === prenom)

    if (index !== -1) {

      this.employes.splice(index, 1)

      this.nombreEmployes--

      console.log(`${prenom} ${nom} a été supprimé de l'équipe.`)

    } else {

      console.log(`${prenom} ${nom} n'est pas dans l'équipe.`)

    }

  },

  // Féliciter un employé aléatoire

  felicitation: function() {

    if (this.employes.length > 0) {

      let employe = this.employes[Math.floor(Math.random() * this.employes.length)]

      console.log(`Félicitations à ${employe.prenom} ${employe.nom}, l'employé du mois !`)

    } else {

      console.log("Aucun employé disponible pour la félicitation.")

    }

  },

  afficherNombreEmployes: function() {

    console.log(`Il y a actuellement ${this.nombreEmployes} employé(s).`)

  }

}


molenGeek.addEmploye("Martin", "Paul")
molenGeek.addEmploye("Dupont", "Alice")
molenGeek.felicitation()
molenGeek.afficherNombreEmployes()
molenGeek.delEmploye("Martin", "Paul")
molenGeek.afficherNombreEmployes()

