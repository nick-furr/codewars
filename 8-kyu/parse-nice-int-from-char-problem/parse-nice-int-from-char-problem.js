function getAge(inputString) {
  // The problem states that the first character of the string is always the number.
  // We can directly access this character and convert it to an integer.
  const ageChar = inputString[0];
  const age = parseInt(ageChar, 10);
  return age;
}