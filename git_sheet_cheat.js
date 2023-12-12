/*

    #-- git&github

    ## Important Words
    --- Repositry
    --- Branch
    --- Local Repo
    --- Remote Repo
    --- Commit (Snapshot Or Checkpoint In Your Local Repo)
    --- Clone [from local or remote]
    --- Push [Uploud Local Changes To Remote]
    --- Pull [You Pull Changes From Remote Repo To Your Local]
    --- Pull Request [Tell Other About Your Changes To Pull it From Local To Remote]
======================================================================================
    ## Important Notes
    --- Create Repository For Every Project
    --- Create A New Branch For Every Feature Or Inhancment .
    --- No Need to Conect To Remote Repo When Working
    --- Anyone Can Push and Pull Depens on Permissions
    -- cd (change direction)
======================================================================================
    ### git commands
    --- git clone 
    --- git init >> (to init the dir)
    --- git status (show you what are doing in your local repo)
    ============================================================================================================================
    --- Your Cycle To Arrive To Remote Repo
    (working directory)                     (staging area)                (local repo)               (remote repo)
                        git add>>                          git commit>>                 git push>>
                                                        <<git checkout                                        <<git fetch
                                                        <<git merge
    ============================================================================================================================
    --- git add (file name)
    --- git add (*) >>> to add all files in your local repo
    --- git reset head (file name) >>> if you added a file to staging area and you want to restore it again 
    --- git commit -m "your message (short description)"
    *** note (you can do more than one commit in the same repo)
    --- git branch (tell you all of the branches you have on your repo)
    --- git remote -v (tell you what remote repo are you work)
    --- git push (remote name(origin)) (branch name(master or main or anything))
    --- git pull (remote repo (origin))  do (git fetch & git merge)
    --- git config --list or -l
    --- git help config 
    --- git config --global user.email
    --- git config --global user.email "o@gmail.com" >> to edit
    --- q 
    --- git config --global --unset user.name >> to delete it
    --- git config --global --edit 

    *** public key
    --- ssh-keygen (secure shell key generator ) -t (type) rsa -b 4096 -c "(email)"
    --- cat >> "tell you all of content of any file you give him"
    --- ssh -T git@github.com
    
    --- git push -u origin master (-u >> do pull and then do push)
    
    --- Alias
    --- alias >> (shortcut for any command you write it alot)
    --- git config --global alias.(alias name) (name you want do alias for it)
    --- git config --global alias.st status
    --- git status = git st
    --- another example >> git config --global alias.cm "commit -m" = git cm
    
    --- Branching
    --- git branch => to show you all of your branches
    --- git branch (branch name) =>  to make a new branch
    --- git checkout (branch name) => to switch to spicific branch 
    --- git branch -d (branch name) => to delete the branch but check first if there any modifys dont merged
    --- git branch -D (branch name) => to delete the branch  but using force
    --- git checkout -b (branch name) => to make a new branch and switch to him
    --- git branch -m (new name) => to rename the current branch
    
    --- Mergeing
    --- git merge (the branch name you want to merge it with the current branch)

    --- Stash
    --- git stash => to store files to another time . you can do the stash after the  commit or after add
    --- git stash pop => to give you your last file you stored in the stash and delete it from his store
    --- git stash list => to show you your files you stored in the stash
    --- git stash save ("your message") => to stash a file with a message
    --- git stash apply => to give you your last file you stored in the stash but don't delete it from his store
    --- git stash pop stash@{the file id} => to give you a spicific file
    --- git stash drop => to delete the last file you added to stash
    --- git stash show => to show you the last file you added to stash
    --- git stash show stash@{the file id} => to show you a specific file
    --- git stash clear => to delete all of your files in the stash


    --- Restore & clean
    --- git restore --staged (file name) => to restore the file from stage area
    --- git restore --staged * => to restore the files from stage area
    --- git clean -n => to clean the files but show you what he will clean first
    --- git add (file name) => if you wanna a file from the files going to delete
    --- git clean -f => to confirm on clean operation


    --- Reset 
    --- git log => to show you all of your commits and the head commit
    -- to out form the log  => enter q
    --- git reset --hard (commit hash) => to make the pointer to this commit


    --- Egnoreing
    --- *.log  => any file have .log will ignore it
    --- !vip.log => to not ignore this
    --- (folder name)/ => to ignore this folder
    --- (file name) => to ignore this file
    --- if you want to add any file you added it in ignore file you can add it with --force


    --- Tagging & release
    --- git tag => to show you your tags
    --- git tag (tag name (v1.0)) => to make a tag
    --- git push origin v1.0 => to push with tag
    --- git tag -a v2.0 -m "your message"  => to make an annotated tag
    --- git tag -l "your tag v1." => to search about specific tag
    --- git tag -d v1.0 => to delete tag locally
    --- git push origin --delete v2.0 => to delete tag remotely


    --- Advices
    --- 



// # to rename the remote origin 
-git remote rm origin
-git remote add origin (new url)
or 
git remote set-url origin (new url)



    # Some of command line commands
    --- mkdir (folder name) => to make a new folder
    --- touch (file name) => to make a new file
    --- echo "hello world" > (new file name) =>> to make a new file and push the message inside it
    --- ls => to show you the list in current directory
*/