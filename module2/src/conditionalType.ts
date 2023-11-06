{

    //Conditional Type
    // type a1 = null;
    type a1 = string;;
    type b1 = undefined;

    type x = a1 extends null ? a1 : b1;

    type y = a1 extends null ? a1 : b1 extends x ? 'This is true for x' : 'This is false for x';

    type Vehicle = {
        car : string;
        bike : string;
        ship : string;
    }

    type checkVehicle<T> = T extends 'car' | 'bike' | 'ship' ? 'This is true for Vehicle' : 'This is false for Vehicle'; //Manuel
    type checkVehicle1<T> = T extends keyof Vehicle ? 'This is true for Vehicle' : 'This is false for Vehicle'; //Manuel
    type checkVehicle2<T> = T extends keyof Vehicle ? true : false;  //Dynamic

    // type checkVehicle2<T> = T extends Vehicle ? T : 'This is false for Vehicle';
    // type checkVehicle3<T> = T extends Vehicle ? T[keyof T] : 'This is false for Vehicle';

    // type checkVehicle4<T> = T extends Vehicle ? T[keyof T] : 'This is false for Vehicle';

    type hasVehicle = checkVehicle1<'car'>;
    type hasVehicle1 = checkVehicle2<'car'>;








    //
}