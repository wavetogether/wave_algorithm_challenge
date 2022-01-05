class Solution {
    fun countSmaller(nums: IntArray): List<Int> {
        val fenwickTree = FenwickTree(20002)
        nums.forEach {
            fenwickTree.update(it + 10002, 1)
        }
        val out = ArrayList<Int>()
        return nums.map {
            fenwickTree.update(it + 10002, -1)
            fenwickTree.query(it + 10002 - 1)
        }
    }
}

class FenwickTree(private val maxValue: Int) {
    private val tree = IntArray(maxValue + 2) { 0 }
    fun update(index: Int, value: Int) {
        var x = index
        while (x <= maxValue + 1) {
            tree[x] += value
            x += -x and x
        }
    }

    fun query(x: Int): Int { // sum of [1, x]
        var x = x
        var s = 0
        while (x != 0) {
            s += tree[x]
            x = x and (x - 1)
        }
        return s
    }
}
