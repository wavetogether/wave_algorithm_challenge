class Solution {
    fun findRadius(houses: IntArray, heaters: IntArray): Int {
        val houseMinRadius = houses.clone().map { house ->
            heaters.fold(Int.MAX_VALUE) { min, heater ->
                val range = if (house - heater > 0) house - heater else heater - house
                minOf(min, range)
            }
        }

        return houseMinRadius.fold(Int.MIN_VALUE) { max, it ->
            maxOf(max, it)
        };
    }
}
