/**
 * Calculates the number of years ago or in the future when the father will be twice as old as his son.
 *
 * @param {number} dadYearsOld The current age of the father in years.
 * @param {number} sonYearsOld The current age of the son in years.
 * @returns {number} The number of years (can be negative if it's in the past).
 */
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}