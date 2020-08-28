class Solution {
    private val out = ArrayList<List<Int>>()
    fun permute(nums: IntArray): List<List<Int>> {
        nums.sort()
        go(nums, ArrayList(), (1 shl nums.size) - 1)
        return out
    }

    private fun go(nums: IntArray, current: ArrayList<Int>, bitSet: Int) {
        if (bitSet == 0) {
            out.add(current.clone() as List<Int>)
            return
        }

        var s = bitSet
        while (s > 0) {
            val i = Integer.numberOfTrailingZeros(s)
            current.add(nums[i])
            go(nums, current, bitSet and (1 shl i).inv())
            current.removeAt(current.lastIndex)
            s = s and (s - 1) // remove the right-most 1
        }
    }
}
