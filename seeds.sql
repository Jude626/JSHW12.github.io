USE company_db;
INSERT INTO department (dept_name) VALUES ("On Deck"), ("Office"), ("Janitorial");
INSERT INTO company_role (title, salary, dept_id) VALUES
("Gym Manager", 90000.00, 1),
("Pool Manager", 80000.00, 1),
("Swim Coach", 60000.00, 2),
("Swim Instructor", 40000.00, 2),
("Lifeguard", 20000.00, 2),
("Pool Maintenance", 30000.00, 3),
("Janitor", 20000.00, 3);

INSERT INTO employees (first_name, last_name, emp_role_id, manager_id) VALUES
("Obi-wan", "Kenobi", 1, 1),
("Ahsoka", "Tano", 2, null),
("Anakin", "Skywalker", 3, null);

SELECT * from company_role;