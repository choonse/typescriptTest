//배열 길이 구하기
export const arrayLength = <T>(array:T[]):number => array.length
//빈 배열 확인하기
export const isEmpty = <T>(array:T[]):boolean => arrayLength<T>(array) == 0

let numArray:number[] = [1,2,3]
let strArray:string[] = ['Hello','World']

type IPerson = {name:string, age?:number}
let personArray:IPerson[] = [{name:'Jack'},{name:'Jane',age:32}]

console.log(
    arrayLength(numArray),
    arrayLength(strArray),
    arrayLength(personArray),
    isEmpty([]), //true
    isEmpty([1]) //false
)

const identity = <T>(n:T) => n
console.log(
    identity<boolean>(true),  //함수이름<타입변수>(매개변수)
    identity(true)  //함수이름(매개변수) -> 타입변수를 생략하여 타입 추론으로 진행
)