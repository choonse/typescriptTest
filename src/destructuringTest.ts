import { IPerson } from "./InterfaceTest";

let jack: IPerson = {name:'Jack',age:32}

//비구조화 할당
let {name, age} = jack
console.log(name,age)
