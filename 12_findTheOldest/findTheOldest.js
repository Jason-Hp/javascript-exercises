const findTheOldest = function(array) {
    let sorted = array.sort((a,b)=>{
        if(!a.yearOfDeath){
            ageOfa = (new Date().getFullYear()) - a.yearOfBirth;
        }
        else{
            ageOfa = a.yearOfDeath - a.yearOfBirth;
        }
        if(!b.yearOfDeath){
            ageOfb = (new Date().getFullYear()) - b.yearOfBirth;
        }
        else{
            ageOfb = b.yearOfDeath - b.yearOfBirth;
        }
        return ageOfb-ageOfa;
    })
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
