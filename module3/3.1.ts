{
    // oop = class
    
    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // parameter properties

        constructor(public name: string, public species:string, public sound:string){
            // this.name=name;
            // this.species=species;
            // this.sound=sound;
        }

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }
    const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
    // dog. // after "." -> gives all the property 
    const cat = new Animal("Peri Siam Bhai", "cat", "Meaw Meaw");
    // cat. // after "." -> gives all the property 

    // cat.makeSound();
    // dog.makeSound();
    //  cat. // still working [after writing , putting dot -gives all the properties]

    // 
}