{
    // abstraction : 1. interface 2. abstract

    // idea
    interface Vehicle1 {
        // name: string;
        // model: number
        startEngine(): void;
        stopEngine(): void;
        move(): void
    }

    // real implementation
    // const vehicle1: Vehicle = {
    //     name: "Toyota",
    //     model: 2110
    // }
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`);
        }
        move(): void {
            console.log(`I am moving the car engine`);
        }
        test(): void {
            console.log(`I am just testing`);
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();


    // abstract class

    // idea
    abstract class Car2 {
        abstract startEngine(): void 
        abstract stopEngine(): void 
        abstract move(): void 
        test(): void {
            console.log(`I am just testing`);
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('I am starting the car engine');
        }
        stopEngine(): void {
            console.log('I am stopping the car engine');
        }
        move(): void {
            console.log('I am moving the car engine');
        }
    }

    // const hondaCar = new Car2();
    // hondaCar.startEngine();
    
    // 
}