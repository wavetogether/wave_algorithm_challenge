/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let ret = [];
  
  for (let i = 1; i <= n; i++) {
    if (i%3 === 0 && i%5 === 0) {
      ret.push('FizzBuzz');
    } else if (i%3 === 0) {
      ret.push('Fizz');
    } else if (i%5 === 0) {
      ret.push('Buzz');
    } else {
      ret.push(String(i));
    }
  }
  
  return ret;
    
};
