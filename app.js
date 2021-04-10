// Global variables //
var inquirer = require("inquirer");
var mysql = require("mysql");
var table = require("console.table");
var add = require("./add");
var update = require("./update");
var view = require("./view");
var remove = require("./remove");
const dotenv = require("dotenv");
dotenv.config();

// Creating a database connection to mysql //
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "company_db",
  });

// Boiler plate connection error log //
connection.connect(function (error) {
    if (error) throw error;
    console.log("Connected as id " + connection.threadId + "\n");
    exports.start();
  });

// Creating inquirer prompt for application start //
exports.start = () => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Select an option:",
          name: "choice",
          choices: ["Add an Employee", "Update an Employee", "View All Employees", "Remove an Employee", "Exit"],
        },
      ])

    // Add .then functions for each response! //
    .then(function (response) {
      if (response.choice === "Add an Employee") {
        add.addEmployee();
      } else if (response.choice === "Update an Employee") {
        update.updateRole();
      } else if (response.choice === "View All Employees") {
        view.viewAllEmployees();
      } else if (response.choice === "Remove an Employee") {
        remove.removeEmployee();
      } else if (response.choice === "Exit") {
        connection.end();
        return;
      }
    });
};

