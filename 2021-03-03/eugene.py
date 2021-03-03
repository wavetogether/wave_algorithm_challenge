H, W = map(int, input().split())
S = [input() for i in range(H)]

sides = 0
for i in range(H - 1):
    for j in range(W - 1):
        sides += [S[i][j], S[i][j + 1], S[i + 1][j], S[i + 1][j + 1]].count('#') % 2
print(sides)
