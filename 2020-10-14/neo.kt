import java.util.*

class Solution {
    fun largestNumber(nums: IntArray): String {
        return nums.map { it.toString() }
                .sortedWith(object: Comparator<String> {
                    override fun compare(a: String, b: String): Int {
                        return (b + a).compareTo(a + b)
                    }
                })
                .dropWhile { it == "0" }
                .let {
                    if (it.isNotEmpty()) it.joinToString("")
                    else "0"
                }
    }
}
