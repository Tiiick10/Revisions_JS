// Exercice 1

class Personnage {

  constructor(nom, prenom, age, argent) {

    this.nom = nom
    this.prenom = prenom
    this.age = age
    this.argent = argent

  }

  sePresenter(perso2, perso3) {

    console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans et j'ai ${this.argent}€. Je vous présente ${perso2.prenom} ${perso2.nom} et ${perso3.prenom} ${perso3.nom}.`)

  }

}

let perso1 = new Personnage("Dupont", "Paul", 25, 100)

let perso2 = new Personnage("Lemoine", "Marie", 30, 150)

let perso3 = new Personnage("Martin", "Alex", 28, 120)

perso1.sePresenter(perso2, perso3)

// Exercice 2

class Molengeek {

  constructor(nom, prenom, grade) {

    this.nom = nom
    this.prenom = prenom
    this.grade = grade

  }

  changerRole(personne) {

    if (this.grade === "admin") {

      console.log(`${this.prenom} ${this.nom} a changé le rôle de ${personne.prenom} ${personne.nom}.`)

    } else {

      console.log(`Vous n'avez pas les droits, ${this.prenom} ${this.nom}, vous êtes : ${this.grade}.`)

    }

  }

}

let admin = new Molengeek("Lemoine", "Marie", "admin")
let membre1 = new Molengeek("Dupont", "Paul", "membre")
let membre2 = new Molengeek("Martin", "Alex", "membre")

admin.changerRole(membre1)

membre1.changerRole(admin)

// Exercice 3
class Enfant {

  constructor(prenom, argent, humeur = "neutre") {

    this.prenom = prenom
    this.argent = argent
    this.humeur = humeur
    this.sac = []

  }

  acheterProduit(produit) {

    if (this.argent >= produit.prix) {

      this.argent -= produit.prix
      this.sac.push(produit.nom)

      console.log(`${this.prenom} a acheté ${produit.nom}. Il reste ${this.argent}€.`)

    } else {

      console.log(`${this.prenom} n'a pas assez d'argent pour acheter ${produit.nom}.`)

    }

  }

  cuisiner() {

    if (this.humeur === "positive") {

      console.log(`${this.prenom} est heureux, il cuisine pour toute la famille.`)

    } else {

      console.log(`${this.prenom} n'est pas en forme, il ne cuisinera pas.`)

    }

  }

}

class Magasin {

  constructor(produit, prix) {

    this.produit = produit
    this.prix = prix

  }

}

let enfant1 = new Enfant("Léo", 50)
let enfant2 = new Enfant("Clara", 30)

let produitA = new Magasin("jouet", 20)
let produitB = new Magasin("puzzle", 15)
let produitC = new Magasin("ballon", 10)

enfant1.acheterProduit(produitA)
enfant2.acheterProduit(produitB)

function changerHumeur(enfant) {

  enfant.humeur = Math.random() > 0.5 ? "positive" : "negative"

}

changerHumeur(enfant1)
changerHumeur(enfant2)

console.log(`${enfant1.prenom} est d'humeur ${enfant1.humeur}.`)
console.log(`${enfant2.prenom} est d'humeur ${enfant2.humeur}.`)

enfant1.cuisiner();
enfant2.cuisiner();
