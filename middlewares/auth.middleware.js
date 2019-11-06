const JWT = require('jsonwebtoken');
const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].replace('Bearer ', '');
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const decodedJSON = JSON.parse(decoded.data);
    if(decodedJSON["role"] !== "admin") throw Error("User haven't permission");
    next();
  } catch (error) {
    return res.status(401).send({message : error.message});
  }
} 

module.exports = {
  isAdmin,
}