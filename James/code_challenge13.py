for x in range(1,7):
    for y in range(6, x, -1):
        print(" ", end= " ")
    for z in range(x, 1, -1):
        print(z, end= " ")
    for a in range(1, x + 1):
        print(a, end= " ")
    print()
for x in range(5, 0, -1):
    for y in range(5 - x + 1):
        print(" ", end=" ")
    for z in range(x, 0, -1):
        print(z, end=" ")
    for a in range(2, x + 1):
        print(a, end=" ")
    print()