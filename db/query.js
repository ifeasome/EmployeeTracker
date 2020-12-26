// knex query builder initialisation 

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

// query Functions
 
//   console.log("Hello from this side!")
//   employeeView();
// };

// exported functions
let queryCalls = {
  // function employeeView()
  empFunc: function() {
    knex.from('employee').select("*")
    .then((rows) => {
            console.table(rows);
        }
    ).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    })
  // function2,
  // function3
  }, 
  deptFunc: function() {
    knex.from('department').select("*")
    .then((rows) => {
            console.table(rows);
        }
    ).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    })
  }
};
module.exports = { queryCalls };


// rolesView();

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

// export query.js at this point.
