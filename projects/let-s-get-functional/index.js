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
    var numFemales = _.reduce(array,function(accumulator, current){
        if(current.gender === 'female'){
            accumulator += 1;
        }
        return accumulator;
    }, 0);
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
    var totalBalance = _.map(arr, function(money){
        return averageBalance / average;
    })
};

var firstLetterCount = function(arr, letter){
    var beginningLetter = _.indexOf(arr, function(letter){
      var character = beginningLetter.name.toLowerCase();
    })
    return beginningLetter;
}

var friendFirstLetterCount;

var friendsCount = function(arr, name){
    
};

var topThreeTags;

var genderCount;

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
