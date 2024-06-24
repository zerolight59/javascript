class Animal{
   alive=true;
   eat(){
     console.log(`${this.name} is eating`)
   }
}
class fish extends Animal{
    name="fish";
}
class cat extends Animal{
    name="cat";
}
const f = new fish();
f.eat();
const c = new cat();
c.eat();