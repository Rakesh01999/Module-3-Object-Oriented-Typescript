{
    // static

    class Counter {
        // count: number = 0;
        static count: number = 0;
        // increament() {
        static increament() {
            // return (this.count = this.count + 1);
            return (Counter.count = Counter.count + 1);
        }
        // decreament() {
        static decreament() {
            // return (this.count = this.count - 1);
            return (Counter.count = Counter.count - 1);
        }
    }
    // const instance1 = new Counter();
    // console.log(instance1.increament());
    // console.log(instance1.increament());
    console.log(Counter.increament());

    // const instance2 = new Counter();
    // console.log(instance2.increament());
    console.log(Counter.increament());

    // const instance3 = new Counter();
    console.log(Counter.increament());


    // 
}