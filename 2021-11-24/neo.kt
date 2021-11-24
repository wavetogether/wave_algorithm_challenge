class Solution {
    fun canJump(nums: IntArray): Boolean {
        var acc = 0
        nums.forEachIndexed { index, v ->
            if (acc >= nums.lastIndex) return true
            if (acc <= index && v == 0) return false
            (index + v).let { if (acc < it) acc = it }
        }
        return false
    }
}
