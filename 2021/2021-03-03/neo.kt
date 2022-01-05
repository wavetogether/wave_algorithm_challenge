fun main(args: Array<String>) {
    val (row, col) = readLine()!!.split(" ").map { it.toInt() }
    val m = ArrayList<String>()
    repeat(row) { m.add(readLine()!!) }
 
    val cases = listOf(listOf(0, 0), listOf(0, 1), listOf(1, 0), listOf(1, 1))
 
    var out = 0
    (0 until row - 1).forEach { r ->
        (0 until col - 1).forEach { c ->
            val score = cases.map { (rr, cc) -> if (m[r + rr][c + cc] == '#') 1 else 0 }.sum()
            if (score == 1 || score == 3) out++
        }
    }
 
    println(out)
}
