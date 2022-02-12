const db = require("../db/routes/connection");

//Add a role to database
addRole = (title, salary, department_id) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES ?`;
    const params = [title, salary, department_id];
    db.query(sql, params, (err, rows) => {
        if (err) throw err;
        console.log('New Role.');
        process.exit();
    });
};

module.exports = { addRole };