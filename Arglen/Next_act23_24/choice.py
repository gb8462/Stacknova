
def act23(numbers):
    print(numbers + 1)

def reason():
    print("This Activity has been merge with activity 24 \nyou might want to run activity 24 instead\n")
    
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