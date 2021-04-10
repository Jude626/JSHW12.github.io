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

// Creating Add employee function //
exports.addEmployee = async () => {
    view.getAllRoles((rolesResults) => {
      var roles = [];
      for (var i = 0; i < rolesResults.length; i++) {
        roles.push(rolesResults[i].title);
      }
      var options = [
        {
          type: "input",
          message: "Enter Employee's First Name:",
          name: "firstName",
          default: "Jude",
        },
        {
          type: "input",
          message: "Enter Employee's Last Name:",
          name: "lastName",
          default: "Sanchez",
        },
        {
          type: "list",
          message: "Enter Employee's Role:",
          name: "role",
          choices: roles,
        },
      ];

 // Create prompt and for loop to add to the array //
    inquirer.prompt(options).then((answers) => {
      console.log(answers);
      var roleId = null;
      console.log(rolesResults);
      for (var i = 0; i < rolesResults.length; i++) {
        console.log(rolesResults[i].title);
        console.log(rolesResults[i].title);
        if (rolesResults[i].title === answers.role) {
          roleId = rolesResults[i].role_id;
        }
      }
      
    // Add to mysql database //
    connection.query("INSERT INTO employees SET ?",
    {
        first_name: answers.firstName,
        last_name: answers.lastName,
        employee_role_id: answers.roleID
    },
    // Success or Error response to console.log //
    function(error,results) {
        if(error) throw error;
        console.log("Successfully added " + answers.firstName + " " + answers.lastName );
        app.start();
      });
    });
}