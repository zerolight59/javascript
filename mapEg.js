// const numbers=[1,2,3,4,5]

// const sq=numbers.map(sqr)
// console.log(numbers)
// console.log(sq);

// const cu=numbers.map(cube)
// console.log(cu);


// function sqr(ele) {
//     return Math.pow(ele,2);
// }

// function cube(ele) {
//     return Math.pow(ele,3);
// }



const names=["manu","vinu","kannan"]

const CapName=names.map(nameUpper)

console.log(CapName);

function nameUpper(ele) {
    return ele.charAt(0).toUpperCase()+ele.slice(1);
}