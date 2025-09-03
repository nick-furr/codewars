function buildFun(n) {
  const functionArray = [];
​
  for (let i = 0; i < n; i++) {
    // Using a let-scoped variable inside the loop ensures a new 'i' is created for each iteration,
    // which is then captured by the closure of the inner function.
    functionArray.push(function() {
      return i;
    });
  }
​
  return functionArray;
}