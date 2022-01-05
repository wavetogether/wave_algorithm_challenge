class Solution {
    fun largestDivisibleSubset(nums: IntArray): List<Int> {
        val r = nums.sorted().mapIndexed { index, v -> T(v, 1, index, index) }

        (1 until r.size).forEach { i ->
            r.take(i).filter { r[i].v % it.v == 0 }.maxBy(T::degree)?.let {
                r[i].degree = it.degree + 1
                r[i].prevIndex = it.index
            }
        }

        var m = r.maxBy(T::degree)!!
        val out = mutableListOf(m.v)
        while (m.index != m.prevIndex) {
            m = r[m.prevIndex]
            out.add(m.v)
        }
        return out.reversed()
    }
}

data class T(val v: Int, var degree: Int, val index: Int, var prevIndex: Int)
