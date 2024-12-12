// Exercice 1 : Boucle for

let prenom = "Fabian"

for (let i = 0; i < 5; i++) {
  console.log(prenom)
  console.log(`Tour de boucle : ${i + 1}`)
}

// Exercice 2 : bonjour + le prénom qui se trouve dans le tableau

let prenomsClasse = ["Alice", "Bob", "Charlie"]

for (let i = 0; i < prenomsClasse.length; i++) {
  console.log(`Bonjour ${prenomsClasse[i]}`)
}

// Exercice Mélangé : Boucle while

let max1 = parseInt(prompt("Entrez un nombre maximal :"))

let compteur1 = 0

while (compteur1 <= max1) {

  console.log(compteur1)
  compteur1++
}

// Exercice 3 : Boucle for incrémentation

let max2 = parseInt(prompt("Entrez un nombre maximal :"))

for (let i = 0; i <= max2; i += 2) {
  console.log(i)
}

// Exercice 4 : Afficher les nombres pairs de 0 à un certain nombre (nbr max)

let max3 = parseInt(prompt("Entrez un nombre maximal :"))

for (let i = 0; i <= max3; i++) {

  if (i % 2 === 0) {
    console.log(`Le nombre ${i} est pair.`)
  }
}

// Exercice 5 : Ajouter 5 étudiants à une classe avec do...while

let etudiants = []

do {

  let etudiant = prompt("Entrez le nom d'un étudiant :")
  etudiants.push(etudiant)

} while (etudiants.length < 5)

// Exercice 6 : Vérifier si l'index est pair ou impair avec forEach

let listeEtudiants = ["Martin", "Maxime", "Jordano", "Yasmina", "Kawtar", "Valentin", "Oussama", "Cactus", "Fanny", "Sergen", "Karis", "Kadri", "Piere", "Zidane", "Imad", "Abdel"]

listeEtudiants.forEach((etudiant, index) => {

  if (index % 2 === 0) {

    console.log(`${etudiant} a un index pair.`)

  } else {

    console.log(`${etudiant} a un index impair.`)

  }

})


// Exercice 7 (Partie 1) : Manipulation de prénoms avec forEach

let prenomsArray = ["Julien", "Emma", "Lucas", "Chloé", "Mathis", "Zoé", "Hugo", "Alice", "Clara"]

prenomsArray.forEach(prenom => {

  console.log(prenom)
  console.log(prenom[0])
  console.log(prenom[1])
  console.log(prenom[1] + prenom)

})

prenomsArray.forEach((prenom, index) => {

  if (index % 2 === 0) {

    console.log(prenom) // Prénoms avec index pair
    
  }

})

// Exercice 7 (Partie 2) : Manipulation avancée avec forEach

prenomsArray.forEach((prenom, index) => {

  if (index % 2 !== 0) {

    console.log(prenom.toUpperCase()) // Prénoms avec un index impair en majuscule

  } else {

    console.log(prenom.charAt(0).toUpperCase() + prenom.slice(1)) // Prénoms avec la première lettre en majuscule index pair

  }

})

prenomsArray.forEach((prenom, index) => {

  if (index % 2 !== 0 && prenom.length > 4) {

    console.log(prenom) // Prénoms index impair et plus longs que 4 caractères

  }

})

prenomsArray.forEach((prenom, index) => {

  if (index % 2 === 0 && prenom.length > 4) {

    console.log(prenom.charAt(0).toUpperCase()) // Prénoms index pair et plus longs que 4 caractères avec la première lettre en majuscule

  }
})

prenomsArray.forEach(prenom => {

  if (["a", "e", "m", "f", "y", "n"].includes(prenom.charAt(0).toLowerCase())) {

    console.log(prenom)

  }

})

prenomsArray.forEach(prenom => {

  if (["a", "e", "m", "f", "y", "n"].includes(prenom.charAt(0).toLowerCase()) && prenom.length > 5) {

    console.log(prenom)

  }
})

// Exercice 7 (Partie 3) : Manipulation avancée avec forEach (suite)

prenomsArray.forEach((prenom, index) => {

  if (["a", "e", "m", "f", "y", "n"].includes(prenom.charAt(0).toLowerCase()) && prenom.length < 5) {

    console.log(prenom.charAt(0).toUpperCase())

  }
})

prenomsArray.forEach((prenom, index) => {
  if (["k", "c", "m", "f", "y", "n", "a", "e", "p", "o"].includes(prenom.charAt(0).toLowerCase()) && prenom.length > 4 && index % 2 !== 0) {

    console.log(prenom)
    
  }

})

prenomsArray.forEach((prenom, index) => {

  if (["k", "c", "m", "f", "y", "n", "a", "e", "p", "o"].includes(prenom.charAt(0).toLowerCase()) && prenom.length > 5 && index % 2 === 0) {

    console.log(prenom.charAt(0).toLowerCase() + prenom.charAt(1).toUpperCase() + prenom.charAt(prenom.length - 1).toUpperCase())
  }
})

prenomsArray.forEach((prenom, index) => {

  if (["k", "m", "f", "y", "n", "a", "e", "o"].includes(prenom.charAt(0).toLowerCase()) && prenom.length < 7 && index % 2 === 0) {

    console.log(prenom.charAt(0).toUpperCase() + prenom.charAt(1).toUpperCase())

  }
})
