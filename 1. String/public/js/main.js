// Exercice 1

let prenom1 = prompt("Entrez votre prénom :") 

if (prenom1) {
  
  alert(`Le premier caractère est : ${prenom1.charAt(0)}`) 

} else {

  alert("Vous n'avez rien entré !") 

}

// Exercice 2

let prenom2 = prompt("Entrez votre prénom :") 

if (prenom2) {

  alert(`Sans le premier caractère : ${prenom2.slice(1)}`) 

} else {

  alert("Vous n'avez rien entré !") 

}

// Exercice 3

let prenom3 = prompt("Entrez votre prénom :") 

if (prenom3 && prenom3.length >= 5) {

  alert(`Le 5e caractère est : ${prenom3.charAt(4)}`) 

} else {

  alert("Votre prénom est trop court !") 

}

// Exercice 4

let prenom4 = prompt("Entrez votre prénom :") 

if (prenom4) {

  if (prenom4.length >= 5) {

    alert(`Le 5e caractère est : ${prenom4.charAt(4)}`) 

  } else {

    alert(`Votre prénom est trop court, il n'a que ${prenom4.length} caractère(s). Le dernier caractère est : ${prenom4.charAt(prenom4.length - 1)}`) 

  }

} else {

  alert("Vous n'avez rien entré !") 

}

// Exercice 5

let prenom5 = prompt("Entrez votre prénom :") 

if (prenom5) {

  let lowercase = prenom5.toLowerCase() 
  let uppercase = prenom5.toUpperCase() 
  let capitalize = prenom5.charAt(0).toUpperCase() + prenom5.slice(1).toLowerCase() 
  let inverseCapitalize = prenom5.charAt(0).toLowerCase() + prenom5.slice(1).toUpperCase() 

  alert(`En minuscule : ${lowercase} 
         En majuscule : ${uppercase}
         Première lettre en majuscule : ${capitalize}
         Première lettre en minuscule : ${inverseCapitalize}`) 

} else {

  alert("Vous n'avez rien entré !") 

}
