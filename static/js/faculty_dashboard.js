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




// class schedule page details


// class information view
function showClassInfo() {
    const classInfo = document.getElementById('class-info');
    const scheduleTiming = document.getElementById('schedule-timing');

    // Toggle display of class info section
    if (classInfo.style.display === "block") {
        classInfo.style.display = "none"; // Hide if it's already visible
    } else {
        classInfo.style.display = "block"; // Show if it's hidden
        scheduleTiming.style.display = "none"; // Hide schedule timing when showing class info
    }
}

// Toggle schedule view for class timings
function showSchedule() {
    const scheduleTiming = document.getElementById('schedule-timing');
    const classInfo = document.getElementById('class-info'); // Reference to class information section

    // Hide class information when showing schedule
    classInfo.style.display = 'none'; // Always hide class info when showing the schedule

    // Toggle schedule visibility
    if (scheduleTiming.style.display === 'block') {
        scheduleTiming.style.display = 'none'; // Hide schedule if already shown
    } else {
        // Populate the schedule with class timings
        scheduleTiming.innerHTML = `
            <div class="timetable-container">
                <h3>Class Timings (Mon - Sat)</h3><br>
                <table class="timetable">
                            <thead>
                                <tr>
                                    <th>Day/Period</th>
                                    <th>Period 1</th>
                                    <th>Period 2</th>
                                    <th>Period 3</th>
                                    <th>Period 4</th>
                                    <th>Period 5</th>
                                    <th>Period 6</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>Sem 1<br>(Mathematics)</td>
                                    <td>Sem 5<br>(Machine Learning)</td>
                                    <td>Free</td>
                                    <td>Sem 7<br>(Ethical Hacking)</td>
                                    <td>Sem 1<br>(Mathematics)</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>Sem 5<br>(Machine Learning)</td>
                                    <td>Sem 1<br>(Mathematics)</td>
                                    <td>Sem 1<br>(Mathematics)</td>
                                    <td>Sem 7<br>(Ethical Hacking)</td>
                                    <td>Free</td>
                                    <td>Sem 3<br>(DBMS)</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>Free</td>
                                    <td>Sem 5<br>(Machine Learning)</td>
                                    <td>Sem 3<br>(DBMS)</td>
                                    <td>Sem 1<br>(Mathematics)</td>
                                    <td>Free</td>
                                    <td>Sem 7<br>(Ethical Hacking)</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>Sem 3<br>(DBMS)</td>
                                    <td>Sem 1<br>(Mathematics)</td>
                                    <td>Free</td>
                                    <td>Sem 7<br>(Ethical Hacking)</td>
                                    <td>Sem 5<br>(Machine Learning)</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>Sem 3<br>(DBMS)</td>
                                    <td>Free</td>
                                    <td>Sem 5<br>(Machine Learning)</td>
                                    <td>Sem 1<br>(Mathematics)</td>
                                    <td>Free</td>
                                    <td>Sem 7<br>(Ethical Hacking)</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>Sem 3<br>(DBMS)</td>
                                    <td>Sem 5<br>(Machine Learning)</td>
                                    <td>Sem 5<br>(Machine Learning)</td>
                                    <td>Sem 1<br>(Mathematics)</td>
                                    <td>Free</td>
                                    <td>Sem 7<br>(Ethical Hacking)</td>
                                </tr>
                            </tbody>
                        </table>
            </div>
        `;
        scheduleTiming.style.display = 'block'; // Show schedule
    }
}


// create assignment page 


// Array to store uploaded files for the "Assignments" card
let uploadedFiles = [];
let deleteMode = false;  // To track if we're in delete mode

// Create an input element for file upload
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.style.display = 'none';  // Keep the input hidden initially

// Function to handle file upload and display file name
function handleFileUpload(cardElement) {
    // Trigger file input click
    fileInput.click();

    // When the user selects a file
    fileInput.onchange = function(event) {
        const file = event.target.files[0];

        // If a file is selected, display its name in the card
        if (file) {
            const fileName = file.name;

            // Add the file name to the uploadedFiles array
            uploadedFiles.push(fileName);

            // Create a div to hold the file name and checkbox
            const fileDisplayElement = document.createElement('div');
            fileDisplayElement.classList.add('file-item');
            fileDisplayElement.style.display = 'flex';  // Align file name and checkbox in the same line
            fileDisplayElement.style.justifyContent = 'space-between';  // Ensure spacing between file name and checkbox
            fileDisplayElement.style.alignItems = 'center';  // Align items vertically in the center
            fileDisplayElement.style.width = '100%';  // Take full width of the card

            // File name (left aligned)
            const fileNameElement = document.createElement('p');
            fileNameElement.textContent = fileName;  // Only show file name
            fileNameElement.classList.add('uploaded-file');
            fileNameElement.style.textAlign = 'left';  // Left alignment
            fileNameElement.style.flexGrow = '1';  // Make file name grow to fill available space
            fileNameElement.style.margin = '0';  // Remove default margin for consistent alignment

            // Checkbox for deletion (hidden by default)
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('delete-checkbox');
            checkbox.style.display = 'none';  // Hidden initially
            checkbox.style.marginLeft = 'auto';  // Align checkbox to the right

            // Append file name and checkbox to the file display element
            fileDisplayElement.appendChild(fileNameElement);
            fileDisplayElement.appendChild(checkbox);

            cardElement.appendChild(fileDisplayElement);
        }
    };
}

// Event listener for assignment card upload icon
document.querySelector('.assignment-cardd .fa-upload').addEventListener('click', function() {
    const cardElement = this.closest('.assignment-cardd');
    handleFileUpload(cardElement);
});

// Event listener for assignment card delete icon
document.querySelector('.assignment-cardd .fa-trash-alt').addEventListener('click', function() {
    const cardElement = this.closest('.assignment-cardd');
    const checkboxes = cardElement.querySelectorAll('.delete-checkbox');

    // If there are no uploaded files, show an alert
    if (uploadedFiles.length === 0) {
        alert('No files to delete.');
        return;
    }

    // If in delete mode, delete selected files
    if (deleteMode) {
        let filesToDelete = false;  // Track if any files are selected for deletion
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                filesToDelete = true;  // Mark that there are files to delete
                const fileItem = checkbox.closest('.file-item');
                const fileName = fileItem.querySelector('.uploaded-file').textContent;

                // Remove the file from the uploadedFiles array
                uploadedFiles = uploadedFiles.filter(file => file !== fileName);

                // Remove the file display element
                fileItem.remove();
            }
        });

        // Exit delete mode and hide checkboxes again
        if (filesToDelete) {
            deleteMode = false;
            checkboxes.forEach(checkbox => {
                checkbox.style.display = 'none';
            });
        } else {
            alert('No files selected for deletion.');
        }

    } else {  // If not in delete mode, show checkboxes
        deleteMode = true;
        checkboxes.forEach(checkbox => {
            checkbox.style.display = 'inline-block';  // Show the checkbox aligned to the right
        });
    }
});

// Event listener for past assignment card view icon
document.querySelector('.past-assignment-card .fa-eye').addEventListener('click', function() {
    const cardElement = this.closest('.past-assignment-card');
    
    // Clear any previously displayed assignments
    const existingFileList = cardElement.querySelector('.uploaded-files-list');
    if (existingFileList) {
        existingFileList.remove();
    }

    // If there are uploaded files, display them
    if (uploadedFiles.length > 0) {
        const fileListElement = document.createElement('ul');
        fileListElement.classList.add('uploaded-files-list');
        fileListElement.style.paddingLeft = '0';  // Remove default padding
        fileListElement.style.listStyle = 'none';  // Remove default bullet points

        uploadedFiles.forEach(file => {
            const fileItem = document.createElement('li');
            fileItem.textContent = file;
            fileItem.style.textAlign = 'left';  // Align file names to the leftmost side
            fileItem.style.marginBottom = '5px';  // Add some spacing between file names
            fileListElement.appendChild(fileItem);
        });

        // Append the list to the past assignment card
        cardElement.appendChild(fileListElement);
    } else {
        alert('No past assignments available.');
    }
});


// mark attendance


// Function to show/hide student information for each class
function toggleClassInfo(classId) {
    const classInfo = document.getElementById(classId);

    // Toggle the visibility of the clicked class info
    if (classInfo.style.display === 'none' || classInfo.style.display === '') {
        // Hide all other class info sections before showing the clicked one
        const allClassInfos = document.querySelectorAll('.class-info-table');
        allClassInfos.forEach(info => info.style.display = 'none');
        
        // Show the clicked class info
        classInfo.style.display = 'block';
    } else {
        // If the clicked class info is already visible, hide it
        classInfo.style.display = 'none';
    }
}

// Function to get the current date and day dynamically
function updateDateAndDay() {
    const currentDate = new Date();
    
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dayOptions = { weekday: 'long' };

    document.getElementById('current-date').innerHTML = currentDate.toLocaleDateString(undefined, dateOptions);
    document.getElementById('current-day').innerHTML = currentDate.toLocaleDateString(undefined, dayOptions);
}

// Call the function to set the date and day on page load
updateDateAndDay();


// view attendance


// Function to show/hide student information for each class on View Attendance page
function toggleViewClassInfo(classId) {
    // Get all class info tables
    const allClassInfos = document.querySelectorAll('.class-info-tablee');
    
    // Loop through each table and hide all except the one that is clicked
    allClassInfos.forEach(info => {
        // If the current table is the one clicked, toggle its visibility
        if (info.id === classId) {
            if (info.style.display === 'none' || info.style.display === '') {
                info.style.display = 'block'; // Show the clicked card's data
            } else {
                info.style.display = 'none';  // Hide the clicked card's data
            }
        } else {
            info.style.display = 'none'; // Hide all other class info tables
        }
    });
}

// Function to filter attendance data by the selected date
function filterAttendanceByDate(classId, selectedDate) {
    console.log(`Filtering attendance for ${classId} on ${selectedDate}`);
    
    // Here, you would call a backend API to fetch attendance data based on the selected date.
    // For example:
    // fetch(`your-backend-url?classId=${classId}&date=${selectedDate}`)
    //     .then(response => response.json())
    //     .then(data => updateAttendanceTable(data))
    //     .catch(error => console.error('Error:', error));

    // For now, just simulating with a console log.
}



// view submission



// Toggle subject assignments and hide others
function toggleAssignments(subjectId) {
    const allAssignments = document.querySelectorAll('.assignment-list');
    allAssignments.forEach(element => {
        if (element.id !== subjectId) {
            element.classList.remove('active');
            element.style.display = 'none';
        }
    });

    const element = document.getElementById(subjectId);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        setTimeout(() => {
            element.classList.add('active');
        }, 10); // Delay for smooth animation
    } else {
        element.classList.remove('active');
        setTimeout(() => {
            element.style.display = "none";
        }, 500); // Wait for animation to complete before hiding
    }
}

// Function to display student details
function showStudentDetails(subject) {
    const table = document.getElementById(`${subject}-student-details`);
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table";
    } else {
        table.style.display = "none";
    }
}

// Function to view the assignment (opens the PDF - replace this with actual logic later)
function viewAssignment(pdfFile) {
    alert(`Opening ${pdfFile}`); // Replace with actual file opening logic later
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