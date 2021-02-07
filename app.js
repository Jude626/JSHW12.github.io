// Global variables //
var inquirer = require("mysql");
var mysql = require("mysql");
var table = require("console.table");

// Creating a database connection to mysql //
var connection = mysql.connection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "",
    database: "",
});

// Boiler plate connection error log //
connection.connect(function(error) {
    if (error) throw error;
    console.log("Connected as id " + connection.threadId + "\n");
    exports.start();
});

// Creating inquirer prompt for application start //
exports.start = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Select an option:",
            name: "choice",
            choices: [
                "Add an Employee",
                "Update an Employee",
                "View All Employees",
                "Exit"
            ]
        }
    ])
// Add .then functions for each response! //
    .then(function(response) {
        if(response.choice === "Add an Employee") {
            add.addEmployee();
        }
        else if(response.choice === "Update an Employee") {
            update.updateEmployee();
        }
    }

}