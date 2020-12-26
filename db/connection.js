let mysql = require('mysql');


// Connect to the database using a localhost connection
let connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // MySQL username
  user: 'root',

  // MySQL password 
  password: 'password',

  // Name of database
  database: 'employees_db',
});


module.exports = { connection };