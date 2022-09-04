// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  var output = [];
  for(let i = 0; i < array.length; i++){
    for(let y = 0; y < array[i].length; y++){
      output.push(array[i][y]);
    }
  }
  return output;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, end, update, body) {
  for(let i = start; end(i); i = update(i)){
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(collection, func) {
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

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
let ltr = [];
let rtl = [];

  for(let i = 0; i < string.length; i++){
    let scriptName = characterScript(string.charCodeAt(i));//null or {direction: ???}

    if(scriptName !== null){
      if(scriptName.direction === 'ltr'){
          ltr.push(scriptName);
      } else{
        rtl.push(scriptName);
      }
    }
  }
//compare the lengths of the ltr/rtl arrays
if(ltr.length > rtl.length){
  return 'ltr'
}else {
  return 'rtl';
}
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
