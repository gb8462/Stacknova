# Input a number from the user
number = int(input("Enter a number: "))

# Check divisibility using nested if statements
if number % 5 == 0:
    if number % 9 == 0:
        print(f"{number} is divisible by both 5 and 9.")
    else:
        print(f"{number} is divisible by 5 but not by 9.")
else:
    if number % 9 == 0:
        print(f"{number} is divisible by 9 but not by 5.")
    else:
        print(f"{number} is not divisible by either 5 or 9.")
