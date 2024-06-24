// class Product{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }
//     dispProduct(){
//         console.log(`this is ${this.name}`);
//         console.log(`it costs $${this.price.toFixed(2)}`)
//     }
// }

// const pd1=new Product("shirt",499);
// const pd2=new Product("pants",699);
// pd1.dispProduct();
// pd2.dispProduct();



// class mayhsUtil{
//     static pi=3.14;
//     static getDia(radius){
//         return radius*2;
//     }
// }
// console.log(mayhsUtil.pi);
// console.log(mayhsUtil.getDia(10));


class User{
    static uc=0;
    constructor(uname){
        this.uname=uname;
        User.uc++;
    }
}

const u1=new User("manu")
const u2=new User("vinu")
const u3=new User("kannan")


console.log(User.uc);