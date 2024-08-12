// employee dataBase
let employeeDatabase = [];

// Check if data exists in localStorage
if (localStorage.getItem("employeeData")) {
  employeeDatabase = JSON.parse(localStorage.getItem("employeeData"));
}

// Function to add employee data to the database
function addEmployeeData(fullName, email, employeeID, role, status, teams) {
  const employee = {
    fullName,
    email,
    employeeID,
    role,
    status,
    teams,
  };
  employeeDatabase.push(employee);
  localStorage.setItem("employeeData", JSON.stringify(employeeDatabase));
}

// Function to display employee data in a table
function displayEmployeeData() {
  const tableBody = document.getElementById("employee-table-body");
  tableBody.innerHTML = "";

  employeeDatabase.forEach((employee) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                        <td><input type="checkbox" name="select"></td>
                        <td>${employee.fullName}<br><span>${employee.email}</span></td>
                        <td>${employee.employeeID}</td>
                        <td>${employee.role}</td>
                        <td>${employee.status}</td>
                        <td>${employee.teams}</td>
                `;
    tableBody.appendChild(row);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const employeeID = document.getElementById("employeeID").value;
  const role = document.getElementById("role").value;
  const status = document.getElementById("status").value;
  const teams = document.getElementById("teams").value;

  addEmployeeData(fullName, email, employeeID, role, status, teams);
  displayEmployeeData();

  // Reset the form
  event.target.reset();
}

// Add sample employees from the object
const sampleEmployees = [
  {
    fullName: "Tanner Finsha",
    email: "Tannerfisher@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Product Designer",
    status: "Active",
    teams: "Marketing",
  },
  {
    fullName: "Jane Smith",
    email: "janesmith@example.com",
    employeeID: "EMP002",
    role: "Designer",
    status: "Active",
    teams: "Team B",
  },
  // Add more sample employees here
];

employeeDatabase.push(...sampleEmployees);

// Call the displayEmployeeData function to initially display the data
displayEmployeeData();

// Add event listener to the form submit event
const form = document.getElementById("employee-form");
form.addEventListener("submit", handleFormSubmit);
