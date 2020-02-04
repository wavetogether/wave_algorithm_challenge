from collections import defaultdict
from itertools import combinations

# f = open("friendship.csv", "r")
f = open("friendship2.csv", "r")
friends_map = defaultdict(lambda: defaultdict(bool))
cliques = defaultdict(set)
new_cliques = defaultdict(set)
groups = {}

for line in f.readlines():
    # line = line.replace("\n", "")
    # user_id, friend_id = line.split(",")
    line = line.replace("\n", "")
    _, user_id, friend_id = line.split(" ")

    if user_id == 'user_id' and friend_id == 'friend_id':
        print('group_id,user_id')
    else:
        friends_map[friend_id][user_id] = True
        friends_map[user_id][friend_id] = True
        cliques[(friend_id,)].add(user_id)
        cliques[(user_id,)].add(friend_id)

i = 2
while cliques:
    for k, (a, a_friends) in enumerate(cliques.items()):
        if k % 1000 == 0:
            print(k, len(cliques), len(new_cliques), len(groups))
        for b, c in combinations(a_friends, 2):
            if friends_map[b][c]:
                sorted_list = sorted([*a, b, c])
                groups[tuple(sorted_list)] = True
                for x, y in zip(combinations(sorted_list, i), reversed(sorted_list)):
                    new_cliques[x].add(y)
                    if x in groups:
                        groups.pop(tuple(x))
    cliques, new_cliques, i = new_cliques, defaultdict(set), i + 1
    # print(i, len(cliques))

max_value = 0
for j, group in enumerate(groups.keys()):
    print(len(group))
    max_value = max(max_value, len(group))
    # for uid in group:
    #     print("{},{}".format(j, uid))
print("MAX: ", max_value)