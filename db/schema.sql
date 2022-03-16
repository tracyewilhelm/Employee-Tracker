DROP DATABASE IF EXISTS hogwarts_db;
CREATE DATABASE hogwarts_db;

USE hogwarts_db;

CREATE TABLE departments (
  department_name VARCHAR(50) NOT NULL,
  department_id INT AUTO_INCREMENT PRIMARY KEY

);

CREATE TABLE roles (
  job_title VARCHAR(50) NOT NULL,
  role_id INT AUTO_INCREMENT PRIMARY KEY,
  department_id INT,
  salary DECIMAL NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES departments(department_id)
  ON DELETE SET NULL

);

CREATE TABLE employees (
  employee_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role_id INT ,
  department_id INT,
  salary DECIMAL NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES departments(department_id)
  ON DELETE SET NULL,
  FOREIGN KEY (role_id)
  REFERENCES roles(role_id)
  ON DELETE SET NULL
  );

