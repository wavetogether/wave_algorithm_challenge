import java.util.*

fun main(args: Array<String>) {
    println("answer: " + largestDivisibleSubset(listOf(1, 2, 3)))
    println("answer: " + largestDivisibleSubset(listOf(1, 2, 4, 8)))
}

// Time complexity : O(N²) 이하로 푸는 방법은 없을까...? 심지어 이 솔루션은 O(N³) 임.
// Space complexity: O(N)
private fun largestDivisibleSubset(nums: List<Int>): List<Int> {
    var brokenHistory = 0
    val answers = TreeSet<Int>()

    val sortedNums = nums.sorted()
    // currentIndex 기준으로 left / right 로 분리
    (1 until sortedNums.size).forEach { i ->
        val rights = nums.subList(i, sortedNums.size)

        rights.forEach { r ->
            // lefts 의 크기를 최대한 줄인다
            val lefts = TreeSet(answers).apply { add(sortedNums[i - 1]) }.filter { it > brokenHistory }
            lefts.forEach { l ->
                if (l % r == 0 || r % l == 0) {
                    answers.add(l)
                    answers.add(r)
                } else {
                    answers.remove(r)
                    brokenHistory = r
                }
            }
        }
    }

    return answers.toList()
}

