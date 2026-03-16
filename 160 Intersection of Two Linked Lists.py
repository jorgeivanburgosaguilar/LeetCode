# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        lenA = 0
        currA = headA
        while currA:
            lenA += 1
            currA = currA.next

        lenB = 0
        currB = headB
        while currB:
            lenB += 1
            currB = currB.next

        currA = headA
        currB = headB
        if lenA > lenB:
            diff = lenA - lenB
            for _ in range(diff):
                currA = currA.next
        elif lenB > lenA:
            diff = lenB - lenA
            for _ in range(diff):
                currB = currB.next

        while currA and currB:
            if currA == currB:
                return currA
            currA = currA.next
            currB = currB.next

        return None
