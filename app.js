// Reqs
// * Add departments, roles, employees

// * View departments, roles, employees

// * Update employee roles

// Bonus points if you're able to:

// * Update employee managers

// * View employees by manager

// * Delete departments, roles, and employees

// * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

const inquirer = require("inquirer");
const squel = require("squel");
const connection = require("Database/connection.js"); // mysql export
const cTable = require("console.table");

const query = require("Database/query.js");

function start() {
  inquirer
    .prompt({
      name: "empChoice",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Employee View",
        "Department View",
        "Roles View",
        "Department View by salary totals",
        "Employee View by Managers",
        "Add Department",
        "Add Roles",
        "Add Employees",
        "Update Employee Roles",
        "Update Employee Managers",
        "Delete Departments",
        "Delete Roles",
        "Delete Employees",
        "Exit"
      ],
    })
    .then(function (answer) {
        switch (answer.action) {
            case "Employee View":
              employeeView();
              break;
      
            case "Department View":
              deptView();
              break;
      
            case "Roles View":
              rolesView();
              break;
      
            case "Department View by salary totals":
              deptSalaryView();
              break;

            case "Employee View by Managers":
              empmanagerView();
              break;

            case "Add Department":
              addDept();
              break;

            case "Add Roles":
              addRoles();
              break;

            case "Add Employees":
              addEmployees();
              break;

            case "Update Employee Roles":
              updateEmployeeRoles();
              break;

            case "Update Employee Managers":
              updateEmployeeManagers();
              break;
      

            case "Delete Departments":
              delDept();
              break;

              case "Delete Roles":
              delRoles();
              break;

            case "Delete Employees":
              delEmployees();
              break;

            case "Exit":
              connection.end();
              break;
    }


    });

}


    


