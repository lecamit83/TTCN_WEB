const MySQL = require('mysql');
const util = require('util');
const pools = MySQL.createPool({
  connectionLimit : 40,
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : '',
  database: 'shoehello',
});



pools.on('connection', function (connection) {
  console.log('DB Connection established');

  connection.on('error', function (err) {
    console.error('MySQL error', err.code);
  });
  connection.on('end', function (err) {
    console.error('MySQL close', err);
  });
})

pools.query = util.promisify(pools.query);
module.exports = pools;