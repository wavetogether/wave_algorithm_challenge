class Solution {
    fun canReorderDoubled(arr: IntArray): Boolean {
        return arr.count {it == 0} % 2 == 0 && 
              can(arr.filter { it > 0 }) &&
              can(arr.filter { it < 0 }.map { it * -1 })
    }

    private fun can(arr: List<Int>): Boolean {
        val m = arr.groupingBy { it }.eachCount().toMutableMap()
        m.keys.sorted().forEach { k ->
            val v = m[k]!!
            if (v > 0 && m.containsKey(k * 2)) {
                val diff = Math.min(m[k]!!, m[k * 2]!!)
                m[k] = m[k]!! - diff
                m[k * 2] = m[k * 2]!! - diff
            }
        }

        return m.values.all { it == 0 }
    }
}
