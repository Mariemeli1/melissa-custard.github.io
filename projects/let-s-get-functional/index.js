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
        if(customer.age > accumulate.age){
            return customer;
        }
        return accumulate;
    });
    return oldPeople.name;
}

var youngestCustomer = function(arr){
var youngPeople = _.reduce(arr, function(accumulate, customer){
    if(customer.age < accumulate.age){
        return customer;
    }
    return accumulate;
});
return youngPeople.name;
}

var averageBalance = function(arr){
    var avgBalance = _.reduce(arr, function(acc, customer){
    return acc += Number(customer.balance.replace(/\$|,/g, ""));
  }, 0);
  return avgBalance / arr.length;
}

var firstLetterCount = function(arr, letter){
    var beginningLetter = _.reduce(arr, function(acc, current){
      if(current.name.charAt(0).toUpperCase() === letter.toUpperCase()){
        return acc += 1;
      }
       return acc;
    }, 0);
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
        //iterating through my
            for(var i = 0; i < current.friends.length; i++){
                if(current.friends[i].name === name){
                    acc.push(current.name);
                }
               
            }
            return acc;
    },[]);
    return friendList;
};

var topThreeTags = function(arr){

};

var genderCount = function(arr){
    let countObj =_.reduce(arr, function(accumulator, current){
        if(accumulator[current.gender]){
            accumulator[current.gender] += 1;
        } else {
            accumulator[current.gender] = 1;
        }
        return accumulator;
    },{});
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
