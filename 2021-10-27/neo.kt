class Solution {
    private val out = ArrayList<String>()
    fun restoreIpAddresses(s: String): List<String> {
        if (s.isNotEmpty()) go(s, mutableListOf(StringBuilder(s.first().toString())), 1)
        return out
    }

    private fun go(s: String, current: MutableList<StringBuilder>, index: Int) {
        if (!valid(current.last().toString())) return
        if (index == s.length) {
            if (current.size == 4) {
                out.add(current.joinToString("."))
            }
            return
        }
        if (current.size > 4) return

        current.last().append(s[index])
        go(s, current, index + 1)
        current.last().let { it.deleteCharAt(it.lastIndex) }

        current.add(StringBuilder(s[index].toString()))
        go(s, current, index + 1)
        current.removeAt(current.lastIndex)
    }

    private fun valid(s: String) =
        s == "0" || (s.first() != '0' && s.toInt() < 256)
}
