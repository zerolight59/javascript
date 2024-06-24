function Car(make,model,year,color) {
    this.make=make;
    this.model=model
    this.year=year;
    this.color=color
    this.drive=function() {
        console.log(`you drive ${this.make}s ${this.model}`)
    }
}


const car1=new Car("Ford","mustang",2002,"red");
const car2=new Car("BNZ","G1",2021,"black");


console.log(car1);
console.log(car2);

car1.drive();