/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function (startValue, target) {
  let count = 0;

  while (target > startValue) {
    target % 2 ? target++ : (target /= 2);
    count++;
  }
  return count + (startValue - target);
};
