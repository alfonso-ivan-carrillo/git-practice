"use strict";

(function(){

function practiceTypeof(input){
    return (typeof input === "boolean");
}

console.log(practiceTypeof(true));
console.log(practiceTypeof(false));
console.log(practiceTypeof(50));
console.log(practiceTypeof("true"));
console.log(practiceTypeof("practice"));
console.log(practiceTypeof(23));
console.log(practiceTypeof("string"));

function workWithOperators(x, y){

    return (x + y);
}

console.log(workWithOperators(5, 10));
console.log(workWithOperators(15, 43));
console.log(workWithOperators("work", "out"));


function playGame(input){
    var userInput = parseFloat(input);
    if (!isNaN(userInput)) {
        if (userInput % 2 == 0){
            alert(userInput + " is an even number.")
        } else {
            alert(userInput + " is an odd number");
        }
        if (userInput > 0){
            alert(userInput + " is a positive number.");
        } else {
            alert(userInput + " is a negative number.");
        }
    alert(userInput + " plus 100 is " + (userInput += 100));
    } else {
        alert(userInput + " is not a number.");
    }
}

if (confirm("Do you want to play a game")){
    var userResponse = prompt("Please enter a number");
    return playGame(userResponse);
} else {
    alert("You're no fun!");
}








})();