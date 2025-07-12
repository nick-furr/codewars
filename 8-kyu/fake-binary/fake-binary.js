function fakeBin(digits){
  let result = "";
  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]);
    if (digit < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}