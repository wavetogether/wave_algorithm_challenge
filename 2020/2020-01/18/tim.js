/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  let x_points = {};
  let y_points = {};
  
  let minArea = 0;
  
  for (let idx = 0; idx < points.length; idx++) {
    let x = points[idx][0];
    let y = points[idx][1];
    
    if (!x_points[x]) {
      x_points[x] = [y];
    } else {
      x_points[x].push(y);
    }
    
    if (!y_points[y]) {
      y_points[y] = [x];
    } else {
      y_points[y].push(x);
    }
  }
  
  for (let idx = 0; idx < points.length; idx++) {
    let x = points[idx][0];
    let y = points[idx][1];
    
    if (x_points[x] && y_points[y]) {
      let y_plus_b = x_points[x];
      let x_plus_a = y_points[y];
      
      for (let ypb of y_plus_b) {
        if (ypb != y) {
          for (let xpa of x_plus_a) {
            
            if (xpa != x && x_points[xpa].includes(ypb)) {
              let newArea = Math.abs((xpa - x) * (ypb - y));
              if (minArea == 0 || newArea < minArea) {
                minArea = newArea;
              }
            }
            
          }  
        }
        
      }
    }
  }
  
  return minArea;  
    
};
