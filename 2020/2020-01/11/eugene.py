#!/bin/python3

import math
import os


# Complete the getMinimumCost function below.
def getMinimumCost(k, c):
    sorted_cost = sorted(c, reverse=True)
    return sum((i + 1) * sorted_cost[i * k:i * k + k] for i in range(math.floor(len(c) / k) + 1))


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    c = list(map(int, input().rstrip().split()))

    minimumCost = getMinimumCost(k, c)

    fptr.write(str(minimumCost) + '\n')

    fptr.close()
