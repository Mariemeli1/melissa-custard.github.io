// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/*
I: function that takes an array as its parameter
O: print its values
C: for loop
E: N/A
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //using a for loop to acces the array and print its values
  for(var i = 0; i <= array.length; i++){
   
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I: function that takes an array as its parameter
O: prints the values of the array
C: for loop
E: N/A
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //using a for loop to access the array and print its values in reverse
  for(var i = array.length - 1; i >= 0; i--){ //cant forget the length - 1 when in reverse and the i>= 0
    console.log(array[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: Function that takes an object as its parameter
O: Return an array containing the object keys
C: For in loop
E:
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var keys =[];
  for(var key in object){
   keys.push(key);
  }
   return keys;
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: function that takes a object as its parameter
O: prints the objects keys
C: using a for loop
E:N/A
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //using a for loop to print the objects keys
  for(var key in object){
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: Function that takes in an object as its parameter 
O: return an array containg the objects values
C:
E:
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var newArray = [];
  for(var key in object){
    newArray.push(object[key]);
  }
  
  return newArray;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for(var key in object){
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: A Function that takes an object as its parameter
O: return the number of key value pairs in an object
C: use Object.keys method and the length method
E: N/A
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
//using Object.keys method and length method to get the number of key value pairs in teh object and returned it within the function 
return Object.keys(object).length;

 


  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I: A function that takes in a object as its parameter
O: Print objects values in reverse
C: using Object.values method to access the values and using the reverse method
 to put them in reverse and used the forEach method to call each element
E: the keys returned in reverse
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //created a variable called reversedKeys that carry the values of the object in reverse
  var reversedKeys = Object.values(object).reverse();
//getting each key in the object and printing its values to the console
  reversedKeys.forEach(key => {
    console.log(key, object[key]); 
  });
  // YOUR CODE ABOVE HERE //
 
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
