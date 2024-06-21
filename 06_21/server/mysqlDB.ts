// const express = require("express");
// const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwer1234",
  database: "reactspring",
});

connection.connect();
connection.query(
  'insert into coffee(id,name,price,calories) values(6,"라떼임",5000,500)'
);

connection.end();
