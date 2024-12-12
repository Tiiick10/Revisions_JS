// Exercice 1

function bonjour() {

  console.log("Bonjour")

}

bonjour()

// Exercice 2

function calcul() {

  console.log(5 + 5)

}

calcul()

// Exercice 3

function bonjourPrenom(prenom) {

  console.log("Bonjour " + prenom)

}

bonjourPrenom("Emma")

// Exercice 4

function typeElements(a, b, c) {

  console.log(typeof a, typeof b, typeof c)

}

typeElements(5, "texte", true)

// ---------------- //
// Exercice logique //
// ---------------- //

// Exercice 1

function jeu() {

  let nombreSecret = Math.floor(Math.random() * 20) + 1

  let essais = 0

  let trouve = false

  while (essais < 5 && !trouve) {

    let reponse = parseInt(prompt("Devine un nombre entre 1 et 20 :"))

    let difference = Math.abs(nombreSecret - reponse)

    if (difference === 0) {

      console.log("Félicitations, tu as gagné !")
      trouve = true

    } else if (difference === 1) {

      console.log("Brûlant !")

    } else if (difference <= 2) {

      console.log("Chaud !")

    } else if (difference <= 5) {

      console.log("Tiède !")

    } else {

      console.log("Froid !")

    }

    essais++

    if (essais === 5 && !trouve) {

      console.log("Dommage, la partie est terminée. Le nombre secret était " + nombreSecret)

    }

  }

}

// jeu() // Décommente pour jouer

// Exercice 2

function manipulerTableau(tableau) {

  return tableau.map(element => {

    if (typeof element === "string") {

      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()

    } else if (typeof element === "number") {

      return element * element

    } else if (typeof element === "boolean") {

      return !element

    }

    return element

  })

}

let tableauTest = ["hello", 5, true, "world", 3, false]

console.log(manipulerTableau(tableauTest))

// Exercice 3

function classerParSalaire(prenom, salaire) {

  let moinMoyenne = []

  let moyenne = []

  let plusMoyenne = []

  if (salaire < 1600) {

    moinMoyenne.push(prenom)

  } else if (salaire >= 1600 && salaire <= 1800) {

    moyenne.push(prenom)

  } else {

    plusMoyenne.push(prenom)

  }

  console.log("Salaires inférieurs à la moyenne : ", moinMoyenne)
  console.log("Salaires dans la moyenne : ", moyenne)
  console.log("Salaires supérieurs à la moyenne : ", plusMoyenne)

}

classerParSalaire("Emma", 1500)
classerParSalaire("Bob", 1700)
classerParSalaire("Charly", 2000)

// Exercice 4

function verifierConcert(prenom, age) {

  let concert = []

  if (age >= 18 && concert.length < 7) {

    concert.push(prenom.charAt(0).toUpperCase() + prenom.slice(1))

  } else if (age < 18) {

    console.log(prenom + " n'est pas autorisé à entrer.")

  } else if (concert.length >= 7) {

    console.log("Le concert est complet.")

  }

  console.log("Liste des participants au concert : ", concert)

}

verifierConcert("Emma", 20)
verifierConcert("Bob", 15)
verifierConcert("Charly", 18)
verifierConcert("David", 19)
verifierConcert("Eva", 22)
verifierConcert("Fay", 25)
verifierConcert("George", 30)
verifierConcert("Helen", 21) // Ne pourra pas entrer, car limité à 7