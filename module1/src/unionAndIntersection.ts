//union. //Here we use single | for union

type FrontendDeveloper = 'JuniorDeveloper' | 'SeniorDeveloper';
type BackendDeveloper = 'NodeDeveloper' | 'DjangoDeveloper';
type FullStackDeveloper = FrontendDeveloper | BackendDeveloper;

type User = {
    name : string,
    age : number,
    role : FullStackDeveloper
}

const user1 : User = {
    name: 'John',
    age: 25,
    role: 'NodeDeveloper'
}

const user2 : User = {
    name: 'Jane',
    age: 26,
    role: 'DjangoDeveloper'
}

const user3 : User = { 
    name: 'Joe',
    age: 27,
    role: 'JuniorDeveloper'
}

const user4 : User = {
    name: 'Jim',
    age: 28,
    role: 'SeniorDeveloper'
}

//InterSection. //Here we use single & for intersection

type SoftwareDeveloper = {
    skills : string[],
    designation1 : 'Frontend Developer'
}

type SoftwareEngineer = {
    skills : string[],
    designation2 : 'Backend Developer'
}

type SeniorSoftwareEngineer = SoftwareDeveloper & SoftwareEngineer;

const seniorSoftwareEngineer : SeniorSoftwareEngineer = {
    skills: ['JavaScript', 'React', 'NodeJS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}

const seniorSoftwareEngineer2 : SeniorSoftwareEngineer = {
    skills: ['TypeScript', 'Next', 'Express'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}