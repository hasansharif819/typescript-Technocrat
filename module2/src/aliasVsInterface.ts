{
    //Interface vs type Alias

    type User1 = {
        name: string;
        age : number;
        isAdmin : boolean;
    }

    interface User2 {
        name: string;
        age : number;
        isAdmin : boolean;
    }

    let user1 : User1 = {
        name: 'John',
        age : 20,
        isAdmin : true
    }

    let user2 : User2 = {
        name: 'John',
        age : 20,
        isAdmin : true
    }

    //user1 = user2;

    type person1 = User1 & {
        gender : string;
        roll : number
    }

    interface person2 extends User2 {
        gender : string;
        roll : number
    }

    const student1 : person1 = {
        name: 'John',
        age : 20,
        isAdmin : true,
        gender : 'Male',
        roll : 1
    }

    const student2 : person1 = {
        name: 'John',
        age : 20,
        isAdmin : true,
        gender : 'Male',
        roll : 1
    }

    //student1 = student2;

    const student3 : person2 = {
        name: 'John',
        age : 20,
        isAdmin : true,
        gender : 'Male',
        roll : 1
    }

    const student4 : person2 = {
        name: 'John',
        age : 20,
        isAdmin : true,
        gender : 'Male',
        roll : 1
    }

    //student3 = student4;

    //object ==> object; Array ==> object; Function ==> object


    //Array
    type Friends1 = string[];
    interface Friends2 {
        [index: number]: string; //As it is working with index number
    }

    const myFriends: Friends1 = ['John', 'Jane', 'Joe'];

    const myFriends2: Friends2 = ['John', 'Jane', 'Joe'];

    type Roll1 = number[];
    interface Roll2 {
        [index : number] : number; //As it is works with index number
    }

    const stdRoll1 : Roll1 = [1, 2, 3, 4, 5];

    const stdRoll2 : Roll2 = [1, 2, 3, 4, 5];


    //Function

    // type Add1 = (a: number, b: number) => number;
    // interface Add2 {
    //     (a: number, b: number): number;
    // }

    // const add1 : Add1 = (a: number, b: number) => a + b;

    // const add2 : Add2 = (a: number, b: number) => a + b;

    type Add1 = (num1: number, num2: number) => number;

    interface Add2 {
        (num1 : number, num2 : number) : number;
    }


    const add1 : Add1 = (num1, num2) => num1 + num2;

    const add2 : Add2 = (num1, num2) => num1 + num2;






    //
}