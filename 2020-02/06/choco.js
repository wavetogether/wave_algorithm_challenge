/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  let primesCount = 0;
  if (n > 2) primesCount++;
  for (let i=3; i<n; i=i+2) {
    if (isPrime(i)) {
      primesCount++;
    }
  }
  return primesCount;
};

const isPrime = n => {
  for (let i=2; i*i<=n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
