// function outer(params) {
//     let message ="hello"
//     function inner(params) {
//         console.log(message);
//     }
//     inner();
// }

// outer();

// **************************************************************************


function createCounter(params) {
    let count=5;
    function incerment(params) {
        count++;
        console.log(`cout is ${count}`);
    }
function getcount() {
    return count;
}

    return {incerment,getcount};
}

const c=createCounter();

c.incerment();
c.incerment();
c.incerment();
// console.log(c.count);  cannot access

console.log(`the current counter is ${c.getcount()} `);