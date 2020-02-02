/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // Check positive
  let isPositive = true;
  if (x < 0) {
    isPositive = false;
    x *= -1;
  }

  // Save digits
  const reversedNumbers = [];
  while(x >= 10) {
    const digit = x % 10;
    reversedNumbers.push(digit);
    x = (x - digit) / 10;
  }
  reversedNumbers.push(x);

  // Make reversed number
  let reversedX = 0;
  for (let i=0; i<reversedNumbers.length; i++) {
    reversedX += reversedNumbers[i] * Math.pow(10,reversedNumbers.length-1-i);
  }

  // Check overflow condition
  if (isPositive) {
    if (reversedX >= Math.pow(2,31)) return 0;
    return reversedX;
  } else {
    if (reversedX > Math.pow(2,31)) return 0;
    return reversedX * -1;
  }
};