const queryString = require("query-string");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const cards = await connection("cards").select("*");

    return response.json({ cards });
  },

  async store(request, response) {
    const { card_value } = request.body;

    const areadyExists = await connection("cards")
      .where("card_value", card_value)
      .first();
    if (areadyExists) {
      return response.status(400).json({ error: "User already exists" });
    } else {
      try {
        await connection("cards").insert({ card_value });
      } catch (error) {
        console.log(error);
      }
    }
    return response.status(200).json({ card_value });
  },
};
