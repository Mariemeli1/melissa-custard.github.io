//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
     var arr =[];
     for(var key in object){
     arr.push((object[key]));  
     
    
 }
 return arr;

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
        var arr = [];
        for(var key in object){
            arr.push((key));
        }
        return arr.join(" ");
        

}



//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
        var arr = [];
        for(var key in object){
           if(typeof object[key] === 'string'){
            arr.push(object[key]);
           } 
            
        }
        
        return arr.join(" ");
    }

    


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
        } else if (Array.isArray(collection) || typeof collection === 'object'){
         return 'object';
 }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
     
    return string.charAt(0).toUpperCase() + string.slice(1);
     
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //explanation
   return string.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')


}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var str = object.name;
return "Welcome " + str.charAt(0).toUpperCase() + str.slice(1) + "!"; 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) { 
    var str1 = object.name;
    var str2 = object.species;
    return str1.charAt(0).toUpperCase() + str1.slice(1) + " is a " + str2.charAt(0).toUpperCase() + str2.slice(1);
    

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.noises){
        if(object.noises.length !== 0){
         return object.noises.join(" ");
            }else{
         return "there are no noises";
            } 
            }else{
         return "there are no noises";
             }
     
    
    

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
        if(string.includes(word)){
        return true;
        }else{
        return false;
        }

    }

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
     object.friends.push(name);
     return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.friends){
        if(object.friends.includes(name)){
            return true;
        } else{
            return false;
        }
    } else{
        return false;
    }
    
}
////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var list = [];
    for(var i = 0; i < array.length; i++){
        if(name !== array[i].name && array[i].friends.indexOf(name) === -1){
            console.log(array[i].name);
            list.push(array[i].name);     
        }
    }   
    console.log(list);        
    return list;
}        
       

// after the loop over the array try indexof method to check if the friends array has the name and if it does not then you want to push that name to array you are returning

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    for(var i in object){
        if(i = key){
            if (object.i !== value){
                object[i] = value;
                return object;
            }
        }
    }
    object.key = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var key in object){
        for(i = 0; i <= array.length; i++){
            if(key === array[i]){
                delete object[key];
            }
        }

    }
    return object;
}   
  

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return array.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}