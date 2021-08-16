class Solution {
    fun maxNumberOfFamilies(n: Int, reservedSeats: Array<IntArray>): Int {
        val m = TreeMap<Int, TreeSet<Int>>() // [row, col]
        reservedSeats.forEach { (row, col) ->
            if (!m.containsKey(row)) {
                m[row] = TreeSet()
            }
            m[row]!!.add(col)
        }
        m.values.forEach { it.add(0); it.add(11) }
        return m.values.map(this::available).sum() + (n - m.size) * 2
    }

    private fun available(s: Set<Int>) = s.zip(s.drop(1))
        .map { (a, b) ->
            val diff = b - a - 1
            when {
                9 <= diff -> 2
                8 == diff -> if (a == 2 || b == 9) 1 else 2
                5 <= diff -> 1
                4 == diff -> if (a == 2 || a == 6 || b == 5 || b == 9) 0 else 1
                else -> 0
            }
        }
        .sum()
}
