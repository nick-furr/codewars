/**
 * Returns the number of arguments passed to the function.
 * @param {...any} args
 * @returns {number} The number of arguments received.
 */
// Using the rest parameter (modern approach)
const args_count = (...args) => args.length; //
​
// Examples
console.log(args_count()); // 0
console.log(args_count('a')); // 1
console.log(args_count('a', 'b')); // 2
​
// Alternative using the `arguments` object (pre-ES6)
function args_count_legacy() {
  return arguments.length; //
}
​
console.log(args_count_legacy()); // 0
console.log(args_count_legacy('a')); // 1
console.log(args_count_legacy('a', 'b')); // 2
​