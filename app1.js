"use strict";
var myName1 = "Faiz";
var myNumber1 = 28;
//myName1=30; although we cant do this in typescript this would throw an error while compiled but
//still this would be converted into js file
// because noemitonerror is by default false which lets js file to be compiled
// noImplicitAny is set to false in tsconfig file which allows to initialize variable without any type
// let and cosnt
var variable = "Test"; // block scope
console.log(variable);
variable = "Another value";
console.log(variable);
var max = 100;
console.log(max);
//max=20 const is not assignable again
// Block scope
function reset() {
    var variable = "null";
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
var multi = function (val, val1) {
    return val * val1;
};
console.log(multi(2, 6));
// Spread Operator spreads the array into a list
var numbers = [1, 12, 14, 99];
console.log(Math.max.apply(Math, numbers));
// Rest Operator opposite to Spread Operator makesIntoArray
function makesArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makesArray(1, 2));
// Destructing Arrays
var myHobbbies = ["sports", "Reading"];
var hobbies1 = myHobbbies[0], hobbies2 = myHobbbies[1];
console.log(hobbies1, hobbies2);
// Destructing Objects
var userData = {
    name12: "Faiz",
    age: 22
};
var name12 = userData.name12, age = userData.age;
console.log(name12, age);
