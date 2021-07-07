#!/bin/python3

from collections import Counter
import os


# Complete the isValid function below.
def isValid(s):
    frequency = sorted(list(Counter(Counter(s).values()).items()))
    if len(frequency) == 2 and ((frequency[0][0] == 1 and frequency[0][1] == 1) or
                                (frequency[1][0] - frequency[0][0] == 1 and frequency[1][1] == 1)):
        return 'YES'
    return 'YES' if len(frequency) < 2 else 'NO'


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = isValid(s)

    fptr.write(result + '\n')

    fptr.close()
