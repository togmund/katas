/*
Purpose of the conditionalSum function:
  Take in an array of objects outlining the name of an instructor and their course, then return the name of the instructor whose name is longest.
Parameters:
  Array | instructors and their courses passed as unnamed objects
Conditions:
  Tie goes to the first name encountered
Output:
  String | The longest name
*/

const instructorWithLongestName = function(instructors) {
  let output;
  output = instructors;
  return output;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));