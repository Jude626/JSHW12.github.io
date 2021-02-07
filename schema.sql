-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS seinfeld;

-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE seinfeld;

-- Use the DB wizard_schools_db for all the rest of the script
USE seinfeld;

-- Created the table "schools"
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolnessChart int NOT NULL,
  attitudeChart varChar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO actors (name, coolnessChart, attitudeChart)
VALUES ("Jerry", 65, "judgy");

INSERT INTO actors (name, coolnessChart, attitudeChart)
VALUES ("Elaine", 90, "tough");

INSERT INTO actors (name, coolnessChart, attitudeChart)
VALUES ("George", 80, "unaware");

INSERT INTO actors (name, coolnessChart, attitudeChart)
VALUES ("Kramer", 70, "bumbling");