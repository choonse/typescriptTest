
//나머지 연산자
let address:any={
    country:'Korea',
    city:'Seoul',
    address1:'Gangnam-gu',
    address2:'Sinsa-dong 123-456',
    address3: 'dream street'
}

const {country, city, ...detail} = address
console.log(detail)

//스프레드 연산자
let part1 = {name:'jane'}, part2={age:22}, part3 = {city:'Seoul', country:'Kr'};
let merged = {...part1, ...part2, ...part3}
console.log(merged)