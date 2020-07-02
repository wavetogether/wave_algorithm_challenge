class Solution {
    fun findUnsortedSubarray(nums: IntArray): Int {
        val sorted = nums.sorted()
        return (sorted.zip(nums.toList()).takeWhile { it.first == it.second }.count() +
                sorted.reversed().zip(nums.toList().reversed()).takeWhile { it.first == it.second }.count())
                        .let {
                            if (it >= nums.size) 0
                            else nums.size - it
                        }

    }
}
