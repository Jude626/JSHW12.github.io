// Global Variables //
var inquirer = require("inquirer");
var mysql = require("mysql");
var app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
// mysql connection, copied from app.js page //
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.PASSWORD,
  database: "company_db",
});

// Creating view employees function //
exports.viewAllEmployees = () => {
  connection.query(
    "SELECT first_name, last_name, title , salary  FROM employees Left JOIN company_role on employees.emp_role_id = company_role.role_id",
    function (error, results) {
      if (error) console.error(error);
      console.table(results);
      app.start();
    }
  );
};

// Create function to export all roles //
exports.getAllRoles = (callback) => {
  var results = connection.query("SELECT * FROM company_role", function (error, results) {
    if (error) throw error;
    callback(results);
  });
};

// Create function to export all departments //
exports.getAllDepartments = () => {
  connection.query("SELECT * FROM department", function (error, results) {
    if (error) throw error;
    return results;
  });
};

// Create function to export all employees //
exports.getAllEmployees = (callback) => {
  return connection.query("SELECT * FROM employees", function (error, results) {
    if (error) throw error;
    callback(results);
  });
};