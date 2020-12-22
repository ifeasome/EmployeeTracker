DROP DATABASE IF EXISTS EmployeesDB;

CREATE DATABASE EmployeesDB;

USE EmployeesDB;

-- Tables .
CREATE TABLE department (
  id INT AUTO_INCREMENT,

  name VARCHAR(30) NOT NULL,

  PRIMARY KEY(id)
);

CREATE TABLE role (
  id int AUTO_INCREMENT,

  title VARCHAR (30) NOT NULL,

  salary DECIMAL NOT NULL,

  department_id INT NOT NULL,

  INDEX dep_ind (department_id),

  CONSTRAINT fk_departments,

    FOREIGN KEY (department_id),

    REFERENCES department (id),

    ON DELETE CASCADE,

  PRIMARY KEY(id)
);

CREATE TABLE employee (
    
  id int AUTO_INCREMENT,

  first_name VARCHAR(30) NOT NULL,

  last_name VARCHAR(30) NOT NULL,

  role_id INT NOT NULL, 

  INDEX emp_ind (role_id),

  CONSTRAINT fk_role, 

    FOREIGN KEY (role_id),

    REFERENCES role (id),

    ON DELETE CASCADE,

  manager_id INT,

  CONSTRAINT fk_manager, 

    FOREIGN KEY (manager_id),

    REFERENCES employee (id), 

    ON DELETE CASCADE,

  PRIMARY KEY(id)
);

