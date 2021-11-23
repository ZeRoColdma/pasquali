const express = require("express");
const routes = require("./routes");
const app = express();

require("./endpoints")(app);

app.use(express.json());
app.use(routes);

port = process.env.PORT || 3333;

app.listen(port);
