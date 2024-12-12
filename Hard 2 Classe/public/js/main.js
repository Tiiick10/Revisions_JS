class LeeGofGeek {

  constructor(nom, pouvoir, degat, sante = 100, bonus = ["VieFull", "dead", "null"]) {
  
    this.nom = nom
    this.pouvoir = pouvoir
    this.degat = degat
    this.sante = sante
    this.bonus = bonus
    this.autoSaveUsed = false
    this.jokerUsed = false

  }

  attaqueBasic(personnageAttaque) {
    personnageAttaque.sante -= this.degat
    console.log(`${this.nom} attaque avec son pouvoir ${this.pouvoir}. ${personnageAttaque.nom} perd ${this.degat} points de vie.`)
  }

  attaqueSpecial(personnageAttaque) {
    personnageAttaque.sante -= 35
    this.sante -= 15
    console.log(`${this.nom} lance une attaque spéciale ! ${personnageAttaque.nom} perd 35 points de vie.`)
    console.log(`${this.nom} perd 15 points de vie après cette attaque.`)
  }

  autoSave() {

    if (!this.autoSaveUsed) {
      this.sante += 35
      this.autoSaveUsed = true
      console.log(`${this.nom} utilise auto-save. +35 points de vie.`)

    } else {

      console.log(`${this.nom} a déjà utilisé auto-save.`)

    }

  }

  joker() {
    
    if (this.sante < 15 && !this.jokerUsed) {
      this.jokerUsed = true
      let bonusAleatoire = this.bonus[Math.floor(Math.random() * this.bonus.length)]
      console.log(`${this.nom} utilise joker : ${bonusAleatoire}`)

      if (bonusAleatoire === "VieFull") {
        this.sante = 100
        console.log(`${this.nom} récupère 100 points de vie.`)

      } else if (bonusAleatoire === "dead") {

        console.log(`${this.nom} élimine l'ennemi d'un coup !`)

        return true

      }

    } else {

      console.log(`${this.nom} ne peut pas utiliser joker (soit pas assez de points de vie, soit déjà utilisé).`)

    }

  }

}

let personnage1 = new LeeGofGeek("Goku", "Kamehameha", 15)
let personnage2 = new LeeGofGeek("Vegeta", "Final Flash", 12)

personnage1.attaqueBasic(personnage2)

personnage1.attaqueSpecial(personnage2)

personnage1.autoSave()
personnage2.joker()

while (personnage1.sante > 0 && personnage2.sante > 0) {

  personnage1.attaqueBasic(personnage2)
  personnage2.attaqueBasic(personnage1)

  if (personnage1.sante <= 0) {

    console.log(`${personnage1.nom} est vaincu!`)

    break

  } else if (personnage2.sante <= 0) {

    console.log(`${personnage2.nom} est vaincu!`)

    break

  }
  
}
