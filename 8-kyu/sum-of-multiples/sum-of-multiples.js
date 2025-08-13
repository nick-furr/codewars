function sumMul(n, m) {
  if (n <= 0 || m <= 0 || !Number.isInteger(n) || !Number.isInteger(m)) {
    return "INVALID";
  }
  if (n >= m) {
    return 0;
  }
​
  const k = Math.floor((m - 1) / n); // Number of multiples
  const sumOfNaturals = k * (k + 1) / 2; // Sum of 1 to k
  return n * sumOfNaturals;
}