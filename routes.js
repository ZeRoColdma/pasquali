const express = require("express");
const routes = express.Router();

const UsersController = require("./app/controllers/UserController");
const CardsController = require("./app/controllers/CardController");
const UserHistoryController = require("./app/controllers/UserHistory");
const VotesController = require("./app/controllers/VotesController");

module.exports = function (app) {
  // app.routes.get("/users", UsersController.index);
  app.routes.post("/users", UsersController.store);

  // app.routes.get("/cards", CardsController.index);
  app.routes.post("/cards", CardsController.store);

  // app.routes.get("/userhistory", UserHistoryController.index);
  app.routes.post("/userhistory", UserHistoryController.store);

  app.routes.get("/votes", VotesController.index);
  app.routes.post("/votes", VotesController.store);
};

module.exports = routes;
