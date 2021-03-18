function myFunction(myObj, checkProp) {
  // Only change code below this line
  var myObj = {
    title: "Titanic",
    song: "My Heart Will Go On",
    genre: "Drama",
  };
  var answer = "Not Found";
  if (myObj.hasOwnProperty(checkProp)) {
    answer = myObj[checkProp];
  }

  return answer;
  // Only change code above this line
}
module.exports = myFunction;
