/*
Purpose of the conditionalSum function:
  Given an array and a condition, sum the values in the array that match the condition
Parameters:
  Array | Data to be searched
  String | Condition (either "odd" or "even") under which you would do something to the data in the array
Output:
  Number | Sum of all values in the array that match the condition.
*/

const conditionalSum = function(values, condition) {
  let sum = values;
  let conditions = condition;
  return sum + conditions;
};
// Tests
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));