function XO(str) {
  let xCount = 0;
  let oCount = 0;
​
  // Convert the string to lowercase to handle case insensitivity
  const lowerStr = str.toLowerCase();
​
  // Iterate through the string and count 'x's and 'o's
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === 'x') {
      xCount++;
    } else if (lowerStr[i] === 'o') {
      oCount++;
    }
  }
​
  // Return true if the counts are equal, otherwise false
  return xCount === oCount;
}