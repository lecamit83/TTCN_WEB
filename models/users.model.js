const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const Schema = mongoose.Schema;

const SALT_ROUND = 10;

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

userSchema.methods.toJSON = function() {
  const user = this;
  let obj = user.toObject();
  delete obj.password;
  return obj;
}


userSchema.methods.generateToken = async function() {
  const user = this;
  
  let token = await JWT.sign({ _id : user._id.toString() }, "@JWTsecretKey");
  user.tokens = user.tokens.concat({ token });

  return token;
};

userSchema.statics.findByCredentials = async function(email, password) {
  const user = await UserModel.findOne({ email });
  if(!user) {
    throw new Error('User Not Found!');
  }
  const isMatchPassword = await bcrypt.compare(password, user.password);
  if(!isMatchPassword) {
    throw new Error('Password Incorrect!');
  }
  return user;
}


userSchema.pre('save', async function(next) {
  const user = this;
  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password ,SALT_ROUND);
  }
  next();
});


const UserModel = mongoose.model('Users', userSchema);
module.exports = UserModel;