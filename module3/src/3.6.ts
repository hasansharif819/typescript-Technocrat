{
    //Getter && Setter
    class BankAccount {
        public readonly id: number;
        public name: string;
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
        
        //Getter && Setter use kore korbo jate kore property er moto kore access kora jay
        
        // public addDeposit(amount: number){
        //     this._balance = this._balance + amount;
        // }

        //Using Setter
        set deposit(amount: number){
            this._balance = this._balance + amount;
        }

    
        
        //Getter && Setter use kore korbo jate kore property er moto kore access kora jay
        // public getBalance(){
        //     return this._balance;
        // }
        
        //Using getter
        get balance(){
            return this._balance;
        }
    }
    
    const poorAccount = new BankAccount(11, 'Sharif', 500)
    // poorAccount.balance = 1000; // Private property bahire theke access kora jay na
    // So class er vitore method er maddhome korte hobe. 
    //Function k object er vitore method bole.
    
    //Function call korte hoy
    // poorAccount.addDeposit(1000);
    // poorAccount.addDeposit(300);
    // const myBalance = poorAccount.getBalance();
    // console.log(myBalance);
    
    //Getter && Setter use korle function call kora lage na
    //Just property er moto kore kora jay

    poorAccount.deposit = 1000;
    poorAccount.deposit = 1600;

    const myBalance = poorAccount.balance;
    console.log(myBalance);
    
    
    
    
    
    
    //
    }