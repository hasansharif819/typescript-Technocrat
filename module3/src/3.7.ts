{
//Static in OOP
class Counter {
    // count: number = 0;
    static count: number = 0; //We make it static

    // increment() {
    //     // return this.count = this.count + 1;
    //     return Counter.count = Counter.count + 1; //Static howar karone etake this keyword diye 
    //     //daka jabe na. Etake class er nam dhoe dakte hobe
    // }
    // decrement() {
    //     // return this.count = this.count - 1;
    //     return Counter.count = Counter.count - 1; //Static howar karone etake this keyword diye 
    //     //daka jabe na. Etake class er nam dhoe dakte hobe
    // }

    //Amra chaile method gulo k oo static kore felte pari.. 
    //Sekhetre this. use kore daka jabe na

    static increment() {
        return Counter.count = Counter.count + 1; //Static howar karone etake this keyword diye 
        //daka jabe na. Etake class er nam dhoe dakte hobe
    }
    static decrement() {
        return Counter.count = Counter.count - 1; //Static howar karone etake this keyword diye 
        //daka jabe na. Etake class er nam dhoe dakte hobe
    }
}

// const increment1 = new Counter();
// console.log(increment1.increment()); //Different memory allocation.. [Static use korar karone eta static memory allocation kore]

// const increment2 = new Counter();
// console.log(increment2.increment()); // Different memory allocation.. [Static use korar karone eta static memory allocation kore]

// const increment3 = new Counter();
// console.log(increment3.increment()); // static memory allocation [Static use korar karone eta static memory allocation kore]


//Method gulo static howar jonno amader k static way te mane class k dhore dakte hobe

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());

console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());



//
}