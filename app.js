// Global variables //
var inquirer = require("mysql");
var mysql = require("mysql");
var table = require("console.table");

// Creating a database connectio nto mysql //
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

