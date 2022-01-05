class Solution {
    fun maxNumberOfFamilies(n: Int, reservedSeats: Array<IntArray>): Int {
        val m = TreeMap<Int, Int>() // [row, col] // col: bit mask
        reservedSeats.forEach { (row, col) ->
            m[row] = (m[row] ?: 1023) and (1 shl (col - 1)).inv() // to 0-based index
        }
        return m.values.map(this::calc).sum() + (n - m.size) * 2
    }

    private fun calc(v: Int) = when {
        v and 510 == 510 -> 2 // left & right (011 1111 110)
        v and 480 == 480 -> 1 // (011 1100 000)
        v and 30 == 30 -> 1 // (000 0011 110)
        v and 120 == 120 -> 1 // (000 1111 000)
        else -> 0
    }
}


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
