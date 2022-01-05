class Solution {
    data class T(val i: Int, val m: Int, val n: Int)
    private val cache = HashMap<T, Int>()

    fun findMaxForm(strs: Array<String>, m: Int, n: Int): Int {
        val str = strs.map { s -> s.count { it == '0' } to s.count { it == '1' } }
        return find(str, 0, m, n)
    }

    private fun find(s: List<Pair<Int, Int>>, i: Int, m: Int, n: Int) =
        T(i, m, n).let { t ->
            cache[t] ?: dfs(s, i, m, n).also { cache[t] = it }
        }

    private fun dfs(s: List<Pair<Int, Int>>, i: Int, m: Int, n: Int): Int = when {
        m < 0 || n < 0 -> -1
        s.size == i -> 0
        else -> Math.max(
            find(s, i + 1, m, n),
            find(s, i + 1, m - s[i].first, n - s[i].second) + 1
        )
    }
}
