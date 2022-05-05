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

`pip install django django-rest-framework psycopg2`

`django-admin startproject $projectname .`

`python manage.py startapp api`

In settings.py

```
INSTALLED_APPS = [
    ...
    'rest_framework',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '$projectname_db',
    }
}

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
    ]
}
```

In main urls.py

```
urlpatterns = [
    ...
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('api.urls')),
]
```
`python manage.py makemigrations`

`python manage.py migrate`

