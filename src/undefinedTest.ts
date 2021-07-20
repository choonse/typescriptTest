interface Inameable{
    name:string
}

function getName(o:Inameable){
    return o != undefined? o.name:'unknown name'
}

let n = getName(({name:'Jack'}))
console.log(n)
console.log(getName({name:'Jack'}))