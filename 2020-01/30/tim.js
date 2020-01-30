/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let x_binary = '';
  let y_binary = '';
  let ret = 0;
  
  for (let i=31; i>=0; i--) {
    if (Math.pow(2, i) > x) {
      x_binary += '0';
    } else {
      x_binary += '1';
      x -= Math.pow(2, i);
    }
    
    if (Math.pow(2, i) > y) {
      y_binary += '0';
    } else {
      y_binary += '1';
      y -= Math.pow(2, i);
    }    
  }
  
  for (let i in x_binary) {
    if (x_binary[i] != y_binary[i]) {
      ret++;
    }
  }
  return ret;
};                                                                      
