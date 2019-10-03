/*
Purpose of the sumLargestNumbers function:
  Find the two largest numbers in a given array and sum them together
Parameters:
  Array | Data to be searched
Output:
  Number | Sum of the two largest values
*/

const sumLargestNumbers = function (data) { // Hand us an array
  // console.log(data); // Log the argument for debugging
  let sum = []; // Create an empty array for filling
  sum = data.sort(function descendingSort(a, b) { // Sort the contents of the argument and dump it into our sum array
    // Pass the desendingSort function as a parameter for the sort method
    return b - a; // Reversed the logic of the ascending number sort here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  });
  // console.log(sum); // Log the sorted array for debugging
  // sum.splice(2,sum.length); // Reduce the sum array to the first two indexes // Deprecated after deciding to re-assign sum as the final value
  // console.log(sum); // Log the spliced array for debugging
  sum.length > 1 // Validate that the array we have created and sliced has exactly the number of values to sum
    ? sum = sum[0] + sum[1] // Set the sum variable to be the totalled value of the first and second index of the constructed sum array
    : sum = "Gimmie an array with at least two numbers, you doofus!" // Error message in case the sum array has only one value
  return sum; // Return the result of the function
};

// Tests
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));