{
    //Generic Function
    const createArray = (param: string) : string[] => {
        return [param];
    }

    const createArrayWIthGeneric = <T>(param : T) : T[] => {
        return [param]
    }

    const newArray1 = createArrayWIthGeneric('Hello');
    const newArray2 = createArrayWIthGeneric(10);
    const newArray3 = createArrayWIthGeneric(true);

    interface User {
        id: number;
        name: string;
        email: string;
    }
    const newArray4 = createArrayWIthGeneric<User>({id : 12, name: 'John', email: 'hasan@gmail.com'});



    const createArrayWithGenericTupple = <T, Q> (param1: T, param2: Q) : [T, Q] => {
        return[param1, param2]
    }

    const tuppleArray1 = createArrayWithGenericTupple<string, number>('Hello', 10);
    const tuppleArray2 = createArrayWithGenericTupple<number, string>(22, 'Sharif')
    const tuppleArray3 = createArrayWithGenericTupple<boolean, string>(true, 'Sharif')
    interface Person {
        name: string;
        age: number;
        email: string;
        phone: number;
        isMarried: boolean;
    }
    const tuppleArray4 = createArrayWithGenericTupple<number, Person>(410, 
        {name: 'Sharif', age: 22, email: 'hasan@gmail.com', 
        phone: 123456789, isMarried: true})

    
    const addStudentsToCourse = <T>(student : T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        }
    }

    const std1 = addStudentsToCourse({name: 'Hasan', age: 22, email: 'hasan@gmail.com'})
    const std2 = addStudentsToCourse({name: 'Sharif', age: 22, email: 'sharif@gmail.com', hasWatch: true})
    const std3 = addStudentsToCourse({name: 'Mahmoud', age: 22, email: 'mahmoud@gmail.com', contact: 8888-930})
 





    //
}