// Exercice 1.1

let firstVariable = "TonPrénom" 

console.log(firstVariable) 

// Exercice 1.2

let variableVide 

console.log(variableVide)  // undefined

// Exercice 1.3

variableVide = "Nouvelle Valeur" 
console.log(variableVide) 

// Exercice 1.4

let variableNull = null 

let variableVide2 

console.log(variableNull, variableVide2)  // null undefined

// ----------------------- //
// Suite des exos Variable //
// ----------------------- //

// Exercice 2

let stringVar = "Je suis une chaîne" 

let intVar = 42 

let boolVar = true 

console.log(stringVar, intVar, boolVar) 
console.log(typeof stringVar, typeof intVar, typeof boolVar) 

// Exercice 2.1

let pays = "Belgique" 

let capitale = "Bruxelles" 

let maPhrase = capitale + " est la capitale du pays : " + pays 

console.log(maPhrase) 

// Exercice 2.2

let maPhraseNew = `${capitale} est la capitale du pays : ${pays}` 

console.log(maPhraseNew) 

// Exercice 2.3

let prenom = "Alice" 

let hobby = "peindre" 

let ville = "Lyon" 

let age = 25 

let phraseLongue = `${prenom} a ${age} ans, elle aime ${hobby} dans sa ville, ${ville}.` 

console.log(phraseLongue) 

// Exercice 2.4

let integerVar = 7 

let stringVar2 = "7" 

console.log(integerVar = stringVar2)  // Affectation
console.log(integerVar == stringVar2)  // Comparaison de valeur
console.log(integerVar === stringVar2)  // Comparaison stricte

// Exercice 2.5

let intFive = 5 

let stringFive = "5" 

console.log(intFive + stringFive)  // 55 (concaténation)

stringFive = 5 

console.log(intFive + stringFive)  // 10 (addition)

// ---------------------------------- //
// Différence entre var, let et const //
// ---------------------------------- //

// Exercice 3

var prenomVar = "Alice" 

let ageLet = 30 

const nomConst = "Dupont" 

console.log(prenomVar, ageLet, nomConst) 

// Exercice 3.1

var prenomVar = "Bob" 

console.log(prenomVar) 

// let ageLet = 35  // Uncaught SyntaxError: Identifier 'ageLet' has already been declared

// Exercice 3.2

// const nomConst = "Martin"  // Uncaught SyntaxError: Identifier 'nomConst' has already been declared

// Exercice 3.3

if (true) {

  var varCondition = "Variable déclarée avec var" 

  let letCondition = "Variable déclarée avec let" 
  
}

var varCondition = "Variable redéfinie avec var" 

// let letCondition = "Variable redéfinie avec let"  // Uncaught SyntaxError

console.log(varCondition) 

// console.log(letCondition)  // ReferenceError