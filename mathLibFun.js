console.log(Math.PI)

console.log(Math.E)

let x = 3.21;
let y = 2;
let z;

z=Math.round(x);
console.log(`x=${x}  z=${z}`);


z=Math.floor(x);
console.log(`floor x=${x}  z=${z}`);


z=Math.ceil(x);
console.log(`ceil x=${x}  z=${z}`);

z=Math.trunc(x);
console.log(`trunc x=${x}  z=${z}`);

z=Math.pow(y,3);
console.log(`pow x=${y}^3  z=${z}`);

x=9;
z=Math.sqrt(9);
console.log(`sqrt x=${x}  z=${z}`);

x=-10;
z=Math.abs(x);
console.log(`abs x=${x}  z=${z}`);

x=-10;
z=Math.sign(x);
console.log(`abs x=${x}  z=${z}`);


x=-10;y=20;z=5;
max=Math.max(x,y,z);
console.log(`max x=${x,y,z}  z=${max}`);


x=-10;y=20;z=5;
min=Math.min(x,y,z);
console.log(`min of   min=${max}`);