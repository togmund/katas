/*
11:15
Purpose of the sumLargestNumbers function:
  In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.
Parameters:
  Array | Array to be searched
Conditions:
  If the Value never occurs, return -1
Output:
  Number | Sum of the two largest values
*/

let sumLargestNumbers = function(data) { // Hand us an array
  let sum = []; // Empty array for filling
  sum = data.sort(); // Sort the contents of the incoming array and dump it into our sum array
  // console.log(sum);
  sum.splice(2,sum.length); // Reduce the sum array to the first two indexes
  // console.log(sum);
  sum.length === 2 // Validate that the array we have created and sliced has exactly the number of values to sum
    ? sum = sum[0] + sum[1]
    : sum = "Gimmie an array with at least two numbers, you doofus!"
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));