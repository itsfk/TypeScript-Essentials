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
