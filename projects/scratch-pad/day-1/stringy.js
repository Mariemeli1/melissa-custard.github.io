// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/*
I: Function takes a string
O: Function return the length of the string
C:
E:
*/
function length(string) {
    // YOUR CODE BELOW HERE //
 //return length of string
return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I: Function takes a string
O: returns a new string to lowercase
C: N/A
E: N/A
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
// creating a new variable and assigning it to our string input 
//using the toLowerCase method to force the input string to lowercase
var newString = string.toLowerCase();
//returning newString
return newString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: Function takes a string
O: Returns a new string forced to uppercase
C: N/A
E: N/A
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//created a new string and assigned it to the method 'toUpperCase' 
var newString = string.toUpperCase();
// returning the new string
return newString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: Function that takes a string
O: Returns a new string with a dash instead of a space in between
C: replace method and toLowerCase method
E: must have a dash instead of space and must be lower cased
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
//declaring a variable
var newString;
/*assigning the variable to the string input and using the replace.method to 
replace spaces with dashes and used the .tolowercase method to force it 
to lower case*/
newString = string.replace(/ /g, '-').toLowerCase();
//returning the new string
return newString;



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: Function that takes a string and a single character
O: Returns true if string begins with character and false if otherwise.
C: N/A
E: N/A
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
// creating a if else statement 
if (string.toLowerCase().startsWith(char)) {
    return true;
} else {
 return false;
}
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: Function that takes in two paramters, (Two strings)
O: string one and string two concatented
C:  use concat method
E: make sure the two strings return concatenated
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// creating a new variable that concatentes the 2 strings together using the concat method
var newString = stringOne.concat(stringTwo);
// returning the concatenated string
return newString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/*
I: any number of strings
O: return all of them together
C:
E:
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);

    

    return args;


   

    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
