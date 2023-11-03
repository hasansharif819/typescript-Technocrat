let firstName: string = 'Sharif';

// let lastName: string = 'Hasan';

let age : number = 1234;

let newAge : number = 57.090;

let isMarried : boolean = true;

let iswork : boolean = false;

let chair : undefined = undefined;

let table: undefined = undefined;

let phone : null = null;

let tk : null = null;


let isDone : boolean = false;

//Above are the primitive datatype


//Now we practice with  Non primitive datatype

//Array

let cars : string[] = ['BMW', 'Audi', 'Toyota'];

let cars2 : Array<string> = ['BMW', 'Audi', 'Toyota'];

let cars3 : Array<string | number> = ['BMW', 'Audi', 1234];

let cars4 : Array<string | number | boolean> = ['BMW', 'Audi', 1234, true];

let cars5 : Array<string | number | boolean | undefined> = ['BMW', 'Audi', 1234, true, undefined];

let cars6 : Array<string | number | boolean | undefined | null> = ['BMW', 'Audi', 1234  , true, undefined, null];

//Tupple

let love : [string, number] = ['Sharif', 9];

love.push(5);