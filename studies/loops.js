/**
 * LOOPS:
 * 
 * 0.Loops are used in JavaScript to perform repeated tasks based on a condition. 
 * Conditions typically return true or false.
 * A loop will continue running until the defined condition returns false.
 * 1. For loops need a initial expression, a condition expression, a increment expression and a statement.
 * For loops loop through a block of code a number of times
 * 2. A while loop executes a statement as long as the test condition evaluates to true.
 * 3. For in loops iterate through an object in order to get its key/value pairs.
 */
 //1. For loop//
 // Iterating over an array forward using a for in loop.
 var words = ['hi', 'bye', 'hola', 'adios'];
    for(let i = 0; i <= words.length; i++){
        console.log(words[i]); //---> Prints hi bye hola adios to the console.
 }
 // Iterating over an array backwards using a for in loop. 
 var colors = ['pink', 'green', 'yellow']
    for(let i = colors.length - 1; i >= 0; i--){
            console.log(colors[i]);//---> Prints yellow green pink to the console.
    }
// Using a for loop to iterate starting at one and incrementing till we get to number 10 and stop. 
// Expression one is used to initialize a counter variable
// Expression two is the condition for running the code block and tells it when to stop
// Expression three is used to increment the counter variable
 for(let i = 1; i <= 10; i++){
    console.log(i); //----> Prints 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 to the console.
 }
 //2. While loop//
 // First initialize a counter variable
 // The code within the loop will run, over and over again as long as its true and then it'll stop.
 // Using a while loop to iterate starting at 10 and decrementing till we get to 1
 // Decrement the counter variable in order to count down/backwards.
  let i = 10;
  while(i >= 1){
  console.log(i); //---> Prints 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 to the console.
  i--;
}
//3. For in loop//
// The syntax for a for in loop is >> for (let key in object){}
// You need to put the name of the object you are trying to iterate through
// To print its keys you need to console.log(key);
// In order to get its values you need the name of the object and key in brackets console.log(object[key]);
var mel = {name: 'Melissa', funny: true, hair: 'brown'}
    for(let key in meObj ){
      console.log(meObj[key]);
    }
for (let key in mel){
    console.log(key) //---> Prints name funny hair to the console.
    console.log(mel[key]) //---> Prints Melissa true brown to the console.
}