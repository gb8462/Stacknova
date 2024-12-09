import hashlib
def hash():
    while True:
        data = input("Enter data to hash (or type 'exit' to quit): ")
        if data.lower() == 'exit':
            break
        elif not data.strip():
            print("\nInput cannot be empty!\n")
            continue
        
        hash = hashlib.sha256()
        hash.update(data.encode('utf-8'))
        hash_hex = hash.hexdigest()

        print("SHA-256 Hash:", hash_hex)
hash()