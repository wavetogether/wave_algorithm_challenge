class Solution {
    fun numRescueBoats(people: IntArray, limit: Int): Int {
        val m = people.toList().groupingBy { it }.eachCount().toMutableMap()
        val keys = m.keys.sorted()

        var out = 0
        keys.indices.reversed().forEach { i ->
            var point = if (keys[i] * 2 < limit) i else keys.binarySearch(limit - keys[i])
            if (point < 0) point = -point - 1 - 1

            for (cur in point downTo 0) {
                m[keys[cur]]?.let {
                    if (0 < it) {
                        val diff = if (i == cur) it / 2 else Math.min(it, m[keys[i]]!!)
                        out += diff
                        m[keys[cur]] = m[keys[cur]]!! - diff
                        m[keys[i]] = m[keys[i]]!!- diff
                    }
                }
                if (m[keys[i]] == 0) break
            }
            out += m[keys[i]]!!
        }
        return out
    }
}
