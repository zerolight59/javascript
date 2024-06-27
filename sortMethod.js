// const num=[1,10,22,23,4,3,5,2]
// num.sort((a,b)=>a-b);
// console.log(num)



// const people=[{name:"manu",age:22,gpa:8.3},
//             {name:"vinu",age:20,gpa:9.66},
//             {name:"kannan",age:24,gpa:9.3}]


// people.sort((a,b)=>a.name.localeCompare(b.name));

// console.log(people)


//suffel a card




const card=['A',1,2,3,4,6,7,8,9,'j','q','k'];
suffle(card);
console.log(card)


function suffle(a) {
    for(let i = a.length - 1; i>0;i--){
        const r = Math.floor(Math.random() * (i+1));

        [a[i],a[r]] = [a[r],a[i]]
    }
}