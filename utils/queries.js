const db = require ('../db/connection.js');

class MyQuerry {
    viewDepartments()
    {

    }
}
updateEmployee(employeeID, roleID){
    const sql = `UPDATE employee SET role_id=`$(roleID) 'WHERE ID';
    console.log(sql);
    db.query(sql)
}