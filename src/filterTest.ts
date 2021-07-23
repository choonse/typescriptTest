export const filter = <T>(array:T[], callback:(value:T,index?:number)=>boolean):T[]=>{
    let result:T[] = []
    for(let index:number=0;index<array.length;++index){
        const value = array[index]
        if(callback(value,index))
         result = [...result,value]
    }
    return result
}

import { fold } from "./foldTest"

let numbers:number[] = range(1,100+1)
const isOdd = (n:number):boolean => n % 2 !=0
const isEven = (n:number):boolean => n % 2 == 0
let result = fold(
    filter(numbers,isOdd),
    (result,value)=>result+value,0)
    console.log(result)


