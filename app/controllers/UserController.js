const queryString = require("query-string");
const connection = require("../database/connection");

/*
 #swagger.description = 'Route for user Registe.'
*/

module.exports = {
  async index(request, response) {
    const data = await connection("users").select("*");

    return response.json({ data });
  },

  async store(request, response) {
    const { name } = request.body;

    const areadyExists = await connection("users").where("name", name).first();
    if (areadyExists) {
      return response.status(400).json({ error: "User already exists" });
    } else {
      try {
        await connection("users").insert({ name });
      } catch (error) {
        console.log(error);
      }
    }
    return response.status(200).json({ name });
  },
};
