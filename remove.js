// Global Variables //
var inquirer = require("inquirer");
var mysql = require("mysql");
var app = require("./app");
var view = require("./view");
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

  // Creating Update employee function //
exports.removeEmployee = () => {
    view.getAllEmployees(function (employeeResults) {
      console.log(employeeResults);
      var employees = [];
      for (var i = 0; i < employeeResults.length; i++) {
        var fullName = {
          name: employeeResults[i].first_name + " " + employeeResults[i].last_name,
          value: {
            id: employeeResults[i].emp_id,
            firstname: employeeResults[i].first_name,
            lastname: employeeResults[i].last_name,
          },
        };
        employees.push(fullName);
      }

       // Create inquirer prompt to pick employee //
    inquirer
    .prompt([
      {
        type: "list",
        message: "Which employee do you want to Delete?",
        name: "employee",
        choices: employees,
      },
    ])
    .then((answers) => {
      let query = mysql.format("DELETE FROM employees WHERE emp_id = ?", [answers.employee.id]);
      connection.query(query, function (error, results) {
        if (error) throw error;
        console.log("Successfully removed " + answers.employee.firstname + "!");
        app.start();
      });
    });
});
};