const price=[10,20,30,40,34]

const s=price.reduce(sum)
console.log(s.toFixed(2))

function sum(acc,nele) {
    return acc+nele
}