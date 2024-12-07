import os
tuloy = True
num = 0
while tuloy == True:
    tria = input("Would you like to add a triangle?(Y/N): ")
    if tria.lower() == "n":
        os.system('cls')
        print("PROGRAM TERMINATED. THANK YOU FOR USING ME")
        break
    elif tria.lower() == "y":
        os.system('cls')
        num += 1
        for x in range(1,6):
            for r in range(1, num+1):
                for y in range(1,x+1):
                    print("*", end=" ")
                for z in range (6,x,-1):
                    print("  ",end="")
            print()
        continue
    else:
        os.system('cls')
        print("INVALID ANSWER. PLEASE TRY AGAIN")
        continue