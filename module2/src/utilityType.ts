{
    //Utility type
    type Person = {
        name : string;
        age : number;
        email?: string;
        contactNo : string;
    }

    //Pick
    type NameAge = Pick<Person,  'name' | 'age'> //name and age ta k niyeche

    //Omit
    type ContactInfo = Omit<Person, 'name' | 'age'> //name and age k baad deya hoyeche

    //Required
    type PersonRequired = Required<Person> // Make all property are required

    //Partial
    type PersonPartial = Partial<Person> //Make all properties are optional

    //ReadOnly
    type PersonReadonly = Readonly<PersonRequired>
    const person1:PersonReadonly = {
        name: 'Sharif Hasan',
        age : 22,
        email: 'sharifhasan@gmail.com',
        contactNo : '01711111111'
    }

    // person1.name = 'Hasan Sharif';

    //Record

    // type MyObj = {
    //     a: string;
    //     b : string
    // }

    type MyObj = Record<string, string>

    const obj1: MyObj = {
        a: 'a',
        b: 'b',
        c : 'c',
        d: 'd',
        // e: 10 //this is string type so number is error
    }

    const emptyObject : Record<string, unknown> = {}

    const emptyObject1 = emptyObject.name = 'Sharif Hasan';
    





    //
}