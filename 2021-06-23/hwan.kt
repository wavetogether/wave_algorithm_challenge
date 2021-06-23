// time: O(n^2), space: O(n^2)
class Solution {
    fun openLock(deadEnds: Array<String>, target: String): Int {
        val last = ""
        val queue: Queue<String> = LinkedList<String>().apply {
            add("0000")
            add(last)
        }
        val never: Set<String> = deadEnds.toSet()
        val attempts = HashSet<String>()

        var count = 0
        while (!queue.isEmpty()) {
            val current = queue.poll()
            if (current == target) {
                return count
            }
            if (attempts.contains(current) || never.contains(current)) {
                continue
            }
            // 더 이상 뽑아먹을게 없다
            if (current == last && queue.isEmpty()) {
                return -1
            }

            // 첫 1회 시도후 rotate + last + unattempted.
            if (current == last) {
                queue.add(last)
                ++count
            } else {
                attempts.add(current)
                queue.addAll(rotate(current))
            }
        }

        return -1
    }

    private fun rotate(str: String): List<String> = LinkedList<String>().apply {
        for (i in 0 until 4) {
            // 위로
            add(str.substring(0, i) + (if (str[i] == '0') 9 else str[i] - '0' - 1) + str.substring(i + 1))
            // 아래로
            add(str.substring(0, i) + (if (str[i] == '9') 0 else str[i] - '0' + 1) + str.substring(i + 1))
        }
    }
}

