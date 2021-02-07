// Global Variables //
const { registerPrompt } = require("inquirer");
var inquirer = require("inquirer");
var mysql = require("mysql");

// mysql connection, copied from app.js page //
var connection = mysql.connection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "",
    database: "",
});

// Creating Update employee function //
exports.updateRole = () => {
    view.getAllEmployees(function (employeeResults) {
        console.log(employeeResults);
        var employees = [];
        for (var i = 0; i < employeeResults.length; i++) {
        var fullName = {
            name: employeeResults[i].first_name + " " + employeeResults[i].last_name,
            value: {
                id: employeeResults[i].emp_id,
                firstame: employeeResults[i].first_name,
                lastname: employeeResults[i].last_name
            }
        };
        employees.push(fullName)
    };
// Create inquirer prompt //
inquirer.prompt([
    {
        type: "list",
        message: "Which employee do you want to Update?",
        name: "employee",
        choices: employees
    }
]).then((answers) => {
    view.getAllRoles(function (rolesResults) {
        var roles = [];
        console.log(answers.employee);
    for (var i = 0; i < rolesResults.length; i++) {
        var fullRole = {
            name: rolesResults[i].title,
            value: {
                id: rolesResults[i].role_id,
                role: rolesResults[i].title,
            }
        }
        roles.push(fullRole);
    };

    })
})