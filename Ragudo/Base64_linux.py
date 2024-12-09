import os
import base64

def clean():
    os.system("clear")

def Encoding_Decoding():
    while True:
        usr = input("Please Enter a number whether you want to [1]encode or [2]decode\n====> ")
        clean()
        if usr == "1":
            encode()
        elif usr == "2":
            decode()
        elif usr.lower() == "exit":
            exit()
        else:
            print("Invalid input, please Try Again!\n --->Type [Exit] to exit program")

def encode():
    encoding = input("Please Enter what you want to encrypt: ")
    clean()
    encoded_data = base64.b64encode(encoding.encode('utf-8'))
    print(f"Here is the Encrypted Data you Entered: \n{encoded_data.decode('utf-8')}")

def decode():
    decoding = input("Please Enter what you want to decrypt: ")
    clean()
    decoded_data = base64.b64decode(decoding.encode('utf-8')).decode('utf-8')
    print(f"Here is the Decrypted Data you Entered: \n{decoded_data}")