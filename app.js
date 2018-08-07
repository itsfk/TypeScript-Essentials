"use strict";
//Strings
var myName = "Faiz";
//myName = 12; not assignable unlike JS
//Number
var myNumber = 28;
//myNumber="abc"
//Boolean
var hasHobbies = 'true';
//hasHobbies =1; not assignable
// Assigning Types Explicitly
var myAge;
myAge = 12;
// arrays
var hobbies = ["Cricket", "Football"];
hobbies = [100];
console.log(typeof hobbies);
console.log(hobbies);
// tuples
var address = [1, "DHA"];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any type
var car = "BMW";
console.log(car);
// functions
function returnName() {
    return myName;
}
console.log(returnName());
function sayHello() {
    console.log("Hello");
}
console.log(sayHello());
// void function should not return
function hello() {
    console.log("Hello from void function");
}
// argument function
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(6, 6));
// function as types
var myMultiply;
// myMultiply=hello;
// console.log(myMultiply())
myMultiply = multiply;
console.log(myMultiply(2, 2));
// Objects and Types
// in objects the the properties matter however in functions  type and order matter
// in objects the name of properties matter in functions order and type both matter in objects order doesnt matter
var UserData = {
    name: "Faiz",
    age: 12
};
// UserData={
//     name:"Rohail",
//     age:22
// }
// complex objects
var complex = {
    data: [12, 12, 12],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [12, 12, 12],
    output: function (all) {
        return this.data;
    }
};
// Union types or assigning more then one type to a variable
var myrealAge = 23;
myrealAge = "32";
//myrealAge=true; this will not be possible 
// we can check types with typeof
// Nullable types
// A variable which is initialized with number can not be again reinitialzied with null bcz it expects a number
// however a variable which is undefined can be null however if we still want ot intialize a variable with number
// and null we should use union types
var canbeNull = 12;
canbeNull = null;
var canalsobeNull;
canalsobeNull = null;
var canThisBenull = null;
canThisBenull = 12;
console.log(canThisBenull);
// A variable which is assigned null can be assigned any string or number again
