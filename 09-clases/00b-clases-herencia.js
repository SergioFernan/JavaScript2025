// Definiciones
// NUNCA Se crean objectos de la clase padre
class Animal {
    constructor( name ) {
        this.name = name;
    }

    habla() {
        return 'El animal deberia hablar';
    }

    setSpecie( specie ) {
        this.specie = specie;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.legs = 4;
    }

    habla() {
        return this.name + ': Guau Guau Guuuuaauuuu!';
    }
}

class Fish extends Animal {
    constructor( name ) {
        super( name );
        this.fins = 2;
    }

    habla() {
        return this.name + ': ';
    }
}

class Cat extends Animal {
    constructor(name) {
        super( name );
        this.legs = 4;
    }

    habla() {
        return this.name + ': Miau Miau Miaauuuu!';
    }
}

class Worm extends Animal {
    habla() {
        return this.name + ': ';
    }
}


// Implementacion
const animal = new Animal('N.N.')
const dogChamiercito = new Dog('Canela');
dogChamiercito.setSpecie( 'Labrador' );

const catCriollito = new Cat('Momo');
catCriollito.setSpecie('Angora');

const pezPayaso = new Fish('Nemo');
const worm = new Worm();

console.log( animal );
console.log( dogChamiercito );
console.log( catCriollito );
console.log( pezPayaso );