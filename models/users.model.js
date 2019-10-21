const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email : {
    type : String,
    unique : true,
    lowercase : true,
    trim : true,
    required : true,
  },
  password : {
    type : String,
  },
  last_name : String,
  first_name : String,
  phone : String,
  avatar : String,
  role : {
    type : String,
    enum : ['admin', 'user'],
    required : true,
  }
}, {
  timestamps :  true,
});

const UserModel = mongoose.model('Users', userSchema);
module.exports = UserModel;