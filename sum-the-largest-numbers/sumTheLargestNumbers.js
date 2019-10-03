/*
Purpose of the lastIndexOf function:
  To find the last instance of a given value in a given array
Parameters:
  Array | Array to be searched
  Number | Value to find
Conditions:
  If the Value never occurs, return -1
Output:
  Number | Index of the last instance of that value
*/

/* Example Function
const lastIndexOf = function (array, value) {
  let index = ""; // Set an empty index
  let matchedPosition = []; // Set an empty variable to store matched positions
  for (let i = 0; i < array.length; i++) { // Iterate through index
    if (array[i] === value) {
      matchedPosition.push(i); // Push each matched position to the matchedPosition array
    }
  }
  matchedPosition.length > 0// Make sure there are matched positions
    ? index = matchedPosition[matchedPosition.length - 1] // If there are matched positions, grab the position with the greatest index in the matchedPosition array
    : index = -1; // If there are no matched positions, store -1 as the index
  return index; // Reurn the value
}
*/

let sumLargestNumbers = function(data) {
  // Put your solution here
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));