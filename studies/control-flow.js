/**
 * CONTROL-FLOW
 * 
 * 0. Conditional statements are used to perform different actions based on different conditions.
 * The 4 conditional statements we can use are: if, else, else if, and switch statements.
 * 1. If statements are used to perform different actions based on different conditions.
 * 2. Use else statements to specify a block of code to be executed, if the same condition is false.
 * 3. Use else if to specify a new condition to test, if the first condition is false.
 * 4. Use switch to specify many alternative blocks of code to be executed.
 */

 1.//if statements//
 var hour = 17;
 if (hour < 18) {
    greeting = "Good day"; //Results to "Good day"
  }

  2.//else statements//
  var hour = 19; 
  if (hour < 18) { //This will hit false
    greeting = "Good day";
  } else {
    greeting = "Good evening"; //Results to "Good evening"
  }

  3.//else if statements//
  var time = 30;
  if (time < 10) { 
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day"; 
  } else {
    greeting = "Good evening"; //Results to "Good evening"
  }

  4.//switch statement//
  //The switch expression is evaluated once.
  //The value of the expression is compared with the values of each case.
  //If there is a match, the associated block of code is executed.
  //If there is no match, the default code block is executed.

  switch ("homies") {
    case "friends":
      console.log("I have good friends");
      break;
    case "eses":
      console.log("My friends are eses");
      break;
    case "homies":
      console.log("I kick it with the homies"); // Prints "I kick it with the homies" 
      break;
    default:
      console.log("I have no friends");
      break;
  }
