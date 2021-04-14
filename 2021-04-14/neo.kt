// brute-force
fun main(args: Array<String>) {
    val t = getInt()
    repeat(t) {
        val n = getInt()
        val a = getInts().toMutableList()
        var out = 0
        (0 until n - 1).forEach { k ->
            val index = a.drop(k).mapIndexed { i, v -> i to v }.minBy { v -> v.second }!!.first
            reverse(a, k, k + index)
            out += index + 1
        }
        println("Case #${it+1}: $out")
    }
}

fun reverse(list: MutableList<Int>, from: Int, to: Int) {
    var from = from
    var to = to
    while (from < to) {
        val t = list[from]
        list[from] = list[to]
        list[to] = t
        from++
        to--
    }
}

fun getInt() = readLine()!!.toInt()
fun getInts() = readLine()!!.split(" ").map { it.toInt() }
