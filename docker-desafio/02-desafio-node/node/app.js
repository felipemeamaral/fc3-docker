const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `CREATE TABLE people(name varchar(255)); INSERT INTO people(name) values('Felipe')`;
connection.query(sql);
connection.end();

const get = `SELECT * FROM people`;
const result = connection.query(get);
connection.end();

app.get("/", (req, res) => {
  res.send(`<h1>Full Cycle</h1> <br /><h2>${result}</h2>`);
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
