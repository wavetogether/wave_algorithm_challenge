class Solution {
    fun findRadius(houses: IntArray, heaters: IntArray): Int {
        houses.sort()
        heaters.sort()
        return houses.map {
            when {
                it <= heaters.first() -> heaters.first() - it
                it >= heaters.last() -> it - heaters.last()
                else -> {
                    val index = heaters.lowerBound(it)
                    Math.min(heaters[index] - it, it - heaters[index - 1])
                }
            }
        }
            .max()!!
    }
}

fun IntArray.lowerBound(v: Int): Int {
    var l = 0
    var r = this.size
    while (l < r) {
        val mid = (l + r) / 2
        if (v <= this[mid]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return r
}
