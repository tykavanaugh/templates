
# Django quickstart

Using token authentication and rest framework backend

## Create env

python -m venv .env

source .env/bin/activate

pip install django==3.2.9 djangorestframework djangorestframework-jwt django-cors-headers psycopg2 pytz

django-admin startproject backend

cd backend

pip freeze > requirements.txt

python manage.py startapp app_name

## Go to settings .py and add

```py
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'corsheaders',
]

MIDDLEWARE = [
    # ...
    'corsheaders.middleware.CorsMiddleware', # Note that this needs to be placed above CommonMiddleware
    'django.middleware.common.CommonMiddleware', # This should already exist
    # ...
]

#...
```
### Database
```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'tutorial_db',
    }
}
```


### At the end add
```py
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
}

CORS_ORIGIN_WHITELIST = ['https://localhost:3000','http://localhost:3000']
```

##In project urls.py

```py

from django.contrib import admin
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/', obtain_jwt_token)
]


```

python manage.py migrate

You will now be able to recieve JWT tokens.
