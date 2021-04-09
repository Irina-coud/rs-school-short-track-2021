/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrayA = s1.split('').sort();
  const arrayB = s2.split('').sort();
  const countArray = arrayA.slice();
  const result = [];
  for (let i = 0; i < countArray.length; i++) {
    if (arrayA.includes(arrayB[0])) {
      result.push(arrayB[0]);
      arrayB.splice(0, 1);
      arrayA.splice(0, 1);
    } else {
      arrayB.splice(0, 1);
      arrayA.splice(0, 1);
    }
  }
  return result.length;
}

module.exports = getCommonCharacterCount;
