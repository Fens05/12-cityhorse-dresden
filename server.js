const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer')

// const PORT = process.env.PORT || 3012;
// const app = express();

const main = async () => {
	const  response = await promp(
	)}







function updateRole() {
  const sql = `select contac(id, '', title ) as title from role`
  // let role_id;
  // db.query(sql, async ((err, result)={
  //   if (err){
  //     return console.log(err.message);
        
    }
  //  console.group(result);
  //  let test = result.map(function(itme))


  inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        nessage: 'what is the employee ID? (rquired)',
        // validate: idInput =>
      
    
      }
    ])

    function addDept(){
      inquirer.prompt([
      {
          type: 'input',
          name: 'deparment',
          message: 'What is the name o the new Departmnet? (required)',
          validate: deptInput => {
              if (!deptInput) {
                  console.log
              }
          }
          
      }
      ])
  }
