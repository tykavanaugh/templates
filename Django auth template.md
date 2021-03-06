Bash commands:

python -m venv .env

source ./.env/bin/activate

pip install django==3.2.9 djangorestframework django-rest-auth django-allauth django-cors-headers

pip freeze > requirements.txt

django-admin startproject mysite .

python manage.py startapp api

#in settings add apps:

    'rest_framework', 
    'rest_framework.authtoken', 
    'rest_auth', 
    'django.contrib.sites', 
    'allauth', 
    'allauth.account', 
    'allauth.socialaccount', 
    'rest_auth.registration', 
    'corsheaders', 
    'api', #APP NAME
    
    #At the end:
    AUTH_USER_MODEL = 'users.CustomUser'
    
#models.py
    from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Any extra fields would go here
    def __str__(self):
        return self.email

touch api/forms.py

from django import forms
from django.contrib.auth.forms import UserChangeForm,UserCreationForm 
from .models import CustomUser 
 
class CustomUserCreationForm(UserCreationForm):    
    class Meta:        
        model = CustomUser        
        fields = ('email', )  
        
class CustomUserChangeForm(UserChangeForm):    
    class Meta:        
        model = CustomUser        
        fields = UserChangeForm.Meta.fields
        
        
#admin

from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):    
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email']
    admin.site.register(CustomUser, CustomUserAdmin)
    
   
touch api/serializers.py

from rest_framework.serializers import ModelSerializer
from .models import CustomUser

class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'last_login', 'date_joined', 'is_staff')
        
        
        
touch users/urls.py

from django.urls import include, path


urlpatterns = [
path('auth/', include('rest_auth.urls')),    
path('auth/register/', include('rest_auth.registration.urls'))
]

In main urls.py

