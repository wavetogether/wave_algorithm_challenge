class Solution {
    fun countNumbersWithUniqueDigits(n: Int) = (0..n).map {
        listOf(9, 9, 8, 7, 6, 5, 4, 3).take(it).fold(1) { acc, x -> acc * x }
    }.sum()
}
