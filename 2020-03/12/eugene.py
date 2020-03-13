# Runtime: 188 ms, faster than 100.00% of Python online submissions for LFU Cache.
# Memory Usage: 21.5 MB, less than 100.00% of Python online submissions for LFU Cache.

import collections


class LFUCache(object):

    def __init__(self, capacity):
        """
        :type capacity: int
        """
        self.capacity = capacity
        self.hash_map = {}
        self.frequency_map = collections.defaultdict(list)

    def get(self, key):
        """
        :type key: int
        :rtype: int
        """
        hash_result = self.hash_map.get(key)
        if hash_result:
            value, frequency = hash_result
            self.hash_map[key] = (frequency + 1, value)
            self.frequency_map[frequency + 1].append(key)
            return value
        else:
            return -1

    def put(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: None
        """
        if self.capacity == 0:
            return

        frequency = self.hash_map.get(key, (0,))[0] + 1

        if frequency == 1:
            frequency_iter = 1
            while self.capacity <= len(self.hash_map):
                if not self.frequency_map[frequency_iter]:
                    frequency_iter += 1
                target_key = self.frequency_map[frequency_iter].pop(0)
                if target_key in self.hash_map and self.hash_map[target_key][0] == frequency_iter:
                    self.hash_map.pop(target_key)

        self.hash_map[key] = (value, frequency)
        self.frequency_map[frequency].append(key)

# Your LFUCache object will be instantiated and called as such:
# obj = LFUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
