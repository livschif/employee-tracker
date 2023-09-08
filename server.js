// import mysql2
const mysql = require('mysql2');
// import inquirer
const inquirer = require('inquirer');

const cTable = require('console.table');

require('dotenv').config();

// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employee_db'
  });

  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
  });

  // function after connection is established and welcome image shows 
afterConnection = () => {
    console.log("***********************************")
    console.log("*                                 *")
    console.log("*        EMPLOYEE MANAGER         *")
    console.log("*                                 *")
    console.log("***********************************")
    promptUser();
  };