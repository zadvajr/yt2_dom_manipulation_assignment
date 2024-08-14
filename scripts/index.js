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
                            <td><input type="checkbox" /> ${
                              employee.avatar
                                ? `${employee.avatar}`
                                : `${setAvatarToInitials(employee.fullName)}`
                            } ${
      employee.status == "active"
        ? `<img src="./icons/dot-active.svg" />`
        : `<img src="./icons/dot.svg" />`
    } ${employee.fullName}<br><span>${employee.email}</span></td>
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
    avatar: `<img src="./images/tanner.png" alt="Tanner Finsha's Profile Picture" />`,
  },
  {
    fullName: "Tassy Omah",
    email: "Tassyomah@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Product Designer",
    jobType: "Associate",
    status: "inactive",
    teams: "Product",
    avatar: null,
  },
  {
    fullName: "Emeto  Winner",
    email: "Emetowinner@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Product Designer",
    jobType: "Contract",
    status: "active",
    teams: "Product",
    avatar: null,
  },
  {
    fullName: "James Muriel",
    email: "JamesMuriel@Aerten.finance",
    employeeID: "#23454GH6J7YT6",
    role: "Product Designer",
    jobType: "Full Time",
    status: "inactive",
    teams: "Engineering",
    avatar: null,
  },
  {
    fullName: "Emeto  Winner",
    email: "Emetowinner@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Frontend Engineer",
    jobType: "Full Time",
    status: "inactive",
    teams: "Product",
    avatar: null,
  },
  {
    fullName: "Tassy Omah",
    email: "Tassyomah@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Backend Engineer",
    jobType: "Part Time",
    status: "active",
    teams: "Engineering",
    avatar: null,
  },
  {
    fullName: "James Muriel",
    email: "JamesMuriel@Aerten.finance",
    employeeID: "#23454GH6J7YT6",
    role: "Backend Engineer",
    jobType: "Part Time",
    status: "active",
    teams: "Product",
    avatar: null,
  },
  {
    fullName: "Emeto  Winner",
    email: "Emetowinner@gmail.com",
    employeeID: "#23454GH6J7YT6",
    role: "Sales Specialist",
    jobType: "Part Time",
    status: "inactive",
    teams: "Product",
    avatar: null,
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
employeeCount.innerText = sampleEmployees.length;

//setAvatarToInitials
function setAvatarToInitials(fullName) {
  if (!fullName) return "";

  // Split the full name into an array of words
  const nameArray = fullName.trim().split(" ");

  // Map over the array to get the first letter of each word and convert it to uppercase
  const initials = nameArray
    .map((name) => name.charAt(0).toUpperCase())
    .join("");

  return initials;
}
//end of setAvatarToInitials

// Function to search employees
function searchEmployees() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();

  // Filter the employee database based on the search input
  const filteredEmployees = employeeDatabase.filter((employee) => {
    return (
      employee.fullName.toLowerCase().includes(searchInput) ||
      employee.email.toLowerCase().includes(searchInput) ||
      employee.employeeID.toLowerCase().includes(searchInput) ||
      employee.role.toLowerCase().includes(searchInput) ||
      employee.status.toLowerCase().includes(searchInput) ||
      employee.teams.toLowerCase().includes(searchInput) ||
      employee.jobType.toLowerCase().includes(searchInput)
    );
  });

  // Update the displayed employee data
  displayFilteredEmployeeData(filteredEmployees);
}

// Function to display filtered employee data in a table
function displayFilteredEmployeeData(filteredEmployees) {
  const tableBody = document.getElementById("employee-table-body");
  tableBody.innerHTML = "";

  filteredEmployees.forEach((employee) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="checkbox" /> ${
        employee.avatar
          ? `${employee.avatar}`
          : `${setAvatarToInitials(employee.fullName)}`
      } ${
      employee.status == "active"
        ? `<img src="./icons/dot-active.svg" />`
        : `<img src="./icons/dot.svg" />`
    } ${employee.fullName}<br><span>${employee.email}</span></td>
      <td>${employee.employeeID}</td>
      <td>${employee.role}<br><span>${employee.jobType}</span></td>
      <td>${
        employee.status == "active"
          ? `<img src="./icons/dot-active.svg" />`
          : `<img src="./icons/dot.svg" />`
      } ${employee.status}</td>
      <td>${employee.teams}</td>
      <td><img src='./icons/more.svg'/></td>
    `;
    tableBody.appendChild(row);
  });
}
