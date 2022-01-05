class Solution {
    fun increasingTriplet(nums: IntArray): Boolean {
        var (a, b) = intArrayOf(Int.MAX_VALUE, Int.MAX_VALUE)
        nums.forEach { x ->
            if (x > b) return true
            if (x > a) b = Math.min(b, x)
            else a = Math.min(a, x)
        }
        return false
    }
}
