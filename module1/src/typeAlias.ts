// type alias
type Student = {
    name : string,
    roll : number,
    marks : number,
    grade : string,
    contactNo : number,
    email : string,
    gender : string
}

const student : {
    name : string,
    roll : number,
    marks : number,
    grade : string,
    contactNo : number,
    email : string,
    gender : string
} = {
    name : "Rohit",
    roll : 1,
    marks : 90,
    grade : "A",
    contactNo : 9876543210,
    email : "rohit@gmail.com",
    gender : "Male"
}

//using type alias

const student1 : Student = {
    name : "Sharif",
    roll : 1,
    marks : 90,
    grade : "A+",
    contactNo : 9876543210,
    email : "sharif@gmail.com",
    gender : "Male"
}

const student2 : Student = {
    name : "Tanjum",
    roll : 2,
    marks : 90,
    grade : "A+",
    contactNo : 9876543210,
    email : "tanjum@gmail.com",
    gender : "Female"
}

const student3 : Student = {
    name : "Hasan",
    roll : 3,
    marks : 90,
    grade : "A+",
    contactNo : 9876543210,
    email : "hasan@gmail.com",
    gender : "Male"
}

const student4 : Student = {
    name : "Chandana",
    roll : 4,
    marks : 90,
    grade : "A+",
    contactNo : 9876543210,
    email : "chandana@gmail.com",
    gender : "Female"
}

type UserName = string;
type IsAdmin = boolean;
type IsMarried = boolean;

//Alias in function
type Add = (a: number, b: number) => number;
const add : Add = (a, b) => a + b;

type Substract = (num1: number, num2 : number) => number;
const substract : Substract = (num1, num2) => num1 - num2;