// Create school object here
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
  roar: "roar-roar",
};
// End of school object

function myFunction(roar) {
  // Change this line
  //Only change code below this line
  delete lion[roar];
  return lion;
  //Only change code above this line
}
console.log(myFunction("roar")); // Change this line
module.exports = myFunction;
