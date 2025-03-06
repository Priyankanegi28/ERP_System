// Toggle dropdowns (e.g., attendance, assignment management)
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const isActive = dropdown.parentElement.classList.contains('active');

    // Close all open dropdowns before toggling the current one
    closeAllDropdowns();

    // If the clicked dropdown is not active, activate it
    if (!isActive) {
        dropdown.parentElement.classList.add('active');
        moveAssignmentButton(); // Move the Assignment Management button
    } else {
        resetAssignmentButton(); // Reset button position if dropdown is closed
    }
}

// Move "Assignment Management" button below the dropdown
function moveAssignmentButton() {
    const assignmentDropdown = document.querySelector('.assignment-dropdown');
    const attendanceDropdown = document.querySelector('.attendance-dropdown .dropdown');
    
    if (assignmentDropdown && attendanceDropdown) {
        assignmentDropdown.style.marginTop = attendanceDropdown.offsetHeight + 'px'; // Move assignment management down
    }
}

// Reset "Assignment Management" button to its original position
function resetAssignmentButton() {
    const assignmentDropdown = document.querySelector('.assignment-dropdown');
    if (assignmentDropdown) {
        assignmentDropdown.style.marginTop = '0'; // Reset its position
    }
}

// Function to close all dropdowns
function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => dropdown.parentElement.classList.remove('active'));
    resetAssignmentButton(); // Reset position of the assignment button when closing dropdowns
}

// Show specific sections (e.g., dashboard, attendance, etc.)
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none'); // Hide all sections
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block'; // Show the selected section
    }
}

// Close dropdown if clicking outside of it
document.addEventListener('click', function (event) {
    const isDropdownClick = event.target.closest('.attendance-dropdown, .assignment-dropdown');
    if (!isDropdownClick) {
        closeAllDropdowns(); // Close all dropdowns if clicking outside
    }
});

// Prevent dropdown close when clicking inside the dropdown
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click inside dropdown from closing it
    });
});



// Logout dropdown toggle


function toggleLogoutDropdown() {
    const dropdown = document.getElementById('logout-dropdown');
    dropdown.classList.toggle('show-dropdown');
}

// Close the dropdown if clicked outside of the logout button or dropdown
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('logout-dropdown');
    const logoutIcon = document.getElementById('logout-btn');
    
    // Close if the click was outside the logout icon and dropdown menu
    if (!logoutIcon.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show-dropdown');
    }
});
// Toggle notification sidebar
function toggleNotificationSidebar() {
    const notificationSidebar = document.getElementById('notification-sidebar');
    notificationSidebar.classList.toggle('active'); // Toggle the active class

    // Add event listener for clicking outside the sidebar
    document.addEventListener('click', closeSidebarOnOutsideClick);
}

// Close sidebar if clicking outside
function closeSidebarOnOutsideClick(event) {
    const notificationSidebar = document.getElementById('notification-sidebar');
    const notificationIcon = document.querySelector('.notification-icon');
    
    // Check if the click is outside the sidebar and notification icon
    if (!notificationSidebar.contains(event.target) && !notificationIcon.contains(event.target)) {
        notificationSidebar.classList.remove('active'); // Close the sidebar
        document.removeEventListener('click', closeSidebarOnOutsideClick); // Remove event listener
    }
}


// notification icon


// Toggle notification sidebar
function toggleNotificationSidebar() {
    const notificationSidebar = document.getElementById('notification-sidebar');
    notificationSidebar.classList.toggle('active'); // Toggle the active class

    // Add event listener for clicking outside the sidebar
    document.addEventListener('click', closeSidebarOnOutsideClick);
}

// Close sidebar if clicking outside
function closeSidebarOnOutsideClick(event) {
    const notificationSidebar = document.getElementById('notification-sidebar');
    const notificationIcon = document.querySelector('.notification-icon');
    
    // Check if the click is outside the sidebar and notification icon
    if (!notificationSidebar.contains(event.target) && !notificationIcon.contains(event.target)) {
        notificationSidebar.classList.remove('active'); // Close the sidebar
        document.removeEventListener('click', closeSidebarOnOutsideClick); // Remove event listener
    }
}
// Function to toggle dropdowns for courses
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

// Function to show the relevant course section
function showCourse(courseId) {
    // Hide all course sections
    const courseSections = document.getElementsByClassName('course-section');
    for (let i = 0; i < courseSections.length; i++) {
        courseSections[i].style.display = 'none';
    }

    // Show the selected course section
    document.getElementById(courseId).style.display = 'block';
}
// Function to toggle the dropdown visibility
function toggleIconDropdown() {
    const dropdown = document.getElementById('add-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Function to add a faculty member
function addFaculty() {
    alert('Add Faculty functionality triggered.');
    // You can add additional code to open a modal or redirect to an add page here.
}

// Function to upload a sheet
function uploadSheet() {
    alert('Upload Sheet functionality triggered.');
    // You can add additional code to handle the sheet upload here.
}

// Function to delete faculty
function deleteFaculty() {
    alert('Delete Faculty functionality triggered.');
    // You can add additional code to handle the deletion of faculty here.
}
// Toggle the display of the dropdown content
function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
// Toggle Dropdown Visibility
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
}

// Show/Hide Course Sections
function showCourse(courseId) {
    var sections = document.getElementsByClassName('course-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';  // Hide all sections
    }
    document.getElementById(courseId).style.display = 'block';  // Show the selected course section
}

// Toggle Add Icon Dropdown
function toggleIconDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
}

// Add Student (Example Functionality)
function addStudent() {
    alert("Add Student form functionality here!");
}

// Upload Student Sheet (Example Functionality)
function uploadStudentSheet() {
    alert("Upload Student Sheet functionality here!");
}

// Delete Student (Example Functionality)
function deleteStudent() {
    alert("Delete Student functionality here!");
}

// Event Listeners for Clicking Outside Dropdowns to Close
window.onclick = function(event) {
    if (!event.target.matches('.dropdown span, .fa')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

        var iconDropdowns = document.getElementsByClassName("dropdown-options");
        for (var j = 0; j < iconDropdowns.length; j++) {
            var openIconDropdown = iconDropdowns[j];
            if (openIconDropdown.classList.contains('show')) {
                openIconDropdown.classList.remove('show');
            }
        }
    }
}

