{
// Typeof | Guard

type Alphaneumaric = number | string;

const add = (param1: Alphaneumaric, param2: Alphaneumaric): Alphaneumaric => {
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}

const result1 = add(50, 98);
console.log(result1);

const result2 = add('50', '98');
console.log(result2);

const result3 = add('Sharif ', 98);
console.log(result3);


//IN gueard
type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: 'admin';
}

const getUser = (user: NormalUser | AdminUser) => {
    if('role' in user){
        console.log(`My name id ${user.name} and my role is ${user.role}`)
    }
    else {
        console.log(`My name id ${user.name}`)
    }
}


const normalUser : NormalUser = {
    name: 'Mr Sharif'
}
const adminUser : AdminUser = {
    name: 'Mr Hasan',
    role: 'admin'
}

getUser(normalUser);
getUser(adminUser);

//
}