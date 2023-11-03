"use strict";
//Spread Operator
const friends1 = ['Sharif', 'Hasan', 'Shuvro'];
const friends2 = ['Tanjum', 'Nahar', 'Chandana'];
friends1.push(...friends2);
const mentors1 = {
    typescript: 'Sharif',
    redux: 'Hasan',
    dbms: 'Shuvro'
};
const mentors2 = {
    react: 'Tanjum',
    node: 'Nahar',
    mongodb: 'Chandana'
};
const mentors = Object.assign(Object.assign({}, mentors1), mentors2);
//Rest Operator
const myFriend = (...friends) => {
    friends.forEach((friend) => console.log(`Hello my dear ${friend}`));
};
myFriend('Sharif', 'Hasan', 'Shuvro', 'Tanjum', 'Nahar', 'Chandana');
