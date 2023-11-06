{
    // Keyof Generic

    type Vehicle = {
        bike : string;
        car : string;
        plane : string;
        ship : string;
    }

    type Developer1 = 'bike' | 'car' | 'plane' | 'ship'

    type Developer2 = keyof Vehicle; //using keyof 
    /**
    * keyof works as property union
    */

    function getPropertyValue<X, Y extends keyof X>(obj: X, key : Y){
        //using keyof X we use dynamic valuse like user property or car property or others
        return obj[key];
    }

    const user1 = {
        name : 'Sharif',
        age : 25,
        address : 'Dhaka'
    };

    const car = {
        model : 'Lamborghini',
        color : 'red',
        price : 10000000,
    }

    const res1 = getPropertyValue(user1, 'name');
    const res2 = getPropertyValue(car, 'price');
    // const res3 = getPropertyValue(car, 'taka'); //this is generates of arror. 
    //using keyof X we use dynamic valuse like user property or car property or others






    //
}