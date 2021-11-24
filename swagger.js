const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes.js", "./app/controllers/CardController.js"];

swaggerAutogen(outputFile, endpointsFiles);
