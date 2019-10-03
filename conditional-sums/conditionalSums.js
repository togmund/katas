/*
Purpose of the conditionalSum function:
  Given an array and a condition, sum the values in the array that match the condition
Parameters:
  Array | Data to be searched
  String | Condition (either "odd" or "even") under which you would do something to the data in the array
Output:
  Number | Sum of all values in the array that match the condition.
*/

const conditionalSum = function(values, condition) { // Take in array and condition
  let sum = 0; // Create an empty numeric sum for the output
  let test; // Create a true/false criteria based on a nested ternary of possible conditions
  condition === "even"
    ? test = true
    : condition === "odd"
      ? test = false
      : sum = "Invalid Condition. Use 'even' or 'odd'."; // Error message for nonsense conditions
  values.forEach(function(value){
    if(test && value % 2 === 0) { // Check for the true false critera & divisbility by two
        sum += value; // Add to our sum if both test criteria pass
        // console.log("even add:" + value + "\n" + "running sum:" + sum); // Logs for debugging
    }
    if (!test && value % 2 !== 0) { // Check for the true false critera & non-divisbility by two
      sum += value; // Add to our sum if both test criteria pass
      // console.log("odd add:" + value + "\n" + "running sum:" + sum); // Logs for debugging
    }
  })
  return sum; // Return the result
};

// Tests

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log("\n");
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log("\n");
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log("\n");
console.log(conditionalSum([], "odd"));
