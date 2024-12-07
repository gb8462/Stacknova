for x in range(7, 0, -1):
    for y in range(1, x + 1):
        print(" ", end=" ")
    for z in range(6, x, -1):
        print("*", end=" ")
    for a in range(5, x, -1):
        print("*", end=" ")
    print()
for x in range(0, 4):
    for y in range(4, 0, -1):
        print(" ", end= " ")
    for z in range(1,1):
        print("*", end= " ")
    for a in range(3, 0, -1):
        print("*", end= " ")
    print()