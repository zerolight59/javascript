class Person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }

    set fname(newFname){
        if(typeof newFname ==="string" && newFname.length>0){
            this._fname=newFname
        }
        else{
            console.log("error must be string with atleast length 1")
        }
    }
    set lname(newLname){
        if(typeof newLname ==="string" && newLname.length>0){
            this._lname=newLname
        }
        else{
            console.log("error must be string with atleast length 1")
        }
    }
    set age(newAge){
        if (newAge>0 && newAge<120 && typeof newAge ==="number") {
            this._age=newAge;
        } else {
            console.log("mut be a int beteen 0-120")
        }
    }

    get fname(){
        return this._fname;
    }
    get lname(){
        return this._lname;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return this.fname+" "+this.lname;
    }

}


const p = new Person("manu","sankar",22)

console.log(p.fname);
console.log(p.lname);
console.log(p.fullName);
console.log(`age is ${p.age}`)