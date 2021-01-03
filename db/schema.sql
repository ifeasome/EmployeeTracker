DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

-- Tables 
CREATE TABLE department (
  id INT AUTO_INCREMENT,

  name VARCHAR(30) NOT NULL,

  PRIMARY KEY(id)
);

SELECT * FROM department;

CREATE TABLE role (
  id int AUTO_INCREMENT,

  title VARCHAR (30) NOT NULL,

  salary DECIMAL NOT NULL,

  department_id INT NOT NULL,

  CONSTRAINT FK_departments

    FOREIGN KEY (department_id)

    REFERENCES department (id)

    ON DELETE CASCADE,

  PRIMARY KEY(id)
);

SELECT * FROM role;

CREATE TABLE employee (
    
  id int AUTO_INCREMENT,

  first_name VARCHAR(30) NOT NULL,

  last_name VARCHAR(30) NOT NULL,

  role_id INT NOT NULL, 

  CONSTRAINT fk_role

    FOREIGN KEY (role_id)

    REFERENCES role (id)

    ON DELETE CASCADE,

  manager_id INT, 

  CONSTRAINT fk_manager

    FOREIGN KEY (manager_id)

    REFERENCES employee (id)

    ON DELETE CASCADE,

  PRIMARY KEY(id)
);

SELECT * FROM employee;


-- SELECT SUM (salary) FROM role WHERE role.salary, department.name 

-- FROM role 

-- INNER JOIN department ON role.department_id = department.id;
-- SELECT g1.name, g1.publisher, g1.price, g1.released_at
-- INNER JOIN (
  -- SELECT released_at, MAX(price) as price
  -- FROM games
  -- GROUP BY released_at
-- ) AS g2
-- ON g2.released_at = g1.released_at AND g2.price = g1.price;

SELECT role.salary
FROM role 
INNER JOIN (
SELECT salary, SUM(salary) as g1
FROM role
GROUP BY salary) AS g2
ON role.department_id;


