// Exercice 1

let prenom = "Fabian"

if (prenom === "Fabian") {

  console.log("Le prénom correspond")

}

// Exercice 2

if (prenom = "Fabian") {

  console.log("Je suis dans le if")

}

console.log("Valeur de prénom :", prenom)

// Exercice 3

let agePerso1 = 30
let agePerso2 = 40
let comparaison = agePerso1 === agePerso2

if (comparaison) {

  console.log("Je suis dans le if")

} else {

  console.log("Je suis dans le else")

}

// ---------------------------- //
// If else - Exercices logiques //
// ---------------------------- //

// Exercice 1

let nombre1 = parseInt(prompt("Entrez le premier nombre :"))

let nombre2 = parseInt(prompt("Entrez le deuxième nombre :"))

if (nombre1 > nombre2) {

  console.log(`${nombre1} est plus grand que ${nombre2}`)

} else if (nombre1 < nombre2) {

  console.log(`${nombre2} est plus grand que ${nombre1}`)

} else {

  console.log("Les deux nombres sont égaux.")

}

// Exercice 2

let nombre = parseInt(prompt("Entrez un nombre :"))

if (nombre % 2 === 0) {

  console.log(`${nombre} est un nombre pair.`)

} else {

  console.log(`${nombre} est un nombre impair.`)

}

// Exercice 3

let prenomUtilisateur = prompt("Entrez votre prénom :")

if (prenomUtilisateur.length < 5) {

  console.log("Votre prénom a moins de 5 caractères.")

} else if (prenomUtilisateur.length === 5) {

  console.log("Votre prénom a 5 caractères.")

} else {

  console.log("Votre prénom a plus de 5 caractères.")

}

// Exercice 4

let prenom1 = prompt("Entrez le premier prénom :")

let prenom2 = prompt("Entrez le deuxième prénom :")

if (prenom1.length < prenom2.length) {

  console.log(`${prenom1} a moins de caractères que ${prenom2}`)

} else if (prenom1.length === prenom2.length) {

  console.log(`${prenom1} a le même nombre de caractères que ${prenom2}`)

} else {

  console.log(`${prenom1} a plus de caractères que ${prenom2}`)

}

// Exercice 5

let vitesse = parseInt(prompt("Entrez votre vitesse actuelle :"))

let vitesseLimite = 50

if (vitesse < vitesseLimite) {

  console.log(`Vous êtes prudent, continuez ! (vitesse => ${vitesse})`)

} else if (vitesse === vitesseLimite) {

  console.log(`Attention, vous roulez à la vitesse limite. (vitesse => ${vitesse})`)

} else {

  console.log(`Ralentissez, vous allez trop vite !! (vitesse => ${vitesse})`)

}

// Exercice 6

let nom = prompt("Entrez votre prénom :")

let age = parseInt(prompt("Entrez votre âge :"))

if (age >= 18) {

  console.log(`Salut, ${nom}! Tu as ${age} ans, sors t'éclater en boite !`)

} else {

  console.log(`Salut, ${nom}! Tu as ${age} ans, pour toi c'est cinéma.`)

}

// Exercice 7

let num1 = parseFloat(prompt("Entrez le premier nombre :"))

let num2 = parseFloat(prompt("Entrez le deuxième nombre :"))

let operateur = prompt("Quel opérateur souhaitez-vous utiliser (+, -, *, /) ?")

let resultat

if (operateur === "+") {

  resultat = num1 + num2

} else if (operateur === "-") {

  resultat = num1 - num2

} else if (operateur === "*") {

  resultat = num1 * num2

} else if (operateur === "/") {

  if (num2 !== 0) {

    resultat = num1 / num2

  } else {

    console.log("Erreur : division par zéro !")

    resultat = null

  }

} else {

  console.log("Opérateur invalide.")

  resultat = null

}

if (resultat !== null) {

  console.log(`${num1} ${operateur} ${num2} = ${resultat}`)
  
}