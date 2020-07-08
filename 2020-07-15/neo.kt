class Solution {
    fun minSteps(s: String, t: String): Int {
        return IntArray(26) { 0 }.let { a ->
            s.forEach { a[it - 'a']++ }
            t.forEach { a[it - 'a']-- }
            a.filter { it > 0 }.sum()
        }
    }
}
