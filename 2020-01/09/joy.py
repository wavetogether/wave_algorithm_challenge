#!/bin/python
import math
import os
import random
import re
import sys

# Complete the kangaroo function below.
def kangaroo(x1, v1, x2, v2):
    if v1 <= v2:
        return 'NO'
    while(1):
        x1 += v1
        x2 += v2
        if x1 == x2:
            return 'YES'
        if x1 > x2:
            return 'NO'
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    data = raw_input().split()
    x1 = int(data[0])
    v1 = int(data[1])
    x2 = int(data[2])
    v2 = int(data[3])
    result = kangaroo(x1, v1, x2, v2)
    fptr.write(result + '\n')
    fptr.close()
