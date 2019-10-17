const MySQL = require('mysql');

const DATABASE = 'shoehello';

const USER_TABLE_SQL = `CREATE TABLE IF NOT EXISTS users (
  id        INT UNSIGNED NOT NULL AUTO_INCREMENT,
  email     VARCHAR(80) NOT NULL UNIQUE,
  password  VARCHAR(80) NOT NULL,
  last_name VARCHAR(80),
  first_name VARCHAR(80),
  role_id   TINYINT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);`

const ROLE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS roles (
  id    TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name  VARCHAR(10) CHARACTER SET ascii,
  PRIMARY KEY (id)
);`

const PRODUCER_TABLE_SQL = `CREATE TABLE IF NOT EXISTS producers (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);`

const SHOE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS shoes (
  id    INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name  VARCHAR(250) NOT NULL UNIQUE,
  description TEXT,
  producer_id INT UNSIGNED,
  price DOUBLE NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(producer_id) REFERENCES producers(id)
);`

const connection = MySQL.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : '',
  // database: 'shoehello',
});

connection.connect(function(err) {
  if(err) throw err;
  console.log('Connect DB');
  connection.query("CREATE DATABASE IF NOT EXISTS ??", DATABASE , function (err, result) {
    if(err) throw error;
    console.log('Database created');
    connection.changeUser({
      database : DATABASE,
    }, function(err) {
      if(err) throw err;
      connection.query(ROLE_TABLE_SQL, function(err){ if(err) throw err });
      connection.query(USER_TABLE_SQL, function(err){ if(err) throw err });
    })
  });
});

