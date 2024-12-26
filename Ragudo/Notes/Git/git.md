# Git Notes

Notes:

### In a Scenario where you want to push to an existing repository:
1. git remote add origin "Link To your Github Repo"
2. git branch -M main
3. git push -u origin main

### In a Scenario where your just starting git on terminal do the Instructions below (You need to have an empty repository)

Basic Git Commands:

1. git config user.email "YourEmail@gmail.com"

2. git init

3. git branch -M main

4. git remote add origin "Link to your empty git repository"

5. git add .

6. git commit -m "Enter What you want"

7.  git push -u origin main
### After Completing this and successfully uploading your file directly to GitHub you can just do the Following below afterwards when adding new commits

1. git add .

2. git commit -m "*Enter whatever changes you did*"

3. git push -u origin main

### In a Scenario where someone or you updated a single file or edited something directly on GitHub, There would be an Error when your trying to commit a file, this is because your local files only have the previous updated commit. 

Don't be to surprise though and start panicking, Simply Use the git pull command in order to To pull the recently updated commit on GitHub.

1. git pull 
OR
2. git pull origin main (depends which branch your trying to pull)

### If you want to forcefully push your file:
1. git push -u origin main --force

 *Note: this will force update your GitHub, new updates that aren't locally in your computer will be removed from GitHub*