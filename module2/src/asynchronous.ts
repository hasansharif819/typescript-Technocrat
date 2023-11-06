{
    //Promise

    type Todo = {
        userId : number;
        id : number;
        title : string;
        body : string
    };

    const url = 'https://jsonplaceholder.typicode.com/posts';
    const getTodo = async() : Promise<Todo> => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
        // console.log(data);
    }

    getTodo();

    //simulate
    type Something = {
        name: string;
        age: number;
    }
    const createPromise = () : Promise<Something> => {
        return new Promise<Something> ((resolve, reject) => {
            const data : Something = {name : 'Sharif Hasan', age : 20};
            if(data) {
                resolve(data);
            }
            else {
                reject('Data is not available');
            }
        })
    }


    //Calling the promise function

    const showData = async () : Promise<Something> => {
        const data : Something = await createPromise();
        // console.log(data);
        return data;
    }

    showData();




    //
}