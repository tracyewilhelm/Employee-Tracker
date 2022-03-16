//TO BE DONE:
//the fifth set of prompts are to update an employee. These should also include the employee’s first name, last name, role, and manager

//join the databases so that:
//1. when you view the roles you are joining with department along department_id to which departments each role belongs to
//2. when you view employee you are joining employee table with the previously created role/department join to see all of the data combined together

//COMPLETED:
//start with creating the schema, then create the seed info - done

//we need to create a database. The database needs to include 3 tables - done

//The first table is for Departments and must include columns for department names and department ids. This should have an auto-incrementing value for the id - done

//The second table is for roles and must include columns for job title, role id, the department that role belongs to, and the salary for that role - done

//The third table is for employees and must include columns for employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to - done

//we need to write the code that connects the database to the command line prompts - done

//we need a node.js set of command line prompts.
//the first set of prompts are : view all departmentsview all roles, view all employees, add a department, add a role, add an employee, and update an employee role - done

// the second set of prompts are: to add a department (what is the new department name?) - done

//the third set of propmpts are: to add a role (what is the new role?) - done

//the fourth set of prompts are to add an employee. These include: the employee’s first name, last name, role, and manager - done

//this works currently:
////Import and require express and mysql2; create port; call express
// const express = require("express");
// const mysql = require("mysql2");
// const cTable = require("console.table");
// const prompts = require("./prompts");

// const PORT = process.env.PORT || 3333;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Connect to database - create a connection object
// const db = mysql.createConnection(
//   {
//     host: "localhost",
//     // MySQL username,
//     user: "root",
//     // MySQL password - my password is "password"
//     password: "password",
//     database: "hogwarts_db",
//   },
//   console.log(`Connected to the hogwarts_db database.`)
// );

// // Query the department's table
// db.query("SELECT * FROM departments", function (err, results) {
//   console.table(results);
// });
// // Query the roles' table
// db.query("SELECT * FROM roles", function (err, results) {
//   console.table(results);
// });
// // Query the employees table
// db.query("SELECT * FROM employees", function (err, results) {
//   console.table(results);
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// ----------------
// function viewEmployee() {
//   db.query("SELECT * FROM management_db", function (err, results) {
//     console.log(results);
//   });
// }

// [{name: thing you see, value: id}]
// for (let i = 0; i < results.length; i++) {
// roles.push({name: results[i].title, value:results[i].id })
// }

connection.end();

//     .then((response) => {
//       const { newDeptName, newDeptID } = response;
//       //   console.log(newDeptName, newDeptID, "line 105");
//       const DeptName = newDeptName;
//       const DeptID = newDeptID;
//       //   console.log(DeptName, DeptID, "line 108");
//       const newDept = DeptName + DeptID;
//       db.query(
//         `INSERT INTO departments (id, name) VALUES (DeptName, DeptID);`,
//         function (err, newDept) {
//           console.log(newDept, " has been added to the Departments table");
//         }
//       );
//         viewDepts();

// const newDept = [DeptName, DeptID];

//             .then((data) => {
//         if (data.init_Choice === "Add a new Department?") {
//             const department = new Department(data.getId, data.getDepartment_name)
//             return newDepartment.push(department)
//         }
//         console.log(`${data.getDepartment_name} DEPARTMENT HAS BEEN CREATED!`)
//         console.info(newDepartment, 'line 43');
//     })

//newest
// const viewRoles = function () {
//   // Query the roles' table
//   db.query(
//     "SELECT * FROM roles JOIN departments ON roles.department_id = departments.department_id;",
//     function (err, results) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.table(results);
//       }
//       // init();
//     }
//   );
// };

//new
// const viewRoles = function () {
//   // Query the roles' table
//   db.query(
//     "SELECT roles.job_title, roles.role_id, roles.department_id, roles.salary FROM roles JOIN departments ON roles.department_id = departments.department_id;",
//     function (err, results) {
//       console.table(results);
//       init();
//     }
//   );
// };

//old
const viewRoles = function () {
  // Query the roles' table
  db.query("SELECT * FROM roles", function (err, results) {
    console.table(results);
    init();
  });
};
