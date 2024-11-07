"use strict";
{
    // oop = class
    var Animal = /** @class */ (function () {
        // public name: string;
        // public species: string;
        // public sound: string;
        // parameter properties
        function Animal(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            // this.name=name;
            // this.species=species;
            // this.sound=sound;
        }
        Animal.prototype.makeSound = function () {
            console.log("The ".concat(this.name, " says ").concat(this.sound));
        };
        return Animal;
    }());
    var dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
    // dog. // after "." -> gives all the property 
    var cat = new Animal("Peri Siam Bhai", "cat", "Meaw Meaw");
    // cat. // after "." -> gives all the property 
    // cat.makeSound();
    // dog.makeSound();
    //  cat. // still working [after writing , putting dot -gives all the properties]
    // 
}
