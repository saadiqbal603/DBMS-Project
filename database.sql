CREATE DATABASE expense_tracker;

USE expense_tracker;

CREATE TABLE expenses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  description VARCHAR(100) NOT NULL,
  amount DECIMAL(10,2) NOT NULL
);
