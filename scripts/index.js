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
                        <td>${employee.fullName}<br><span>${
      employee.email
    }</span></td>
                        <td>${employee.employeeID}</td>
                        <td>${employee.role}<br><span>${
      employee.jobType
    }</span></td>

                        <td>${
                          employee.status == "active"
                            ? `<img src="./icons/dot-active.svg" />`
                            : `<img src="./icons/dot.svg" />`
                        }
                ${employee.status}
              </td>

                        <td>${employee.teams}</td>
                        <td><img src='./icons/more.svg'/></td>
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
    jobType: "Full Time",
    status: "active",
    teams: "Marketing",
  },
  {
    fullName: "Tassy Omah",
    email: "Tassyomah@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Product Designer",
    jobType: "Associate",
    status: "inactive",
    teams: "Product",
  },
  {
    fullName: "Emeto  Winner",
    email: "Emetowinner@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Product Designer",
    jobType: "Contract",
    status: "active",
    teams: "Product",
  },
  {
    fullName: "James Muriel",
    email: "JamesMuriel@Aerten.finance",
    employeeID: "#23454GH6J7YT6",
    role: "Product Designer",
    jobType: "Full Time",
    status: "inactive",
    teams: "Engineering",
  },
  {
    fullName: "Emeto  Winner",
    email: "Emetowinner@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Frontend Engineer",
    jobType: "Full Time",
    status: "inactive",
    teams: "Product",
  },
  {
    fullName: "Tassy Omah",
    email: "Tassyomah@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Backend Engineer",
    jobType: "Part Time",
    status: "active",
    teams: "Engineering",
  },
  {
    fullName: "James Muriel",
    email: "JamesMuriel@Aerten.finance",
    employeeID: "#23454GH6J7YT6",
    role: "Backend Engineer",
    jobType: "Part Time",
    status: "active",
    teams: "Product",
  },
  {
    fullName: "Emeto  Winner",
    email: "Emetowinner@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Sales Specialist",
    jobType: "Part Time",
    status: "inactive",
    teams: "Product",
  },
];

employeeDatabase.push(...sampleEmployees);

// Call the displayEmployeeData function to initially display the data
displayEmployeeData();

// Add event listener to the form submit event
const form = document.getElementById("employee-form");
//form.addEventListener("submit", handleFormSubmit);

// pop over scripts
// Get the elements
// const newEmployeeButton = document.getElementById("newEmployeeButton");
// const popoverForm = document.getElementById("popoverForm");
// const closeBtn = document.querySelector(".close-btn");

// // Show the popover form when the button is clicked
// newEmployeeButton.addEventListener("click", function () {
//   popoverForm.style.display = "block";
// });

// // Hide the popover form when the close button is clicked
// closeBtn.addEventListener("click", function () {
//   popoverForm.style.display = "none";
// });

// // Optional: Hide the popover form if the user clicks outside of it
// window.addEventListener("click", function (event) {
//   if (event.target == popoverForm) {
//     popoverForm.style.display = "none";
//   }
// });
// End of pop over scripts

//employee-count
let employeeCount = document.getElementById("employee-count-output");
employeeCount.innerHTML = sampleEmployees.length;
