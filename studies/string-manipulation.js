/**
 * STRING-MANIPULATION
 * 
 *0. To change or manipulate a string some functions or methods are required.
 *1. There are alot of methods you can use on a string to manipulate it.
 */

 1.//String Manipulation With Addition Operator//
 var firstName = 'Melissa';
 var lastName = 'Custard';
 var fullName = 'My name is' + " " + firstName + " " + lastName;
 console.log(fullName); //Prints 'My name is Melissa Custard'

 2.//Concat() Method//
 //The concat() method can be used instead of the plus operator, it joins 2 or more strings together.
 var firstName = 'Melissa';
 var lastName = 'Custard';
 var fullName = firstName.concat(" ", lastName);
 console.log(fullName); //Prints Melissa Custard

 3.//.toUpperCase() Method//
 //Converts a string to upper case with toUpperCase() method
 let text1 = "Hello World!";
 let text2 = text1.toUpperCase();
 console.log(text2); //Prints HELLO WORLD!

 4. //Replace() Method//
 //The replace() method replaces a specified value with another value in a string.
 let text = "I was born in Louisiana!";
 let newText = text.replace("Louisiana", "California");
 console.log(newText); //Prints I was born in California!
