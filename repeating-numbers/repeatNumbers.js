/*
Purpose of the repeatNumbers function:
  Return a string with each of the given values repeated the appropriate number of times.
Parameters:
  Two-Dimensional Array | Pairs of numbers, the first is the digit to be repeated, the second is the number of times the number is to be repeated.
Conditions:
  If there are multiple sets of values each set should be separated by a comma.
  If there is only one set of values then you should omit the comma.
Output:
  String | Repeated numbers
*/

const repeatNumbers = function(data) {
  let repeated = [];
  repeated += data;
  return repeated;
};

// Tests
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*
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
*/

