{
    // instanceof guard
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('I am making sound !!');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBark() {
            console.log('I am barking !');
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMeaw() {
            console.log('I am Meawing !');
        }
    }

    // smart way te handle korar jnne chaile amra function bebohar korte pari
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        // if (animal instanceof Dog) {
        if (isDog(animal)) {
            animal.makeBark();
        }
        // else if (animal instanceof Cat) {
        else if (isCat(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    }
    const dog = new Dog("Dog Bhai", "dog");
    const cat = new Cat("Cat Bhai", "cat");
    getAnimal(dog);
    getAnimal(cat);
    // 
}