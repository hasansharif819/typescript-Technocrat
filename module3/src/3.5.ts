{
//Access Modifier
class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number; 
    protected _balance : number; 
    //Private property lekhar convention hocche
    // Protected use korle instance a pawa jay na kintu chield class gulote pawa jay
    // Private use korle instance or chield kothaw pawa jay na
    //er aage ekta underscore(_) dite hoy

    constructor(id:number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    //By default property or method gulo public thake
    public addDeposit(amount: number){
        this._balance = this._balance + amount;
    }

    public getBalance(){
        return this._balance;
    }
}

//For understanding the difference between private and protected property
// class StudentAccount extends BankAccount {
//     test(){
//         this._balance
//     }
// }

const poorAccount = new BankAccount(11, 'Sharif', 500)
// poorAccount.balance = 1000; // Private property bahire theke access kora jay na
// So class er vitore method er maddhome korte hobe. 
//Function k object er vitore method bole.

poorAccount.addDeposit(1000);
poorAccount.addDeposit(300);
const myBalance = poorAccount.getBalance();
console.log(myBalance);







//
}