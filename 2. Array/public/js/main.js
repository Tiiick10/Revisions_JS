// Exercice 1

let tableauVide = [] 

console.log(tableauVide) 
console.log(typeof tableauVide) 

// Exercice 2

let tableauMixte = ["string", 42, true, [1, 2, 3]] 

console.log(tableauMixte[0]) 
console.log(tableauMixte[1]) 
console.log(tableauMixte[2]) 
console.log(tableauMixte[3]) 

// Exercice 3

let tableau = ["premier", "deuxième", "troisième", "quatrième", "cinquième"] 

console.log(tableau[2]) 
console.log(tableau[0], tableau[tableau.length - 1]) 
console.log(tableau[1].slice(0, -1).toUpperCase() + tableau[1].slice(-1).toLowerCase()) 
console.log(tableau[3][0]) 
console.log(tableau[4].slice(1)) 
console.log(tableau[0][0].toLowerCase() + tableau[0][1].toUpperCase()) 
console.log(tableau[0] + tableau[2]) 

// -------- //
// Méthodes //
// -------- //

// Exercice 4

let prenoms = [] 

prenoms.push("Camille", "Nathan", "Léa", "Théo", "Amélie") 
console.log(prenoms) 

// Exercice 5

let prenoms2 = ["Camille", "Nathan", "Léa", "Théo", "Amélie"] 

prenoms2.unshift("Maxence") 
prenoms2.push("Louise") 
console.log(prenoms2) 

// Exercice 6

let prenoms3 = ["Camille", "Nathan", "Léa", "Théo", "Amélie"] 

prenoms3.shift() 
prenoms3.pop() 
console.log(prenoms3) 

// Exercice 7

let prenoms4 = ["Camille", "Nathan", "Léa", "Théo", "Amélie"] 

prenoms4.splice(0, 2) 
prenoms4.splice(-2, 2) 
console.log(prenoms4) 

// Exercice 8

let prenoms5 = ["Camille", "Nathan", "Léa", "Théo", "Amélie"] 

prenoms5[1] = "Ayhan" 
prenoms5[prenoms5.length - 2] = "Elias" 
console.log(prenoms5) 

// Exercice 9

let prenoms6 = ["Camille", "Nathan", "Léa", "Théo", "Amélie"] 
prenoms6.splice(0, 1, "Adame") 
prenoms6.splice(1, 1, "Bulma") 
console.log(prenoms6) 

// Exercice 10

let prenoms7 = ["Camille", "Nathan", "Léa", "Théo", "Amélie"] 
prenoms7.splice(3, 2) 
console.log(prenoms7) 

// Exercice 11

let classe = [] 

for (let i = 1; i <= 10; i++) {

  classe.push("L'étudiant " + i) 
  console.log("L'étudiant " + i + " vient de rentrer en classe.") 
}

console.log("Voici tous les étudiants en classe : ", classe) 

// Exercice 12

let classe2 = [] 

let trompes = [] 

for (let i = 1 ; i <= 12; i++) {

  if (i <= 10) {

    classe2.push("Etudiant " + i) 

  } else {

    trompes.push("Etudiant " + i) 

  }

}

console.log("Étudiants dans la classe : ", classe2) 
console.log("Étudiants qui se sont trompés : ", trompes) 