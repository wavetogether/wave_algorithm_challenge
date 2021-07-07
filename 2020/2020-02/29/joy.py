class Solution(object):
    def __init__(self):
        self.mapper = dict()
        self.mapper['2'] = ['a', 'b', 'c']
        self.mapper['3'] = ['d','e','f']
        self.mapper['4'] = ['g', 'h', 'i']
        self.mapper['5'] = ['j', 'k', 'l']
        self.mapper['6'] = ['m', 'n', 'o']
        self.mapper['7'] = ['p', 'q', 'r', 's'] 
        self.mapper['8'] = ['t', 'u', 'v']
        self.mapper['9'] = ['w', 'x', 'y', 'z']
    
    def letterCombinations(self, digits, l=[]):
        """
        :type digits: str
        :rtype: List[str]
        """
        if len(digits) == 0:
            return l
        
        if len(l) == 0: 
            return self.letterCombinations(digits[1:], self.mapper[digits[0]])
        else:
            tmp = []
            for e in l:
                for letter in self.mapper[digits[0]]:
                    tmp.append(e+letter)
            return self.letterCombinations(digits[1:], tmp)
