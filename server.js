//Import and require express and mysql2; create port; call express
const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3333;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database - create a connection object
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password - my password is "password"
    password: "password",
    database: "hogwarts_db",
  },
  console.log(`Connected to the hogwarts_db database.`)
);
//init function to begin the prompts
const init = function () {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please choose an option:",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
        name: "option",
      },
    ])
    .then((response) => {
      if (response.option === "View all departments") {
        viewDepts();
      } else if (response.option === "View all roles") {
        viewRoles();
      } else if (response.option === "View all employees") {
        viewEmps();
      } else if (response.option === "Add a department") {
        addDept();
      } else if (response.option === "Add a role") {
        addRole();
      } else if (response.option === "Add an employee") {
        addEmp();
      } else if (response.option === "Update an employee role") {
        updateEmp();
      } else {
        goodbye();
      }
    });
};
//function to view the departments
const viewDepts = function () {
  // Query the department's table
  db.query("SELECT * FROM departments", function (err, results) {
    console.table(results);
    init();
  });
};

const viewRoles = function () {
  // Query the roles' table
  db.query(
    "SELECT * FROM roles JOIN departments ON roles.department_id = departments.department_id;",
    function (err, results) {
      if (err) {
        console.log(err);
      } else {
        console.table(results);
        init();
      }
    }
  );
};

const viewEmps = function () {
  // Query the employees table
  db.query(
    "SELECT * FROM employees JOIN roles ON employees.role_id = roles.role_id JOIN departments ON roles.department_id = departments.department_id;",
    function (err, results) {
      console.table(results);
      init();
    }
  );
};

const addDept = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "New department name:",
        name: "newDeptName",
      },
    ])
    .then(function (answers) {
      console.log(answers);
      db.query(
        "INSERT INTO departments SET ?",
        {
          department_name: answers.newDeptName,
        },
        function (error) {
          if (error) throw error;
          console.log("new department added");
        }
      );
      viewDepts();
    });
};

const addRole = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "New role title:",
        name: "newJobTitle",
      },
      {
        type: "number",
        message:
          "Department ID (Administration = 1, Educator = 2, Staff = 3, Ghost = 4):",
        name: "DeptID",
      },
      {
        type: "input",
        message: "Salary for this role:",
        name: "newSalary",
      },
    ])
    .then(function (answers) {
      console.log(answers);
      const dept_id = parseInt(answers.DeptID);
      console.log(typeof dept_id, dept_id);
      db.query(
        "INSERT INTO roles SET ?",
        {
          job_title: answers.newJobTitle,
          department_id: dept_id,
          salary: answers.newSalary,
        },
        function (error) {
          if (error) throw error;
          console.log("new role added");
        }
      );
      viewRoles();
    });
};

const addEmp = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "First name:",
        name: "firstName",
      },
      {
        type: "input",
        message: "Last name:",
        name: "lastName",
      },
      {
        type: "number",
        message: "Role ID:",
        name: "roleID",
      },
      {
        type: "number",
        message: "Manager ID:",
        name: "managerID",
      },
    ])
    .then(function (answers) {
      console.log(answers);

      db.query(
        "INSERT INTO employees SET ?",
        {
          first_name: answers.firstName,
          last_name: answers.lastName,
          role_id: answers.roleID,
          manager_id: answers.managerID,
        },
        function (error) {
          if (error) throw error;
          console.log("new employee added");
        }
      );
      viewEmps();
    });
};
const updateEmp = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Employee ID you would like to update:",
        name: "empID",
      },
      {
        type: "input",
        message: "First name:",
        name: "firstName",
      },
      {
        type: "input",
        message: "Last name:",
        name: "lastName",
      },
      {
        type: "number",
        message: "Role ID:",
        name: "roleID",
      },
      {
        type: "number",
        message: "Manager ID:",
        name: "managerID",
      },
    ])
    .then(function (answers) {
      console.log(answers);

      db.query(
        "INSERT INTO employees SET ?",
        {
          first_name: answers.firstName,
          last_name: answers.lastName,
          role_id: answers.roleID,
          manager_id: answers.managerID,
        },
        function (error) {
          if (error) throw error;
          console.log("new employee added");
        }
      );
      viewEmps();
    });
};

// const goodbye = () => ;

init();

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
