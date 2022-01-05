class Solution {
    private val m = HashMap<Pair<Int, Int>, Int>() // cache

    fun longestIncreasingPath(matrix: Array<IntArray>): Int {

        var best = 0
        (matrix.indices).forEach { r ->
            (matrix[0].indices).forEach { c ->
                best = Math.max(best, longest(matrix, -1, r, c, matrix.size, matrix[0].size))
            }
        }
        return best
    }

    private fun longest(matrix: Array<IntArray>, v: Int, r: Int, c: Int, row: Int, col: Int): Int {
        if (r !in (0 until row) || c !in (0 until col)) return 0
        if (v >= matrix[r][c]) return 0
        if (m.containsKey(r to c)) return m[r to c]!!

        return arrayOf(r - 1 to c, r + 1 to c, r to c - 1, r to c + 1)
                .map { longest(matrix, matrix[r][c], it.first, it.second, row, col) + 1 }.max()!!
                .also { m[r to c] = it }
    }
}
