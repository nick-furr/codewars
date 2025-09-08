function factors(num) {
  // Check if the input is an integer and greater than or equal to 1
  if (!Number.isInteger(num) || num < 1) {
    return -1;
  }
​
  const result = [];
  // Iterate from the number down to 1 to find factors in descending order
  for (let i = num; i >= 1; i--) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}