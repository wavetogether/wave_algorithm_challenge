class Solution:
    def isValid(self, s: str) -> bool:
        l = []
        for e in s:
            if e == '(':
                l.append(')')
            elif e == '{':
                l.append('}')
            elif e == '[':
                l.append(']')
            else:
                if not len(l):
                    return False
                else:
                    if l.pop() != e:
                        return False
        return len(l) == 0
