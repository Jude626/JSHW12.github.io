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

  