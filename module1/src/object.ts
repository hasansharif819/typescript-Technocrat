const user: {
    firstName: string;
    middleName?: string; //This is called optional
    lastName: string;
    isMarried: boolean;
    company: 'Idlewild'; // This is literal type which can't be changed
    readonly institute: 'IST'; //This is readonly so it can't be changed
} = {
    firstName: 'Sharif',
    middleName: 'Hasan'
    lastName: 'Shuvro',
    isMarried: true,
    company: 'Idlewild', // This is literal type which can't be changed
    readonly institute: 'IST'
}

user.company = 'Idlewild';
user.firstName = 'Tanjum';
user.lastName = 'Chandana';
user.isMarried = true;
