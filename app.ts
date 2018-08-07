//Strings
let myName = "Faiz";
//myName = 12; not assignable unlike JS
//Number
let myNumber =28
//myNumber="abc"
//Boolean
let hasHobbies = 'true'
//hasHobbies =1; not assignable
// Assigning Types Explicitly
let myAge:number;
myAge=12;
// arrays
let hobbies:any[] =["Cricket","Football"];
hobbies=[100];
console.log(typeof hobbies)
console.log(hobbies)
// tuples
let address :[number,string]=[1,"DHA"]
//enum
enum Color {
    Gray,//0
    Green=100,//1
    Blue  //2
}
let myColor:Color=Color.Green;
console.log(myColor)
// any type
let car:any = "BMW"
console.log(car)
// functions
function returnName():string{
    return myName;
}
console.log(returnName());
function sayHello(){
    console.log("Hello")
}
console.log(sayHello());
// void function should not return
function hello():void{
    console.log("Hello from void function")
}
// argument function
function multiply (value1:number,value2:number):number{
 return value1*value2;
}
console.log(multiply(6,6))
// function as types
let myMultiply:(value1:number,value2:number)=>number;
// myMultiply=hello;
// console.log(myMultiply())
myMultiply=multiply;
console.log(myMultiply(2,2))
// Objects and Types
// in objects the the properties matter however in functions  type and order matter
// in objects the name of properties matter in functions order and type both matter in objects order doesnt matter
let UserData:{name:string,age:number}={
    name:"Faiz",
    age:12
}
// UserData={
//     name:"Rohail",
//     age:22
// }
// complex objects
let complex :{data:number[],output:(all:boolean)=>number[]}={
data:[12,12,12],
output:function (all:boolean):number[]{
    return this.data;
}

}
type Complex = {data:number[],output:(all:boolean)=>number[]}
let complex2 :Complex={
    data:[12,12,12],
    output:function (all:boolean):number[]{
        return this.data;
    }
    
    }
    // Union types or assigning more then one type to a variable
let myrealAge:number | string=23;
myrealAge="32"
//myrealAge=true; this will not be possible 
// we can check types with typeof
// Nullable types

// A variable which is initialized with number can not be again reinitialzied with null bcz it expects a number
// however a variable which is undefined can be null however if we still want ot intialize a variable with number
// and null we should use union types
let canbeNull:number|null=12;
canbeNull =null;
let canalsobeNull;
canalsobeNull=null;
let canThisBenull=null;
canThisBenull=12
console.log(canThisBenull)
// A variable which is assigned null can be assigned any string or number again