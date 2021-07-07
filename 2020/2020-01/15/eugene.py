#!/bin/python3

import itertools
import math
import os


# Complete the formingMagicSquare function below.
def formingMagicSquare(s):
    magic_squares = [
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6]]
    return min(sum(abs(a - b) for a, b in zip(magic_square, itertools.chain(*s))) for magic_square in magic_squares)



if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = []

    for _ in range(3):
        s.append(list(map(int, input().rstrip().split())))

    result = formingMagicSquare(s)

    fptr.write(str(result) + '\n')

    fptr.close()
