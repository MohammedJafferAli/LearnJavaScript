# LearnJavaScript

Along with the Javascript, some important notes and git commands are added here for reference

### List of commands
1. Show all the configuration in this env => git config --list --show-origin
2. Delete all the branches expect main - git branch | grep -v "master" | xargs git branch -D - Delete all the branch except main
3. Compress the buffer size - 
    git config --global http.postBuffer 157286400
    git config --global https.postBuffer 157286400
    git config --global core.compression 9
4. Add user name and email - 
    git config --global user.email "mohammedjafferali.abubakkarsiddiq@bt.com"
    git config --global user.name “Mohammed JafferAli“
5. Add origin git remote add origin https://github.com/MohammedJafferAli/LearnJavaScript
6. Update remote origin - git remote set-url origin https://github.com/MohammedJafferAli/LearnJavaScript
7. Push the changes to main branch - git push origin main
8. If there any conflict try to resolve it, else you want to force push then  - git push origin main --force
9. When rebasing to main 
    You are currently editing a commit while rebasing branch 'main' on '8a445cc'.
        (use "git commit --amend" to amend the current commit)
        (use "git rebase --continue" once you are satisfied with your changes)