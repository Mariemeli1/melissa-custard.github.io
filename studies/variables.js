/**
 * VARIABLES:
 * 
 * 0.Variables are containers for storing data values that can be changed later on.
 * Variables are how programmers give a name to a value so that we can reuse it, update it or simply keep track of it.
 * 1. To create a variable we can use the keywords var, let or const.
 * 2. You need to give a variable a name, names are case sensitive and can contain a letter or these 2 symbols $ or _
 * they can also contain numbers but they cannot start with a number.
 * 3. There are 2 things that need to take place in order to use a variable: Declaration and assignment/initialization.
 */


// 1. Declaration //
// To declare a variable you need the var keyword and the name of the variable
var favColor;
console.log(favColor); //-----> Prints out undefined because the var hasn't been assigned to any value.

// 2. Assignment/Initialization //
// Assigning a variable means giving the variable a value using an equal sign.
var favColor = 'pink';
console.log(favColor); //-----> Prints pink because that is the value assigned to the variable favColor.

//3. var
//var can be reassigned and redeclared
var favFood = "fries";
favFood = 'Nuggets'; 
console.log(favFood); // -----> Prints nuggets to the console because its been reassigned.
var favFood = 'salad';
console.log(favFood); // ----> Prints salad to the console because its been redeclared.

//4. let
//let can be reassigned but not redeclared;
 let num = '1';
num = '2';
console.log(num);// ---> Prints 2 to the console.
let num2  = '3'; // ----> Prints SyntaxError: Identifier 'num' has already been declared to the console

//5. const
//const can't be reassigned neither redeclared;
 const letter = 'M'; 
letter = 'B';
console.log(letter); // ----> Prints TypeError: Assignment to constant variable to the console.
const letter1 = "Z";
console.log(letter); // ----> Prints TypeError: Assignment to constant variable to the console.

//6. Hoisting
//var/let/const
//var declarations get hoisted to the top
//if you try to reference var before its declared you will get a value of undefined.
console.log(b); // ----> Prints the undefined to the console.
 var b = 7;
console.log(b); // ---> Prints 7 to the console.

//let and const are not hoisted so if you reference before declaring you will get a reference error.
console.log(bread); // ----> Prints ReferenceError: Cannot access 'bread' before initialization to the console.
console.log(corn); // Prints ReferenceError: Cannot access 'corn' before initialization to the console.
let bread = 'soft';
const corn = 'sweet';

//7. Scope 
// value can't be accessed outside the if statement when they are declared with let or const.
if (a === 1){
    let b = 22; // Let/const keywords are blockscoped
}
console.log(b); //Prints ReferenceError: b is not defined




