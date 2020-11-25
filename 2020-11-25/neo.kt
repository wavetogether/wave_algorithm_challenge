class Solution {
    fun numIslands(grid: Array<CharArray>): Int {
        val s = HashSet<Pair<Int, Int>>()
        grid.forEachIndexed { r, list ->
            list.forEachIndexed { c, value ->
                if (value == '1') s.add(r to c)
            }
        }

        fun remove(now: Pair<Int, Int>) {
            if (s.remove(now)) {
                arrayListOf(1 to 0, -1 to 0, 0 to 1, 0 to -1)
                        .map { it.first + now.first to it.second + now.second }
                        .forEach { remove(it) }
            }
        }
        
        var out = 0
        while (s.isNotEmpty()) {
            out++
            remove(s.first()) 
        }
        return out
    }
}
