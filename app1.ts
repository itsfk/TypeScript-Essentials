let myName1:string = "Faiz";
let myNumber1:number=28;
//myName1=30; although we cant do this in typescript this would throw an error while compiled but
//still this would be converted into js file
// because noemitonerror is by default false which lets js file to be compiled
// noImplicitAny is set to false in tsconfig file which allows to initialize variable without any type
// let and cosnt
let variable="Test"; // block scope
console.log(variable);
variable="Another value"
console.log(variable);

const max=100;
console.log(max)
//max=20 const is not assignable again

// Block scope
function reset(){
    let variable="null";
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
const multi=(val:number,val1:number):number=>{
return val*val1;
}
console.log(multi(2,6))

// Spread Operator spreads the array into a list
const numbers =[1,12,14,99];
console.log(Math.max(...numbers))
