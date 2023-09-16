// Sample data array to hold student information
let students = [];

// Function to add a new student to the table
function addStudent() {
    const studentID = document.getElementById("studentID").value;
    const fullname = document.getElementById("Fullname").value;
    const email = document.getElementById("Email").value;

    if (studentID && fullname && email) {
        students.push({ studentID, fullname, email });
        displayStudents();
        clearInputs();
    }
}

// Function to display students in the table
function displayStudents() {
    const table = document.getElementById("studentTable");
    table.innerHTML = "<tr><th>Student ID</th><th>Fullname</th><th>Email</th><th>Action</th></tr>";

    for (let i = 0; i < students.length; i++) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = students[i].studentID;
        cell2.innerHTML = students[i].fullname;
        cell3.innerHTML = students[i].email;

        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.addEventListener("click", function () {
            editStudent(i);
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteStudent(i);
        });

        cell4.appendChild(editButton);
        cell4.appendChild(deleteButton);
    }
}


// Function to delete a student from the table
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

// Function to edit a student's information
function editStudent(index) {
    const student = students[index];
    document.getElementById("studentID").value = student.studentID;
    document.getElementById("Fullname").value = student.fullname;
    document.getElementById("Email").value = student.email;

    // Remove the selected student from the array
    students.splice(index, 1);

    // Refresh the table display
    displayStudents();
}


// Function to clear input fields
function clearInputs() {
    document.getElementById("studentID").value = "";
    document.getElementById("Fullname").value = "";
    document.getElementById("Email").value = "";
}

document.getElementById("submitButton").addEventListener("click", function () {
    if (document.getElementById("studentID").value) {
        updateStudent();
    } else {
        addStudent();
    }
});

// Function to update a student's information
function updateStudent() {
    const studentID = document.getElementById("studentID").value;
    const fullname = document.getElementById("Fullname").value;
    const email = document.getElementById("Email").value;

    if (studentID && fullname && email) {
        students.push({ studentID, fullname, email });
        displayStudents();
        clearInputs();
    }
}

// Display initial data (if any)
displayStudents();
