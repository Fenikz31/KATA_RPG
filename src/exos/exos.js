function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
            console.log(product)
        }
        // Only change code above this line
    }
    return product;
}


// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]])

console.log('--------')

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                console.log(contacts[x][prop])
                return contacts[x][prop];
            } else {
                console.log("No such property")
                return "No such property";
            }
        }
    }
    console.log("No such contact")
    return "No such contact";
}

lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "number");
lookUpProfile("Bob", "potato");
lookUpProfile("Akira", "address");
console.log('--------')

function checkScope() {
    'use strict';
    let i = 'function scope'
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

checkScope()
console.log('--------')
function printManyTimes(str) {
    "use strict";

    // change code below this line

    const sentence = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }

    // change code above this line

}
printManyTimes("freeCodeCamp");

console.log('--------')

const s = [5, 7, 2];
function editInPlace() {
    'use strict';
    // change code below this line
    s[0] = 2
    s[1] = 5
    s[2] = 7
    // s = [2, 5, 7]; <- this is invalid
    console.log(s)
    // change code above this line
}
editInPlace();


console.log('--------')

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // change code below this line

    Object.freeze(MATH_CONSTANTS)

    // change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


console.log('--------')
/*
In JavaScript, we often don't need to name our functions, especially
when passing a function as an argument to another function. Instead,
we create inline functions. We don't need to name these functions
because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 provides us with the syntactic sugar to not have to write anonymous
functions this way. Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
When there is no function body, and only a return value, arrow function
syntax allows you to omit the keyword return as well as the brackets
surrounding the code. This helps simplify smaller functions into
one-line statements:

const myFunc = () => "value";
This code will still return value by default.

Rewrite the function assigned to the variable magic which returns a
new Date() to use arrow function syntax. Also make sure nothing
is defined using the keyword var.
 */

const magic = () => new Date()


console.log('--------')

/**
 * ES6: Write Arrow Functions with Parameters
Just like a regular function, you can pass arguments into an arrow function.

// doubles input value and returns it
const doubler = (item) => item * 2;
If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.

// the same function, without the argument parentheses
const doubler = item => item * 2;
It is possible to pass more than one argument into an arrow function.

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

You should replace the var keyword.
myConcat should be a constant variable (by using const).
myConcat should be a function.
myConcat() should return [1, 2, 3, 4, 5].
function keyword should not be used.
*/

const myConcat = (arr1, arr2) => arr1.concat(arr2)
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));


console.log('--------')

/**
 * ES6: Set Default Parameters for Your Functions
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

The result of increment(5, 2) should be 7.
The result of increment(5) should be 6.
A default parameter value of 1 should be used for value.
*/

const increment = (number, value) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6


console.log('--------')
console.log('--------')
console.log('--------')
console.log('--------')
