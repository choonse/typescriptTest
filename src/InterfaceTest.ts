//인터페이스

export interface IPerson {
    name:string
    age?:number
}

export interface ICompany{
    name:string
    age:number
}

class Person implements IPerson{
    constructor(public name:string,public age?:number){}
}

let jack4 : IPerson = new Person('Jack', 32)
console.log(jack4)
