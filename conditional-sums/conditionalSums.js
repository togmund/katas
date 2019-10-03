/*
Purpose of the conditionalSum function:
  Given an array and a condition, sum the values in the array that match the condition
Parameters:
  Array | Data to be searched
  String | Condition (either "odd" or "even") under which you would do something to the data in the array
Output:
  Number | Sum of all values in the array that match the condition.
*/

const conditionalSum = function(values, condition) { // console.log(values + condition);
  let sum = 0;
  let test;
  condition === "even"
    ? test = true
    : condition === "odd"
      ? test = false
      : sum = "Invalid Condition. Use 'even' or 'odd'."; // console.log(test);
  values.forEach(function(value){ // console.log(value);
    switch (test) {
      case test === undefined:
        break;
      case test && value % 2 === 0:
        sum += value; // console.log("even add:" + value + "\n" + "running sum:" + sum);
        break;
      case test === false && value % 2 !== 0:
        sum += value; // console.log("odd add:" + value + "\n" + "running sum:" + sum);
        break;
    }
  })
  return "Final Sum: " + sum;
};

// Tests
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log("\n");
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log("\n");
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log("\n");
console.log(conditionalSum([], "odd"));