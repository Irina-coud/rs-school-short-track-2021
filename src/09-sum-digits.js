/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let summ = 0;
  let newSumm = 0;
  const digits = n.toString().split('');
  let array = digits.map(Number);
  for (let k = 0; k < array.length; k++) {
    summ += array[k];
  }
  if (summ < 10) {
    return summ;
  }
  const digit = summ.toString().split('');
  array = digit.map(Number);
  for (let i = 0; i < array.length; i++) {
    newSumm += array[i];
  }
  return getSumOfDigits(newSumm);
}
module.exports = getSumOfDigits;
