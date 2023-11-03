"use strict";
//Nullable 
const searchName = (value) => {
    if (value) {
        console.log(`Searching ${value}`);
    }
    else {
        console.log('No name found');
    }
};
searchName(null);
searchName('Sharif');
//unknown Type
const getSpeed = (value) => {
    if (typeof value === 'number') {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`Speed is ${convertedSpeed}`);
        console.log(`Value is ${value} ms^-1`);
    }
    else if (typeof value === 'string') {
        const [result, unit] = value.split(' ');
        console.log(result);
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(`Speed is ${convertedSpeed}`);
        console.log(`Unit is ${unit}`);
    }
    else {
        console.log('Wrong Input');
    }
};
getSpeed(1000);
getSpeed('1000 km^-h');
getSpeed(null);
//Never
const thowError = (msg) => {
    throw new Error(msg);
};
// thowError("Hello")
thowError("Hello World!!! This is Never type");
