const queryString = require("query-string");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const data = await connection("user_history").select("*");

    return response.json({ data });
  },

  async store(request, response) {
    const { history } = request.body;

    try {
      await connection("user_history").insert({ history });
    } catch (error) {
      console.log(error);
    }

    return response.json({ history });
  },
};
