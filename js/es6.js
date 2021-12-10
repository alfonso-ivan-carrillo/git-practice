(function(){
    "use strict"

    // Exponentiation Operator

    // old way
    console.log(Math.pow(2, 8));  // output 256
    console.log(Math.pow(3, 4));     // output 81

    console.log(2 ** 8);  // output 256
    console.log(3 ** 4);  // output 81


    // let or const vs var - Block Scoped

    // old way
    if (true){
        var nombre = "codeup";
    }
    console.log(nombre); // logs "codeup'

    // if (true ){
    //     let name1 = 'codeup';
    // };
    // console.log(name1); // logs undefined

    // template strings
    // old way
    const name = "codeup";
    console.log("hello, " + name + "!");
    console.log(`Hello, ${name}!`);
    console.log(`Hello, ${name.toUpperCase()}!`);

    // for of loop
    let numbers = [1, 2, 3, 4, 5];
    for (let element of numbers) {
        console.log(element)
    };

    // arrow functions
    const sayHello = function (name){       // function sayHello(name){return "Hello, " + name + "!";
        return 'Hello, ' + name + "!";
    };
    console.log(sayHello("alfonso"));

    const sayHi = (name) => "Hello, " + name + "!";
    console.log(sayHi("alfonso"));

    // Optionally, the parenthese can be omitted if there is only one argument.
    const sayHello1 = name => "Hello, " + name + "!";
    console.log(sayHello1("alfonso"));

    // can also have multiple statements
    const sayHello2 = name => {
        const greeting = "Hello, " + name + "!";
        return greeting;
    }
    console.log(sayHello2("alfonso"));

    // default function parameter values
    // old way
    function sayHello3(name){
        if (typeof name === 'underfined'){
            return name = 'World';
        }
        return "Hello, " + name + "!";
    }

    console.log(sayHello3(""));
    console.log(sayHello3("codeup"));

    // es6 way
    function sayHello4(name = "world"){
        return `Hello, ${name}!`;
    }

    console.log(sayHello4());
    console.log(sayHello("codeup"));

    const sayHello5 = (name = "World") => `Hello, ${name}!`;
    console.log(sayHello5());
    console.log(sayHello5("codeup"));

    // Object Property Variable Assignment Shorthand
    // old way
    const name0 = "codeup";
    const person = {
        name: name0,
        age: 4
    };
    console.log(person);

    const person1 = {
        name,
        age: 4
    };
    console.log(person1);

    // Object Destructuring

    // old way
    var person8 = {name: "codeup", age: 4};
    var name88 = person8.name;
    var age = person8.age;
    console.log(name88);
    console.log(age);

    // new way
    const person99 = {name: codeup, age9: 4};
    const {name9, age9} = person99
    console.log(name9);
    console.log(age9);


})();
