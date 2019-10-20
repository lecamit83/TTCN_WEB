const MySQL = require('mysql');

const DATABASE = 'shoehello';

const ADDRESS_TABLE_SQL = `CREATE TABLE IF NOT EXISTS addresses (
  id    INT UNSIGNED NOT NULL AUTO_INCREMENT,
  commune NVARCHAR(50) NOT NULL,
  district NVARCHAR(50) NOT NULL, 
  city    NVARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`

const USER_TABLE_SQL = `CREATE TABLE IF NOT EXISTS users (
  id        INT UNSIGNED NOT NULL AUTO_INCREMENT,
  email     NVARCHAR(80) NOT NULL UNIQUE,
  password  NVARCHAR(80) NOT NULL,
  last_name NVARCHAR(80) NOT NULL,
  first_name NVARCHAR(80) NOT NULL,
  phone     VARCHAR(15) NOT NULL,
  avatar    VARCHAR(250),
  role   ENUM('admin', 'user') NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),

  PRIMARY KEY (id)

) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`

const SHOE_IMAGE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS images (
  id    INT UNSIGNED NOT NULL AUTO_INCREMENT,
  path  VARCHAR(250) NOT NULL,
  shoe_id INT UNSIGNED NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(shoe_id) REFERENCES shoes(id)
);`

const CATEGORY_TABLE_SQL = `CREATE TABLE IF NOT EXISTS categories (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`

const COLOR_TABLE_SQL = `CREATE TABLE IF NOT EXISTS colors (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`


const SIZE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS sizes (
  id    INT UNSIGNED NOT NULL AUTO_INCREMENT,
  size  TINYINT,
  PRIMARY KEY (id)
);`

const SHOE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS shoes (
  id    INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name  VARCHAR(250) NOT NULL UNIQUE,
  description TEXT,
  price DOUBLE NOT NULL,
  discount INT,
  category_id INT UNSIGNED,
  size_id INT UNSIGNED,
  color_id INT UNSIGNED,
  status ENUM('in_stock', 'out_of_stock'),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),

  PRIMARY KEY(id),
  FOREIGN KEY(category_id) REFERENCES categories(id),
  FOREIGN KEY(size_id) REFERENCES sizes(id),
  FOREIGN KEY(color_id) REFERENCES colors(id)

) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`
 

const INVOICE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS bills (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id     INT UNSIGNED NOT NULL,
  address_id  INT UNSIGNED,
  status      ENUM('draff', 'fulfill') NOT NULL,
  updated_at  TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  created_at  TIMESTAMP NOT NULL DEFAULT NOW(),

  PRIMARY KEY (id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(address_id) REFERENCES addresses(id)

) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`

const INVOICE_AND_SHOE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS billdetails (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  bill_id     INT UNSIGNED NOT NULL,
  shoe_id     INT UNSIGNED NOT NULL,
  amount      INT UNSIGNED NOT NULL,
  price       DOUBLE NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY(bill_id) REFERENCES bills(id),
  FOREIGN KEY(shoe_id) REFERENCES shoes(id)

) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`

const COMMENT_TABLE_SQL = `CREATE TABLE IF NOT EXISTS comments (
  id    INT UNSIGNED NOT NULL AUTO_INCREMENT,
  shoe_id INT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  content TEXT,
  status  ENUM('active', 'in_active') NOT NULL,
  updated_at  TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  created_at  TIMESTAMP NOT NULL DEFAULT NOW(),

  PRIMARY KEY (id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(shoe_id) REFERENCES shoes(id)

) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`

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
      connection.query(ADDRESS_TABLE_SQL, function(err){ if(err) throw err });
      connection.query(USER_TABLE_SQL, function(err){ if(err) throw err });
      connection.query(SIZE_TABLE_SQL, function(err){ if(err) throw err });
      connection.query(CATEGORY_TABLE_SQL, function(err){ if(err) throw err });
      connection.query(COLOR_TABLE_SQL, function(err){ if(err) throw err });
      connection.query(SHOE_TABLE_SQL, function(err){ if(err) throw err });
      connection.query(INVOICE_TABLE_SQL, function(err){ if(err) throw err });
      connection.query(INVOICE_AND_SHOE_TABLE_SQL, function(err){ if(err) throw err });
      connection.query(COMMENT_TABLE_SQL, function(err){ if(err) throw err });
      connection.query(SHOE_IMAGE_TABLE_SQL, function(err){ if(err) throw err });
      connection.end(function(err) {
        console.log('End connection');
      });
    })
  });
});
