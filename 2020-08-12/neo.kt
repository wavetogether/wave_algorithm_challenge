class Solution {
    fun searchRange(nums: IntArray, target: Int): IntArray {
        val from = nums.lowerBound(target)
        val to = nums.lowerBound(target + 1, from, nums.size)
        return if (from == to) intArrayOf(-1, -1)
        else intArrayOf(from, to - 1)
    }
}

fun IntArray.lowerBound(target: Int, fromIndex: Int = 0, toIndex: Int = this.size): Int {
    var l = fromIndex
    var r = toIndex
    while (l < r) {
        val mid = (l + r) / 2
        if (target <= this[mid]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return r
}
