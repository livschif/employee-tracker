const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'milamoo',
    database: 'employee_tracker'
});

module.exports = db;