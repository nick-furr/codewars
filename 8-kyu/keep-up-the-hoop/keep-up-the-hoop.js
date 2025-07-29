function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}
​
// Example usage:
// Let's say Alex gets 7 hoops
let alexHoops1 = 7;
console.log(`Alex's hoop count: ${alexHoops1}`);
console.log(hoopCount(alexHoops1)); // Output: Keep at it until you get it
​
// Let's say Alex gets 12 hoops
let alexHoops2 = 12;
console.log(`Alex's hoop count: ${alexHoops2}`);
console.log(hoopCount(alexHoops2)); // Output: Great, now move on to tricks