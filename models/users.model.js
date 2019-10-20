const conn = require('../config/database');

const create = async (body) => {
  const fields = Array.from(Object.keys(body));
  const values = Array.from(Object.values(body));

  try {
    // `email`, `password`, `last_name`, `first_name`, `phone`, `role`
    const sql = "INSERT INTO `users` (??) VALUES (?)";
    const result = await conn.query(sql, [fields, values]);

    return result;
  } catch (error) {
    throw error;
  }
}

const findById = async (params = null) => {
  params = !!params ? params : {};
  try {
    const sql = "SELECT * FROM users WHERE role = ?";
    const results = await conn.query(sql, [2]);
    return results;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  create,
  findById,
}