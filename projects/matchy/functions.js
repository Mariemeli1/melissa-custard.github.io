/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(arr, str){
     for(var i = 0; i < arr.length; i++){
        if(arr[i].name === str){
            return arr[i];
       }
    }
  return null;
    
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* 
I: a function that takes in 3 parameters
O: 
C:
E:
*/
//arr is an array of animals 
//EX.)[sheep, goat, pig]
//str representing  the name of a animal  on which to perform a search 
//EX.)'pig'
// replaceObj is an object that represents the replacement animal 
//EX.) {cat: gray, fat: true, age: 1}

function replace(animals, name, replacement){
    for (i = 0; i < animals.length; i++){
        if (name === animals[i].name){
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
     for(var i = 0; i < animals.length; i++){
         if(name === animals[i].name){
              animals.splice(i, 1);
              console.log(animals);
            }
    } 
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    if(animal.name.length > 0){
    }
    if(animal.species.length > 0){
    }
    for (let i = 0; i < animals.length; i++){
    if(animal.name !== animals[i].name){
         animals.push(animal);
    } else {
        return null;
    }
  }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
