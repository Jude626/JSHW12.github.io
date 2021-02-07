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
    view.getAllEmployees(function(employeeResults) {
        console.log(employeeResults)
        var employees = [];
        for(var i = 0; i < employeeResults.length; i++) {
            
        }