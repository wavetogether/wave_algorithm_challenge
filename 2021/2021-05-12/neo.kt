class Solution {
    fun numberOfBoomerangs(points: Array<IntArray>): Int {
        fun length(a: IntArray, b: IntArray) =
            a.zip(b).map { (aa, bb) -> aa - bb }.map { it * it }.sum()

        return points.map { a ->
            points.map { b -> length(a, b) }
                .groupBy { it }.map { it.value.size }
                .map{ it * (it - 1) }.sum()
        }.sum()
    }
}
