{
// Instanceof Guard or Type narrowing or type guard
class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound(){
        console.log(`The ${this.name} makes a sound like ${this.species}`);
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeBark() {
        console.log("I am Barking!");
    }
}

class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }
    makeMeaw(){
        console.log("I am meawing!");
    }
}

//Arektu smart way te bebohar korar jonno amra
//function use korte pari

const isDog = (animal: Animal) : animal is Dog => { //ekhane animal is Dog true return kore. Sathe Dog ta k oo chinay day
    return animal instanceof Dog;
}
const isCat = (animal: Animal) : animal is Cat => { //ekhane animal is Cat true return kore. Sathe Cat ta k o chinay dey
    return animal instanceof Cat;
}

const getAnimal = (animal: Animal) => {
    if(isDog(animal)){
        animal.makeBark();
    }
    else if(isCat(animal)){
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}

const animal = new Animal("Bob", "Animal");

const dog = new Dog("Bob", "Dog");
const cat = new Cat("Pussy", "Cat");

getAnimal(dog);
getAnimal(cat);
getAnimal(animal);



//
}