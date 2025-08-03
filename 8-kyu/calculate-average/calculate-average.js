function findAverage(array) {
  // your code here
  let total = 0;
  let average = 0;
  if (array.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      total += array[i]
    }
    average = total / array.length
    return average;
  }
}