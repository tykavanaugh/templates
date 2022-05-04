# Setup script

## Create Folder for Project and Setup Git Repo

`mkdir $projectname`

`cd ./$projectname`

`echo "# $projectname" > README.md`

```
echo "node_modules/
__pycache__/
.vscode/
.env
key.json
*.log
*.pot
*.pyc
db.sqlite3
media
.env 
.venv 
env/ 
venv/ 
ENV/ 
env.bak/ 
venv.bak/ 
env_power/" > .gitignore
```
`python -m venv .env`

`source .env/bin/activate`

`git init`

`git branch -M main`

`git add .`

`git commit -m "init"`

`git remote add origin $repo_origin`

`git push -u origin main`

## Create App and Install Django Rest Framework


