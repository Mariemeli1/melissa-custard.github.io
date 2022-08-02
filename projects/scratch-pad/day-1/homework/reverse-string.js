// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/*
I: a function that takes a input
O: returns a new string with the input in reverses
C:you'll need a loop ; split mehtod; join methos; and reverse
E: make sure there is a new variable and that its joined together in reverse
*/

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //created a variable that splits the input string
    var splitString = input.split('');
    // created a variable that takes the previous var and reverses it
    var reverseString = splitString.reverse('');
    //created another variable that takes the previous var and joins it together
    var joinString = reverseString.join('')
    // created a for loop to access the index and loop through it in reverse
    for(var i = input.length - 1; i >= 0; i--){
     //returning the final variable
     return joinString;
     
    }

    
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}