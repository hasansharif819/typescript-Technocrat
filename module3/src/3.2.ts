{
// OOP Inheritance

//Parent Class
class Person {
    name: string;
    age: number;
    address: string;

    constructor (name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numberOfHours: number){
        console.log(`${this.name} is sleeping for ${numberOfHours} hours per day`)
    }
}


class Students extends Person{
    clas: string;
    rollNo: number;

    constructor (name: string, age: number, address: string, clas: string, rollNo: number) {
        super(name, age, address);
        this.clas = clas;
        this.rollNo = rollNo;
    }

    // getSleep(numberOfHours: number){
    //     console.log(`${this.name} is sleeping for ${numberOfHours} hours per day`)
    // }
}

const student1 = new Students ('Sharif', 25, 'Dhaka', 'Ten', 237);
student1.getSleep(10);


class Teacher extends Person {
    contactNo: number;
    designation: string;

    constructor (name: string, age: number, address: string, contactNo: number, designation: string) {
        super(name, age, address);
        this.contactNo = contactNo;
        this.designation = designation;
    }

    getSalary(salary: number){
        console.log(`${this.name} received ${salary} tk per month`);
    }
}

const teacher1 = new Teacher ('Md. Sharif', 25, 'Noakhali', 1744754, 'Assistant Professor');
teacher1.getSalary(10000);



//
}