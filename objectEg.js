const person={
    fname:"manu",
    lname:"sankar",
    age:22,
    isemployed:false,
    sayHello:function(){
        console.log(`hi i am ${this.fname+this.lname}`)
    }
}

console.log(person.fname)
console.log(person.lname)
person.sayHello();