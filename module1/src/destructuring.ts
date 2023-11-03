//object destructuring

const user = {
    name: {
        firstName: 'Sharif',
        middleName: 'Hasan',
        lastName: 'Shuvro'
    },
    age: 24,
    contactNumber: '01717171717',
    email: 'sharifhasan@gmail.com',
    address: {
        presentAddress: {
            home: '12/A',
            road: '27',
            upozilla: 'Dhanmondi',
            district: 'Dhaka',
            country: 'Bangladesh'
        },
        permanentAddress: {
            home: 'Abid bhuiyan Bari',
            road: 'North Sharifpur',
            upozilla: 'Begumgonj',
            district: 'Noakhali',
            country: 'Bangladesh'
        }
    }
}

const { name: { firstName, middleName, lastName }, age, contactNumber, email, address: { presentAddress, permanentAddress } } = user;

//Array Destructuring

const friends = ['Sharif', 'Hasan', 'Shuvro', 'Rabbi', 'Mahfuz'];

const [,, bestFriend, ...rest] = friends;