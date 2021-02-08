-- drop the company_db if it already exists --
DROP DATABASE IF EXISTS company_db;

-- Created the DB "company_db" --
CREATE DATABASE company_db;

-- Use the DB company_db for all the rest of the script
USE company_db;

-- Created the table "department"
CREATE TABLE department (
  dept_id int NOT NULL AUTO_INCREMENT,
  dept_name varchar(30),
  PRIMARY KEY(dept_id)
);

-- Created the table "roles"
CREATE TABLE company_role (
  role_id INT NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary DEC(7,2) NOT NULL,
  dept_id INT NOT NULL,
  PRIMARY KEY(role_id),
  FOREIGN KEY(dept_id) REFERENCES department(dept_id)
);

-- Created the table "employees"
CREATE TABLE employees (
  emp_id INT NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  emp_role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY(emp_id),
  FOREIGN KEY(emp_role_id) REFERENCES company_role(role_id),
  FOREIGN KEY(manager_id) REFERENCES employees(emp_id)
);