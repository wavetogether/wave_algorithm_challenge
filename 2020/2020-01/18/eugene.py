
class Solution(object):
    def minAreaRect(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
        # import math
        # from collections import defaultdict
        #
        # rectangle_dict = defaultdict(list)
        # for i in range(len(points)):
        #     for j in range(i + 1, len(points)):
        #         diagonal = pow(points[i][0] - points[j][0], 2) + pow(points[i][1] - points[j][1], 2)
        #         mid_point = ((points[i][0] + points[j][0]) / 2.0, (points[i][1] + points[j][1]) / 2.0)
        #         rectangle_dict[(diagonal, mid_point)].append((i, j))
        #
        # minimum_rectangle_area = float('inf')
        # for candidates in rectangle_dict.values():
        #     if len(candidates) >= 2:
        #         for i in range(len(candidates)):
        #             for j in range(i + 1, len(candidates)):
        #                 a, b, c = points[candidates[i][0]], points[candidates[i][1]], points[candidates[j][0]]
        #                 if (a[0] == c[0] and b[1] == c[1]) or (a[1] == c[1] and b[0] == c[0]):
        #                     minimum_rectangle_area = min(minimum_rectangle_area, int(
        #                         math.sqrt(pow(a[0] - c[0], 2) + pow(a[1] - c[1], 2)) *
        #                         math.sqrt(pow(b[0] - c[0], 2) + pow(b[1] - c[1], 2))))
        # return minimum_rectangle_area if minimum_rectangle_area != float('inf') else 0
        point_set = set()
        minimum_rectangle_area = float('inf')
        for point in points:
            point_set.add(tuple(point))
        for i in range(len(points)):
            for j in range(i+1, len(points)):
                x1, y1 = points[i]
                x2, y2 = points[j]
                if x1 != x2 and y1 != y2 and (x1, y2) in point_set and (x2, y1) in point_set:
                    minimum_rectangle_area = min(minimum_rectangle_area, abs((x2 - x1) * (y2 - y1)))
        return minimum_rectangle_area if minimum_rectangle_area != float('inf') else 0
