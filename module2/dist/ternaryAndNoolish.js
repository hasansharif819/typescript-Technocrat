"use strict";
var _a, _b, _c, _d, _e;
{
    //Ternary Operator | Optional Operator | Nullish Coalescing Operator
    const age = 25;
    age ? 'Adult' : 'Child';
    const isAdult = age >= 18 ? 'Adult' : 'Child';
    console.log(isAdult);
    //Nullish Coalascing Operator
    //Null / Undefined --> make decision
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    console.log(result1);
    const result2 = isAuthenticated ? 'Authenticated' : 'Guest';
    console.log(result2);
    const user1 = {
        name: 'John',
        age: 25,
        email: 'john@gmail.com',
        address: {
            city: 'Delhi',
            state: 'Delhi',
            permanentAddress: 'New Delhi'
        }
    };
    const presentAddress = (_b = (_a = user1 === null || user1 === void 0 ? void 0 : user1.address) === null || _a === void 0 ? void 0 : _a.presentAddress) !== null && _b !== void 0 ? _b : 'No present address';
    console.log(presentAddress);
    const user2 = {
        name: 'Jane',
        age: 25,
        email: 'jane@gmail.com',
        address: {
            city: 'Delhi',
            state: 'Delhi',
            presentAddress: 'New Delhi'
        }
    };
    const contactNo = (_c = user1 === null || user1 === void 0 ? void 0 : user1.contactNo) !== null && _c !== void 0 ? _c : 'No contact number';
    console.log(contactNo);
    const permanentAddress = (_e = (_d = user1 === null || user1 === void 0 ? void 0 : user1.address) === null || _d === void 0 ? void 0 : _d.permanentAddress) !== null && _e !== void 0 ? _e : 'No permanent address';
    console.log(permanentAddress);
}
