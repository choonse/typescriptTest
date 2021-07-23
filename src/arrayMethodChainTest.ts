const multiply = (result:number, val:number) => result * val

let numberz:number[] = [1,2,3,4,5,6,7,8,9,10]

let tempResult = numberz.filter(val => val %2 !=0)
.map(val=>val*val)
.reduce(multiply) // 893025

let result = Math.round(Math.sqrt(tempResult))
console.log(tempResult)