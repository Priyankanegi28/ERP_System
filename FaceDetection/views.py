from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages

def home_view(request):
    return render(request, 'home.html')

def test_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password') 
        role = request.POST.get('role')

        # Authenticate user
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # Log the user in
            login(request, user)

            # Redirect based on role
            if role == 'student':
                return redirect('student_dashboard')
            elif role == 'admin':
                return redirect('admin_dashboard')
            elif role == 'faculty':
                return redirect('faculty_dashboard')
        else:
            # Invalid credentials, show error message
            messages.error(request, 'Invalid username or password')

    return render(request, 'login.html')

def student_dashboard(request):
    return render(request, 'student_dashboard.html')

def admin_dashboard(request):
    return render(request, 'admin_dashboard.html')

def faculty_dashboard(request):
    return render(request, 'faculty_dashboard.html')

def edit_profile(request):
    return render(request, 'edit_profile.html')

