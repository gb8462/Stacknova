import importing_activity23

def choices():
    while True:
        print("Welcome to my program! \n")
        usr = input("Enter your choices act [23] or act [24] numbers only: ")
        if usr == "23":
            importing_activity23.reason()
        elif usr == "24":
            act24()
        else:
            print("invalid input")

def act24():
    importing_activity23.act23(4)