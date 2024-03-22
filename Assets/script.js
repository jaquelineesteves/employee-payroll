
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//global array
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  let condition = true;
  while(condition){
    let employees = {};
    employees.firstName = prompt("First name");
    employees.lastName = prompt("Last Name");
    employees.salary = parseFloat(prompt("Salary"));
    employeesArray.push(employees);
    condition = confirm("continue adding employess?");
  }
  return employeesArray
}
  
//console.log(employeesArray);

const displayAverageSalary = function(employeesArray){
    let sum = 0;
    for (let i = 0; i<employeesArray.length; i++){
      if (typeof employeesArray[i].salary === 'number') {
        sum += employeesArray[i].salary;
    }
  }
    const average = sum/employeesArray.length;
  console.log(`the salary average is:${average}`);
  return;
  }


//Select a random employee
function getRandomEmployee(x){
  const randomIndex = Math.floor(Math.random() * x.length);
  console.log(`The selected employee is:  ${ employeesArray[randomIndex].firstName} ${ employeesArray[randomIndex].lastName}`)
  return;
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });
 
  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);