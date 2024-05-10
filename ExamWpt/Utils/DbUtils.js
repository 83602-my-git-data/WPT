const mysql = require("mysql");
const config = require("config");

const connectionString = {
  host: config.get("host"),
  port: config.get("sqlport"),
  database: config.get("database"),
  user: config.get("username"),
  password: config.get("password"),
};

const pool = mysql.createPool(connectionString);

module.exports = {
  pool,
};
