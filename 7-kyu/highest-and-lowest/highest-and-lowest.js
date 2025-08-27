function highAndLow(numbers) {
  const numsArray = numbers.split(' ').map(Number);
  const maxNum = Math.max(...numsArray);
  const minNum = Math.min(...numsArray);
  return `${maxNum} ${minNum}`;
}