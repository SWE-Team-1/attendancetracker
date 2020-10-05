# AttendanceTracker-FrontEnd

# Dev Guide:

    Getting Started:
- Create a folder locally to house the application, navigate to this new empty folder in comand line
- To clone the repository (Saved project), run "git clone https://github.com/SWE-Team-1/AttendanceTracker-FrontEnd.git"
- If you aren't logged in to GitHub by command line, it should ask you username and password
- Now the repository should download in your folder
- You can now connect the remote to your folder so you can push and pull project going forwards
- Connect to repo by running: "git remote set-url origin https://github.com/SWE-Team-1/AttendanceTracker-FrontEnd.git"
- You should now be able to check status of the repo with "git status"
- To run project, enter app folder and run "yarn start", the app should start in http://localhost:3000/
- You are set! Now you can examine the code, edit it locally, save your work in commits, and then push it to the repo once your satisfied with you work

    Working on code:
- Make sure you are on the latest version of the app before starting your work, this can save a lot of trouble merging later, use "git status" to see if "Your branch is up to date with 'origin/main'"
- If you are behind, run "git pull", this should update your local folder to match the latest version (This only works if you haven't started editing the code, if you have edited, use "git stash" to save current version)
- Once you are on the latest main branch, create a new branch to work on your changes by running "git branch [your-new-branch-name-goes-here]"
- Now you must checkout the new branch you made with "git checkout [your-new-branch-name-goes-here]"
- Now you can edit the code! Do this until you have a compartment of the requested features done
- Before saving your work, run "standard --fix" to clean your code, the functionality should not be changed at all
- Once you want to save your work, you can save all changes by running "git add *" (You can also save individual files)
- Verify you have added the needed files with "git status", you should see the files you want to save in green
- Now save the new version of your work with "git commit -m "[brief-explaination-of-what-you've-done]" "
- You are now free to work on the next component of your feature, know that the remote repository has not been pushed to, and no one else can see your commits until you do so.

    Commiting your work:
- Once you have finished your features, and have commited all changes to your branch, you must push it to the remote repo, check on your status with "git status"
- Now you can send your work to the remote by running "git push origin [your-new-branch-name-goes-here]"
- Make sure everything is ok, if not you can google then ask a teamate about the issue faced
- Check on your status with "git status", you should be up to date with your branch
- You can now either keep working on this branch, or "git checkout main" to return to the main branch then create a new branch for another feature

Ressources:
- General GitHub cheat cheat: https://education.github.com/git-cheat-sheet-education.pdf


Writen by: Xavier Hébert-Couturier