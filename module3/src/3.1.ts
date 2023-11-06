{
// class
// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound(){
//         console.log(`The ${this.name} says ${this.sound}`)
//     }
// }

//using Parameter properties 
class Animal {
    constructor (
    public name: string,
    public species: string,
    public sound: string
    )
    {}

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }
}

const dog = new Animal("Bob", "Dog", "Woof");

const cat = new Animal("Pussy", "Cat", "Meow")

cat.makeSound();
dog.makeSound();



//
}