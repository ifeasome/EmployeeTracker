// Dependencies 
const options = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root', // db user
    password : 'password', // db password
    database : 'employees_db' // db needed 
  }
};

const knex = require('knex') (options); // query builder

const cTable = require('console.table'); // table console

let inquirer = require("inquirer"); // inquirer prompts

const { connection } = require('./connection'); // db connection import



// exported functions
let queryCalls = {
  // function Employee View
  empFunc: function() {
    return knex.from('employee').select("*")
  }, 
  // function Department View
  deptFunc: function() {
    return knex.from('department')
    .join('role', 'department.id', 'role.department_id')
    .select('department.name', 'role.title', 'role.salary')
  },
  // function Roles View
  rolesView: function() {
    return knex('role')
    .join('employee', 'role.id', 'employee.role_id')
    .select('role.id', 'role.title', 'employee.first_name', 'employee.last_name', 'role.salary')
  }, 
  // function Employee View by Managers
  empmanagerView: function() {
    return knex.select('*').from('employee').havingNotNull('manager_id')
  },
  // function Add Department
  addDept: function() {
   return inquirer.prompt([
      {
        name: 'dept',
        type: 'input',
        message: 'Enter Department name',
      },
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.dept
        },
      )
    })
  }, 
  // function to Add Roles
  addRoles: function() {
    return inquirer.prompt([
      {
        name: 'deptTitle',
        type: 'input',
        message: "Enter Employee's Role Title"
      }, 
      {
        name: 'deptSalary',
        type: 'input',
        message: "Enter Employee's Salary",
      },
      {
        name: 'deptID',
        type: 'input',
        message: "Enter Employee's Department ID",
      },
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.deptTitle,
          salary: answer.deptSalary,
          department_id: answer.deptID,
        },
      )
    }) 
  },
  // function to Add Employees
  addEmployees: function() {
    return inquirer.prompt([
      {
        name: 'empfirstName',
        type: 'input',
        message: "Enter first name of employee",
      }, 
      {
        name: 'emplastName',
        type: 'input',
        message: 'Enter last name of employee',
      },
      {
        name: 'empID',
        type: 'input',
        message: "Enter Employee's role ID", 
      }, 
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO employee SET?",
        {
          first_name: answer.empfirstName,
          last_name: answer.emplastName,
          role_id: answer.empID,
        },
      )
    })
  },
  // Update Employee Roles
updateEmployeeRoles: function() {
  return inquirer.prompt([
    {
      name: 'updateID',
      type: 'input',
      message: 'Enter Employee ID to be changed'
    },
    {
      name: 'updateRole',
      type: 'input',
      message: "Enter Employee's new Role title",
    },
    {
      name: 'updateSalary',
      type: 'input',
      message: "Enter Employee's new Salary amount",
    },
    {
       name: 'updatedeptID',
       type: 'input',
       message: "Enter Employee's new Department ID",  
    },
  ])
  .then(function(answer) {
    connection.query(
      "UPDATE role SET ? WHERE ?",
      [
        {
          title: answer.updateRole,
          salary: answer.updateSalary,
          department_id: answer.updatedeptID, 
        },
        {
          id: answer.updateID,
        },
      ]
    )
  })
},
// Function Update Employee Managers
updateEmployeeManagers: function() {
  return inquirer.prompt([
    {
      name: 'updatelastName',
      type: 'input',
      message: "Enter the Last name of Employee", 
    },
    {
      name: 'updatemanagerID',
      type: 'input',
      message: "What is the Manager's ID",
    },
  ])
  .then(function(answer) {
    connection.query(
      "UPDATE employee SET ? WHERE ?",
      [
        {
          manager_id: answer.updatemanagerID,
        },
        {
          last_name: answer.updatelastName,
        },
      ]
    )
  })
},
// Function Delete Departments
delDept: function() {
  return inquirer.prompt([
    {
      name: 'delName',
      type: 'input',
      message: "Enter Department name",
    },
  ])
  .then(function(answer) {
    connection.query(
      "DELETE FROM department WHERE ?",
      [
        {
           name: answer.delName,
        },
      ]
    )
  })
},
// Function Delete Roles
delRoles: function() {
  return inquirer.prompt([
    {
      name: 'delRole',
      type: 'input',
      message: "Enter Role ID",
    },
  ])
  .then(function(answer) {
    connection.query(
      "DELETE FROM department WHERE ?",
      [
        {
          id: answer.delRole,
        },
      ]
    )
  })
},
// Function Delete Employees
delEmployees: function() {
  return inquirer.prompt([
    {
      name: 'delempID',
      type: 'input',
      message: 'Enter Employee ID',
    },
  ])
  .then(function(answer) {
    connection.query(
      "DELETE FROM employee WHERE ?",
      [
        {
          id: answer.delempID,
        },
      ]
    )
  })
}
};
module.exports = { queryCalls };









