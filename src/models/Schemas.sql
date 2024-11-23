DROP DATABASE IF EXISTS pets;
CREATE DATABASE pets;
USE pets;

CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description ENUM('cachorro', 'gato') NOT NULL
);

CREATE TABLE IF NOT EXISTS pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) ,
    color VARCHAR(255) ,
    age INT ,
    size ENUM('p', 'm', 'g', 'gg') NOT NULL,
    status ENUM('disponível', 'adotado') ,
    img LONGBOB,	
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

SHOW TABLES;
DESCRIBE categories;
DESCRIBE pets;