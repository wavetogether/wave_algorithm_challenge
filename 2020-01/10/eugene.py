#!/bin/python3

import os


# Complete the climbingLeaderboard function below.
def climbingLeaderboard(scores, alice):
    alice_ranks = []
    score_iterator, current_rank = 0, 0
    for alice_score in reversed(alice):
        while score_iterator < len(scores) and alice_score < scores[score_iterator]:
            current_rank += 1 if score_iterator == 0 or scores[score_iterator] < scores[score_iterator - 1] else 0
            score_iterator += 1
        alice_ranks.append(current_rank + 1)
    return reversed(alice_ranks)


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    scores_count = int(input())

    scores = list(map(int, input().rstrip().split()))

    alice_count = int(input())

    alice = list(map(int, input().rstrip().split()))

    result = climbingLeaderboard(scores, alice)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
