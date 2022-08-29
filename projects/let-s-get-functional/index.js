// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./melissa-custard.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //invoke _.filter to return an array of only the male customers
    var males = _.filter(array, function(customer){
            return customer.gender === 'male';
    });   //return the length of array
            return males.length;

};

var femaleCount = function(array){
    //created a var that used the reduce function with array, function as parameters and accumulater and current as thee function parameter parameters
    var numFemales = _.reduce(array,function(accumulator, current){
     //determining if current gender is female
        if(current.gender === 'female'){
            //if so then accumulator becomes 1 for that first female found in the array and adds 1 for each female there is 
            accumulator += 1;
        }//returns 3 because there are  3 females in the array
        //returns accumulator to the num females var/ reduce function
        return accumulator;
    }, 0);
    //returns the result of numsFemale(3) to the femaleCount function
    //give us our answer
    return numFemales;
};

var oldestCustomer = function(arr){
    var oldPeople = _.reduce(arr, function(accumulate, customer){
        //determining if customer age is greater than accumulator age
        if(customer.age > accumulate.age){
            //if it is return the customer
            return customer;
        }
        //return accumulate
        return accumulate;
    });
    //return the function (the oldest male) and using the dot notation to get his name
    return oldPeople.name;
}

var youngestCustomer = function(arr){
var youngPeople = _.reduce(arr, function(accumulate, customer){
    //determining if customer age is less than accumulator age
    if(customer.age < accumulate.age){
        //if it is return the customer
        return customer;
    }//return accumulate
    return accumulate;
});//return the function (the youngest customer) and using the dot notation to get his name
return youngPeople.name;
}

var averageBalance = function(arr){
    var avgBalance = _.reduce(arr, function(acc, customer){
        //returning the accumulator value assigned to the Number vmethod which turns a value to a number
        //using regex to remove the comma and dollar sign to just get the numbers (the balance)
    return acc += Number(customer.balance.replace(/\$|,/g, ""));
  }, 0);//seed value of 0
//return the function divided by the array which gives me the average balance i needed to return
  return avgBalance / arr.length;
}

var firstLetterCount = function(arr, letter){
    var beginningLetter = _.reduce(arr, function(acc, current){
        //if the current name first letter uppercased is strictly equal to the given letter uppercased
      if(current.name.charAt(0).toUpperCase() === letter.toUpperCase()){
        //return accumulator assign it to 1 and adds 1 for each letter capitalized from the first letter
        return acc += 1;
      }//return accumulator
       return acc;
    }, 0);//initial seed value of 0
    //return my beginningLetter function
    return beginningLetter;
}

var friendFirstLetterCount = function(array, customer, letter){
    var friendly = _.reduce(array, function(acc, current){
         // determine if the current item matches the input customer
            if(current.name === customer){
                // iterate through current friends property
              for(var j = 0; j < current.friends.length; j++){
                //determine if current friends names first letter uppercased matches the given letter uppercased
                if(current.friends[j].name.charAt(0).toUpperCase() === letter.toUpperCase()){
                    //add and assign accumulator to 1
                    acc += 1;
                }

               }    
            }//return accumulator
             return acc;
    }, 0);//return my friendly function
    return friendly;
};

var friendsCount = function(arr, name){
    var friendList = _.reduce(arr, function(acc, current){
        //iterating through my current friends property
            for(var i = 0; i < current.friends.length; i++){
                //determining if my current name has a given name in its friends list
                if(current.friends[i].name === name){
                    //if so it will push the current name of the customer into my accumulator array
                    acc.push(current.name);
                }
               
            } //return accumulator array
            return acc;
    },[]); //return my friendList function
    return friendList;
};

var topThreeTags = function(arr){
    //created 2 variables and set it to a empty array
var mostCommon = [];
var tags = [];
//iterated through my array
    for(let i = 0; i< arr.length; i++){
        //iterated through my tags in my array
        for(let j = 0; j < arr[i].tags.length; j++){
            //pushed the current element of my array and tags anto my tags variable
        tags.push(arr[i].tags[j]);
        }
    }
    //create a object and set it to a empty object
var object = {};
    //iterated through my tags array
for(var m = 0; m < tags.length; m++){
    //checking if object has the current element of tag and if it does add and assign it to 1
    if(object[tags[m]]){
    object[tags[m]] += 1;
    } else { //else assign it to 1
    object[tags[m]] = 1;
    }

} //using object.entries method to turn the object into an array
let array = Object.entries(object);
//using the sort method to sort the elements of array in place and return the reference to the same array, but sorted.
    array.sort(function(a, b){
        //minusing the lowest from the greatest
        return b[1] - a[1];
    });

        for(var z = 0; z < 3; z++){
            //pushing the top three values into my mostCommon array
            mostCommon.push(array[z][0]);
        }//returning my mostCommon array
        return mostCommon;
}

var genderCount = function(arr){
    let countObj =_.reduce(arr, function(accumulator, current){
        //if accumulator has a current gender
        if(accumulator[current.gender]){
            //add and assign 1 to sccumultator for every gender there is
            accumulator[current.gender] += 1;
        } else {//else
            //return accumulators current gender to 1
            accumulator[current.gender] = 1;
        }//return accumulator
        return accumulator;
    },{});//initial seed value to an object
    //return my countObj function
    return countObj;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
