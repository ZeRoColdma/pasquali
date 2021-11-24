const express = require("express");
const routes = express.Router();

const UsersController = require("./app/controllers/UserController");
const CardsController = require("./app/controllers/CardController");
const UserHistoryController = require("./app/controllers/UserHistory");
const VotesController = require("./app/controllers/VotesController");

routes.get("/users", UsersController.index);
routes.post("/users", UsersController.store);

routes.get("/cards", CardsController.index);
routes.post("/cards", CardsController.store);

routes.get("/userhistory", UserHistoryController.index);
routes.post("/userhistory", UserHistoryController.store);

routes.get("/votes", VotesController.index);
routes.post("/votes", VotesController.store);

module.exports = routes;
