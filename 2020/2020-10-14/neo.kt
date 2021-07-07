import java.util.*

class Solution {
    fun largestNumber(nums: IntArray): String {
        return nums.map { it.toString() }
                .sortedWith { (a, b) -> (b + a).compareTo(a + b) }
                .dropWhile { it == "0" }
                .let {
                    if (it.isNotEmpty()) it.joinToString("")
                    else "0"
                }
    }
}
