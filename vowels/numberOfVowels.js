/*
Purpose of the conditionalSum function:
  Count the number of vowels in a given string.
Parameters:
  String | inputString to be searched for vowels
Conditions:
  vowels = ["a", "e", "i", "o", "u" ]
Output:
  Number | sum of all vowels in the input string
*/

const numberOfVowels = function (inputString) { // Take in your string
  // console.log(inputString); // Log initial input for debugging
  // console.log(inputString.length); // Log initial input lenght for debugging
  let sum = 0; // Assume no vowels to begin
  for (i = 0; i < inputString.length; i++) { // Loop through the string
    switch (inputString[i].toLowerCase()) { // Compare lower-case strings
      case "a": 
        sum++; // Iterate sum up when you find a vowel // console.log("plus one for a, current count: " + sum); // Log each iteration and the updated sum for debugging
        break;
      case "e":
        sum++; // console.log("plus one for e, current count: " + sum);
        break;
      case "i":
        sum++; // console.log("plus one for i, current count: " + sum);
        break;
      case "o":
        sum++; // console.log("plus one for o, current count: " + sum);
        break;
      case "u":
        sum++; // console.log("plus one for u, current count: " + sum);
        break;
    }
  }
  return sum; // Return final count
};

console.log(numberOfVowels("orange") + "\n");
console.log(numberOfVowels("lighthouse labs") + "\n");
console.log(numberOfVowels("aeiou") + "\n");