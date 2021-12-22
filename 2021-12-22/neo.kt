class Solution {
    fun brokenCalc(startValue: Int, target: Int): Int {
        var out = 0
        var target = target
        while (startValue < target) {
            if (target % 2 == 1) {
                target++
                out++
            }
            target /= 2
            out++
        }
        return out + startValue - target
    }
}
