USE employees_db;


INSERT INTO department (name)
VALUES ("Legal"),
       ("Accounting & Finance"),
       ("Human Resources"),
       ("Research & Development"),
       ("Sales"),
       ("Marketing"),
       ("Production"),
       ("Office Security"), 
       ("Janitorial Services"), 
	   ("Catering"),
       ("Workers Compensation");


INSERT INTO role (title, salary, department_id)
VALUES ("General Counsel", 1000000, 1),
("Lead Accountant", 1200000, 2),
("Regional Sales Manager", 1500000, 5),
("Production Assistant", 80000, 7),
("Intern", 50000, 5),
("Hiring Director", 900000, 3),
("Software Engineer", 5000000, 4),
("Head Chef", 1100000, 10),
("Overnight Janitor", 90000, 9),
("Chief Security Officer", 1300000, 8), 
("Senior Associate", 100000, 1),
("Financial Analyst", 200000, 2),
("Applications Specialist", 55000, 3),
("Technologist", 80000, 4),
("Wholesale and Manufacturing", 70000, 5),
("Digital Marketing", 120000, 6),
("Production Manager", 100000, 7),
("Security Site Supervisor", 80000, 8),
("Groundskeeper", 110000, 9),
("Cafeteria Cook", 500000, 10),
("Events Manager", 700000, 10),
("Claims Manager", 800000, 11),
("Policy Supervisor", 120000, 11);


INSERT INTO employee (first_name, last_name, role_id)
VALUES 
("Kakashi", "Hatake", 1),
("Asuma", "Sarutobi", 2),
("Might", "Guy", 2),
("Kurenai", "Yuhi", 3),
("Naruto", "Uzumaki", 4),
("Sasuke", "Uchiha", 5),
("Sakura", "Haruno", 6),
("Hinata", "Hyuga", 7),
("Shikamaru", "Nara", 6), 
("Rock", "Lee", 7),
("Kaguya", "Otsutsuki", 8),
("Kiba", "Inuzuka", 8),
("Konohamaru", "Sarutobi", 9),
("kisame", "Hoshigaki", 9),
("Shino", "Aburame", 10),
("Zabuza", "Momochi", 10),
("Kabuto", "Yakushi", 11),
("Madara", "Uchiha", 11);

-- for adding manager_id's

UPDATE employee

SET manager_id = 4

WHERE first_name = 'Kiba';













