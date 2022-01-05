class Solution {
    fun findDuplicate(nums: IntArray): Int {
        val map = HashSet<Int>();
        nums.forEach {
            if(map.contains(it)) return it
            else map.add(it)
        }
        return -1
    }
}
