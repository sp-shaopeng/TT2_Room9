-- Table: public.category

-- DROP TABLE IF EXISTS public.category;

CREATE TABLE IF NOT EXISTS public.category
(
    id integer NOT NULL DEFAULT nextval('category_id_seq'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT category_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.category
    OWNER to postgres;





-- Table: public.expense

-- DROP TABLE IF EXISTS public.expense;

CREATE TABLE IF NOT EXISTS public.expense
(
    id integer NOT NULL DEFAULT nextval('expense_id_seq'::regclass),
    project_id bigint NOT NULL,
    category_id bigint NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    amount bigint NOT NULL,
    created_at text COLLATE pg_catalog."default" NOT NULL,
    created_by text COLLATE pg_catalog."default" NOT NULL,
    updated_at text COLLATE pg_catalog."default" NOT NULL,
    updated_by text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT expense_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.expense
    OWNER to postgres;





-- Table: public.project

-- DROP TABLE IF EXISTS public.project;

CREATE TABLE IF NOT EXISTS public.project
(
    id integer NOT NULL DEFAULT nextval('project_id_seq'::regclass),
    user_id integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    budget bigint NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT project_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.project
    OWNER to postgres;







-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    username text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    appointment text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id),
    CONSTRAINT user_username_key UNIQUE (username)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;










INSERT INTO category (name) VALUES ('Production');
INSERT INTO category (name) VALUES ('Operation');
INSERT INTO category (name) VALUES ('Financial');
INSERT INTO category (name) VALUES ('Vendor');
INSERT INTO category (name) VALUES ('Manpower');
INSERT INTO category (name) VALUES ('Software');
INSERT INTO category (name) VALUES ('Hardware');





INSERT INTO Expense (project_id, category_id, name, description, amount, created_at, created_by, updated_at, updated_by) VALUES (2, 2, 'Server Maintainance', 'Server maintenance and upgrading work to incorporate BC plans', 30000, '2021-11-04T16:00:00.000Z', 'Jacky', '2021-11-04T16:00:00.000Z', 'Jacky');


INSERT INTO Expense (project_id, category_id, name, description, amount, created_at, created_by, updated_at, updated_by) VALUES (3, 4, 'Consultant', 'Consultancy services for integration work', 30000, '2021-11-04T16:00:00.000Z', 'Helen', '2021-11-04T16:00:00.000Z', 'Helen');

SELECT * FROM expense;


INSERT INTO project (user_id, name, budget, description) VALUES (4, 'RTF', 12000, 'Realtime Face Recognition');
INSERT INTO project (user_id, name, budget, description) VALUES (1, 'SWT', 80000, 'Smart Watch Tracker');
INSERT INTO project (user_id, name, budget, description) VALUES (3, 'ULS', 11000, 'Upgrade Legacy System');
SELECT * FROM Project;



INSERT INTO users (username, password, name, appointment) VALUES ('user101', '123456', 'Jacky', 'Project Lead');
INSERT INTO users (username, password, name, appointment) VALUES ('user102', '123456', 'Jane', 'Project Manager');
INSERT INTO users (username, password, name, appointment) VALUES ('user103', '123456', 'Tom', 'Project Manager');
INSERT INTO users (username, password, name, appointment) VALUES ('user104', '123456', 'Helen', 'Project Manger');
INSERT INTO users (username, password, name, appointment) VALUES ('user105', '123456', 'Mark', 'Senior Project Manager');