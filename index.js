const express = require("express");
const routes = require("./routes");
const app = express();

app.use(routes);
app.use(express.json());

port = process.env.PORT || 3333;

app.listen(port);
