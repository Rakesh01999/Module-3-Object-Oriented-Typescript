{
    // access modifier
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

        public addDeposit(amount: number) {
            this._balance = this._balance + amount
        }

        public getBalance(){
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            // this.
        }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);
    // goribManusherAccount.balance =0 ;
    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
    // 
}