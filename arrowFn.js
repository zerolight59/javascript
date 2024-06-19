
// const hello = (name,age)=>{
//     console.log(`hello ${name}`)
//     console.log(`you are ${age} years old`)
//     document.getElementById("disp").textContent=`Hello ${name}`
// }

// hello("manu",22);


// setTimeout(()=>console.log("hello"),3000)


const num=[1,2,3,4,5,6,7]

const sqr=num.map((element)=>Math.pow(element,2))

console.log(sqr)


const evenNo=num.filter((element)=>element%2===0);

console.log(evenNo)

const sum=num.reduce((acc,element)=>acc+element);
console.log(sum);
