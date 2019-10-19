/*
Purpose of the camelCase function:
  Convert a string to camel case.
Parameters:
  String | input string
Output:
  String | output in camelCase
*/


const camelCase = function(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === " ") {
      output += input[i].toUpperCase();
    }
    if (input[i - 1] !== " " && input[i] !== " ") {
      output += input[i];
    }
  }
  return output;
};


// Tests
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("super cali fragalistic expi ali docious"));
