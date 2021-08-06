DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;

-- USE blog_db;

-- CREATE TABLE blogs (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     blogger_id INTEGER NOT NULL REFERENCES user(id),
--     title VARCHAR(30) NOT NULL UNIQUE,
--     body TEXT NOT NULL,
--     datetime DATE NOT NULL
-- );

-- -- CREATE TABLE user (
-- --     id INTEGER AUTO_INCREMENT PRIMARY KEY,
-- --     name VARCHAR(30) NOT NULL,
-- --     email VARCHAR(30) NOT NULL UNIQUE,
-- --     password VARCHAR(30) NOT NULL
-- -- );

-- -- CREATE TABLE comments (
-- --     id INTEGER AUTO_INCREMENT PRIMARY KEY,
-- --     author_id INTEGER NOT NULL REFERENCES user(id),
-- --     comment TEXT NOT NULL,
-- --     posted_on INTEGER NOT NULL REFERENCES blogs(id),
-- --     datetime DATE NOT NULL
-- -- );