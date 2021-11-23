const express = require("express");
const routes = express.Router();

const UsersController = require("./app/controllers/UserController");

routes.get("/users", UsersController.index);
routes.post("/users", UsersController.store);

module.exports = routes;
