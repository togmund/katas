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
  output += input;
  return output;
}

// Tests
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));