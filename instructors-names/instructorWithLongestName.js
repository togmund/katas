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

const instructorWithLongestName = function (instructors) {
  // console.log("Input: ", instructors) // Initial input for debugging
  let longest = []; // Empty array to house the sorted list, then the eventual output of our function
  longest = instructors.sort(function descendingSort(a, b) { // Borrowed the sort algorithm from sumTheLargestNumbers.js
    return b.name.length - a.name.length; // This time I'm sorting based on the length of just the names in the objects in the array, longest to shortest
  });
  longest.length > 0 // Let's make sure we have at least one object ot display
    ? longest = longest[0] // The first object in the array should be the one with the longest name value. Set our longest output to just that value
    : longest = "Gimmie an array with at least one object, you doofus"; // Error message in case the sum array has no values
  return longest;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log("\n");
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));