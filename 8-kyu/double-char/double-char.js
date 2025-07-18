function doubleChar(str) {
  let repeatedStr = ""; // Initialize an empty string to store the result
​
  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Append the current character twice to the result string
    repeatedStr += str[i] + str[i];
  }
​
  return repeatedStr; // Return the string with repeated characters
}
​
// Example Usage
console.log(doubleChar("String"));      // Output: SSttrriinngg
console.log(doubleChar("Hello World")); // Output: HHeelllloo WWoorrlldd
console.log(doubleChar("1234!_ "));    // Output: 11223344!!__