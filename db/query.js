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

const knex = require('knex') (options);

const cTable = require('console.table');

let  app = require("../app.js");

app.start();

// exported functions
let queryCalls = {
  // function Employee View
  empFunc: function() {
    knex.from('employee').select("*")
    .then((output) => {
            console.table(output);
        }
    )
    .catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    })
  }, 
  // function Department View
  deptFunc: function() {
    knex('department')
    .join('role', 'department.id', 'role.department_id' )
    .select('department.id', 'department.name', 'role.title', 'role.salary')
    .then((output) => {
            console.table(output);
        }
    ).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    })
  },
  // function Roles View
  rolesView: function() {
    knex('role')
    .join('employee', 'role.id', 'employee.role_id')
    .select('role.id', 'role.title', 'employee.first_name', 'employee.last_name', 'role.salary')
    .then((output) => {
            console.table(output);
        }
    ).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    })
  }
};
module.exports = { queryCalls };



// deptSalaryView();

// empmanagerView();

// addDept();

// addRoles();

// addEmployees();

// updateEmployeeRoles();

// updateEmployeeManagers();

// delDept();

// delRoles();

// delEmployees();


