abstract class AbstractPerson{
    abstract name:string
    constructor(public age?:number){}
}


class Person5 extends AbstractPerson{
    constructor(public name:string, age?:number){
        super(age)
    }
}

let jack5:Person5 = new Person5('Jack',32)
console.log(jack5)