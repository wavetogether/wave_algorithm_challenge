class Solution {
    private lateinit var m: Array<IntArray> // cache

    fun minInsertions(s: String): Int {
        m = Array(s.length) { IntArray(s.length) { -1 } }
        return minInsertions(s, 0, s.length - 1)
    }

    // [from, to]
    private fun minInsertions(s: String, from: Int, to: Int): Int {
        if (m[from][to] != -1) return m[from][to]

        if (from >= to) return 0
        if (s[from] == s[to]) return minInsertions(s, from + 1, to - 1)

        return Math.min(
                1 + minInsertions(s, from + 1, to),
                1 + minInsertions(s, from, to - 1)
        ).also {
            m[from][to] = it
        }
    }
}
