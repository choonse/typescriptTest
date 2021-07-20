interface Inameable{
    name:string
};

let obj:object = {name:'Jack'}

let name1 = (<Inameable>obj).name
let name2 = (obj as Inameable).name

console.log(name1,name2)