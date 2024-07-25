/**
 * Caluclate the sum of two rounded numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} the sum
 */
function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
