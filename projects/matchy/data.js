/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'dog';
animal['name'] = 'Joe';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'Bark';
noises.push('achoo');
noises.unshift('awhoo');
noises[noises.length] = "woof";



console.log(noises.length);
console.log(noises.length-1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

noises.push('Grr');
noises.forEach(function(elm){
  animal.noises.push(elm);
// console.log(elm);
});

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * using bracket and dot notation
 *  for in loop , Object.keys, object.property, object['property']
 *
 * 2. What are the different ways of accessing elements on arrays?
 * using bracket notation and the forEach method
 * for loop, forEach(), .length, .length-1, .push()
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal)
console.log(animals);
var duck = {
  species: 'duck',
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}
animals.push(duck);
console.log(animals);
var waterAnimal = {
species: 'fish',
name: 'Manny',
noises: ['bock', 'cacaw']
}
animals.push(waterAnimal);
var mammal = {
  species: 'cow',
  name: 'Betsy',
  noises: ['moo', 'mah']
}
animals.push(mammal);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Array
//I chose an array because array hold lists.

var friends = [];
function getRandom(array){
 return Math.floor(Math.random()* array.length);
}
var rando = getRandom(animals);
friends.push();
console.log(friends);
animals[1].friends = friends;




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}