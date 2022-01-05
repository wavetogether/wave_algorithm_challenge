class Solution {
    fun canCross(stones: IntArray): Boolean {
        val m = TreeSet(
            compareBy<Pair<Int, Int>> { it.first }
                .thenComparator { a, b -> compareValues(a.second, b.second) }
        ).also { it.add(0 to 0) }

        while (m.isNotEmpty()) {
            val (now, k) = m.pollFirst()
            if (now == stones.last()) return true
            m.addAll(
                listOf(k - 1, k, k + 1)
                    .filter { it > 0 }
                    .filter { stones.binarySearch(now + it) >= 0 }
                    .map { now + it to it }
            )
        }
        return false
    }
}
