class Solution(object):
    def findDuplicate(self, nums):
        """
        nums의 각 index를 주소라고 생각하고,
        nums의 각 value들을 다음 주소를 가르키는 값이라고 생각한다면,
        nums는 0이라는 head를 가지고 있는 linked list가 된다.
        그런데 단 하나의 값만 중복이 있기 때문에 cycle이 존재하는 linked list이다.
        따라서 slow, fast 기법으로 cycle의 시작점을 찾는다면 중복된 단 하나의 값을 찾을 수 있다.
        
        :type nums: List[int]
        :rtype: int
        """
        slow = fast = 0
        while slow == 0 or slow != fast:
            slow = nums[slow]
            fast = nums[nums[fast]]
        fast = 0
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]
        return slow
