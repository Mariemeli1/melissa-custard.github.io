// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
//created a function that takes in a value
_.typeOf = function(value){

    if(Array.isArray(value)) {
        return 'array';
      } //if value is null return its value as a string ('null')
      if(value === null) {
        return 'null';
      }//if type of value is object return its value as a string ('object')
      if(typeof value === 'object' ) {
        return 'object';
      }//if type of value is a function return its value as a string(' function')
       if(typeof value === 'function') {
        return 'function';
       }//if type of value is a string return its value as a ('string')
       if(typeof value === 'string') {
         return 'string';
       } //if value is true or value is false return the type of value as a string('boolean')
       if(value === true || value === false) {
         return 'boolean';
       }//if value is undefined return its value as a string('undefined')
       if(value === undefined) {
         return 'undefined';
       }//if type of value is a number return the type of value as a string
       if(typeof value === 'number') {
         return 'number';    
       }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
  // if array is not array return empty array
  if(!Array.isArray(array)){
    return [];
  }
  //if number is not a number return first element of array 
  if(!number){
    return array[0];
  } else { //else return the first number items of array using splice method 0 and number parameter
    return array.splice(0, number)
  }

}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(arr, num){
  // arrat is not an array or num is less than or equal to 0 return empty array.
  if(!Array.isArray(arr) || num <= 0){
    return [];
  }
  //if num is more than arr.length return the whole array
  if(num > arr.length){
    return arr;
  } //if num is not anum or num is greater than arr.length return the last element of the arrayn
  if(!num || num > arr.length){
    return arr.pop();
  }// if num is more than or equal to 0 return arr sliced at the -num
  if(num >= 0){
    return arr.slice(-num);
  }

    // (Math.max(arr.length - num, 0));// ask Alex about this
  
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
  //iterate through array
  for(var i = 0; i < array.length; i++){
    //if value 
    if(value === array[i]){
      return i;
    }
  }

  return -1;
        
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(arr, value){
  //created a var and assigned it to false
  var output = false;
  //iteratedd through my array
  for(let i = 0; i < arr.length; i++){
    //ternary operator it array has values false = true and false equals false
    arr[i] === value ? output = true : output = false;
    //if output is true return true
    if(output === true){
      return true;
    }
  }//return false
   return output;  
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
//determine if collection is an array
    if(Array.isArray(collection)){
// iterate through collection using a for loop
for(var i = 0; i < collection.length; i++){
//pass current item in array , current index, and collection in to func
func(collection[i], i, collection)
}
    }else{ //else it is an object
        for(let key in collection){
            func(collection[key], key, collection)
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

  //creating the function
_.unique = function(arr){
 // creating a variable and setting it to a empty array
  var output = [];
// iterating over the array using a for loop
  for(var i = 0; i < arr.length; i++){
    // checking if current value doesnt exist in output using indexOf method and is strictly equal to -1
    if(_.indexOf(output, arr[i]) === -1){
    // if true push the current index into the output array
    output.push(arr[i]);
    }
  }//return the new array
  return output;
}
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


//create a function that takes in an array and a function as its parameters
_.filter = function(arr, func){
  //creating a var and setting it to a empty array that will later be returned
  var output = [];
//creating a for loop that will iterate through the array
  for(var i = 0; i < arr.length; i++){
//determining if calling the function and passing the arguments the element its index and array is true 
    if(func(arr[i], i, arr) === true){
      //pushed in the current element to my output array
      output.push(arr[i]);
    }
  }
  //returning the new array
  return output;
}
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//creating a function that takes in parameters of an array and a function
_.reject = function(arr, func){
  //creating a var and setting it to a empty array that will later be returned
var output = [];
//iterate through the array
  for( var i = 0; i < arr.length; i++){
//calling the function and passing the arguments the element its index and array
    if(!func(arr[i], i , arr)){
      //pushing the arrays elements into my output array
    output.push(arr[i])
    }
  }
  //returning the new array
  return output;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(arr, func){
  //created 3 new variables with a value of a empty array
  var truthArr = [];
  var falseArr = [];
  var someArr = [];
//iterating through my array
  for(var i = 0; i < arr.length; i++){
    //if passing in arrays elements its index and the whole array into the functiion is true
    if(func(arr[i], i, arr))
    //push in the elements into the truth array
     truthArr.push(arr[i]);
    //if passing in arrays elements its index and the whole array into the function is false 
    if(func(arr[i], i, arr) === false){
      //push in the elements to the falseArr
      falseArr.push(arr[i]);
    }
  }
  //return the someArr with truthArr and falseArr concated together with arrays around them which created 
  //an array with 2 sub arrays
  return someArr.concat([truthArr], [falseArr]);
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
  //create output variable and give it value of a empty array
  var output = [];
  // determine if collection is array, else its a object
  if(Array.isArray(collection)){
// iterate through array
for(let i = 0; i < collection.length; i++){
//push the result of invoking func on current value, index, and collection into output
   output.push(func(collection[i], i, collection))
}
  } else{ //else its an object
// iterate through object
for(let key in collection){
//push the result of invoking func on current value, index, and collection into output
   output.push(func(collection[key], key, collection))
}
  
  }
   //return output
  return output;
  
}
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(arr, prop){
  //use map method to return the objects properties for every element
  let output = _.map(arr, function(obj){
    //return the value at prop key in input obj
    return obj[prop];
  });
  //return output
  return output;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
  //if func is undefined
  if(func === undefined){
    //if collection is an array
    if(Array.isArray(collection)){
      //iterate through the collection array
      for(var i = 0; i < collection.length; i++){
        //if the array element doesnt exist return false
        if(!collection[i]){
          return false;
        }
      }
    } else { //else statement
      //for in loop to iterate through the keys of collection
      for( let key in collection){
        ////if the array key doesnt exist return false
        if(!collection[key]){
          return false;
        }

      }

    }
  } else { //else
    //if collection is array iterate through the array
    if(Array.isArray(collection)){
      for(var i = 0; i < collection.length; i++){
        //checking if the return value for calling the function 
        //with these parameters passed in is false , if so return false
        if(func(collection[i], i, collection) === false){
          return false;
        }
      }
    } else { //else
      //using a for in loop to iteratte through my keys
      for( let key in collection){
       //checking if the return value for calling the function 
       //with these parameters passed in is false , if so return false
        if(func(collection[key], key, collection) === false){
          return false;
        }

      }

    }
  }//return true
      return true;
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
   //if func is undefined
  if(func === undefined){
    //if collection is an array
    if(Array.isArray(collection)){
       //iterate through the collection array
      for(var i = 0; i < collection.length; i++){
          //if the array element exist return true
        if(collection[i]){
          return true;
        }
      }
    } else { //else
      //created a for in loop that iterates through the keys of collection
      for( let key in collection){
         //if collection has key return true
        if(collection[key]){
          return true;
        }

      }

    }
  } else {//else
    //if collection is an array
    if(Array.isArray(collection)){
      //iterate through the collection array again
      for(var i = 0; i < collection.length; i++){
         //checking if the return value for calling the function 
        //with these parameters:the collection element,the current index and
        //the whole array passed in is true , if so return true
        if(func(collection[i], i, collection)){
          return true;
        }
      }
    } else { //else
      //created a for in loop to iterate through the keys in collection
      for( let key in collection){
           //checking if the return value for calling the function 
          //with these parameters passed in is true , if so return true
        if(func(collection[key], key, collection)){
          return true;
        }

      }

    }
  } //return false
      return false;

}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(arr, func, seed){
  var result;
  //determine if seed is not undefined
  if(seed !== undefined){
    result = seed; //asign result the initial value of seed
    //iterate using a for loop
    for(let i = 0; i < arr.length; i++){
      //assign result to the function call with parameters passed in
      result = func(result, arr[i], i, arr);
    }
  } else { // else seed is undefined
    result = arr[0]; //asign result first value in array 
    for (let i = 1; i < arr.length; i++){
        result = func(result, arr[i], i, arr);
    }
  }
  return result;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(...obj){
  return Object.assign(...obj, {});
  }
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
