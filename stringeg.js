
let username="manu"
username=username.toUpperCase();

let rst=username.includes(" ")
console.log(rst);
console.log(username.length);


let ph="1234-456-7890"
console.log(`with - : ${ph}`)
ph=ph.replaceAll("-","");
ph=ph.padStart(13,"+91")
console.log(`without - : ${ph}`)