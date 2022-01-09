const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  
  user: 'root',
 
  password: 'okiedokie',
  database: 'employees',

}
);

module.exports = db;