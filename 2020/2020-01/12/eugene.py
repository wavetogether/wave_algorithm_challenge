#!/bin/python3

import math
import os


# Complete the encryption function below.
def encryption(s):
    removed_s = s.replace(' ', '')
    column_length = int(math.ceil(math.sqrt(len(removed_s))))
    return ' '.join(removed_s[i::column_length] for i in range(column_length))


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = encryption(s)

    fptr.write(result + '\n')

    fptr.close()
