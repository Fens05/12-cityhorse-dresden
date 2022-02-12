const db = require("../db/routes/connection");

//Add a role to database
addRoles = (title, salary, department_id) => {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [title, salary, department_id];
    db.query(sql, params, (err, rows) => {
        if (err) throw err;
        console.log('New Role added!');
        process.exit();
    });
};

module.exports = { addRoles };