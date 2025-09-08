function isAnagram(test, original) {
  // Convert both strings to lowercase and remove any non-alphabetic characters (optional, but good for robustness)
  // Then split into arrays of characters, sort them, and join back into strings.
  const sortedTest = test.toLowerCase().split('').sort().join('');
  const sortedOriginal = original.toLowerCase().split('').sort().join('');
​
  // Compare the sorted strings
  return sortedTest === sortedOriginal;
}