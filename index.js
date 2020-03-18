// // Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

//  class Personnage
class Personnage {
  constructor(pseudo, classe, sante, attaque, niveau = 1) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = niveau;
  }

  evoluer() {
    this.niveau++;
    console.log(`
    ${this.pseudo} passe au niveau ${this.niveau} !
    `);
  }

  verifierSante() {
    if (this.sante <= 0) {
      this.sante = 0;
    }
    console.log(`
    ${this.pseudo} a perdu !
    `);
  }

  get informations() {
    console.log(`
        ${this.pseudo} ${this.classe} a ${
      this.sante
    } points de vie et est au niveau ${this.niveau}."
        `);
  }
}

//  class Magicien
class Magicien extends Personnage {
  constructor(pseudo) {
    super();
    this.pseudo = pseudo;
    this.classe = "magicien";
    this.sante = 170;
    this.attaque = 90;
  }

  attaquer(ennemi) {
    ennemi.sante -= this.attaque;
    console.log(`
        ${this.pseudo} attaque ${ennemi.pseudo} en lançant un sort ${
      this.attaque
    } dégâts
        `);
    this.evoluer();
    ennemi.verifierSante();
  }

  coupSpecial(ennemi) {
    ennemi.sante -= this.attaque * 5;
    console.log(`
  ${this.pseudo} attaque avec son coup spécial puissance des arcanes ${
      ennemi.pseudo
    } ${this.attaque * 5} dégâts.
  `);
  }
}

//  class War
class War extends Personnage {
  constructor(pseudo) {
    super();
    this.pseudo = pseudo;
    this.classe = "War";
    this.sante = 350;
    this.attaque = 50;
  }

  attaquer(ennemi) {
    ennemi.sante -= this.attaque;
    console.log(`
        ${this.pseudo} attaque ${ennemi.pseudo} en lançant un sort ${
      this.attaque
    } dégâts
        `);
    this.evoluer();
    ennemi.verifierSante();
  }

  coupSpecial(ennemi) {
    ennemi.sante -= this.attaque * 5;
    console.log(`
  ${this.pseudo} attaque avec son coup spécial puissance des arcanes ${
      ennemi.pseudo
    } ${this.attaque * 5} dégâts.
  `);
  }
}

const M = new Magicien("Gandalf");
M.informations;
