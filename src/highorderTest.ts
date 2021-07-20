// const add = (a:number):(number:number)=>number=>(b:number):number => a + b
// const result = add(1)(2)
// console.log(result)


export type NumberToNumberFunc = (number:number) => number
export const add = (a:number): NumberToNumberFunc => {
    const _add:NumberToNumberFunc = (b:number):number =>{
        return a + b //클로저
    }
    return _add
}

let fn:NumberToNumberFunc = add(1)

let result = fn(2)
console.log(result)
console.log(add(1)(2)) //fn = add(1) , add(1)(2) === fn(2)
