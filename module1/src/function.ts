//Normal Function
function add (num1 : number, num2 : number) {
    return num1 + num2;
}

add(5, 10)

function abc (a : number, b : string): string {
    return a + b;
}

abc(20, 'Sharif')

//Arrow function || annonimous function
const substract = (num1 : number, num2 : number) => {
    return num1 - num2;
}

substract(20, 10)

const multiply = (num1 : number, num2 : number, num3 : number) => num1 * num2 * num3;

multiply(20, 10, 5);

const divide = (num1 : number, num2 : number) => num1 / num2;

divide(20, 10);

//Method
const poorUser = {
    name : 'Sharif',
    age : 20,
    balance: 0,
    hobbies : ['Reading', 'Coding'],
    isAdmin : true,
    newBalance : function (balance: number) : string {
        // return this.balance + balance; //This is number
        return `At this time my current balance is: ${this.balance + balance}`;
    }
}

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray : number[] = array.map((element : number) : number => element * element)