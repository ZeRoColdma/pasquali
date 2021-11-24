const queryString = require("query-string");
const connection = require("../database/connection");


module.exports = {
  async index(request, response) {
    const data = await connection("votes").select("*");
    return response.json({ data });
  },

  async store(request, response) {
    const { vote } = request.body;
    const { user_id, card_id, history_id } = request.headers;
    try {
      await connection("votes").insert({ vote, user_id, card_id, history_id });
    } catch (error) {
      console.log(error);
    }
    return response.json({ vote, user_id, card_id, history_id });
  },
};
