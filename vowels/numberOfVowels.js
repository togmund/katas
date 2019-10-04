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

const numberOfVowels = function (inputString) {
  console.log(inputString);
  console.log(inputString.length);
  let sum = 0;
  const vowels = ["a", "e", "i", "o", "u"]
  for (i = 0; i < inputString.length; i++) {
    sum++;
  }
  return sum;
};

console.log(numberOfVowels("orange") + "\n");
console.log(numberOfVowels("lighthouse labs") + "\n");
console.log(numberOfVowels("aeiou") + "\n");