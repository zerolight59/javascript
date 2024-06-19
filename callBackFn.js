
sum(disp,10,20)
sum(dispCon,40,30)

function sum(callback,a,b) {
    let result=a+b;
    callback(result);
}

function disp(result) {
    document.getElementById("disp").textContent=result
}
function dispCon(result) {
    console.log(result);
}