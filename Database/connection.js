const mysql = require('mysql');

// Connect to the ice_creamDB database using a localhost connection
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // MySQL username
  user: 'root',

  // MySQL password 
  password: 'password',

  // Name of database
  database: 'EmployeesDB',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;