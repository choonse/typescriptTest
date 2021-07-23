export const splits = (str:string, delim:string=''):string[] => str.split(delim)

console.log(splits('hello'),splits('h_e_l_l_o','_'))