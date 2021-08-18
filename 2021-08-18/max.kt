class Solution {
    val case1 = listOf(
        listOf(2, 3, 4, 5),
        listOf(6, 7, 8, 9)
    )

    val case2 = listOf(listOf(4, 5, 6, 7))

    fun maxNumberOfFamilies(n: Int, reservedSeats: Array<IntArray>): Int {
        val group = reservedSeats.groupBy({ it[0] }, { it[1] })

        var count = 0
        (1..n)
            .map {
                it to
                        if (group[it] == null) {
                            emptyList()
                        } else {
                            group[it]!!
                        }
            }
            .filter { it.second.size <= 6  }
            .forEach  { it ->
                if (it.second.intersect(listOf(4, 5)).isNotEmpty() && it.second.intersect(listOf(6, 7)).isNotEmpty()) {
                    return@forEach
                }

                val case1Count = if (it.second.isEmpty()) {
                    2
                } else {
                    case1.count { a -> it.second.intersect(a).isEmpty() }
                }

                count += if (case1Count > 0) {
                    case1Count
                } else {
                    case2.count { a -> it.second.intersect(a).isEmpty() }
                }
            }

        return count
    }
}
