function solve(st) {
  let maxValue = -1;
  let mostValuableChar = '';
​
  // Get unique characters to iterate efficiently
  const uniqueChars = [...new Set(st)];
​
  for (const char of uniqueChars) {
    const firstIndex = st.indexOf(char);
    const lastIndex = st.lastIndexOf(char);
    const currentValue = lastIndex - firstIndex;
​
    if (currentValue > maxValue) {
      maxValue = currentValue;
      mostValuableChar = char;
    } else if (currentValue === maxValue) {
      // If values are equal, choose the lexicographically lowest character
      if (char < mostValuableChar) {
        mostValuableChar = char;
      }
    }
  }
​
  // Handle the edge case of a single character string or all characters appearing once
  // In this case, the value for all characters will be 0, and we return the
  // lexicographically lowest character among them.
  if (mostValuableChar === '' && st.length > 0) {
    mostValuableChar = uniqueChars.sort()[0];
  } else if (st.length === 0) {
      return ''; // Handle empty string input
  }
​
  return mostValuableChar;
}