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

// Creating Add employee function //
exports.addEmployee = () => {
    view.getAllRoles(function(rolesResults) {
        var roles = [];
        for(var i = 0; i < rolesResults.length; i++) {
            roles.push(rolesResults[i].title);
        }
        var options = [
            {
                type: "input",
                message: "Enter Employee's First Name:",
                name: "firstName",
                default: "Jude"
            },
            {
                type: "input",
                message: "Enter Employee's Last Name:",
                name: "lastName",
                default: "Sanchez"
            },
            {
                type: "list",
                message: "Enter Employee's Role:",
                name: "role",
                choices: roles,
            }
        ];



        
    })
}