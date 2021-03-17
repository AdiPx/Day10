// Only change code below this line
var myPet = {
    species: "avlijaner",
    name: "pujdo",
    legs: 4,
    friends: ["beli", "mrki"]
}
function myFunction(myObj){
    var myObj = myPet; 
    return myObj;
}
//Only change code above this line
console.log(myFunction(myPet)); // Change this line
module.exports = { myPet, myFunction};