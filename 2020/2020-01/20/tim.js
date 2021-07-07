/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  let ret = 0;
  
  ages.sort((a,b) => a-b);
  
  for (let i = 0; i < ages.length-1; i++) {   
    for (let j = i+1; j < ages.length; j++) {
      
      if (ages[i] <= ages[j] * 0.5 + 7 || ages[i] > ages[j]) {
        // do nothing
      } else if (ages[i] > 100 && ages[j] < 100) {
        break;
      } else {
        ret++;
      }

      if (ages[j] <= ages[i] * 0.5 + 7 || ages[j] > ages[i]) {
        // do nothing
      } else if (ages[j] > 100 && ages[i] < 100) {
        break;
      } else {
        ret++;
      }
    }
  }
  return ret;
};
