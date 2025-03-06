```markdown
# 🏫 ERP SYSTEM

## 📌 PROJECT OVERVIEW
**ERP_System** is a web-based application that provides a login system with three roles:  
- 👨‍💼 **Admin**  
- 👩‍🏫 **Faculty**  
- 🎓 **Student**  

Each user role gets redirected to their respective dashboard after logging in. The project is built using **HTML, CSS, JavaScript, and Django**.

---

## 🚀 FEATURES
- ✅ **User Authentication**: Secure login system for Admin, Faculty, and Students.  
- ✅ **Role-Based Access**: Each user type is redirected to a specific dashboard.  
- ✅ **Dashboard Interface**: Different pages for Admin, Faculty, and Student.  
- ✅ **Responsive Design**: UI built with **HTML, CSS, and JavaScript**.  
- ✅ **Django Framework**: Backend powered by **Python Django**.  

---

## 🛠️ TECHNOLOGIES USED
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Python (Django Framework)  
- **Database**: SQLite (default Django database)  

---

## 📂 PROJECT STRUCTURE
```
ERP_System/
│── FaceDetection/      # Main Django app
│── static/             # Static files (CSS, JS, images)
│── templates/          # HTML templates
│── .gitattributes      # Git attributes file
│── .gitignore          # Git ignore file
│── LICENSE             # License file
│── manage.py           # Django project manager file
```

---

## 📦 PROJECT SETUP

### 🔹 1. CLONE THE REPOSITORY
```bash
git clone https://github.com/yourusername/ERP_System.git
cd ERP_System
```

### 🔹 2. CREATE A VIRTUAL ENVIRONMENT (OPTIONAL)
```bash
python -m venv venv
source venv/bin/activate  # For Mac/Linux
venv\Scripts\activate  # For Windows
```

### 🔹 3. INSTALL DEPENDENCIES
```bash
pip install -r requirements.txt
```

### 🔹 4. APPLY MIGRATIONS
```bash
python manage.py migrate
```

### 🔹 5. CREATE A SUPERUSER (OPTIONAL)
```bash
python manage.py createsuperuser
```

### 🔹 6. RUN THE SERVER
```bash
python manage.py runserver
```
✅ **Access the application at:** **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**

---

## 📜 LICENSE
This project is **open-source** and free to use.

---
