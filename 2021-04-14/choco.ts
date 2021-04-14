/**
 * reversort
 */
function reversort(numbers: number[]): number[] {
  let array = numbers.slice();
  for (let i = 1; i < array.length; i++) {
    const subArray = array.slice(i - 1, array.length);
    const j = array.indexOf(Math.min(...subArray)) + 1;
    // console.log('i, j:', i, ',', j);
    array = array.slice(0, i - 1)
      .concat(array.slice(i - 1, j).reverse())
      .concat(array.slice(j, array.length));
  }
  return array;
}
