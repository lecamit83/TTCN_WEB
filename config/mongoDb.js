const mongoose = require('mongoose');
const { DB_NAME, DB_HOST, DB_PORT, DB_PASS, DB_USER } = process.env;

const connect = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, function (err) {
    if (err) throw (new Error('Database was error'));
    console.log('Database connected');
  });
}

module.exports = {
  connect,
}