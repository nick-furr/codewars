function squareDigits(num) {
  const numStr = String(num); // Convert the number to a string
  let resultStr = ''; // Initialize an empty string to store squared digits
​
  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]); // Convert char digit to integer
    const squaredDigit = digit * digit; // Square the digit
    resultStr += String(squaredDigit); // Convert squared digit to string and concatenate
  }
​
  return parseInt(resultStr); // Convert the final string back to an integer
}