class Solution {
   fun findRadius(houses: IntArray, heaters: IntArray): Int {
      houses.sort()
      heaters.sort()
      return houses.map {
         var index = heaters.binarySearch(it)
         if (index >= 0) {
            0
         } else { // upper bound
            index = -index - 1
            val left = if (index > 0) it - heaters[index - 1] else Integer.MAX_VALUE
            val right = if (index < heaters.size) heaters[index] - it else Integer.MAX_VALUE
            Math.min(left, right)
         }
      }
         .max()!!
   }
}
