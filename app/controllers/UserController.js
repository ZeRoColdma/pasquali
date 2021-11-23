const queryString = require("query-string");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const data = await connection("users").select("*");

    return response.json(data);
  },

  async store(request, response) {
    const { name } = request.body;

    try {
      await connection("users").insert({ name });
    } catch (error) {
      console.log(error);
    }

    return response.json(name);
  },
};
