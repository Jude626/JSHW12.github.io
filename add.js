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

