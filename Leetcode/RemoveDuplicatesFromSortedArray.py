a = [0,1,1,1,1,2,3,3]
b = [1,1,1,1,1,1,1,1]
c = [0,1,2,3,4,5,6,7]
d = [0]
e = []
    
#1 Set
def Solution1(a):
    if len(a) == 0:
        return []
    elif len(a) == 1:
        return a
    
    tempSet = set()
    for i in range(0, len(a)):
        tempSet.add(a[i])
    return sorted(tempSet)

#2 Two pointer
def Solution2(a):
    if len(a) == 0:
        return []
    elif len(a) == 1:
        return a
    
    p = 0
    q = 1

    while (q < len(a)):
        if (a[p] != a[q]):
            p += 1
            a[p] = a[q]
        q += 1
    
    return a[0:p + 1]

#3