{

//Ternary Operator | Optional Operator | Nullish Coalescing Operator

const age = 25;
age ? 'Adult' : 'Child';

const isAdult = age >= 18 ? 'Adult' : 'Child';
console.log(isAdult);

//Nullish Coalascing Operator
//Null / Undefined --> make decision

const isAuthenticated = null;
const result1 = isAuthenticated ?? 'Guest'
console.log(result1);

const result2 = isAuthenticated ? 'Authenticated' : 'Guest';
console.log(result2);

//Optional Chaning

type User = {
    name: string;
    age: number;
    contactNo? : number;
    email? : string;
    address : {
        city : string;
        state : string;
        presentAddress?: string;
        permanentAddress?: string;

    };
}

const user1 : User = {
    name: 'John',
    age: 25,
    email: 'john@gmail.com',
    address: {
        city: 'Delhi',
        state: 'Delhi',
        permanentAddress: 'New Delhi'
    }
}

const presentAddress = user1?.address?.presentAddress ?? 'No present address';
console.log(presentAddress);

const user2 : User = {
    name: 'Jane',
    age: 25,
    email: 'jane@gmail.com',
    address: {
        city: 'Delhi',
        state: 'Delhi',
        presentAddress: 'New Delhi'
    }
}

const contactNo = user1?.contactNo ?? 'No contact number';
console.log(contactNo);

const permanentAddress = user1?.address?.permanentAddress ?? 'No permanent address';
console.log(permanentAddress);



}