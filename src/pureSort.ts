export const pureSort = <T>(array:readonly T[]):T[] => {
    let deepCopied = [...array]
    return deepCopied.sort()
}

let beforeSort = ['z','D','d','a','O']
const afterSort = pureSort(beforeSort)
console.log(beforeSort, afterSort)