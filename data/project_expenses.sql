-- SQLINES DEMO *** ---------------------------------------
-- SQLINES DEMO ***              127.0.0.1
-- SQLINES DEMO ***              10.5.8-MariaDB - mariadb.org binary distribution
-- SQLINES DEMO ***              Win64
-- SQLINES DEMO ***              10.1.0.5464
-- SQLINES DEMO *** ---------------------------------------

/* SQLINES DEMO *** ARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/* SQLINES DEMO *** tf8 */;
/* SQLINES DEMO *** tf8mb4 */;
/* SQLINES DEMO *** REIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/* SQLINES DEMO *** L_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- SQLINES DEMO *** structure for project_expenses
CREATE DATABASE project_expenses /* SQLINES DEMO *** RACTER SET latin1 */;
SET SCHEMA 'project_expenses';

-- SQLINES DEMO ***  for table project_expenses.category
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE category_seq;

CREATE TABLE IF NOT EXISTS category (
  id int NOT NULL DEFAULT NEXTVAL ('category_seq'),
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

-- SQLINES DEMO *** table project_expenses.category: ~7 rows (approximately)
/* SQLINES DEMO ***  category DISABLE KEYS */;
INSERT INTO category (id, name) VALUES
	(1, 'Production'),
	(2, 'Operation'),
	(3, 'Financial'),
	(4, 'Vendor'),
	(5, 'Manpower'),
	(6, 'Software'),
	(7, 'Hardware');
/* SQLINES DEMO ***  category ENABLE KEYS */;

-- SQLINES DEMO ***  for table project_expenses.expense
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE expense_seq;

CREATE TABLE IF NOT EXISTS expense (
  id int NOT NULL DEFAULT NEXTVAL ('expense_seq'),
  project_id int NOT NULL,
  category_id int NOT NULL,
  name varchar(50) NOT NULL,
  description varchar(255) NOT NULL,
  amount double precision NOT NULL,
  created_at timestamp DEFAULT ,
  created_by varchar(50) DEFAULT NULL,
  updated_at timestamp DEFAULT ,
  updated_by varchar(50) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FK_expense_project (project_id),
  KEY FK_expense_category (category_id),
  CONSTRAINT FK_expense_category FOREIGN KEY (category_id) REFERENCES category (id),
  CONSTRAINT FK_expense_project FOREIGN KEY (project_id) REFERENCES project (id)
) ;

-- SQLINES DEMO *** table project_expenses.expense: ~2 rows (approximately)
/* SQLINES DEMO ***  expense DISABLE KEYS */;
INSERT INTO expense (id, project_id, category_id, name, description, amount, created_at, created_by, updated_at, updated_by) VALUES
	(1, 2, 2, 'Server Maintenance', 'Server maintenance and upgrading work to incorporate BC plans', 30000, '2021-11-04 16:00:00', 'Jacky', '2021-11-06 16:00:00', 'Jacky'),
	(2, 3, 4, 'Consultant', 'Consultancy services for integration work', 10000, '2021-11-06 16:00:00', 'Helen', '2021-11-07 16:00:00', 'Helen');-- SQLINES DEMO *** ---------------------------------------
-- SQLINES DEMO ***              127.0.0.1
-- SQLINES DEMO ***              10.5.8-MariaDB - mariadb.org binary distribution
-- SQLINES DEMO ***              Win64
-- SQLINES DEMO ***              10.1.0.5464
-- SQLINES DEMO *** ---------------------------------------

/* SQLINES DEMO *** ARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/* SQLINES DEMO *** tf8 */;
/* SQLINES DEMO *** tf8mb4 */;
/* SQLINES DEMO *** REIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/* SQLINES DEMO *** L_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- SQLINES DEMO *** structure for project_expenses
CREATE DATABASE project_expenses /* SQLINES DEMO *** RACTER SET latin1 */;
SET SCHEMA 'project_expenses';

-- SQLINES DEMO ***  for table project_expenses.category
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE category_seq;

CREATE TABLE IF NOT EXISTS category (
  id int NOT NULL DEFAULT NEXTVAL ('category_seq'),
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

-- SQLINES DEMO *** table project_expenses.category: ~7 rows (approximately)
/* SQLINES DEMO ***  category DISABLE KEYS */;
INSERT INTO category (id, name) VALUES
	(1, 'Production'),
	(2, 'Operation'),
	(3, 'Financial'),
	(4, 'Vendor'),
	(5, 'Manpower'),
	(6, 'Software'),
	(7, 'Hardware');
/* SQLINES DEMO ***  category ENABLE KEYS */;

-- SQLINES DEMO ***  for table project_expenses.expense
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE expense_seq;

CREATE TABLE IF NOT EXISTS expense (
  id int NOT NULL DEFAULT NEXTVAL ('expense_seq'),
  project_id int NOT NULL,
  category_id int NOT NULL,
  name varchar(50) NOT NULL,
  description varchar(255) NOT NULL,
  amount double precision NOT NULL,
  created_at timestamp DEFAULT ,
  created_by varchar(50) DEFAULT NULL,
  updated_at timestamp DEFAULT ,
  updated_by varchar(50) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY FK_expense_project (project_id),
  KEY FK_expense_category (category_id),
  CONSTRAINT FK_expense_category FOREIGN KEY (category_id) REFERENCES category (id),
  CONSTRAINT FK_expense_project FOREIGN KEY (project_id) REFERENCES project (id)
) ;

-- SQLINES DEMO *** table project_expenses.expense: ~2 rows (approximately)
/* SQLINES DEMO ***  expense DISABLE KEYS */;
INSERT INTO expense (id, project_id, category_id, name, description, amount, created_at, created_by, updated_at, updated_by) VALUES
	(1, 2, 2, 'Server Maintenance', 'Server maintenance and upgrading work to incorporate BC plans', 30000, '2021-11-04 16:00:00', 'Jacky', '2021-11-06 16:00:00', 'Jacky'),
	(2, 3, 4, 'Consultant', 'Consultancy services for integration work', 10000, '2021-11-06 16:00:00', 'Helen', '2021-11-07 16:00:00', 'Helen');
/* SQLINES DEMO ***  expense ENABLE KEYS */;

-- SQLINES DEMO ***  for table project_expenses.project
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE project_seq;

CREATE TABLE IF NOT EXISTS project (
  id int NOT NULL DEFAULT NEXTVAL ('project_seq'),
  user_id int NOT NULL,
  name varchar(50) NOT NULL,
  description varchar(50) NOT NULL,
  budget double precision NOT NULL DEFAULT 1000000,
  PRIMARY KEY (id)
  CREATE INDEX FK_project_user ON project (user_id),
  CONSTRAINT FK_project_user FOREIGN KEY (user_id) REFERENCES user (id)
) ;

-- SQLINES DEMO *** table project_expenses.project: ~3 rows (approximately)
/* SQLINES DEMO ***  project DISABLE KEYS */;
INSERT INTO project (id, user_id, name, description, budget) VALUES
	(1, 4, 'RTF', 'Realtime Face Recognition', 12000),
	(2, 1, 'SWT', 'Smart Watch Tracker', 80000),
	(3, 2, 'ULS', 'Upgrade Legacy System', 11000);
/* SQLINES DEMO ***  project ENABLE KEYS */;

-- SQLINES DEMO ***  for table project_expenses.user
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE user_seq;

CREATE TABLE IF NOT EXISTS user (
  id int NOT NULL DEFAULT NEXTVAL ('user_seq'),
  username varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  appointment varchar(50) NOT NULL DEFAULT 'Project Manager',
  PRIMARY KEY (id)
) ;

-- SQLINES DEMO *** table project_expenses.user: ~5 rows (approximately)
/* SQLINES DEMO ***  user DISABLE KEYS */;
INSERT INTO user (id, username, password, name, appointment) VALUES
	(1, 'user101', '123456', 'Jacky', 'Project Lead'),
	(2, 'user102', '123456', 'Tommy', 'Project Manager'),
	(3, 'user103', '123456', 'Tom', 'Project Manager'),
	(4, 'user104', '123456', 'Helen', 'Project Manager'),
	(5, 'user105', '123456', 'Mark', 'Senior Project Manager');
/* SQLINES DEMO ***  user ENABLE KEYS */;

/* SQLINES DEMO *** E=IFNULL(@OLD_SQL_MODE, '') */;
/* SQLINES DEMO *** _KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/* SQLINES DEMO *** ER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/* SQLINES DEMO ***  expense ENABLE KEYS */;

-- SQLINES DEMO ***  for table project_expenses.project
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE project_seq;

CREATE TABLE IF NOT EXISTS project (
  id int NOT NULL DEFAULT NEXTVAL ('project_seq'),
  user_id int NOT NULL,
  name varchar(50) NOT NULL,
  description varchar(50) NOT NULL,
  budget double precision NOT NULL DEFAULT 1000000,
  PRIMARY KEY (id)
  CREATE INDEX FK_project_user ON project (user_id),
  CONSTRAINT FK_project_user FOREIGN KEY (user_id) REFERENCES user (id)
) ;

-- SQLINES DEMO *** table project_expenses.project: ~3 rows (approximately)
/* SQLINES DEMO ***  project DISABLE KEYS */;
INSERT INTO project (id, user_id, name, description, budget) VALUES
	(1, 4, 'RTF', 'Realtime Face Recognition', 12000),
	(2, 1, 'SWT', 'Smart Watch Tracker', 80000),
	(3, 2, 'ULS', 'Upgrade Legacy System', 11000);
/* SQLINES DEMO ***  project ENABLE KEYS */;

-- SQLINES DEMO ***  for table project_expenses.user
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE user_seq;

CREATE TABLE IF NOT EXISTS user (
  id int NOT NULL DEFAULT NEXTVAL ('user_seq'),
  username varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  appointment varchar(50) NOT NULL DEFAULT 'Project Manager',
  PRIMARY KEY (id)
) ;

-- SQLINES DEMO *** table project_expenses.user: ~5 rows (approximately)
/* SQLINES DEMO ***  user DISABLE KEYS */;
INSERT INTO user (id, username, password, name, appointment) VALUES
	(1, 'user101', '123456', 'Jacky', 'Project Lead'),
	(2, 'user102', '123456', 'Tommy', 'Project Manager'),
	(3, 'user103', '123456', 'Tom', 'Project Manager'),
	(4, 'user104', '123456', 'Helen', 'Project Manager'),
	(5, 'user105', '123456', 'Mark', 'Senior Project Manager');
/* SQLINES DEMO ***  user ENABLE KEYS */;

/* SQLINES DEMO *** E=IFNULL(@OLD_SQL_MODE, '') */;
/* SQLINES DEMO *** _KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/* SQLINES DEMO *** ER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
