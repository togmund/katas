/*
Purpose of the urlEncode function:
  Convert a string to a string with '%20' in place of all whitespace between words in the string
Parameters:
  String | Text to encode as a url
Conditions:
  If there is whitespace on the outside of the string, remove those leading and trailing spaces and encode the remaining spaces
Output:
  String | encoded format of the string
*/

const spaceShift = function (array) {       // A simple function to Shift all successive leading encoded spaces
  if (array[0] === "%20") {                 // If the first element of an array is an encoded space...
    array.shift();                          // shift it out
    spaceShift(array);                      // then do it again, over and over until it isn't
  }
}

const spacePop = function (array) {         // A simple funciton to Pop all successive trailing encoded spaces
  if (array[array.length - 1] === "%20") {  // if the last element of an array is an encoded space... 
    array.pop();                            // pop it out
    spacePop(array);                        // then do it again, over and over until it isn't
  }
}

const urlEncode = function (text) {         // Input text received
  let encoded = [];                         // Empty array for individul characters
  for (i = 0; i < text.length; i++) {       // Iterate over each letter
    if (text[i] === " ") {                  // If it's a space...
      encoded.push("%20");                  // transform it to "%20" and push it into our empty array
    }
    else {
      encoded.push(text[i]);                // Otherwise push the letter to the array
    }
  }
  spaceShift(encoded);                      // Remove all successive leading encoded spaces by calling my simple function
  spacePop(encoded);                        // Remove all successive leading encoded spaces by calling my other simple function
  return String(encoded.join(""));          // Return the array as a joined string
};

// Tests
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs    "));
console.log(urlEncode("         blue is greener than purple for sure"));