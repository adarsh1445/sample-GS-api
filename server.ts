
const express = require("express");



import { router as contactRoute } from "./src/routes/contact";


const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "100mb" }));

app.use("/",contactRoute);



module.exports = app;
