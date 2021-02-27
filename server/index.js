const express = require("express");
require("dotenv").config();
const cors = require("cors");

const router = require("./routes/routes");
const Sequelize = require("./db");
const models = require("./models/models");

const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());
app.use("/", router);


const start = async () => {
  try {
    Sequelize.authenticate();
    Sequelize.sync();
    app.listen(PORT, () => {
      console.log(`server has been started on ${PORT} port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
