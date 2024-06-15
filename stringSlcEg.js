const fullName="Manu Sankar"
let fName=fullName.slice(0,4);
let lName=fullName.slice(5,11);
console.log(fName);
console.log(lName);

let firstCharacter=fullName.slice(0,1)
console.log(firstCharacter);
let LastCharacter=fullName.slice(-1)
console.log(LastCharacter);


let firtName=fullName.slice(0,fullName.indexOf(" "));
console.log("hello "+firtName)

let lastName=fullName.slice(fullName.indexOf(" ")+1);
console.log("last name is:"+lastName)


const email="manu@gmmail.com"
let unname=email.slice(0,email.indexOf("@"))
console.log("ypur user name is:"+unname)