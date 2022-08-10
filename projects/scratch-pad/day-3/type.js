// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
/*
I: A Function that takes in a value as its parameter
O: True if value is an Array and false otherwise
C: Array.isArray method
E: N/A
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //using Array.isArray method with value in its parenthesis and returning true if true and false if not
    if(Array.isArray(value)){
        return true;
    
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
/*
I: A function that takes a value as its parameter
O: True if value is an object
C: 
E:
*/
function isObject(value) {
    // YOUR CODE BELOW HERE //
    return Object.prototype.toString.call(value) === '[object Object]'
}
   

// YOUR CODE ABOVE HERE //}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */


function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]'){
            return true;
            } else {
             return false;
     }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)) {
     return 'array';
   } 
   if(value === null) {
     return 'null';
   }
   if(value instanceof Date) {
     return 'date';
   }
   if(typeof value === 'object' ) {
     return 'object';
   }
    if(typeof value === 'function') {
     return 'function';
    }
    if(value === 'string') {
      return 'string';
    } 
    if(value === 'boolean') {
      return 'boolean';
    }
    if(value === undefined) {
      return 'undefined';
    }
    if(typeof value === NaN) {
      return '123';    
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
