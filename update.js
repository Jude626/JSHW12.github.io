// Global Variables //
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
    }
// Create inquirer prompt to pick employee //
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
// Create inquirer prompt to ask which role they would like to be updated //
inquirer.prompt([
    {
        type: "list",
        message: `Which role do you want to update ${answers.employee.firstname} to?`,
        name: "role",
        choices: roles
    }
]).then((results) => {
    console.log(results.role)
    connection.query("UPDATE employees SET emp_role_id = ? WHERE emp_id = ?"),[results.role.id, answers.employee.id],function (error, results) {
        if (error) throw error;
        console.log("Successfully updated " + answers.employee.id + "!");
        app.start();
                    }
                });
            });
        });
    });
};