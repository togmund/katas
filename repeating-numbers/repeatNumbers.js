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

const simpleRepeat = function(value, count) {      // Take in a tuple
  let repeated = "";                                // Set an empty output string
  for (i = 0; i < count; i++) {                     // Iterate over the tuple a number of times equal to the second element of the tuple
    repeated += value;                              // Each iteration, append the first element of the tuple as a string to our output
  }
  return repeated;                                  // Spit out the result
};

const repeatNumbers = function(data) {             // Take in our array of tuples
  let output = "";                                  // Set an empty output string
  for (let i = 0; i < data.length; i++) {           // Iterate over the incoming array of tuples
    output += simpleRepeat(data[i][0], data[i][1]); // Each iteration, the simpleRepeat function on each tuple and return the result appended as a string to output
    if (i < data.length - 1) {                      // If it's not the last tuple...
      output += ", ";                               // ... add a comma and a space before moving to the next tuple
    }
  }
  return output;                                    // Spit out the result
};


// Tests
// console.log(simpleRepeat(1, 10));
// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2], [8, 6]]));

const sampleArray = [[10, 4], [34, 6], [92, 2], [8, 6]];

const mutatedArray = sampleArray.map((e) => {
  let output = "";
  for (i = 0; i < e[1]; i++) output += e[0];
  return output;
}).join(", ");

console.log(mutatedArray);