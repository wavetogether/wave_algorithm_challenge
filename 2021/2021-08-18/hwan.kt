class Solution {
    // 한 줄 단위로 최대 availability 를 계산 후 더한다. Maximum availability 는 한 줄당 2를 넘을 수 없다.
    fun availableRows(rows: Int, reservedSeats: List<Coords>): Int {
        // 줄 단위로 예약석 분리
        val reservedSeatsMap = reservedSeats.groupReservedSeats()

        var total = 0
        // 줄 단위로 돌면서 availability 계산
        for (row in 1..rows) {
            total += availability(reservedSeatsMap[row])
        }

        return total
    }

    private fun List<Coords>.groupReservedSeats(): Map<Int, TreeSet<Int>> = HashMap<Int, TreeSet<Int>>().apply {
        this@groupReservedSeats.forEach {
            val (row, col) = it
            val columns = get(row) ?: run { TreeSet<Int>().also { list -> put(row, list) } }
            columns.add(col)
        }
    }

    /*
     * 한 줄당 최대 좌석수는 10개. max avail 은 2를 넘을 수 없음
     * 따라서 best case 인 1,10 과 worst case : reservedSeats 의 최소거리가 4 이상인 case 가 있으면 1, 아니면 0 예약유무 따짐
     * 5 아래 max, 6 이상 min 을 뽑아서 거리 계산
     * 1개만 있는경우 거리계산을 위해 좌표 0, 11 을 추가
     * 요거 패턴 만들어서 masking operation 만들면 더 빠를것 같음
     */
    private fun availability(reservedSeats: TreeSet<Int>?): Int {
        reservedSeats?.add(0)
        reservedSeats?.add(11)

        return when (reservedSeats) {
            null -> 2
            else -> {
                val minMax = reservedSeats.filter { it < 5 }.maxOf { it }
                val maxMin = reservedSeats.filter { it > 5 }.minOf { it }
                val diff = maxMin - minMax
                return when {
                    diff >= 8 -> {
                        return if (reservedSeats.contains(1) && reservedSeats.contains(10)) {
                            2
                        } else {
                            1
                        }
                    }
                    diff > 4 -> 1
                    else -> 0
                }
            }
        }
    }
}

