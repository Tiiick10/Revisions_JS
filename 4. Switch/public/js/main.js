// Exercice 1

let age = prompt("Quel est votre âge ?")

switch (parseInt(age)) {

  case 18:
    console.log("Tu es majeur.")
    break

  case 25:
    console.log("Un quart de siècle ça se fête.")
    break

  case 50:
    console.log("1/2 siècle c'est quelque chose.")
    break

  default:

    console.log("Âge non pris en compte.")

}

// Exercice 2 (adapté avec une condition)

let input = prompt("Indiquez un mot ou un nombre :")

if (isNaN(input)) {

  console.log("La valeur indiquée est un string.")

} else {

  console.log("La valeur indiquée est un nombre.")
  
}

// Exercice 3

let today = new Date()

switch (today.getDay()) {

  case 0:
    console.log("Dimanche")
    break

  case 1:
    console.log("Lundi")
    break

  case 2:
    console.log("Mardi")
    break

  case 3:
    console.log("Mercredi")
    break

  case 4:
    console.log("Jeudi")
    break

  case 5:
    console.log("Vendredi")
    break

  case 6:
    console.log("Samedi")
    break

  default:
    console.log("Jour inconnu.")
}

// Exercice 4

let mdp = prompt("Veuillez entrer votre mot de passe :")

switch (mdp) {

  case "votre mot de passe":
    console.log("Connecté")
    break

  default:
    console.log("Erreur")

}

// Exercice 5

let niveau = parseInt(prompt("Quelle est votre note en coding (sur 100) ?"))

switch (true) {

  case niveau >= 90:
    console.log("Tu as un niveau de coach.")
    break

  case niveau >= 70:
    console.log("Tu peux mieux faire !")
    break

  case niveau >= 50:
    console.log("Attention, faut plus travailler !")
    break

  default:
    console.log("Pas bon du tout, à travailler davantage !")

}

// Exercice 6

let grade = prompt("Quelle est votre note (A, B, C, D et F) ?").toUpperCase()

switch (grade) {

  case "A":
    console.log("Excellent travail !")
    break

  case "B":
    console.log("Bravo, belle côte.")
    break

  case "C":
    console.log("Bien, mais peut mieux faire.")
    break

  case "D":
    console.log("Insuffisant, il faut travailler plus.")
    break

  case "F":
    console.log("Échec, gros effort nécessaire.")
    break

  default:
    console.log("Note inconnue.")
}
