# Runtime: 32 ms, faster than 91.05% of Python3 online submissions for Restore IP Addresses.
# Memory Usage: 14.4 MB, less than 37.20% of Python3 online submissions for Restore IP Addresses.

class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        UPPER_BOUND = 255
        NUM_SPLIT = 4
        
        results = set()
        
        def recurse(s: str, current: List[str]):
            if not s:
                if len(current) == NUM_SPLIT:
                    results.add('.'.join(current))
            elif len(current) == NUM_SPLIT:
                if not s:
                    results.add('.'.join(current))
            elif s[0] == '0':
                recurse(s[1:], current + ['0'])
            else:
                for i in range(1, len(s) + 1):
                    if int(s[:i]) > UPPER_BOUND:
                        break
                    recurse(s[i:], current + [s[:i]])
        
        recurse(s, [])
                        
        return list(results)
