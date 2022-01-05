// Runtime: 1576 ms, faster than 40.00% of Kotlin online submissions for Heaters.
// Memory Usage: 39.3 MB, less than 100.00% of Kotlin online submissions for Heaters.

import kotlin.math.abs

class Solution {
    fun findRadius(houses: IntArray, heaters: IntArray): Int {
        return houses.fold(Int.MIN_VALUE) { max, house ->
            maxOf(max, heaters.fold(Int.MAX_VALUE) { min, heater ->
                minOf(min, abs(house - heater))
            })
        }
    }
}
