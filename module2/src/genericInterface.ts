{
    //Generic --> Interface

    interface Developer<T, X = null, Y = null> {
        name: string;
        skill: string;
        contact: number;
        computer : {
            brand: string;
            price: number;
            releaseYear: number;
            model : string;
            isNew : boolean;
        };
        smartWatch: T;
        bike? : X;
        job? : Y;
    }

    interface Watch {
        brand: string;
        model: string;
        price: number;
        display : string
    }

    interface Bike {
        brand: string;
        model: string;
        price: number;
        gear: number;
        condition : string
    }

    const poorDeveloper : Developer<Watch> =  {
        name : 'Sharif',
        skill : 'Typescript',
        contact : 7839298308913,
        computer : {
            brand : 'HP',
            price : 100000,
            releaseYear : 2017,
            model : 'HP Elitebook 840 G4',
            isNew : true
        },
        smartWatch : {
            brand : 'Folio',
            model: 'AEYFG4',
            price : 9000,
            display : 'OLED'
        }
    }

    interface Job {
        designation : string,
        company : 'Google',
        isRemote : boolean
    }


    const richDeveloper : Developer<Watch , Bike, Job> = {
        name: 'Hasan',
        skill : 'JavaScript',
        contact : 3078502089,
        computer : {
            brand : 'Apple',
            price : 1000000,
            releaseYear : 2023,
            model : 'MacBook Pro 2023',
            isNew : true
        },
        smartWatch : {
            brand : 'Apple',
            model : 'Apple Watch 2023',
            price : 10000,
            display : 'Super Amuled'
        },
        bike: {
            brand : 'Suzuki',
            model : 'R15',
            price : 500000,
            gear : 5,
            condition : 'new'
        },
        job : {
            designation : 'Software Engineer',
            company : 'Google',
            isRemote : true
        }
    }



    //
}