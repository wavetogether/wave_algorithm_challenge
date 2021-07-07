import java.lang.IllegalArgumentException


fun main(args: Array<String>) {
    val dict = Dictionary()

    dict.add("pad")
    dict.add("dad")
    println(dict.search("pad")) // true
    println(dict.search("bad")) // false
    println(dict.search("*ad")) // true
    println(dict.search("d**")) // true
}

class Dictionary {
    private val root = Node()

    /**
     * add a word into dictionary
     *
     * @param word : non-empty lowercase alphabets
     * @return true if addition has been completed successfully, false the word already exists
     */
    fun add(word: String): Boolean {
        if (word.isEmpty()) throw IllegalArgumentException("cannot add an empty string")

        var currentNode = root
        word.map { it - 'a' }.forEach {
            if (currentNode.child[it] == null) {
                currentNode.child[it] = Node()
            }
            currentNode = currentNode.child[it]!!
        }
        return !currentNode.terminal.also {
            currentNode.terminal = true
        }
    }

    fun search(word: String): Boolean {
        if (word.isEmpty()) throw IllegalArgumentException("cannot find an empty string")
        return search(root, word, 0)
    }

    private tailrec fun search(node: Node, word: String, index: Int): Boolean {
        if (word.length == index) return node.terminal

        if (word[index] == '*') {
            return node.child.filterNotNull().any { search(it, word, index + 1) }
        }

        val childIndex = word[index] - 'a'
        return if (node.child[childIndex] == null) {
            false
        } else {
            search(node.child[childIndex]!!, word, index + 1)
        }
    }

    class Node(
            var terminal: Boolean = false,
            val child: Array<Node?> = Array(26) { null }
    )
}
