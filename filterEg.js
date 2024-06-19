let num=[1,2,3,4,5,6,7];

let evnnum=num.filter(iseven)

console.log(evnnum)

function iseven(ele) {
    return ele%2===0
}