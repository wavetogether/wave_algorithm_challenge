class Solution {
    fun findKthBit(n: Int, k: Int): Char {
        return if (find(n, k - 1, false)) '1' else '0'
    }

    // false : 0, true : 1
    private fun find(n: Int, k: Int, invert: Boolean): Boolean {
        if (k == 0) return invert
        val len = (1 shl n) - 1
        if (k == len / 2) return !invert
        if (k < len / 2) return find(n - 1, k, invert)
        else return find(n - 1, (len / 2 - 1) - (k - len / 2 - 1), !invert)
    }
}
