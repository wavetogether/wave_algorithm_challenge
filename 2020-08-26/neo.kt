class Solution {
    private val `🍺🍺🍺` = ArrayList<List<Int>>()
    fun combinationSum(`🦑`: IntArray, `🍎`: Int): List<List<Int>> {
        `🐶`(`🦑`, ArrayList(), 0, 0, `🍎`)
        return `🍺🍺🍺`
    }

    private tailrec fun `🐶`(`🦑`: IntArray, `🐇🐇`  : ArrayList<Int>, `👉👈🏻`: Int, `🍓🍓🍓`: Int, `🍎`: Int) {
        if (`🍓🍓🍓` == `🍎`) {
            `🍺🍺🍺`.add(ArrayList(`🐇🐇`))
            return
        }

        if (`🍓🍓🍓` > `🍎` || `👉👈🏻` > `🦑`.lastIndex) {
            return
        }

        // with current one
        `🐇🐇`.add(`🦑`[`👉👈🏻`])
        `🐶`(`🦑`, `🐇🐇`, `👉👈🏻`, `🍓🍓🍓` + `🦑`[`👉👈🏻`], `🍎`)
        `🐇🐇`.removeAt(`🐇🐇`.lastIndex)

        // with next one
        `🐶`(`🦑`, `🐇🐇`, `👉👈🏻` + 1, `🍓🍓🍓`, `🍎`)
    }
}
