function past(h, m, s) {
  // Convert hours to milliseconds
  const hoursInMs = h * 3600000; 
  // Convert minutes to milliseconds
  const minutesInMs = m * 60000; 
  // Convert seconds to milliseconds
  const secondsInMs = s * 1000; 
​
  // Sum all milliseconds
  return hoursInMs + minutesInMs + secondsInMs;
}