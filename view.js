// Global Variables //
var inquirer = require("inquirer");
var mysql = require("mysql");

// mysql connection, copied from app.js page //
var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "",
    database: "",
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
    connection.query("SELECT * FROM company_role", function(err,results) {
        if(error) throw error;
        results;
    })
}

// Create function to export all departments //
exports.getAllDepartments = () => {
    connection.query("SELECT * FROM department", function(err,results) {
        if(error) throw error;
        results;
    })
}

//