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

var friendFirstLetterCount = function(array, customer, letter){
    var count = 0;
    var capitalize = customer.toUpperCase();
    var capital2 = letter.toUpperCase();
    function friendFirstLetterCount(array, customer, letter){
        // iterate through array
        for (let i = 0; i < array.length; i++){
          // determine if the current item matches the input customer
          if (array[i].name === customer){ 
            // array[i] = { name: 'Doris Smith', friends: [] }
            // iterate through array[i]'s friends property
            for (let j = 0; j < array[i].friends.length; j++){
              // array[i].friends[j] => { name: 'Bethany' }
      
              // how can we add to the count variable if the current friend object's name begins with the current letter
            }
      
          }
        }
      
        return count;
      }


};
//     var friend = _.some(array, function(customer, letter){
//        if(customer[i] === letter){
//         count++;
//        }
//     })
//         return count;
// };

var friendsCount = function(arr, name){
    
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
    
    // var genders = {
    //     male: 0,
    //     female: 0,
    //     "non-binary": 0
    // }
    // var females = _.reduce(arr, function(accumulator, current){
    //     if(current.gender === 'female'){
    //         accumulator += 1;
    //     }
    //     return accumulator;
    // }, 0);
    // var males = _.reduce(arr, function(accumulator, current){
    //     if(current.gender === 'male'){
    //         accumulator += 1;
    //     }
    //     return accumulator;
    // }, 0);
    // var nonBinary = _.reduce(arr, function(accumulator, current){
    //     if(current.gender === 'non-binary'){
    //         accumulator += 1;
    //     }
    //     return accumulator;
    // }, 0);
    // genders.male = males;
    // genders.female = females
    // genders['non-binary'] = nonBinary;
    // return genders;


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
