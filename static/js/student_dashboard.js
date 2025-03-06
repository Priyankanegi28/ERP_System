

// Show specific sections (e.g., dashboard, class schedule, etc.)
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none'); // Hide all sections
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block'; // Show the selected section
    }
}
function toggleSection(sectionId) {
    // List all sections that need to be toggled
    const sections = ['student-details-section', 'faculty-details-section', 'notices-section'];
    
    // Hide all sections except the one clicked
    sections.forEach(section => {
        const elem = document.getElementById(section);
        if (elem && section !== sectionId) {
            elem.style.display = 'none'; // Hide non-selected sections
        }
    });

    // Toggle the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        if (activeSection.style.display === 'none' || activeSection.style.display === '') {
            activeSection.style.display = 'block'; // Show selected section
        } else {
            activeSection.style.display = 'none'; // Hide if already visible
        }
    }
}
function toggleNoticeDetails(noticeElement) {
    const details = noticeElement.querySelector('.notice-details');

    // Toggle the display of notice details
    if (details) {
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block'; // Show details
        } else {
            details.style.display = 'none'; // Hide details
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetchAttendanceData();
});

// Function to fetch attendance data from the server
function fetchAttendanceData() {
    fetch('https://your-api-url.com/attendance') // Replace with your API endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            populateAttendanceTable(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            // Optionally, display an error message to the user
        });
}

// Function to populate the attendance table with data
function populateAttendanceTable(attendanceRecords) {
    const attendanceBody = document.getElementById('attendance-body');
    attendanceBody.innerHTML = ''; // Clear existing content

    attendanceRecords.forEach(record => {
        const row = document.createElement('tr');
        
        // Create and append cells for each record
        row.innerHTML = `
            <td>${record.date}</td>
            <td>${record.subject}</td>
            <td>${record.status}</td>
            <td>${record.remarks}</td>
            <td>${record.teacherName}</td>
        `;

        attendanceBody.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", function() {
    fetchAttendanceData();
});

// Function to fetch attendance data from the server
function fetchAttendanceData() {
    fetch('https://your-api-url.com/attendance') // Replace with your API endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            populateAttendanceTable(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            // Optionally, display an error message to the user
        });
}

// Function to populate the attendance table with data
function populateAttendanceTable(attendanceRecords) {
    const attendanceBody = document.getElementById('attendance-body');
    attendanceBody.innerHTML = ''; // Clear existing content

    attendanceRecords.forEach(record => {
        const row = document.createElement('tr');
        
        // Create and append cells for each record
        row.innerHTML = `
            <td>${record.subject}</td>
            <td>${record.subjectCode}</td>
            <td>${record.classesHeld}</td>
            <td>${record.classesAttended}</td>
            <td>${record.percentage}%</td>
        `;

        attendanceBody.appendChild(row);
    });
}





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




// Class schedule page details
function showHolidays() {
    var holidaySection = document.getElementById('holiday-info');
    const scheduleTiming = document.getElementById('schedule-timing'); // Reference to schedule section


    // Hide schedule and show holiday information
    scheduleTiming.style.display = 'none'; // Always hide schedule when showing holidays
    holidaySection.style.display = 'block'; // Show the holiday section
}

// Toggle schedule view for class timings
function showSchedule() {
    const scheduleTiming = document.getElementById('schedule-timing');
    const holidayInfo = document.getElementById('holiday-info'); // Reference to holiday information section

    // Hide holiday information and show schedule
    holidayInfo.style.display = 'none'; // Always hide holiday info when showing the schedule
    scheduleTiming.style.display = 'block'; // Show the schedule
    

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
}
document.addEventListener("DOMContentLoaded", function() {
    fetchAttendanceData();
});

// Example attendance data
const attendanceData = [
    { srNo: 1, subject: '.NET Framework and Programming', classesHeld: 30, classesAttended: 28 },
    { srNo: 2, subject: 'Ad hoc and Wireless Networks', classesHeld: 30, classesAttended: 25 },
    { srNo: 3, subject: 'Advanced Computer Architecture', classesHeld: 30, classesAttended: 29 },
    { srNo: 4, subject: 'Ethical Hacking', classesHeld: 30, classesAttended: 26 },
    { srNo: 5, subject: 'Virtual Lab', classesHeld: 30, classesAttended: 30 },
    { srNo: 6, subject: 'Minor Project-II', classesHeld: 30, classesAttended: 27 }
];

// Function to calculate attendance percentage
function calculatePercentage(classesHeld, classesAttended) {
    return ((classesAttended / classesHeld) * 100).toFixed(2);
}

// Function to populate attendance table
function populateAttendanceTable() {
    const tbody = document.getElementById('attendance-body');
    attendanceData.forEach(data => {
        const percentage = calculatePercentage(data.classesHeld, data.classesAttended);
        const row = `
            <tr>
                <td>${data.srNo}</td>
                <td>${data.subject}</td>
                <td>${data.classesHeld}</td>
                <td>${data.classesAttended}</td>
                <td>${percentage}%</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Call the function to populate the table on page load
populateAttendanceTable();




// Array to store uploaded files for the "Assignments" card
let uploadedFiles = {};

// Create an input element for file upload
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.style.display = 'none';  // Keep the input hidden initially

// Function to handle file upload and display file name
function handleFileUpload(assignmentTitle) {
    // Trigger file input click
    fileInput.click();

    // When the user selects a file
    fileInput.onchange = function(event) {
        const file = event.target.files[0];

        // If a file is selected, display its name in the card
        if (file) {
            const fileName = file.name;

            // Store the file name for the specific assignment
            uploadedFiles[assignmentTitle] = fileName;

            // Update the submission status
            const statusElement = document.getElementById(`status-${assignmentTitle}`);
            const submittedFileElement = document.getElementById(`submitted-file-${assignmentTitle}`);

            statusElement.style.display = 'block'; // Show submission status
            submittedFileElement.textContent = fileName; // Set file name to display
        }
    };
}

// Function to trigger file upload for a specific assignment
function triggerFileUpload(assignmentTitle) {
    handleFileUpload(assignmentTitle);
}

// Function to delete uploaded file for a specific assignment
function deleteFile(assignmentTitle) {
    // Check if a file is uploaded
    if (uploadedFiles[assignmentTitle]) {
        delete uploadedFiles[assignmentTitle]; // Remove file from storage
        const statusElement = document.getElementById(`status-${assignmentTitle}`);
        const submittedFileElement = document.getElementById(`submitted-file-${assignmentTitle}`);

        // Hide submission status
        statusElement.style.display = 'none';
        submittedFileElement.textContent = ''; // Clear displayed file name

        alert('File has been deleted successfully.');
    } else {
        alert('No file uploaded for this assignment.');
    }
}

function showStudentDetails() {
    var detailsSection = document.getElementById('student-details-section');
    
    // Show the section
    detailsSection.style.display = 'block';

    // Fetch student data (replace 1 with the actual student ID)
    fetch('/api/student/1')
        .then(response => response.json())
        .then(data => {
            // Populate the fields with the student data
            document.getElementById('studentName').value = data.student_name;
            document.getElementById('fatherName').value = data.father_name;
            document.getElementById('motherName').value = data.mother_name;
            document.getElementById('gender').value = data.gender;
            document.getElementById('aadhar').value = data.student_aadhar;
            document.getElementById('hostellerDayscholar').value = data.hosteller_dayscholar;
            document.getElementById('studentPhone').value = data.student_phone;
            document.getElementById('parentPhone').value = data.parent_phone;
            document.getElementById('studentEmail').value = data.student_email;
            document.getElementById('address').value = data.address;
            document.getElementById('programme').value = data.programme;
            document.getElementById('presentClass').value = data.present_class;
            document.getElementById('yearOfAdmission').value = data.year_of_admission;
        })
        .catch(error => console.error('Error fetching student data:', error));
}
