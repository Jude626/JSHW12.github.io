// Global Variables //
var inquirer = require("inquirer");
var mysql = require("mysql");
var app = require("./app");

// mysql connection, copied from app.js page //
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kay626#",
    database: "company_db",
});

// Creating view employees function //
exports.viewAllEmployees = () => {
    connection.queryString, function(err,res) {
        if(error) throw error,
        console.table(res)
        app.start();
    }
};

// Create function to export all roles //
exports.getAllRoles = () => {
    var results = connection.querySync("SELECT * FROM company_role", function(error,results) {
        if(error) throw error;
        return results;  
    })
    var response = results.fetchAllSync() ;
    console.log(response);
}

// Create function to export all departments //
exports.getAllDepartments = () => {
    connection.query("SELECT * FROM department", function(error,results) {
        if(error) throw error;
        return results;
    })
}

// Create function to export all employees //
exports.getAllEmployees = () => {
    connection.query("SELECT * FROM employees", function(err,results) {
        if(error) throw error;
        return results;
    })
}