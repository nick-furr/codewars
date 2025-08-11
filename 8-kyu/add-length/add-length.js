function addLength(str) {
  const words = str.split(' ');
  const result = [];
​
  for (let i = 0; i < words.length; i++) {
    result.push(`${words[i]} ${words[i].length}`);
  }
​
  return result;
}