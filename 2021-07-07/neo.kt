data class T(val a: Long, val b: Long) : Comparable<T> {
    fun sum() = a + b
    override fun compareTo(other: T) =
        (this.a + this.b).compareTo(other.a + other.b)
}

class Solution {
    fun kSmallestPairs(nums1: IntArray, nums2: IntArray, k: Int): List<List<Int>> {
        val q = PriorityQueue<T>(k + 1, Collections.reverseOrder())
        nums1.forEach outer@ { a ->
            nums2.forEach { b ->
                if (q.size < k) {
                    q.add(T(a.toLong(), b.toLong()))
                } else {
                    if (q.peek().sum() <= a.toLong() + b) return@outer
                    q.add(T(a.toLong(), b.toLong()))
                    q.remove()
                }
            }
        }
        return q.map { listOf(it.a.toInt(), it.b.toInt()) }
    }
}
