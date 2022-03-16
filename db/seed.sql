USE hogwarts_db;
INSERT INTO departments (department_name, department_id)
VALUES 
("Administration", 1),
("Educator", 2),
("Staff", 3),
("Ghost", 4),
("Board of Governors", 5);

INSERT INTO roles (job_title, role_id, department_id, salary)
VALUES 
("Head Master", 1, 1, 158000),
("Transfiguration Professor", 2, 2, 85000),
("Charms Professor", 3, 2, 78000),
("Potions Professor", 4, 2, 83000),
("History Professor", 5, 2, 72000),
("Defence Against the Dark Arts Professor", 6, 2, 175000),
("Caretaker", 7, 3, 65000),
("Herbology Professor", 8, 2, 79000),
("Healer", 9, 3, 81000),
("Divinations Professor", 10, 2, 69500),
("Gamekeeper", 11, 3, 72000),
("Ghost", 13, 4, 12),
("Board of Governors", 12, 5, 1)
;
INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id) VALUES
(503, "Remus", "Lupin", 6,  1),
(458, "Argus", "Filch", 7,  1),
(420, "Pomona", "Sprout", 8,  1),
(468, "Poppy", "Pomfrey", 9,  1),
(473, "Sybill", "Trelawney", 10,  1),
(453, "Rubius", "Hagrid", 11,  1),
(98, "Bloody", "Baron", 13,  1),
(134, "Cuthbert", "Binns", 5,  1),
(462, "Severus", "Snape", 4,  1),
(435, "Filius", "Flitwick", 3,  1),
(427, "Minerva", "McGonagall", 2,  1),
(392, "Albus", "Dumbledore", 1,  5);
