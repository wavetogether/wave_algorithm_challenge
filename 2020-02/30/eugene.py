from collections import defaultdict

f = open("friendship.csv", "r")
friends_map = defaultdict(set)
groups = set()


def add_group(candidate, remain_friends):
    for fid in remain_friends:
        new_candidate = candidate + [fid]
        new_remain_friends = remain_friends.intersection(friends_map[fid])
        if len(new_remain_friends) == 0:
            group = tuple(sorted(new_candidate))
            if group not in groups:
                groups.add(group)
                for uid in group:
                    print('{},{}'.format(len(groups), uid))
        else:
            add_group(new_candidate, new_remain_friends)


for line in f.readlines():
    line = line.replace("\n", "")
    user_id, friend_id = line.split(",")
    if user_id == 'user_id' and friend_id == 'friend_id':
        print('group_id,user_id')
    else:
        friends_map[user_id].add(friend_id)
        friends_map[friend_id].add(user_id)

for a, a_friends in friends_map.items():
    for b in a_friends:
        ab_friends = a_friends.intersection(friends_map[b])
        add_group([a, b], ab_friends)

print(groups)