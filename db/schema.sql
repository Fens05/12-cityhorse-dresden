CREATE TABLE Department
 (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR (30) NOT NULL
  
);

CREATE TABLE Role_Table
 (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
  
);

CREATE TABLE Employee
 (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  CONSTRAINT fk_role_table FOREIGN KEY (role_id) REFERENCES role_table(id) ON DELETE CASCADE,
  manager_id INT NOT NULL,
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE CASCADE
  
);