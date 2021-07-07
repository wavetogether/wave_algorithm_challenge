// Runtime: 384 ms, faster than 34.46% of JavaScript online submissions for Count Primes.
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for Count Primes.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let ret = 0;
  
  if (n <= 2) {
    return 0;
  }
  
  for (let i = 1; i < n; i += 2) {
    if (isPrime(i)) {
      ret++;
    }
  }
  return ret;
};

const isPrime = (n) => {
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n%i === 0) {
      return false;
    }
  }
  return true;
}
