const findDifference = (a, b) =>
  Math.abs(a.reduce((pre, val) => pre * val) - b.reduce((pre, val) => pre * val));