function descendingOrder(n) {
  // Convert the number to a string to access individual digits.
  const numString = String(n);
​
  // Split the string into an array of characters (digits).
  const digitsArray = numString.split('');
​
  // Sort the array of digits in descending order.
  // The sort function with (b - a) ensures numerical descending order.
  digitsArray.sort((a, b) => b - a);
​
  // Join the sorted digits back into a string.
  const sortedString = digitsArray.join('');
​
  // Convert the resulting string back to an integer and return it.
  return parseInt(sortedString);
}