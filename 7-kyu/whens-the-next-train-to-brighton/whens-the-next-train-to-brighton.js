function nextTrain(currentTime, minutesToStation) {
  // Parse current time string "hh:mm" into hours and minutes
  const [h, m] = currentTime.split(':').map(Number);
  // Convert minutesToStation string to a number
  const minutes = Number(minutesToStation);
​
  // Calculate total minutes from midnight for the current time
  const currentTotalMinutes = h * 60 + m;
  // Calculate the arrival time at the station in total minutes from midnight
  const arrivalTime = currentTotalMinutes + minutes;
​
  // The first train of the day is at 05:00, which is 300 minutes from midnight.
  const firstTrainTime = 5 * 60;
  // The last train of the day is at 23:30, which is 1410 minutes from midnight.
  const lastTrainTime = 23 * 60 + 30;
  
  let nextTrainTime;
​
  // If the arrival time is after the last train of the day, the next train is the first one the next day.
  if (arrivalTime > lastTrainTime) {
    nextTrainTime = firstTrainTime;
  } else {
    // Start searching for the next train from the first train time of the day
    let train = firstTrainTime;
    // Loop through all train times until a time greater than or equal to the arrival time is found.
    while (train < arrivalTime) {
      train += 30;
    }
    nextTrainTime = train;
  }
​
  // Convert the total minutes back into "hh:mm" format.
  // Use Math.floor for hours and the modulo operator for minutes.
  // Pad the hours and minutes with a leading zero if they are a single digit.
  const nextTrainHour = Math.floor(nextTrainTime / 60).toString().padStart(2, '0');
  const nextTrainMinute = (nextTrainTime % 60).toString().padStart(2, '0');
​
  // Return the final string with the formatted time.
  return `The next train is at ${nextTrainHour}:${nextTrainMinute}.`;
}
​