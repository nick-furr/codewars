function findNeedle(haystack) {
  // Use the indexOf method to find the index of "needle" in the array.
  const needleIndex = haystack.indexOf("needle");
​
  // Construct the return message using template literals.
  return `found the needle at position ${needleIndex}`;
}