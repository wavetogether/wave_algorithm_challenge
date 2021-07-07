class Solution(object):
    def maskPII(self, S):
        """
        :type S: str
        :rtype: str
        """
        ss = S.split('@')
        if len(ss) == 2:
            return ss[0][0].lower() + '*****' + ss[0][-1].lower() + '@' + ss[1].lower();
        else:
            s = ''.join([s for s in S if s.isdigit()])
            return ('' if len(s) == 10 else '+' + '*' * (len(s) - 10) + '-') + '***-***-' + s[-4:]
