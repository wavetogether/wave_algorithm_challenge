class Solution {
    fun maximalSquare(matrix: Array<CharArray>): Int {
        val row = matrix.size
        val col = matrix[0].size

        val m = ArrayList<IntArray>()
        repeat(row) { r ->
            m.add(IntArray(col) { 0 })
            m[r][0] = if (matrix[r][0] == '1') 1 else 0
            (1 until col).forEach { c ->
                m[r][c] = if (matrix[r][c] == '1') m[r][c - 1] + 1 else 0
            }
        }

        var best = 0
        (0 until row).forEach { r ->
            (0 until col).forEach { c ->
                best = Math.max(best, find(m, r, c, row, best))
            }
        }
        return best * best
    }

    private fun find(m: List<IntArray>, r:Int, c:Int, row: Int, best: Int): Int {
        var out = 0
        var cc = m[r][c]
        var rr = r
        while (cc > best && rr < row) {
            cc = Math.min(cc, m[rr][c])
            if (cc <= best) return out
            if (rr - r + 1 > best) out = Math.min(cc, rr - r + 1)
            rr++
        }
        return out
    }
}
