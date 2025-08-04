function sumStr(a, b) {
  // Convert empty strings to '0' before converting to numbers
  const numA = parseInt(a === '' ? '0' : a, 10);
  const numB = parseInt(b === '' ? '0' : b, 10);
​
  // Calculate the sum
  const sum = numA + numB;
​
  // Return the sum as a string
  return sum.toString();
}