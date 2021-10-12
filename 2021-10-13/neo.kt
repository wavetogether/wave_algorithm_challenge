class Solution {
    private lateinit var c: Array<IntArray> // cache

    fun longestCommonSubsequence(text1: String, text2: String): Int {
        c = Array(text1.length) {
            IntArray(text2.length) { -1 }
        }
        return lcs(text1, text2, 0, 0)
    }

    private fun lcs(a: String, b: String, aa: Int, bb: Int): Int {
        if (aa > a.lastIndex || bb > b.lastIndex) return 0
        if (c[aa][bb] != -1) return c[aa][bb]

        if (a[aa] == b[bb]) {
            return 1 + lcs(a, b, aa + 1, bb + 1)
        } else {
            val aaa = lcs(a, b, aa + 1, bb)
            val bbb = lcs(a, b, aa, bb + 1)
                return Math.max(aaa, bbb).also {
                    c[aa][bb] = it
                }
        }
    }
}
