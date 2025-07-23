function betterThanAverage(classPoints, yourPoints) {
  // Add your score to the class scores for the average calculation.
  classPoints.push(yourPoints);
​
  // Calculate the sum of all scores.
  const sum = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
​
  // Calculate the average score.
  const average = sum / classPoints.length;
​
  // Compare your score to the average.
  return yourPoints > average;
}
​
// Example usage:
const peerScores = [80, 75, 90, 60, 85];
const myScore = 92;
​
if (betterThanAverage(peerScores, myScore)) {
  console.log("Congratulations! You're better than the average student.");
} else {
  console.log("Keep studying, you'll get there!");
}
​
​