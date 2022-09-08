/**
 * DATA TYPES:
 * 
 * 0. Data types describe the different types or kinds of data that we’re going to be working with 
 * and storing in variables. 
 * 1. Our simple data types are strings, booleans, undefined, null, numbers : NaN, infinity and -infinity.
 * Our complex data types are arrays, objects, and functions.
 * 3. Complex data types are containers that can contain bot simple and complex datatypes.
 * 4.  Primitive values are copied by there value and complex values are copied by their reference.
 * Primitive types are immutable, complex types only have an immutable reference, but their value can 
 * change over time.
 */
//String//
var cat = 'Ava'; //Ava is a string.

//Boolean//
var imHungry = true; 
var imFull = false;
// Both true and false are booleans.

//Undefined//
var simple; //simple is undefined
console.log(simple)// ---> Prints undefined to the console.

//Null//
var nothing = null;// ---> Prints null to the console.

//Number//
var num = 3;// ---> 3 is a number.

//NaN//
let x = Number.NaN; //x is not a number
console.log(x);// ---> Prints NaN to the console.

//Infinity//
let m = 1.797693134862315E+308;
let y = m * 1.001;
console.log(y);// ---> Prints infinity to the console

//-infinity//
var b = Number.NEGATIVE_INFINITY;
console.log(b);// ---> Prints -infinity to the console

//Array//
var array = []; // This is an array literal
var arr = ['hi', true, 1];// This is an array with simple data types in it.

//Object//
var object = {}; // This is an object literal
var obj = {
    greeting: 'hi',
    bool: true,
    num: 1
}; //This is an object with key/value pairs

//Function//
function add(t, v){ 
 return t + v
}
add(10, 100); // Prints 110 to the console.
//This is a function with a function call.

//Copy by value//
let a = 10; 
let u = a; //copies the value of a to u so u becomes 10
a = 50; // a is now assigned to 50;
console.log(a)// ---> Prints 50 to the console.
console.log(u)// ---> Prints 10 the console.

//Copy by reference//
let g = {value: 10}
let e = g; //copying the reference to i which becomes {value: 30}
g.value = 30;
console.log(g) //---> Prints {value: 30} to the console
console.log(g.value) //---> Prints 30 to the console
console.log(e) //---> Prints {value: 30} to the console;
console.log(e.value); //---> Prints 30 to the console.








