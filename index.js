const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

port = process.env.PORT || 3333;

app.listen(port);
