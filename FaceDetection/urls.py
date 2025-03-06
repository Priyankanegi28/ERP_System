from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views
from FaceDetection.views import test_view, student_dashboard, admin_dashboard, faculty_dashboard, edit_profile, home_view  # Import the home view

urlpatterns = [
    # Admin page
    path('admin/', admin.site.urls),
    
    # When the server opens, redirect to the home page
    path('', home_view, name='home'),  # Set the home page as the default

    # Home URL (if accessed directly)
    path('home/', home_view, name='home'),

    # Login URL
    path('login/', test_view, name='login'),

    # Dashboard URLs for different roles
    path('templates/student_dashboard/', student_dashboard, name='student_dashboard'),
    path('admin_dashboard/', admin_dashboard, name='admin_dashboard'),
    path('faculty_dashboard/', faculty_dashboard, name='faculty_dashboard'),
    path('edit-profile/', edit_profile, name='edit_profile'),
]
