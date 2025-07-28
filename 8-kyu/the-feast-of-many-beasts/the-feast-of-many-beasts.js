function feast(beast, dish) {
  const firstLetterBeast = beast[0];
  const lastLetterBeast = beast[beast.length - 1];
  const firstLetterDish = dish[0];
  const lastLetterDish = dish[dish.length - 1];
​
  return firstLetterBeast === firstLetterDish && lastLetterBeast === lastLetterDish;
}
​