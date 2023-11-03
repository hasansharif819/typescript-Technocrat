"use strict";
//Normal Function
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
function abc(a, b) {
    return a + b;
}
abc(20, 'Sharif');
//Arrow function || annonimous function
const substract = (num1, num2) => {
    return num1 - num2;
};
substract(20, 10);
const multiply = (num1, num2, num3) => num1 * num2 * num3;
multiply(20, 10, 5);
const divide = (num1, num2) => num1 / num2;
divide(20, 10);
//Method
const poorUser = {
    name: 'Sharif',
    age: 20,
    balance: 0,
    hobbies: ['Reading', 'Coding'],
    isAdmin: true,
    newBalance: function (balance) {
        // return this.balance + balance; //This is number
        return `At this time my current balance is: ${this.balance + balance}`;
    }
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = array.map((element) => element * element);
