
export const test1 = async() => {
    let value = await 1
    console.log(value)
    value = await Promise.resolve(1)
    console.log(value)
}

export async function test2(){
    let value = await 'hello'
    console.log(value)
    value = await Promise.resolve('hello')
    console.log(value)
}

test1()
test2()

//async 함수를 Promise 객체로 사용

test1().then(()=>test2())


//async 반환값 사용하기

const asyncReturn = async() => {
    return [1,2,3]
}

asyncReturn().then(value=>console.log(value))

//예외 처리하기

const asyncException = async() => {
    throw new Error('error')
}
asyncException().catch(err=>console.log('error:',err.message))

//reject 처리하기

const awaitReject = async() =>{
    await Promise.reject(new Error('error'))
}
awaitReject().catch(err=>console.log('error:',err.message)) //error:error


//async, Promise.all

import { readFilePromise } from "./readFilePromise"

const readFilesAll = async(filenames:string[]) => {
    return await Promise.all(
        filenames.map(filename=>readFilePromise(filename))
    )
}

readFilesAll(['./package.json','./tsconfig.json'])
.then(([packageJson, tsconfigJson]:string[])=>{
    console.log('<package.json>:',packageJson)
    console.log('<tsconfig.json>:',tsconfigJson)
}).catch(err=>console.log(err.message))