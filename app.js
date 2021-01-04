// * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

// Dependencies 
const inquirer = require("inquirer"); // inquirer prompts
let { connection } = require("./db/connection"); // db connection export
let { queryCalls } = require("./db/query.js"); // query function import 
const logo = require('asciiart-logo'); // logo display
console.log(
    logo({
        name: 'Employee Management System',
        font: 'Standard',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'grey',
        logoColor: 'bold-cyan',
        textColor: 'bold-cyan',
    })
    .render()
);



function start() { // start of function
  inquirer
    .prompt({
      name: "empChoice",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Employee View",
        "Department View",
        "Roles View",
        "Employee View by Managers",
        "Add Department",
        "Add Roles",
        "Add Employees",
        "Update Employee Roles",
        "Update Employee Managers",
        "Delete Departments",
        "Delete Roles",
        "Delete Employees",
        "Exit",
      ],
    })
    .then(function (answer) {
        switch (answer.empChoice) {
            case "Employee View":
             queryCalls.empFunc().then(output => {
                console.log('\n');
                 console.table(output)
                 start()
             }).catch(err => console.log(err))
             break;
      
            case "Department View":
              queryCalls.deptFunc().then((output) => {
                console.log('\n');
                console.table(output);
                start()
            }
             ).catch(err => console.log(err))
              break;
      
            case "Roles View":
              queryCalls.rolesView().then((output) => {
                console.log('\n');
                console.table(output);
                start();
            }
             ).catch(err => console.log(err))
              break;

            case "Employee View by Managers":
              queryCalls.empmanagerView().then((output) => {
                  console.log('\n', 'Output only shows employees with a Manager');
                  console.log('\n');
                  console.table(output);
                  start();
              }
               ).catch(err => console.log(err))
              break;

            case "Add Department":
              queryCalls.addDept().then((output) => {
                console.log('Department Name has been added :)');
                console.log('\n');

                start()
              })
               .catch(err => console.log(err))
              break;

            case "Add Roles":
              queryCalls.addRoles().then((output) => {
                console.log('Employee Role, Salary & ID have been added :D');
                console.log('\n');
                start();
            }
             ).catch(err => console.log(err))
              break;

            case "Add Employees":
              queryCalls.addEmployees().then((output) => {
                console.log('All Employee Information has been added!');
                console.log('\n');
                start();
            }
             ).catch(err => console.log(err))
              break;

            case "Update Employee Roles":
              queryCalls.updateEmployeeRoles().then((output) => {
                console.log('\n');  
                console.log('Employee Role has been updated!');
                start();
            }
             ).catch(err => console.log(err))
              break;

            case "Update Employee Managers":
              queryCalls.updateEmployeeManagers().then((output) => {
                console.log('\n');  
                console.log('Employee Manager has been updated!');
                console.log('\n'); 
                start();
            }
             ).catch(err => console.log(err))
              break;
      

            case "Delete Departments":
              queryCalls.delDept().then((output) => {
                console.log('\n');  
                console.log('Department Deleted!');
                console.log('\n'); 
                start();
            }
             ).catch(err => console.log(err))
              break;

              case "Delete Roles":
              queryCalls.delRoles().then((output) => {
                console.log('\n');  
                console.log('Employee Role has been Deleted!');
                console.log('\n'); 
                start();
            }
             ).catch(err => console.log(err))
              break;

            case "Delete Employees":
              queryCalls.delEmployees().then((output) => {
                console.log('\n');  
                console.log('Employee has been Deleted!');
                console.log('\n'); 
                start();
            }
             ).catch(err => console.log(err))
              break;

            case "Exit":
              console.log('\n');
              console.log("Adieu!");
              console.log('\n');
              connection.end();
              break;
    }


    });
};
start();






    


