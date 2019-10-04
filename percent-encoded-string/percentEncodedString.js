/*
Purpose of the urlEncode function:
  Convert a string to a string with '%20' in place of all whitespace between words in the string
Parameters:
  String | Text to encode as a url
Conditions:
  If there is whitespace on the outside of the string, only replace the whitespace within the string.
Output:
  String | url format of the string
*/

/*

Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.
*/

const urlEncode = function(text) {
  let url;
  url = text;
  return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));