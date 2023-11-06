{
    //Generic type --> Type Alias

    type GenericArray<T> = Array<T>;

    const user1 : Array<string> = ['Sharif', 'Hasan', 'Shuvro']
    const user11 : GenericArray<string> = ['Tanjum', 'Nahar', 'Chandana'] // Using Generic Type

    const user2 : Array<number> = [2, 4, 89, 743, 8934];
    const user22 : GenericArray<number> = [23, 25, 65, 54, 9, 45] //Using Generic Type

    const user3 : Array<boolean> = [true, false, true, false, true];
    const user33 : GenericArray<boolean> = [true, false, true, false] //Using Generic Type

    const user : GenericArray<{name: string, email: string, phone: number, roll: number, gender: string}> = [
    {
        name: 'Sharif',
        email: 'sharif@gmail.com',
        phone: 1234567890,
        roll: 200,
        gender: 'Male'
    },
    {
        name: 'Tanjum',
        email: 'tanjum@gmail.com',
        phone: 1234567890,
        roll: 100,
        gender: 'Female'
    }
]

// type GenericParam<X, Y> = [X, Y];
// const add : GenericParam<number, number> = (num1, num2) => num1 + num2;

const add = (num1: number, num2: number): number => num1 + num2 ;

const result = add(50, 89);

//Generic Tupple

type GenericTupple<X, Y> = [X, Y];

const human: GenericTupple<string, string> = ['Sharif', 'Chandana'];


const userWithId : GenericTupple<number, {name: string, email: string, phone: number}> = 
[1234, {name: 'Sharif', email: 'sharif@gmail.com', phone: 1234567890}]













    //
}