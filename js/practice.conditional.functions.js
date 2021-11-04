"use strict";


function trueOrFalse(input){
    return typeof  input;
}

console.log(trueOrFalse("12"));
console.log(trueOrFalse(true));
console.log(trueOrFalse("false"));
console.log(trueOrFalse(1));


function typeTest(input){
    return typeof input === "number";
}

console.log(typeTest("2"));


