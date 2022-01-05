class Solution {
    fun subarraySum(nums: IntArray, k: Int): Int {
        val acc = IntArray(nums.size + 1) { 0 }.toMutableList()
        acc.indices.take(nums.size).forEach { acc[it + 1] = acc[it] + nums[it] }
        val m = acc.groupingBy { it }.eachCount().toMutableMap()

        return acc
            .map { v ->
                m[v]?.let { m[v] = it - 1 }
                m[k + v] ?: 0
            }
            .sum()
    }
