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



// exported functions
let queryCalls = {
  // function Employee View
  empFunc: function() {
    return knex.from('employee').select("*")
  }, 
  // function Department View
  deptFunc: function() {
   return knex('department')
    .join('role', 'department.id', 'role.department_id' )
    .select('department.id', 'department.name', 'role.title', 'role.salary')
  },
  // function Roles View
  rolesView: function() {
    return knex('role')
    .join('employee', 'role.id', 'employee.role_id')
    .select('role.id', 'role.title', 'employee.first_name', 'employee.last_name', 'role.salary')
  }, 
  // function Department View by salary totals
  deptSalaryView: function() {
    return knex('department')
    .join('role', 'department.id', 'role.department_id')
    .select('department.id', 'role.salary', 'department.name')
  },
  // function Employee View by Managers
  empmanagerView: function() {
    return knex()
  }

};
module.exports = { queryCalls };







// addDept();

// addRoles();

// addEmployees();

// updateEmployeeRoles();

// updateEmployeeManagers();

// delDept();

// delRoles();

// delEmployees();


