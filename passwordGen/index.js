
function toGeneratePwd(pwdLen,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols) {
    
    const lowercaseChars="qwertyuiopasdfghjklzxcvbnm";
    const uppercaseChar="QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberChar="0123456789";
    const symbolsChar="!@#$%^&*()_+-=";

    let allowedChars="";
    let password="";

    allowedChars += includeLowerCase?lowercaseChars:"";
    allowedChars += includeUpperCase?uppercaseChar:"";
    allowedChars += includeNumbers?numberChar:"";
    allowedChars += includeSymbols?symbolsChar:"";

    console.log(allowedChars)

    if (pwdLen<=0) {
        console.log("(length must be 0)")
    }
    if (allowedChars.length===0) {
        console.log(`atlest need on character type need to be seleted`)
    }

    for(let i=0;i<pwdLen;i++){
        let randomIndex=Math.floor(Math.random()*allowedChars.length)
        password+=allowedChars[randomIndex];
    }

    return password;
}


const pwdLen =12;
const includeLowerCase= true;
const includeUpperCase= true;
const includeNumbers= true;
const includeSymbols= true;


const password=toGeneratePwd(pwdLen,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols)
console.log(`generasted password ${password}`)