function findKthBit(n: number, k: number): string {
  return '' + getBit(k);
}

// n^2 기준으로 숫자를 뒤집는다.
// getBit(13) = 1 - getBit(3) = getBit(1) = 1
// getBit(12) = 1 - getBit(4) = 0
// getBit(11) = 1 - getBit(5) = getBit(3) = 1 - getBit(1) = 0
function getBit(k: number): number {
  if (k === 1) return 0;
  const p = getHighestPowerOf2(k);
  if (k === p) return 1;
  return 1 - getBit(p * 2 - k);
}

function getHighestPowerOf2(n: number): number {
  let p = 2;
  while (p <= n) {
    p *= 2;
  }
  return p / 2;
}
