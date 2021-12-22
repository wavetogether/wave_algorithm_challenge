class Solution {
    fun brokenCalc(startValue: Int, target: Int): Int {
        var out = 0
        var target = target
        while (startValue < target) {
            out += 1 + (target and 1)
            target = (target + 1) /2
        }
        return out + startValue - target
    }
}
