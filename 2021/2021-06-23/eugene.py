class Solution(object):
    def openLock(self, deadends, target):
        """
        :type deadends: List[str]
        :type target: str
        :rtype: int
        """
        moved = set(deadends)
        queue = ['0000']
        move = { str(i): (str((i + 1) % 10), str((i - 1) % 10)) for i in range(10) }
        
        if '0000' in moved:
            return -1
        if '0000' == target:
            return 0

        number_of_turns = 0
        while queue:
            next_queue = []
            number_of_turns += 1
            for wheel in queue:
                for i, c in enumerate(wheel):
                    for current in (wheel[:i] + move[c][0] + wheel[i + 1:], wheel[:i] + move[c][1] + wheel[i + 1:]):
                        if current not in moved:
                            if current == target:
                                return number_of_turns
                            next_queue.append(current)
                            moved.add(current)
            queue = next_queue
        return -1
