a = [1,2,5,9,8,5,5,6,3,10]
d = {}

for item in a:
  try:
    print(item if d[item] else null)
    break
  except:
    d[item] = "check"


# > 5
