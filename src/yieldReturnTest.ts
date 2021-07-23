export function* gen() {
    let count = 5
    let select = 0
    while(count--){
        select = yield `you select ${select}`
    }
}

export const random = (max:number, min=0) => Math.round(Math.random() * (max-min)) + min

const iter = gen()

while(true){
    const {value, done} = iter.next(random(10,1)) // done은 iterator의 반환값(완료 시 true)
    if(done) break
    console.log(value)
}