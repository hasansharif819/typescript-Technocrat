{
    // Constaints

    // const addStudent = <T extends {id: number, name: string, age: number, email : string}>(student: T) => {
    //     const teacher = 'Sharif Hasan';
    //     return {
    //         ...student,
    //         teacher
    //     }
    // }

    interface Student {
        id : number;
        name : string;
        age : number;
        email : string;
    }

    const addStudent = <T extends Student>(student: T) => {
        const teacher = 'Sharif Hasan';
        return {
            ...student,
            teacher
        }
    }

    const std1 = addStudent({ id: 1, name: 'Sharif', age: 20, email: 'sharif@gmail.com', group: 'Science' });
    const std2 = addStudent({ id: 2, name: 'Hasan', age: 21, phone : 1712345678, email : 'hasan@gmail.com', class: 'Ten'});
    const std3 = addStudent({id : 3, name: 'Shuvro', age : 22, email : 'shuvro@gmail.com', hello : 'hello' })









    //
}