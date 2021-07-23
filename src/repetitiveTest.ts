
//배열에서 for in 사용
let names = ['Jack','Jane','Steve']

for(let index in names){
    const name=names[index]
    console.log(`[${index}]:${name}`)
}


//객체에서 for in 사용

let jack = {name:'Jack', age:32}
let property:keyof typeof jack;
for(property in jack)
    console.log(`${property}:${jack[property]}`)


// for of 사용

for(let name of names){
    console.log(name)
}


