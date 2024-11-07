{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        // public balance: number; // by-default public
        private _balance: number; // if we make it private , then it will be accessible within this class

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // setter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }
        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }


        // getter
        get balance() {
            return this._balance;
        }
        // public getBalance(){
        //     return this._balance;
        // }
    }


    const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);

    // goribManusherAccount.balance =0 ;
    // goribManusherAccount.addDeposit(20);
    // const myBalance = goribManusherAccount.getBalance();

    goribManusherAccount.deposit = 50;
    const myBalance = goribManusherAccount.balance; // like property
    console.log(myBalance);
    
    
    // 
}